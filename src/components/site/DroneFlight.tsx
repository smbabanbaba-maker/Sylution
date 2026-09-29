import { Activity, Radio } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function DroneFlight() {
  const { t } = useLang();

  return (
    <div className="drone-scene" role="img" aria-label={t("hero.visual.alt")}>
      <div aria-hidden="true" className="drone-scene__sun" />
      <div aria-hidden="true" className="drone-scene__flight-path">
        <svg viewBox="0 0 600 360" preserveAspectRatio="none">
          <path d="M24 300C120 221 159 324 244 248S383 105 568 161" />
        </svg>
      </div>
      <div aria-hidden="true" className="drone-scene__scan" />
      <div aria-hidden="true" className="drone-scene__flight">
        <svg className="drone-scene__craft" viewBox="0 0 600 340" fill="none">
          <ellipse cx="300" cy="272" rx="142" ry="20" fill="#111214" opacity=".17" />
          <g
            className="drone-scene__arms"
            stroke="#111214"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M270 143 154 91M330 143 446 91M270 180 154 232M330 180 446 232"
              strokeWidth="13"
            />
            <path
              d="M270 143 154 91M330 143 446 91M270 180 154 232M330 180 446 232"
              stroke="#8B0D1F"
              strokeOpacity=".55"
              strokeWidth="4"
            />
          </g>
          <g className="drone-scene__rotor" transform="translate(154 91)">
            <circle r="19" fill="#8B0D1F" />
            <circle r="8" fill="#A61D2D" />
            <g className="drone-scene__propeller">
              <path
                d="M-58-4Q-12-14 0-3Q12 8 58 4Q12 14 0 3Q-12-8-58-4Z"
                fill="#111214"
                fillOpacity=".78"
              />
            </g>
          </g>
          <g className="drone-scene__rotor" transform="translate(446 91)">
            <circle r="19" fill="#8B0D1F" />
            <circle r="8" fill="#A61D2D" />
            <g className="drone-scene__propeller">
              <path
                d="M-58-4Q-12-14 0-3Q12 8 58 4Q12 14 0 3Q-12-8-58-4Z"
                fill="#111214"
                fillOpacity=".78"
              />
            </g>
          </g>
          <g className="drone-scene__rotor" transform="translate(154 232)">
            <circle r="19" fill="#8B0D1F" />
            <circle r="8" fill="#A61D2D" />
            <g className="drone-scene__propeller">
              <path
                d="M-58-4Q-12-14 0-3Q12 8 58 4Q12 14 0 3Q-12-8-58-4Z"
                fill="#111214"
                fillOpacity=".78"
              />
            </g>
          </g>
          <g className="drone-scene__rotor" transform="translate(446 232)">
            <circle r="19" fill="#8B0D1F" />
            <circle r="8" fill="#A61D2D" />
            <g className="drone-scene__propeller">
              <path
                d="M-58-4Q-12-14 0-3Q12 8 58 4Q12 14 0 3Q-12-8-58-4Z"
                fill="#111214"
                fillOpacity=".78"
              />
            </g>
          </g>
          <path
            d="M264 137Q300 123 336 137L364 169Q300 208 236 169L264 137Z"
            fill="#fff"
            stroke="#111214"
            strokeWidth="4"
          />
          <path d="M269 145Q300 134 331 145L341 157H259L269 145Z" fill="#8B0D1F" />
          <path
            d="M275 162H325L316 179H284L275 162Z"
            fill="#EFEFED"
            stroke="#C9C9C4"
            strokeWidth="2"
          />
          <path
            d="M291 184V206M309 184V206"
            stroke="#111214"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <rect x="286" y="203" width="28" height="17" rx="6" fill="#8B0D1F" />
          <circle cx="300" cy="211" r="5" fill="#A61D2D" />
          <path
            d="M260 178 251 195M340 178 349 195"
            stroke="#111214"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M246 196H265M335 196H354"
            stroke="#111214"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div aria-hidden="true" className="drone-scene__tag drone-scene__tag--sensing">
        <span className="drone-scene__tag-icon">
          <Radio className="h-4 w-4" />
        </span>
        <span>{t("hero.visual.sensing")}</span>
      </div>
      <div aria-hidden="true" className="drone-scene__tag drone-scene__tag--data">
        <span className="drone-scene__tag-icon">
          <Activity className="h-4 w-4" />
        </span>
        <span>{t("hero.visual.aerial")}</span>
      </div>
      <span aria-hidden="true" className="drone-scene__scan-point" />
    </div>
  );
}
