'use client'
import styles from './page.module.css'
import ZoomParallax from '../components/ZoomParallax'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

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
      <div className={styles.spacer} />

      <ZoomParallax />
      {console.log('ZoomParallax is loaded')}
    </main>
  )
}
