import React, { useRef } from 'react'
import { motion, useScroll, useTransform, scrollYProgress } from 'framer-motion'
import styles from '../../../../page.module.css'

export default function textAnimateIn({ value }) {
  const animIntroEl = useRef(null)
  const { scrollYProgress } = useScroll({
    target: animIntroEl,
    offset: ['start 0.8', 'start 0.25'],
  })

  const introY = useTransform(scrollYProgress, [0, 0.5], [400, 100])

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
        const start = i / words.length;
        const end = start + (1 / words.length)
        return <WordSplit key={i} range = {[start, end]} progress = {scrollYProgress}>{word}</WordSplit>
      })}
    </motion.p>
  )
}


const WordSplit = ( {children, range, progress}) => {
  const splitOpacity = useTransform(progress, range, [0, 1]);
  return (
<span className={styles.split}>
  <span className={styles.shadow}>{children}</span>
  


<motion.span 
style = {{opacity: splitOpacity}}
  >{children}</ motion.span>
  </span>
  )
}