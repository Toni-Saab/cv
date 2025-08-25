import { useLanguage } from '../../context/LanguageContext';
import data from '../../data/resume.json';
import styles from './About.module.css';

function About() {
  const { lang } = useLanguage();
  const aboutData = data.about[lang];

  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.aboutTitle}>{aboutData.title.toUpperCase()}</h2>
      <div className={styles.aboutTextContainer}>
        {aboutData.description.map((text, index) => (
          <p key={index} className={styles.aboutText}>
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;