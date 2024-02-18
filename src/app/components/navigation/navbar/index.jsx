import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './navbar.module.scss';
import { SlArrowDown } from "react-icons/sl";
 import Image from 'next/image';
// import Logo from "../../svgs/logo-full.svg";



const Navbar = () => {
  const controls = useAnimation();
  const lastScrollY = useRef(0); // Initialize with 0 or a safe default value
  const isScrollingDown = useRef(false);

  useEffect(() => {
    // Update lastScrollY to the current window's scroll position when component mounts
    lastScrollY.current = window.scrollY;

    const timer = setTimeout(() => {
      controls.start("visible");
    }, 150);
    return () => clearTimeout(timer);
  }, [controls]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      let scrollingDown = currentScrollY > lastScrollY.current;

      if (scrollingDown !== isScrollingDown.current) {
        controls.start(scrollingDown ? { y: -100, transition: { duration: 0.3 } } : { y: 0, transition: { duration: 0.3 } });
        isScrollingDown.current = scrollingDown;
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const navbarVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (

    <>
    {/* <Image className={styles.logo}
      priority
      src={Logo}
      alt="Katerina Ernst"
    />  */}

    <motion.div
      className={styles.navbar}
      variants={navbarVariants}
      initial="hidden"
      animate={controls}
    >
      
      
      <ul className={styles.navList}>
        <li className={styles.navItem}><a className={styles.link} href="/works">Works <SlArrowDown /></a></li>
        <li className={styles.navItem}><a className={styles.link} href="/about">About me</a></li>
        <li className={styles.navItem}><a className={styles.link} href="/contacts">Send request</a></li>
      </ul>
    </motion.div>
    </>
  );
};

export default Navbar;
