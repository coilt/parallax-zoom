'use client';

import styles from './styles.module.scss';
import Image from 'next/image';

import Picture1 from '../../../public/images/001.jpg';
 

export default function SimpleGallery() {
  // List of images
  const pictures = [Picture1];

  return (
    <div className={styles.container}>
      {pictures.map((src, index) => (
        <div key={index} className={styles.imagecontainer}>
          <Image src={src} fill alt={`image ${index + 1}`} placeholder="blur" />
        </div>
      ))}
    </div>
  );
}
