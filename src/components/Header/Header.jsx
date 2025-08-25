import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import styles from './Header.module.css';
import data from '../../data/resume.json';
import { FaCode, FaGlobe, FaGithub, FaWhatsapp, FaEnvelope, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';

const iconMap = {
  github: FaGithub,
  whatsapp: FaWhatsapp,
  telegram: FaTelegramPlane,
  email: FaEnvelope,
  linkedin: FaLinkedinIn
};

function Header() {
  const { lang, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navLinksData = data.nav[lang];
  const contacts = data.profile[lang].contacts;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <FaCode className={styles.logoIcon} />
      </div>

      <div className={styles.navContainer}>
        <div className={styles.stalkerNavLink}>N.A.V.I.G.A.T.I.O.N.</div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {Object.entries(navLinksData).map(([id, label]) => (
              <li key={id} className={styles.navItem}>
                <a href={`#${id}`} className={styles.navLink}>
                  {label.toUpperCase()}
                  <span className={styles.hoverLine}></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.socials}>
        {contacts.map((contact, i) => {
          const Icon = iconMap[contact.type];
          return (
            <a
              key={i}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Icon className={styles.socialIcon} />
            </a>
          );
        })}
      </div>

      <div className={styles.controls}>
        <div className={styles.languageDropdown}>
          <button className={styles.dropdownToggle}>
            <FaGlobe className={styles.globeIcon} />
            <span className={styles.langText}>{lang.toUpperCase()}</span>
          </button>
          <div className={styles.dropdownMenu}>
            <button className={styles.dropdownItem} onClick={toggleLanguage}>
              {lang === 'en' ? 'DEUTSCH' : 'ENGLISH'}
            </button>
          </div>
        </div>

        <div className={styles.themeToggle} onClick={toggleTheme}>
          <div className={`${styles.toggleHandle} ${theme === 'dark' ? styles.handleDark : styles.handleLight}`}>
            {theme === 'dark' ? <FiMoon /> : <FiSun />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
