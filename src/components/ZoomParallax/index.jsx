import styles from './styles.module.scss'
import Image from 'next/image'

import Picture1 from '../../../public/images/001.jpg'

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.sticky}>
        <div className={styles.el}>
          <div className={styles.imagecontainer}>
        <Image 
            src={Picture1} 
            fill='true' 
            alt='image' 
            placeholder='blur' 
            
        />
          </div>
        </div>
      </div>
    </div>
  )
}
