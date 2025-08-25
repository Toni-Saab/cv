import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import styles from './HeroSection.module.css';
import data from '../../data/resume.json';

import heroBgLight from '../../assets/images/hero-bg2.jpg';
import heroBgDark from '../../assets/images/hero-bg.jpg';

function HeroSection() {
  const { lang } = useLanguage();
  const { theme } = useTheme();

  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;

  const mouseX = useMotionValue(cx);
  const mouseY = useMotionValue(cy);

  const rotateX = useTransform(mouseY, [0, window.innerHeight], [10, -10]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);
  const x = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const y = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);
  const scale = useTransform([mouseX, mouseY], ([xVal, yVal]) => {
    const dx = Math.abs(xVal - cx) / cx;
    const dy = Math.abs(yVal - cy) / cy;
    return 1 + Math.max(dx, dy) * 0.04;
  });

  useEffect(() => {
    let animX, animY;

    function animateTo(targetX, targetY, duration) {
      if (animX) animX.stop();
      if (animY) animY.stop();
      animX = animate(mouseX, targetX, { duration: duration, ease: 'easeOut' });
      animY = animate(mouseY, targetY, { duration: duration, ease: 'easeOut' });
    }

    function handlePointerMove(e) { animateTo(e.clientX, e.clientY, 0.35); }
    function handleLeave() { animateTo(cx, cy, 0.6); }
    function handleBlur() { animateTo(cx, cy, 0.6); }

    window.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('mouseleave', handleLeave);
    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handleLeave);
      window.removeEventListener('blur', handleBlur);
      if (animX) animX.stop();
      if (animY) animY.stop();
    };
  }, [mouseX, mouseY, cx, cy]);

  const { firstName, lastName, position } = data.profile[lang];
  const heroBgImage = theme === 'dark' ? heroBgDark : heroBgLight;

  return (
    <section className={styles.heroSection}>
      <motion.div
        className={styles.bgImage}
        style={{
          rotateX, rotateY, x, y, scale,
          backgroundImage: `url(${heroBgImage})`
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      />
      <div className={styles.content}>
        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
        >
          {firstName.toUpperCase()} {lastName.toUpperCase()}
        </motion.h1>
        <motion.p
          className={styles.jobTitle}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          {position.toUpperCase()}
        </motion.p>
      </div>
    </section>
  );
}

export default HeroSection;
