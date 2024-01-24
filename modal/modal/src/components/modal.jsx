import { useState } from 'react'
import styles from './modal.module.css'

export default function Modal() {
    let [open, setOpen] = useState(false)

    return (
        <div className={styles.modal}>
            <button onClick={() => setOpen(true)} className={styles.btnModal}>Modal window</button>
            {open && (
                <div className={styles.overlay}>
                    <div className={styles.overlay_description}>Open nice
                    <button onClick={() => setOpen(false)} className={styles.btnClose}>Close</button></div>
                </div>
            )}
        </div>
    )
}