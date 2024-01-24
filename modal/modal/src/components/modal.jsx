import { useState } from 'react'
import styles from './modal.module.css'

export default function Modal() {
    let [open, setOpen] = useState(false)

    return (
        <div className={styles.modal}>
            <button onClick={() => setOpen(true)} className={styles.btnModal}>Modal window</button>
            <div className={`${styles.overlay} ${open && styles.show}`}>
                <div className={`${styles.overlay_description} ${open && styles.show}`}>Open nice
                <button onClick={() => setOpen(false)} className={styles.btnClose}>Close</button></div>
            </div>
        </div>
    )
}