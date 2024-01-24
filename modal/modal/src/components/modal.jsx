import { useState } from 'react'
import styles from './modal.module.css'
import Overlay from './overlay'


export default function Modal() {
    let [open, setOpen] = useState(false)

    return (
        <div className={styles.modal}>
            <button onClick={() => setOpen(true)} className={styles.btnModal}>Modal window</button>
            <Overlay open={open} setOpen={setOpen} />
        </div>
    )
}