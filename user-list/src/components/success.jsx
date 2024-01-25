import styles from './success.module.css'

export default function Success({count}) {
    return (
        <div class={styles.success_block}> 
            <img  src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" alt="Success" /> 
            <h2>Success!</h2> 
            <p>An invitation has been sent to {count} users.</p> 
            <button onClick={() => window.location.reload()}>Back</button> 
        </div> 
    )
}