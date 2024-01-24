import styles from './modal.module.css'

export default function Overlay(props) {
    let {open, setOpen} = props
    return (
        <div className={`${styles.overlay} ${open && styles.show}`}>
            <div className={`${styles.overlay_description} ${open && styles.show}`}>Open nice
            <button onClick={() => setOpen(false)} className={styles.btnClose}>Close</button></div>
        </div>
    )
}