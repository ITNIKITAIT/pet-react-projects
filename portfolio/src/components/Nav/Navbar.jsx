import sun from '../../img/icons/sun.svg'
import moon from '../../img/icons/moon.svg'
import styles from './Navbar.module.css'
import { useState } from 'react'

export default function Navbar() {
    const [theme, setTheme] = useState('dark')
    const toggle = () => {
        console.log(theme)
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }

    return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.nav_row}>
                    <div className={styles.title}><a href='index.html'><strong>My </strong>portfolio</a></div>
                    <div className={styles.nav_wrap}>
                        <ul className={styles.nav_list}>
                            <li className="nav-list__item"><a className={`${styles.nav_list__item} ${styles.link_current}`} href='index.html'>Projects</a></li>
                            <li className="nav-list__item"><a className={styles.nav_list__item} href='index.html'>Skills</a></li>
                            <li className="nav-list__item"><a className={styles.nav_list__item} href='index.html'>Contacts</a></li>
                        </ul>
                        <button onClick={toggle} className={`${styles.theme_btn} ${theme}`}>
                            <img src={sun} alt="sun" />
                            <img src={moon} alt="sun" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
