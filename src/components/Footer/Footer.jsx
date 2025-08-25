import { useLanguage } from '../../context/LanguageContext';
import data from '../../data/resume.json';
import styles from './Footer.module.css';

function Footer() {
  const { lang } = useLanguage();
  const profileData = data.profile[lang];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerContacts}>
          {profileData.contacts.map((contact, index) => (
            <a 
              key={index} 
              href={contact.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.contactLink}
              data-text={contact.value}
            >
              <span className={styles.contactLabel}>{contact.label}</span>
              <span className={styles.contactValue}>{contact.value}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;