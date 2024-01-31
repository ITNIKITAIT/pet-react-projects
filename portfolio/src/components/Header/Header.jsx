import styles from './Header.module.css'

export default function Header() {
    return ( 
        <header class={styles.header}>
            <div class={styles.header__wrapper}>
                <h1 class={styles.header__title}>
                    <strong>Hi, my name is <em>Nikita </em></strong>
                    a frontend developer
                </h1>
                <div class={styles.header__text}>
                    <p>with passion for learning and creating.</p>
                </div>
                <button class='btn'>Download CV</button>
            </div>
        </header>
     );
}
