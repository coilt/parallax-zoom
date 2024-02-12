'use client';

import styles from './styles.module.scss';
import Image from 'next/image';

import Picture1 from '../../../public/images/001.jpg';
import Picture2 from '../../../public/images/002.jpg';
import Picture3 from '../../../public/images/003.jpg';
import Picture4 from '../../../public/images/004.jpg';
import Picture5 from '../../../public/images/005.jpg';
import Picture6 from '../../../public/images/006.jpg';
import Picture7 from '../../../public/images/007.jpg';
import Picture8 from '../../../public/images/008.jpg';
import Picture9 from '../../../public/images/009.jpg';
import Picture10 from '../../../public/images/010.jpg';
import Picture11 from '../../../public/images/011.jpg';
import Picture12 from '../../../public/images/012.jpg';
import Picture13 from '../../../public/images/013.jpg';
import Picture14 from '../../../public/images/014.jpg';

export default function SimpleGallery() {
  // List of images
  const pictures = [Picture1, Picture2, Picture3, Picture4, Picture5, Picture6, Picture7, Picture8, Picture9, Picture10, Picture11, Picture12, Picture13, Picture14];

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
