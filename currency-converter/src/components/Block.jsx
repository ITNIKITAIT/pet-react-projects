import styles from './Block.module.css'
import {defaultCurrencies} from './currencies.js'

export default function Block(props) {
    const {currency, setSomeState, value, onChangeValue} = props
    const onChangeCurrency = (setSate, cur) => {
        setSate(cur)
    }

    return (
        <div className={styles.block}>
            <ul className={styles.currency_list}>
                {defaultCurrencies.map((item, index) => (
                    <li onClick={() => onChangeCurrency(setSomeState, item)
                    } className={(item === currency && styles.current) || styles.none} key={index}>{item}</li>
                ))}
            </ul>
            <input onChange={(e) => onChangeValue(e.target.value)} value={value} className={styles.input} type="number"/>
        </div>
    )
}