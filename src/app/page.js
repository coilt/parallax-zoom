import styles from './page.module.css'
import ZoomParallax from '../components/ZoomParallax'

export default function Home() {
  return (
    <main className={styles.main}>
      <ZoomParallax />
      {console.log('ZoomParallax is loaded')}
    </main>
  )
}
