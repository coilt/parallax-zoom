import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../../../../page.module.css';

export const AnimIntro = ({ value }) => {
  const animIntroEl = useRef(null);
  const { scrollYProgress } = useScroll({
    target: animIntroEl,
    offset: ['start 0.9', 'end 0.1'],
  });

  const introY = useTransform(scrollYProgress, [0, 0.5], [-100,  0]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <motion.p
      className={styles.textAnimateIn}
      ref={animIntroEl}
      style={{ 
        y: introY,
        opacity: introOpacity
      }}
    >
      {value}
    </motion.p>
  );
};


export const AnimTitle = ({ value }) => {
  const animTitleEl = useRef(null);
  const { scrollYProgress } = useScroll({
    target: animTitleEl,
    offset: ['0 0', '1.33 0'],
  });

  const TitleY = useTransform(scrollYProgress, [0, 1], [400, -100]);
  const TitleOpacity = useTransform(scrollYProgress, [1, 1], [0, 1]);

  return (
    <motion.p
      className={styles.heroTitle}
      ref={animTitleEl}
      style={{ 
        
        y: TitleY,
        opacity: TitleOpacity
      }}
    >
      {value}
    </motion.p>
  );
};



export const AnimLead = ({ value }) => {
  const animLeadEl = useRef(null);
  const { scrollYProgress } = useScroll({
    target: animLeadEl,
    offset: ['start 0.9', 'end 0.1'],
  });

  const TitleY = useTransform(scrollYProgress, [0, 0.5], [-100, -300]);
  const TitleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <motion.p
      className={styles.leadAnimateIn}
      ref={animLeadEl}
      style={{ 
        y: leadY,
        opacity: leadOpacity
      }}
    >
      {value}
    </motion.p>
  );
};



export default AnimIntro;
