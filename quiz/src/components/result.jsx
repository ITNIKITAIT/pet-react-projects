import styles from './game.module.css'
import { questions } from './questions-data'

export default function Result({setStep, total, setTotal}) {
    return (
        <section className={styles.result}>
            <img alt='result' src="https://baldezh.top/uploads/posts/2021-12/thumbs/1640369402_3-funart-pro-p-belie-foni-s-salyutami-3.png"></img>
            <h1 className={styles.question}>Вы отгадали {total} ответа из {questions.length}</h1>
            <button onClick={() => {
                setStep(0)
                setTotal(0)
            }} className={styles.btn_again}>Попробовать снова</button>
        </section>
    )
}