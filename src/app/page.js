'use client'
import styles from './page.module.css'
import ZoomParallax from '../components/ZoomParallax'
import ContinueGallery from '../components/ContinueGallery'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import TextAnimateIn from './components/animations/text/hero/textanimatein.jsx'
import SlideInTransition from './components/SlideInTransition.jsx'

const introText = 'Photographer and cinematographer.'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 1000])
  const textY = useTransform(scrollYProgress, [0, 1], [1000, -3000])
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const backplateY = useTransform(scrollYProgress, [0, 1], [1000, -10000])

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <SlideInTransition>
    <main className={styles.main}>
      <motion.div className={styles.heroTitle} style={{ y: textY }}>
        Katerina Ernst
      </motion.div>
      <div className={styles.heroLead}>
        <TextAnimateIn value={introText} style={{ opacity: textOpacity }} />
      </div>
      <motion.div className={styles.heroLead} style={{ y: textY }}>
        <p>
          {' '}
          <span className={styles.paragraphLead}>
            I enjoy helping people discover something, they didn't know
            they had. Through my hands, through my eyes, through my lens. I
            bring to life the unknowable. The unseeable.
          </span>
        </p>
      </motion.div>
      <div className={styles.heroimage}>
        <motion.div
          className={styles.imageOverlayContainer}
          style={{ y: heroY }}
        >
          <Image
            src={'/images/hero_cr.jpg'}
            alt='hero image'
            fill
          />
        </motion.div>
      </div>
      <div className={styles.gallery}>
        <ZoomParallax />
      </div>
      <div className={styles.gallerycontinue}>
        <h1>Another gallery</h1>
        <ContinueGallery />
      </div>
    </main>
    </SlideInTransition>

  )
}
