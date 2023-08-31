
import Link from 'next/link'
import styles from './navbar.module.css'

export default function navbar() {



    return (
        <section className={styles.nav}>

            <div>
                <a href={'https://www.npmjs.com/package/@flaticon/flaticon-uicons'} target='_blank'><i className="fi fi-brands-tik-tok"></i></a>
                <a href={'https://www.npmjs.com/package/@flaticon/flaticon-uicons'} target='_blank'><i className="fi fi-brands-discord"></i></a>
                <a href={'https://www.npmjs.com/package/@flaticon/flaticon-uicons'} target='_blank'><i className="fi fi-brands-behance"></i></a>
                <a href={'https://www.npmjs.com/package/@flaticon/flaticon-uicons'} target='_blank'><i className="fi fi-brands-github"></i></a>
            </div>

            <div className={styles.tya}>
                <i class="fi fi-sr-eclipse-alt" ></i>
            </div>
            
            </section>
    )
}
