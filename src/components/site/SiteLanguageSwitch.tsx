import { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, LoaderCircle, Search } from "lucide-react";
import { detectBrowserLanguage } from "@/lib/browser-language";
import {
  SUPPORTED_TRANSLATION_LANGUAGES,
  type VendorLanguage,
} from "@/lib/translation-languages";

const STORAGE_KEY = "sylution-translate-js-language";
const VENDOR_SCRIPT =
  "https://cdn.jsdelivr.net/gh/xnx3/translate@df9d77c85399470d10e2cb610f17e294ac107740/translate.js/translate.min.js";

type TranslateJsEngine = {
  language: { setLocal: (value: string) => void };
  service: { use: (value: string) => void };
  selectLanguageTag: { show: boolean };
  ignore: { id: string[]; tag: string[]; text: string[] };
  setDocuments: (elements: HTMLElement[]) => void;
  listener: { start: () => void };
  execute: () => void;
  changeLanguage: (id: string) => void;
};

function translator(): TranslateJsEngine | undefined {
  return (window as Window & { translate?: TranslateJsEngine }).translate;
}

const isAvailable = (id: string) =>
  SUPPORTED_TRANSLATION_LANGUAGES.some((language) => language.id === id);

function applyLanguageToDocument(language: VendorLanguage) {
  document.documentElement.lang = language.locale;
  document.documentElement.dir =
    /^(ar|fa|he|ur|yi|sd|ckb)/.test(language.locale) ? "rtl" : "ltr";
}

