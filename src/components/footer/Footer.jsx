import Image from 'next/image'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023  © All Rights Reserved by Cumulus</div>
      <div className={styles.socials}>
        <Image src="/1.png" alt="Facebook" width={15} height={15} className={styles.icon}/>
        <Image src="/2.png" alt="Instagram" width={15} height={15} className={styles.icon}/>
        <Image src="/3.png" alt="twitter" width={15} height={15} className={styles.icon}/>
        <Image src="/4.png" alt="Blogger" width={15} height={15} className={styles.icon}/>
      </div>
    </div>
  )
}

export default Footer