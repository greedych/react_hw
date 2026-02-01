import { useState } from "react";
import { LanguageContext } from "..";

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ru");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ru" ? "en" : "ru"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
