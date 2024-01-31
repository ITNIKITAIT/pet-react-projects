import styles from './Main.module.css'

export default function Main() {
    return (
        <div className="section">
            <div className="container">
                    <ul className={styles.content_list}>
                        <li>
                            <h2 className={styles.title_2}>Frontend</h2>
                            <p>JavaScript, TypeScript, ReactJS, Angular, HTML, CSS, NPM, BootStrap, Yarn, TailwindCSS, StyledComponents</p>
                        </li>
                        <li>
                            <h2 className={styles.title_2}>Backend</h2>
                            <p>NodeJS, PostgreSQL, MongoDB, PHP, Nest</p>
                        </li>
                    </ul>

            </div>
        </div>
    )
}