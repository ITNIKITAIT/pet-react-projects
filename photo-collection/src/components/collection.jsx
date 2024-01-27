import { images } from "./data"
import styles from './collection.module.css'

export default function Collection() {
    return (
        <div className={styles.collection}>
            <img className={styles.collection__big} src={images["collections"][0]["photos"][0]} alt="Item" />
            <div className={styles.collection__bottom}>
                <img className={styles.collection__mini} src={images["collections"][0]["photos"][1]} alt="Item" />
                <img className={styles.collection__mini} src={images["collections"][0]["photos"][2]} alt="Item" />
                <img className={styles.collection__mini} src={images["collections"][0]["photos"][3]} alt="Item" />
            </div>
            <h4>name</h4>
        </div>
    )
}