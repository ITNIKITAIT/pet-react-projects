import sun from '../../img/icons/sun.svg'
import moon from '../../img/icons/moon.svg'
import styles from './Navbar.module.css'
import { useState } from 'react'

export default function Navbar({tab, setTab}) {
    const [theme, setTheme] = useState('light')
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
                            <li className="nav-list__item">
                                <a 
                                    onClick={() => setTab('Home')} 
                                    className={`${styles.nav_list__item}  ${tab === 'Home' ? styles.link_current : ''}`} 
                                    href='#!'>Home
                                </a>
                            </li>
                            <li className="nav-list__item">
                                <a 
                                    onClick={() => setTab('Projects')} 
                                    className={`${styles.nav_list__item}  ${tab === 'Projects' ? styles.link_current : ''}`} 
                                    href='#!'>Projects
                                </a>
                            </li>
                            <li className="nav-list__item">
                                <a 
                                    onClick={() => setTab('Contacts')} 
                                    className={`${styles.nav_list__item}  ${tab === 'Contacts' ? styles.link_current : ''}`} 
                                    href='#!'>Contacts
                                </a>
                            </li>
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
