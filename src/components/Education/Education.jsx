import { useLanguage } from '../../context/LanguageContext';
import data from '../../data/resume.json';
import styles from './Education.module.css';
import { FaFilePdf } from 'react-icons/fa';

import BachelorDiploma from '../../assets/documents/bachelor_diploma.pdf';
import WeiterbildungCert from '../../assets/documents/weiterbildung_certificate.pdf';

const diplomaPaths = {
    "edu1": BachelorDiploma,
    "edu2": WeiterbildungCert,
};

function Education() {
  const { lang } = useLanguage();
  const educationData = data.education[lang];

  return (
    <section id="education" className={styles.educationSection}>
      <h2 className={styles.educationTitle}>{educationData.title.toUpperCase()}</h2>
      <div className={styles.educationContainer}>
        {educationData.items.map((item) => (
          <a
            key={item.id}
            href={diplomaPaths[item.id]}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.educationCard} 
            title={item.diplomaTitle}
          >
            <FaFilePdf className={styles.pulsingIcon} />

            <div className={styles.diplomaHoverOverlay}>
              <FaFilePdf className={styles.overlayIcon} aria-label={item.diplomaTitle} />
              <span className={styles.diplomaText}>{item.diplomaTitle}</span>
            </div>

            <div className={styles.cardHeader}>
              <h3 className={styles.educationInstitution}>{item.institution}</h3>
              <div className={styles.educationPeriod}>{item.period}</div>
            </div>

            <div className={styles.educationDetails}>
              <p className={styles.educationDegree}>{item.degree}</p>
              <p className={styles.educationCountry}>{item.country}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Education;
