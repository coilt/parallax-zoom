'use client';

import styles from './styles.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Picture1 from '../../../public/images/001.jpg';

export default function Gallery() {

  const containerRef = useRef(null);
  const { scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.sticky}>
      
        <div className={styles.el}>
          <motion.div style={{scale: scale4}}  className={styles.imagecontainer}>
              <Image 
                  src={Picture1} 
                  fill={true} 
                  alt='image' 
                  placeholder='blur' 
              />
          </motion.div>
          </div>
        </div>
      </div>
 
  )
}
