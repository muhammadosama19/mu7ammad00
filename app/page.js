import Image from 'next/image'
import styles from './page.module.css'

import Navbar from './components/navbar/Navbar'
import Sratic from './components/sratic/sratic'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Sratic />
    </main>
  )
}
