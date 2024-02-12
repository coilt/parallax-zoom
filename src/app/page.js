'use client'
import styles from './page.module.css'
import ZoomParallax from '../components/ZoomParallax'
import ContinueGallery from '../components/ContinueGallery'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.heroimage}>
        <h1 className={styles.heroheader}>Katerina Ernst</h1>
        <div className={styles.imageOverlayContainer}>
        <Image src={'/images/hero.jpg'} layout='fill' objectFit='cover' alt='hero image' />           
        </div>

       

      </div>
      <div className={styles.spacer}/> 
      <ZoomParallax />
      <div className={styles.gallerycontinue}>
        
<h1>Another gallery</h1>
<ContinueGallery />
        </div>
    </main>
  )
}
