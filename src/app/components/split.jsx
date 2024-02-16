import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from '../page.module.css'

export default function Split({ value }) {
  const animIntroEl = useRef(null)
  const { scrollYProgress } = useScroll({
    target: animIntroEl,
    offset: ['start 0.8', 'start 0.25'],
  })

  const introY = useTransform(scrollYProgress, [0, 0.5], [-100, 100])

  const words = value.split(' ')
  return (
    <motion.p
      className={styles.textAnimateIn}
      ref={animIntroEl}
      style={{
        y: introY,
      }}
    >
      {words.map((word, i) => {
        return <span className= {styles.split} key={i}>{word} </span>
      })}
    </motion.p>
  )
}
