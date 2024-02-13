'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import styles from '../../../../page.module.css';

export default function TextAnimateIn({ value }) {
  const pElement = useRef(null);
  const { scrollYProgress } = useScroll ({
  target: pElement,
  offset: ['start 0.9', 'start 0.25']
  })

  useEffect( () => {
    scrollYProgress.on('change', e => console.log(e))
  }, [])

  return ( 
  <motion.p 
     className={styles.textAnimateIn}
     ref={ pElement}
     style={{opacity: scrollYProgress}}
     >
     {value}
  </motion.p>
  

  )
}
