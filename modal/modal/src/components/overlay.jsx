import styles from './modal.module.css'

export default function Overlay() {

    return (
        <div className={styles.overlay}>
            <div className={styles.overlay_description}>Open nice
            <button className={styles.btnClose}>Close</button></div>
        </div>
    )
}