export function SiteLanguageSwitch() {
  const [selectedId, setSelectedId] = useState<string>("english");
  const [hydrated, setHydrated] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const engineInitialized = useRef(false);

  const selected =
    SUPPORTED_TRANSLATION_LANGUAGES.find((language) => language.id === selectedId) ??
    SUPPORTED_TRANSLATION_LANGUAGES[0];

  const visible = useMemo(() => {
    const search = query.trim().toLocaleLowerCase();
    if (!search) return SUPPORTED_TRANSLATION_LANGUAGES;
    return SUPPORTED_TRANSLATION_LANGUAGES.filter((language) =>
      [language.label, language.id, language.locale].some((field) =>
        field.toLocaleLowerCase().includes(search),
      ),
    );
  }, [query]);

  useEffect(() => {
    // Browsers advertise an ordered list of preferred languages. Use it for a
    // first-time visitor, never IP geolocation or nationality.
    const preferences = [
      ...(navigator.languages ?? []),
      navigator.language,
    ].filter((value): value is string => typeof value === "string" && value.length > 0);

    const detected = detectBrowserLanguage(preferences);
    let preferred = detected;

    try {
      // Only explicit choices in this new selector are stored; an automatically
      // detected language does not override later browser-setting changes.
      window.localStorage.removeItem("sylution-lang");
      const manualSelection = window.localStorage.getItem(STORAGE_KEY);
      if (manualSelection && isAvailable(manualSelection)) {
        preferred = manualSelection;
      } else if (manualSelection) {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // Storage can be disabled; automatic browser-language detection still works.
    }

    setSelectedId(preferred);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  useEffect(() => {
    if (!hydrated || selectedId === "english") return;

    let disposed = false;
    setLoading(true);
    applyLanguageToDocument(selected);

    const onFailure = () => {
      if (disposed) return;
      setLoading(false);
      setError("Translation is temporarily unavailable. You can retry or use English.");
    };

    const activate = () => {
      if (disposed) return;
      const engine = translator();
      if (!engine) {
        onFailure();
        return;
      }
      try {
        if (!engineInitialized.current) {
          engine.language.setLocal("english");
          // The vendor's default free service includes Hausa, Yoruba and Igbo.
          // 'client.edge' DOES NOT list Hausa in its supported languages.
          engine.service.use("translate.service");
          engine.selectLanguageTag.show = false;
          engine.ignore.id.push("site-language-switcher");
          // Keep all user-entered values and form data out of translation requests.
          engine.ignore.tag.push("form", "input", "textarea", "select");
          engine.ignore.text.push("SYLUTION", "SYSMART AGRO");
          const publicSections = [
            document.querySelector("header"),
            document.getElementById("main"),
            document.querySelector("footer"),
          ].filter((element): element is HTMLElement => element instanceof HTMLElement);
          if (publicSections.length) engine.setDocuments(publicSections);
          engine.listener.start();
          engine.execute();
          engineInitialized.current = true;
        }
        engine.changeLanguage(selectedId);
        setError(null);
        setLoading(false);
      } catch {
        onFailure();
      }
    };

    if (translator()) {
      activate();
      return () => {
        disposed = true;
      };
    }

    let script = document.getElementById("sylution-translate-js") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "sylution-translate-js";
      script.src = VENDOR_SCRIPT;
      script.async = true;
      script.referrerPolicy = "no-referrer";
    }
    script.addEventListener("load", activate);
    script.addEventListener("error", onFailure);

    // TanStack Start hydrates nested React routes progressively. If the vendor
    // mutates those text nodes before hydration completes, React raises #418
    // (hydration mismatch). Defer the FIRST translation for 1.8 seconds after
    // the site language selector is mounted; manual and subsequent switches
    // still execute instantly after the plugin has loaded.
    const loadTimer = window.setTimeout(() => {
      if (!disposed && script && !script.isConnected) document.head.appendChild(script);
    }, 1800);

    return () => {
      disposed = true;
      window.clearTimeout(loadTimer);
      script?.removeEventListener("load", activate);
      script?.removeEventListener("error", onFailure);
    };
  }, [selectedId, selected, hydrated]);

  const choose = (language: VendorLanguage) => {
    setOpen(false);
    setQuery("");
    triggerRef.current?.focus();
    if (selectedId === language.id && !error) return;
    setError(null);
    try {
      window.localStorage.setItem(STORAGE_KEY, language.id);
    } catch {
      // The choice still works for this visit if browser storage is disabled.
    }

    if (language.id === "english") {
      // Reload restores unmodified English source nodes after DOM translation.
      if (engineInitialized.current) {
        window.location.reload();
        return;
      }
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
      setSelectedId("english");
      return;
    }

    setSelectedId(language.id);
  };

  const shortCode = selected.locale.split("-")[0].slice(0, 2).toUpperCase();

  return (
    <div id="site-language-switcher" className="language-switcher notranslate" ref={rootRef}>
      <button
        ref={triggerRef}
        type="button"
        className="language-switcher__trigger"
        onClick={() => setOpen((value) => !value)}
        aria-label={`Language: ${selected.label}`}
        aria-expanded={open}
        aria-controls="sylution-language-options"
      >
        <span aria-hidden="true" className="site-language__flag">{selected.flag}</span>
        <span className="language-switcher__current">{shortCode}</span>
        {loading ? (
          <LoaderCircle className="site-language__spinner" aria-label="Translating" />
        ) : (
          <ChevronDown
            aria-hidden="true"
            className={`language-switcher__chevron ${open ? "is-open" : ""}`}
          />
        )}
      </button>

      {open && (
        <div
          id="sylution-language-options"
          className="language-switcher__menu site-language__menu"
          role="group"
          aria-label="Select website language"
        >
          <div className="site-language__heading">
            <strong>Choose language</strong>
            <span>133 languages</span>
          </div>
          <label className="site-language__search">
            <Search aria-hidden="true" className="h-4 w-4" />
            <input
              type="search"
              value={query}
              placeholder="Search languages..."
              aria-label="Search languages"
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <div className="site-language__list">
            {visible.map((language, index) => (
              <div key={language.id}>
                {!query && index === 2 && (
                  <p className="site-language__separator">All other languages</p>
                )}
                <button
                  type="button"
                  className="language-switcher__option"
                  aria-pressed={selectedId === language.id}
                  onClick={() => choose(language)}
                >
                  <span className="site-language__flag" aria-hidden="true">{language.flag}</span>
                  <span className="language-switcher__name">{language.label}</span>
                  <span className="language-switcher__code">
                    {language.locale.split("-")[0].slice(0, 2).toUpperCase()}
                  </span>
                  {selectedId === language.id && (
                    <Check aria-hidden="true" className="h-4 w-4" />
                  )}
                </button>
              </div>
            ))}
            {visible.length === 0 && (
              <p className="site-language__empty">No matching languages</p>
            )}
          </div>
          <p className="site-language__note">
            Powered by translate.js. Machine translations may contain errors.
            Flags are representative; some languages span several countries.
          </p>
          {error && <p role="alert" className="site-language__error">{error}</p>}
        </div>
      )}
    </div>
  );
}
