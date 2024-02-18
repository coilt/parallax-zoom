import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FullLogo from '../svgs/logo-full.svg';  
import CompactLogo from '../svgs/logo-compact.svg';  
import styles from './FlipLogo.module.scss';  
import Image from 'next/image';

const FlipLogo = () => {
  return (
    <div className={styles.logoContainer}>
      
      <Image src={FullLogo} alt="Full Logo" layout="fill" objectFit="contain" />    </div>
  );
};

export default FlipLogo;