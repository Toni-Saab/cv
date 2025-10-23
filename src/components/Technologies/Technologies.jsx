import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Technologies.module.css';
import data from '../../data/resume.json';
import { FaTimes } from 'react-icons/fa';

//import DockerIcon from '../../assets/images/docker.svg';
import ExpressIcon from '../../assets/images/express.svg';
import GithubIcon from '../../assets/images/github.svg';
import HtmlIcon from '../../assets/images/html.svg';
import MongodbIcon from '../../assets/images/mongodb.svg';
//import MongooseIcon from '../../assets/images/mongoose.svg';
import MysqlIcon from '../../assets/images/mysql.svg';
import NodeIcon from '../../assets/images/node-js.svg';
//import PostmanIcon from '../../assets/images/postman.svg';
import ReactIcon from '../../assets/images/react.svg';
//import ReduxIcon from '../../assets/images/redux.svg';
import ResponsiveIcon from '../../assets/images/responsive.svg';
import RestApiIcon from '../../assets/images/rest.svg';
import SassIcon from '../../assets/images/sass.svg';
//import SequelizeIcon from '../../assets/images/sequelize.svg';
import SqliteIcon from '../../assets/images/sqlite.svg';
import TypescriptIcon from '../../assets/images/typescript.svg';
import EyeIcon from '../../assets/images/eye.svg';

const icons = {
  'HTML5': HtmlIcon,
  'CSS3': SassIcon,
  'JS/TS (ES6+)': TypescriptIcon,
  'React': ReactIcon,
  //'Redux Toolkit': ReduxIcon,
  'Node.js': NodeIcon,
  'Express': ExpressIcon,
  'MongoDB': MongodbIcon,
  //'Mongoose': MongooseIcon,
  'MySQL': MysqlIcon,
  //'Sequelize': SequelizeIcon,
  'Git/GitHub': GithubIcon,
  //'Docker': DockerIcon,
  //'Postman': PostmanIcon,
  'SASS': SassIcon,
  'REST API': RestApiIcon,
  'Responsive Design': ResponsiveIcon,
  'SQLite': SqliteIcon,
};

function Technologies() {
  const { lang } = useLanguage();
  const technologiesData = data.technologies[lang];
  const categories = technologiesData.categories;
  const techList = categories.flatMap(cat => cat.items);
  const carouselItems = [...techList, ...techList];

  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  function formatName(name) {
    return name.split(' ').map((w, idx) => <div key={idx}>{w}</div>);
  }

  return (
    <section className={styles.technologiesSection}>
      <div
        id="technologies"
        className={`${styles.carouselContainer} ${hovered ? styles.hovered : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={styles.carouselTrack}>
          {carouselItems.map((tech, i) => (
            <div key={i} className={styles.techCard}>
              <div className={styles.laurelLeft}></div>
              <div className={styles.techContent}>
                <img src={icons[tech.name]} alt={tech.name} className={styles.icon} />
                <div className={styles.name}>{formatName(tech.name.toUpperCase())}</div>
              </div>
              <div className={styles.laurelRight}></div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className={styles.viewAllButton}
          onClick={() => setModalOpen(true)}
        >
          <img src={EyeIcon} alt="View all technologies" className={styles.viewAllIcon} />
          <span>{technologiesData.viewAllButtonText}</span>
        </button>
      </div>

      {modalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{technologiesData.modalTitle}</h2>
              <button
                type="button"
                className={styles.closeModal}
                onClick={() => setModalOpen(false)}
              >
                <FaTimes />
              </button>
            </div>
            <div className={styles.modalGrid}>
              {techList.map((tech, i) => (
                <div key={i} className={styles.modalItem}>
                  <img src={icons[tech.name]} alt={tech.name} className={styles.modalIcon} />
                  <div className={styles.modalName}>{tech.name.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Technologies;
