import { useContext } from "react";
import { LanguageContext } from "../../context";
import styles from "./styles.module.css";

function LanguageToggle() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className={styles.languageBox}>
      {language === "ru" ? (
        <h1 className={styles.languageTitle}>Русский язык выбран</h1>
      ) : (
        <h1 className={styles.languageTitle}>English language was chosen</h1>
      )}
      {language === "ru" ? (
        <button className={styles.languageButton} onClick={toggleLanguage}>
          Сменить язык
        </button>
      ) : (
        <button className={styles.languageButton} onClick={toggleLanguage}>
          Switch Language
        </button>
      )}
    </div>
  );
}

export default LanguageToggle;
