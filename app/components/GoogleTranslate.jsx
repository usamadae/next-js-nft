"use client";
import Script from "next/script";
import React from "react";
import nookies from 'nookies';

const languages = [
  { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png" },
  { label: "Spanish", value: "es", src: "https://flagcdn.com/h60/es.png" },
  // Add additional languages as needed
];

const includedLanguages = languages.map(lang => lang.value).join(",");

function googleTranslateElementInit() {
  new window.google.translate.TranslateElement({
    pageLanguage: "auto",
    includedLanguages
  }, "google_translate_element");
}

export function GoogleTranslate({ prefLangCookie }) {
  const [langCookie, setLangCookie] = React.useState(prefLangCookie ? decodeURIComponent(prefLangCookie) : "en");

  React.useEffect(() => {
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const onChange = (value) => {
    const lang = "/en/" + value;
    setLangCookie(lang);
    const element = document.querySelector(".goog-te-combo");
    if (element) {
      element.value = value;
      element.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div>
      <div id="google_translate_element" style={{ visibility: "hidden", width: "1px", height: "1px" }}></div>
      <LanguageSelector onChange={onChange} value={langCookie} />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}

function LanguageSelector({ onChange, value }) {
  const langCookie = value.split("/")[2];
  return (
    <select onChange={(e) => onChange(e.target.value)} value={langCookie}>
      {languages.map((it) => (
        <option value={it.value} key={it.value}>
          {it.label}
        </option>
      ))}
    </select>
  );
}

export const getPrefLangCookie = () => {
  const cookies = nookies.get(null);
  return cookies["googtrans"] ?? "en";
};
