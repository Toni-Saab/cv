import { useLanguage } from '../../context/LanguageContext';
import data from '../../data/resume.json';
import styles from './Education.module.css';

function Education() {
  const { lang } = useLanguage();
  const educationData = data.education[lang];

  return (
    <section id="education" className={styles.educationSection}>
      <h2 className={styles.educationTitle}>{educationData.title.toUpperCase()}</h2>
      <div className={styles.educationContainer}>
        {educationData.items.map((item) => (
          <div key={item.id} className={styles.educationCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.educationInstitution}>
                {item.institution}
              </h3>
              <div className={styles.educationPeriod}>
                {item.period}
              </div>
            </div>
            <div className={styles.educationDetails}>
              <p className={styles.educationDegree}>
                {item.degree}
              </p>
              <p className={styles.educationCountry}>
                {item.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;