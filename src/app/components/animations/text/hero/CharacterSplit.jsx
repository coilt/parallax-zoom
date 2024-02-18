import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from '../../../../page.module.css'

export default function textAnimateIn({ value }) {
  const animIntroEl = useRef(null)
  const { scrollYProgress } = useScroll({
    target: animIntroEl,
    offset: ['start 0.8', 'start 0.25'],
  })

  const introY = useTransform(scrollYProgress, [0, 0.5], [400, 100])

  const words = value.split('')
  return (
    < p
      className={styles.textAnimateIn}
      ref={animIntroEl}
      style={{
        y: introY,
      }}
    >
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + (1 / words.length)
        return <CharacterSplit key={i} range={[start, end]} progress={scrollYProgress}>{word}</CharacterSplit>
        })
        }
    </ p>
  )
}

const CharacterSplit = ({ children, range, progress }) => {
  const characters = children.split('');
  const amount = range[1] - range [0];
  const step = amount / children.length;

  return (
    <span className={styles.split}>
      {
      characters.map((character, i) => {
        const start = range[0] + (step * 1);
        const end = range[0] + (step * (i + 1));

        return <CharacterSplit  key={i} range={[start, end]} progress={progress}>{character}</CharacterSplit>
      })
      }
    </span>
  )
}

const Character = ({children}) => {
  const characterOpacity = useTransform(progress, range, [0, 1]);
  return (
    <motion.span style={{opacity: characterOpacity}}>
      {children}
    </ motion.span>
  )

}