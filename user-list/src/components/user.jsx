import styles from './user.module.css'

export default function User(props) {
    const {id, email, first_name, last_name, avatar, isInvited, onClickInvite} = props
    return (
        <div className={styles.user} key={id}>
            <img style={{width: '50px', borderRadius: '50%'}} src={avatar} alt="avatar" />
            <div>
                <h3>{first_name} {last_name}</h3>
                <p>
                    @{email}
                </p>
            </div>
            <button onClick={() => onClickInvite(id)}>
             {isInvited ? '-' : '+'}
            </button>
        </div>
    )
}