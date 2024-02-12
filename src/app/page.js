'use client'
import styles from './page.module.css'
import ZoomParallax from '../components/ZoomParallax'
import ContinueGallery from '../components/ContinueGallery'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Home() {
  const { scrollYProgress } = useScroll()
  // Adjust the range to reduce the movement, making the image scroll slower  const y = useTransform(scrollYProgress, [0, 1], [0, -200]); // Adjust range as needed
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 1000])
  const spacerY = useTransform(scrollYProgress, [0, 1], [0, -8000])
  const textY = useTransform(scrollYProgress, [0, 1], [800, -3000]) // Text moves differently

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div>
      {' '}
      <main className={styles.main}>
        <motion.div className={styles.heroText} style={{ y: textY }}>
          Katerina Ernst
        </motion.div>

        <motion.div className={styles.heroLead} style={{ y: textY }}>
          <p className={styles.paragraphLead}>
          I enjoy helping people discover something in  them, they didn't know they had.
          Through my hands, through my eyes, through my lens. I bring to life the unknownoable. The unseeable.
        
          </p>
        </motion.div>

        <div className={styles.heroimage}>
          <motion.div
            className={styles.imageOverlayContainer}
            style={{ y: heroY }}
          >
            <Image
              src={'/images/hero_c.jpg'}
              layout='fill'
              objectFit='cover'
              alt='hero image'
            />
          </motion.div>
        </div>

        <div className={styles.spacercontainer}>
          <motion.div style={{ y: spacerY }} className={styles.spacer}>
            {' '}
            
          </motion.div>
        </div>
        <div>
          <ZoomParallax />
        </div>

        <div className={styles.gallerycontinue}>
          <h1>Another gallery</h1>
          <ContinueGallery />
        </div>
      </main>
    </div>
  )
}
