// FlipLogo.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FullLogo from '../svgs/logo-full.svg';  // Adjust the path as necessary
import CompactLogo from '../svgs/logo-compact.svg';
import styles from './FlipLogo.module.scss';  
import Image from 'next/image';

const FlipLogo = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Variants for flipping animation
  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  // Toggle flip state
  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Example condition: flip when scrolling more than 100px down
      setIsFlipped(window.scrollY > 100);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
  className={styles.logoContainer}
  variants={flipVariants}
  animate={isFlipped ? 'back' : 'front'}
  transition={{ duration: 0.5 }}
  style={{ perspective: 1000 }}
>
  {isFlipped ? (
    <Image src={CompactLogo} alt="Compact Logo" layout="fill" objectFit="contain" />
  ) : (
    <Image src={FullLogo} alt="Full Logo" layout="fill" objectFit="contain" />
  )}
</motion.div>
  );
};

export default FlipLogo;
