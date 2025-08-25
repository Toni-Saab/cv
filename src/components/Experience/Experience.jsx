import { useLanguage } from '../../context/LanguageContext';
import data from '../../data/resume.json';
import styles from './Experience.module.css';

function Experience() {
  const { lang } = useLanguage();
  const experienceData = data.experience[lang];

  return (
    <section id="experience" className={styles.experienceSection}>
      <h2 className={styles.experienceTitle}>{experienceData.title.toUpperCase()}</h2>
      <div className={styles.experienceContainer}>
        {experienceData.items.map((item) => (
          <div key={item.id} className={styles.experienceCard}>
            <div className={styles.experiencePeriod}>
              {item.period}
            </div>
            <h3 className={styles.experiencePosition}>
              {item.position}
            </h3>
            <ul className={styles.experienceDescription}>
              {item.description.map((desc, index) => (
                <li key={index}>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;