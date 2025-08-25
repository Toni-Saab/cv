import { useLanguage } from '../../context/LanguageContext';
import data from '../../data/resume.json';
import styles from './Languages.module.css';

function Languages() {
  const { lang } = useLanguage();
  const languagesData = data.languages[lang];

  return (
    <section id="languages" className={styles.languagesSection}>
      <h2 className={styles.languagesTitle}>{languagesData.title.toUpperCase()}</h2>
      <div className={styles.languagesContainer}>
        {languagesData.items.map((item, index) => (
          <div key={index} className={styles.languageChip}>
            <span className={styles.languageName}>{item.name}</span>
            <span className={styles.languageLevel}>{item.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;