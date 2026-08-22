import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Bot, LoaderCircle, Send, X } from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type AssistantResponse = {
  message?: string;
  error?: string;
};

const INITIAL_MESSAGE: ChatMessage = {
  role: "assistant",
  content:
    "Hello. I’m the SYLUTION AI Assistant. Ask me about our technology, Sysmart Agro, AgriTech, training or how to contact the team.\n\nSannu. Zan amsa tambayoyi da suka shafi SYLUTION ne kawai, bisa ga bayanan da aka tabbatar.",
};

const SUGGESTIONS = [
  "What does SYLUTION do?",
  "What is Sysmart Agro?",
  "What training do you offer?",
];

export function SylutionAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [loading, setLoading] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const messagesElement = messagesRef.current;
    if (messagesElement) {
      messagesElement.scrollTop = messagesElement.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const closePanel = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  const sendMessage = async (event?: FormEvent) => {
    event?.preventDefault();
    const question = input.trim();
    if (!question || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: question }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-8) }),
      });
      const data = (await response.json()) as AssistantResponse;
      const assistantMessage =
        data.message ||
        "I could not prepare an answer right now. Please contact SYLUTION directly.";
      setMessages((current) => [...current, { role: "assistant", content: assistantMessage }]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "The assistant is temporarily unavailable. Please use Contact or WhatsApp to reach SYLUTION.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {open ? (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-labelledby="sylution-assistant-title"
          className="fixed bottom-5 right-4 z-50 flex w-[min(23rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[1.35rem] border border-border bg-card text-card-foreground shadow-[0_24px_70px_-28px_rgba(17,18,20,0.45)] sm:right-6"
        >
          <div className="flex items-center justify-between gap-3 border-b border-border bg-white px-4 py-3">
            <div className="flex min-w-0 items-center gap-3">
              <span
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground"
                aria-hidden="true"
              >
                <Bot className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p
                  id="sylution-assistant-title"
                  className="truncate text-sm font-bold tracking-tight text-foreground"
                >
                  SYLUTION AI
                </p>
                <p className="text-[11px] font-medium text-muted-foreground">
                  Verified company information
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={closePanel}
              aria-label="Close SYLUTION AI Assistant"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div
            ref={messagesRef}
            className="max-h-[min(25rem,55vh)] min-h-[15rem] space-y-3 overflow-y-auto bg-[#fbfbfa] px-3 py-4"
            aria-live="polite"
            aria-label="Assistant conversation"
          >
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    message.role === "user"
                      ? "rounded-br-md bg-primary text-primary-foreground"
                      : "rounded-bl-md border border-border bg-white text-foreground"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {loading ? (
              <div className="flex justify-start" aria-label="SYLUTION AI is thinking">
                <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-border bg-white px-3.5 py-2.5 text-xs text-muted-foreground">
                  <LoaderCircle className="h-3.5 w-3.5 animate-spin" />
                  Preparing a verified answer…
                </div>
              </div>
            ) : null}
          </div>

          {messages.length === 1 ? (
            <div className="flex flex-wrap gap-2 border-t border-border bg-white px-3 pt-3">
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setInput(suggestion)}
                  className="rounded-full border border-border bg-background px-2.5 py-1.5 text-[11px] font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          ) : null}

          <form
            onSubmit={sendMessage}
            className="flex items-center gap-2 border-t border-border bg-white p-3"
          >
            <label className="sr-only" htmlFor="sylution-assistant-input">
              Ask SYLUTION AI a question
            </label>
            <input
              ref={inputRef}
              id="sylution-assistant-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={1200}
              placeholder="Ask about SYLUTION…"
              className="min-w-0 flex-1 rounded-xl border border-input bg-background px-3 py-2.5 text-xs text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              aria-label="Send question"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground transition-transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-45"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
          <div className="flex items-center justify-between gap-3 bg-white px-3 pb-3 text-[10px] text-muted-foreground">
            <span>AI answers may need team confirmation.</span>
            <Link to="/contact" className="shrink-0 font-bold text-primary hover:underline">
              Technical Assessment
            </Link>
          </div>
        </div>
      ) : null}

      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="sylution-assistant-title"
        aria-label={open ? "Close SYLUTION AI Assistant" : "Open SYLUTION AI Assistant"}
        className="fixed bottom-5 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-110 active:scale-95 sm:right-6"
      >
        {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
        <span className="pointer-events-none absolute -top-1 -right-1 grid h-4 min-w-4 place-items-center rounded-full border-2 border-background bg-foreground px-1 text-[8px] font-black text-background">
          AI
        </span>
      </button>
    </>
  );
}
