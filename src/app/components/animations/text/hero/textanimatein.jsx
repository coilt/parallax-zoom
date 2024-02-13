'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../../../../page.module.css';

export default function TextAnimateIn({ value }) {
  const pElement = useRef(null);
  const { scrollYProgress } = useScroll ({
  target: pElement,
  offset: ['start 0.9', 'end 0.1']
  });

  const y = useTransform(scrollYProgress, [0, 0.5], [-100, -300]); // Adjust [0, 1000] as needed
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]); // Adjust [0, 1] as needed
  
  return ( 
  <motion.p 
     className={styles.textAnimateIn}
     ref={ pElement}
     style={{y, opacity }}
     >
     {value}
  </motion.p>
  

  );
}
