import styles from './game.module.css'
import { questions } from './questions-data'

export default function Game(props) {
    const {step, question, onClickVar} = props
    const percent = Math.round(step / questions.length * 100)
    
    return (
        <section className={styles.game}>
            <div className={styles.progress}>
                <div className={styles.progress_bar} style={{width: `${percent}%`}}></div>
            </div>
            <h1 className={styles.question}>{question.title}</h1>
            <ul className={styles.answer_list}>
                {
                    question.variants.map((text, index) => {
                    return <li key={index}><button onClick={() => onClickVar(index)}>{text}</button></li>
                    })
                }
            </ul>
        </section>
    )
}