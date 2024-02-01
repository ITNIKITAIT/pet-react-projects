import { useEffect, useRef } from 'react'

import { NavLink } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { detectDarkMode } from '../heplers/detectDarkMode.js'

import styles from './Navbar.module.css'

import sun from '../../img/icons/sun.svg'
import moon from '../../img/icons/moon.svg'

export default function Navbar({tab, setTab}) {
    const themeRef = useRef()

    const [theme, setTheme] = useLocalStorage('theme', detectDarkMode())

    const toggle = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }
    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark')
            themeRef.current.classList.add('theme_btn--active')
        }
        else {
            document.body.classList.remove('dark')
            themeRef.current.classList.remove('theme_btn--active')
        }
    }, [theme])

    return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.nav_row}>
                    <div className={styles.title}><a href='/'><strong>My </strong>portfolio</a></div>
                    <div className={styles.nav_wrap}>
                        <ul className={styles.nav_list}>
                            <li className="nav-list__item">
                                <NavLink to={'/'}>
                                    <a 
                                        onClick={() => setTab('Home')} 
                                        className={`${styles.nav_list__item}  ${tab === 'Home' ? styles.link_current : ''}`} 
                                        href='/'>Home
                                    </a>
                                </NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to={'/projects'}>
                                    <a 
                                        onClick={() => setTab('Projects')} 
                                        className={`${styles.nav_list__item}  ${tab === 'Projects' ? styles.link_current : ''}`} 
                                        href='/projects'>Projects
                                    </a>
                                </NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink to={'/contacts'}>
                                    <a 
                                        onClick={() => setTab('Contacts')} 
                                        className={`${styles.nav_list__item}  ${tab === 'Contacts' ? styles.link_current : ''}`} 
                                        href='/contacts'>Contacts
                                    </a>
                                </NavLink>
                            </li>
                        </ul>
                        <button ref={themeRef} onClick={toggle} className='theme_btn'>
                            <img src={sun} alt="light" />
                            <img src={moon} alt="dark" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
