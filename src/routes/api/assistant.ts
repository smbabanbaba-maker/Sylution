import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import {
  SYLUTION_ASSISTANT_CONTEXT,
  SYLUTION_ASSISTANT_SYSTEM_INSTRUCTION,
} from "@/lib/assistant-knowledge";

const messageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().trim().min(1).max(1200),
});

const requestSchema = z.object({
  messages: z.array(messageSchema).min(1).max(12),
});

type GeminiResponse = {
  candidates?: Array<{
    content?: {
      parts?: Array<{ text?: string }>;
    };
    finishReason?: string;
  }>;
};

const recentRequests = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 8;
const MIN_REQUEST_GAP_MS = 2_500;

function json(data: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || request.headers.get("x-real-ip") || "anonymous";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (recentRequests.get(key) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);
  const lastRequest = recent.at(-1);
  const tooSoon = typeof lastRequest === "number" && now - lastRequest < MIN_REQUEST_GAP_MS;
  const overLimit = recent.length >= MAX_REQUESTS_PER_WINDOW;

  if (tooSoon || overLimit) {
    recentRequests.set(key, recent);
    return true;
  }

  recent.push(now);
  recentRequests.set(key, recent);
  return false;
}

function getText(response: GeminiResponse) {
  return response.candidates?.[0]?.content?.parts
    ?.map((part) => part.text ?? "")
    .join("")
    .trim();
}

export const Route = createFileRoute("/api/assistant")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const clientKey = getClientKey(request);
        if (isRateLimited(clientKey)) {
          return json(
            {
              error: "rate_limited",
              message: "Please wait a moment before sending another question.",
            },
            429,
          );
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return json(
            { error: "invalid_request", message: "Please send a valid JSON request." },
            400,
          );
        }

        const parsed = requestSchema.safeParse(body);
        if (!parsed.success) {
          return json(
            {
              error: "invalid_request",
              message: "Please enter a question of up to 1,200 characters.",
            },
            400,
          );
        }

        const apiKey = process.env.GEMINI_API_KEY?.trim();
        if (!apiKey) {
          return json(
            {
              error: "assistant_unavailable",
              message:
                "The SYLUTION AI Assistant is not connected yet. Please contact SYLUTION directly or request a Technical Assessment.",
            },
            503,
          );
        }

        const model = process.env.GEMINI_MODEL?.trim() || "gemini-2.5-flash";
        const contents = parsed.data.messages.map((message) => ({
          role: message.role === "assistant" ? "model" : "user",
          parts: [{ text: message.content }],
        }));

        try {
          const upstream = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                systemInstruction: {
                  parts: [
                    {
                      text: `${SYLUTION_ASSISTANT_SYSTEM_INSTRUCTION}\n\nUse this verified context as the only source of company facts:\n${SYLUTION_ASSISTANT_CONTEXT}`,
                    },
                  ],
                },
                contents,
                generationConfig: {
                  temperature: 0.2,
                  maxOutputTokens: 350,
                },
                safetySettings: [
                  { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                  { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                  {
                    category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE",
                  },
                  {
                    category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE",
                  },
                ],
              }),
            },
          );

          if (!upstream.ok) {
            return json(
              {
                error: upstream.status === 429 ? "provider_rate_limited" : "provider_error",
                message:
                  upstream.status === 429
                    ? "The assistant is receiving many requests. Please try again shortly."
                    : "The assistant could not reach its AI service. Please try again or contact SYLUTION.",
              },
              upstream.status === 429 ? 429 : 502,
            );
          }

          const result = (await upstream.json()) as GeminiResponse;
          const text = getText(result);
          if (!text) {
            return json(
              {
                error: "empty_response",
                message:
                  "I could not prepare a verified answer right now. Please contact SYLUTION for help.",
              },
              502,
            );
          }

          return json({ message: text });
        } catch {
          return json(
            {
              error: "provider_unavailable",
              message:
                "The assistant is temporarily unavailable. Please contact SYLUTION directly.",
            },
            502,
          );
        }
      },
    },
  },
});
