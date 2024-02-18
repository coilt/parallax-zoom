import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './FlipLogo.module.scss';

const FlipLogo = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define variants for fading transitions
  const fadeVariants = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={styles.logoContainer}>
      <motion.div
        className={`${styles.logo} ${styles.fullLogo}`}
        variants={fadeVariants}
        initial="hidden"
        animate={!isScrolled ? "visible" : "hidden"}
        style={{ backgroundImage: 'url(/logo-full.svg)' }}
      />
      <motion.div
        className={`${styles.logo} ${styles.compactLogo}`}
        variants={fadeVariants}
        initial="hidden"
        animate={isScrolled ? "visible" : "hidden"}
        style={{ backgroundImage: 'url(/logo-compact.svg)' }}
      />
    </div>
  );
};

export default FlipLogo;
