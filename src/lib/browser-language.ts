/**
 * Detect preferred website language using browser BCP 47 language settings.
 * Uses translate.js default-service language IDs, not country/IP location.
 * The fallback is English when no browser preference is supported.
 * Source: xnx3/translate/doc/support_language.html @ df9d77c8 (2026-10-09).
 */
const VENDOR_LANGUAGE_BY_BROWSER_CODE: Readonly<Record<string, string>> = {
  "nso": "mepeti",
  "co": "corsican",
  "gn": "guarani",
  "rw": "kinyarwanda",
  "ha": "hausa",
  "no": "norwegian",
  "nl": "dutch",
  "yo": "yoruba",
  "en": "english",
  "gom": "gongen",
  "la": "latin",
  "ne": "nepali",
  "fr": "french",
  "cs": "czech",
  "haw": "hawaiian",
  "ka": "georgian",
  "ru": "russian",
  "sr": "serbian",
  "fa": "persian",
  "bho": "bhojpuri",
  "jw": "javanese",
  "hi": "hindi",
  "be": "belarusian",
  "eo": "esperanto",
  "kk": "kazakh",
  "sw": "swahili",
  "or": "oriya",
  "is": "icelandic",
  "yi": "yiddish",
  "ak": "twi",
  "ga": "irish",
  "gu": "gujarati",
  "km": "khmer",
  "sk": "slovak",
  "iw": "hebrew",
  "kn": "kannada",
  "hu": "hungarian",
  "ilo": "ilocano",
  "su": "sundanese",
  "ta": "tamil",
  "ar": "arabic",
  "bn": "bengali",
  "az": "azerbaijani",
  "sm": "samoan",
  "af": "afrikaans",
  "id": "indonesian",
  "da": "danish",
  "ug": "uyghur",
  "xh": "afrikaans_xhosa",
  "mni": "meitei",
  "sn": "shona",
  "bm": "bambara",
  "lt": "lithuanian",
  "uz": "uzbek",
  "vi": "vietnamese",
  "ln": "lingala",
  "mt": "maltese",
  "tk": "turkmen",
  "as": "assamese",
  "ca": "catalan",
  "si": "singapore",
  "ceb": "cebuano",
  "sa": "sanskrit",
  "pl": "polish",
  "gl": "galician",
  "lv": "latvian",
  "uk": "ukrainian",
  "tt": "tatar",
  "gd": "scottish_gaelic",
  "cy": "welsh",
  "ja": "japanese",
  "tl": "filipino",
  "ay": "aymara",
  "lo": "lao",
  "mn": "mongolian",
  "te": "telugu",
  "ro": "romanian",
  "ht": "haitian_creole",
  "doi": "dogrid",
  "sv": "swedish",
  "mai": "maithili",
  "mg": "malagasy",
  "th": "thai",
  "hy": "armenian",
  "my": "burmese",
  "ps": "pashto",
  "hmn": "hmong",
  "dv": "dhivehi",
  "lb": "luxembourgish",
  "sd": "sindhi",
  "ku": "kurdish",
  "tr": "turkish",
  "mk": "macedonian",
  "bg": "bulgarian",
  "ms": "malay",
  "st": "sesotho",
  "lg": "luganda",
  "zu": "south_african_zulu",
  "mr": "marathi",
  "et": "estonian",
  "ml": "malayalam",
  "de": "deutsch",
  "sl": "slovene",
  "ur": "urdu",
  "pt": "portuguese",
  "ig": "igbo",
  "ti": "tigri",
  "ckb": "kurdish_sorani",
  "om": "oromo",
  "el": "greek",
  "es": "spanish",
  "fy": "frisian",
  "so": "somali",
  "lus": "mizo",
  "am": "amharic",
  "ny": "nyanja",
  "pa": "punjabi",
  "eu": "basque",
  "it": "italian",
  "sq": "albanian",
  "ko": "korean",
  "tg": "tajik",
  "fi": "finnish",
  "ky": "kyrgyz",
  "ee": "ewe",
  "hr": "croatian",
  "ts": "zongjia",
  "kri": "creole",
  "qu": "quechua",
  "bs": "bosnian",
  "mi": "maori",
  "zh": "chinese_simplified",
  "nb": "norwegian",
  "nn": "norwegian",
  "he": "hebrew",
  "ji": "yiddish",
  "jv": "javanese",
  "fil": "filipino",
  "in": "indonesian",
  "tw": "twi"
};

export function detectBrowserLanguage(preferences: readonly string[]): string {
  for (const preference of preferences) {
    if (typeof preference !== "string") continue;
    const tag = preference.trim().toLowerCase().replaceAll("_", "-");
    if (!tag) continue;

    const parts = tag.split("-");
    const primary = parts[0];

    // Language is NOT inferred from the visitor's country.
    // Chinese language/script variants do require script/region handling.
    if (primary === "zh") {
      // An explicit script wins over a default region convention.
      if (parts.includes("hant")) return "chinese_traditional";
      if (parts.includes("hans")) return "chinese_simplified";
      return parts.some((part) => ["tw", "hk", "mo"].includes(part))
        ? "chinese_traditional"
        : "chinese_simplified";
    }

    const id = VENDOR_LANGUAGE_BY_BROWSER_CODE[primary];
    if (id) return id;
  }

  return "english";
}
