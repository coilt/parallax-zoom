import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FullLogo from '../svgs/logo-full.svg';  
import CompactLogo from '../svgs/logo-compact.svg';  
import styles from './FlipLogo.module.scss';  
import Image from 'next/image';
import Link from 'next/link';

const FlipLogo = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensuring transitions are properly applied for each state
  const logoVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Define transitions with specific properties for entering and exiting
  const enterTransition = { duration: 0.5, delay: 0.3 };
  const exitTransition = { duration: 0.5 };

  return (
    <div className={styles.logoContainer}>
      < Link href="/" passHref >
      <motion.div
      
        className={styles.logo}
        variants={logoVariants}
        initial="hidden"
        animate={!isScrolled ? "visible" : "hidden"}
        transition={!isScrolled ? enterTransition : exitTransition}
      >
        <Image src={FullLogo} alt="Full Logo" layout="fill" objectFit="contain" /> 
      </motion.div>
     
      <motion.div
        className={styles.logo}
        variants={logoVariants}
        initial="hidden"
        animate={isScrolled ? "visible" : "hidden"}
        transition={isScrolled ? enterTransition : exitTransition}
      >
        <Image src={CompactLogo} alt="Compact Logo" layout="fill" objectFit="contain" />
      </motion.div>
      </Link>
    </div>
  );
};

export default FlipLogo;
