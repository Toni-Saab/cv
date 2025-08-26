import { useEffect, useState } from 'react';
import styles from './Preloader.module.css';
import { BsCompassFill } from 'react-icons/bs';

function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => setHidden(true), 2000);
  }, []);

  return (
    <div className={hidden ? styles.hidden : styles.preloaderOverlay}>
      <div className={styles.preloaderContent}>
        <BsCompassFill className={styles.icon} />
        <h1 className={styles.title}>Loading Profile</h1>
        <p className={styles.text}>
          All photos on this CV are styled with AI for better design.
          <br />You can find the original photos on my LinkedIn or other social profiles...
          <br />maybe... 😅
        </p>
      </div>
    </div>
  );
}

export default Preloader;
