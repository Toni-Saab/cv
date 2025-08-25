import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();
const useLanguage = () => useContext(LanguageContext);

function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const toggleLanguage = () => setLang(lang === "en" ? "de" : "en");

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageProvider, useLanguage };