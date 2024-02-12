'use client';

import styles from './styles.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Picture1 from '../../../public/images/001.jpg';
import Picture2 from '../../../public/images/002.jpg';
import Picture3 from '../../../public/images/003.jpg';
import Picture4 from '../../../public/images/004.jpg';
import Picture5 from '../../../public/images/005.jpg';
import Picture6 from '../../../public/images/006.jpg';
import Picture7 from '../../../public/images/007.jpg';
import Picture8 from '../../../public/images/008.jpg';
import Picture9 from '../../../public/images/009.jpg';
import Picture10 from '../../../public/images/010.jpg';
import Picture11 from '../../../public/images/011.jpg';
import Picture12 from '../../../public/images/012.jpg';
import Picture13 from '../../../public/images/013.jpg';


export default function Gallery() {

  const containerRef = useRef(null);
  const { scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
const scale10 = useTransform(scrollYProgress, [0, 1], [1, 10]);
const scale11 = useTransform(scrollYProgress, [0, 1], [1, 11]);
const scale12 = useTransform(scrollYProgress, [0, 1], [1, 12]);
const scale13 = useTransform(scrollYProgress, [0, 1], [1, 13]);


const pictures = [
  {
    src: Picture1,
    scale: scale4
  },
  {
    src: Picture2,
    scale: scale4
  },
  {
    src: Picture3,
    scale: scale4
  },
  {
    src: Picture4,
    scale: scale4
  },
  {
    src: Picture5,
    scale: scale4
  },
  {
    src: Picture6,
    scale: scale4
  },
  {
    src: Picture7,
    scale: scale4
  },
  {
    src: Picture8,
    scale: scale4
  },
  {
    src: Picture9,
    scale: scale4
  },
  {
    src: Picture10,
    scale: scale4
  },
  {
    src: Picture11,
    scale: scale4
  },
  {
    src: Picture12,
    scale: scale4
  },
  {
    src: Picture13,
    scale: scale4
  },
]

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.sticky}>
{
  pictures.map(({src, scale }, index) => {
    return <div key={index} className={styles.el}>
    <motion.div style={{scale}}  className={styles.imagecontainer}>
        <Image 
            src={src} 
            fill 
            alt='image' 
            placeholder='blur' 
        />
    </motion.div>
    </div>
  })
}

        
        </div>
      </div>
 
  )
}
