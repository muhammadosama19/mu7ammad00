import Image from 'next/image'
import styles from './Sratic.module.css'

import Avatar from '@/app/images/avatar.jpg'
export default function sratic() {
    return (
        <section className={styles.sratic}>
            <div className={styles.h}>
                <div className={styles.nab}>
                    <Image
                        src={Avatar}
                        width={240}
                        height={350}
                        alt="Picture of the author"
                        />
                </div>
            </div>
            <div className={styles.y}>
                {/* <h1>!Hi There</h1> */}
                <h3>mu7ammad osama</h3>
                <p>Backend</p>
            </div>
        </section>
    )
}
