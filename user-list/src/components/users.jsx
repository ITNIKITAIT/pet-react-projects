import { useEffect, useState } from 'react'
import styles from './users.module.css'
import Skeleton from "./skeleton";
import User from './user';

export default function Users(props) {
    const {isLoading, setLoading, setSuccess, setCount, count} = props 
    const [users, setUsers] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [invites, setInvites] = useState([])
    
    const changeValue = (event) => {
        setSearchValue(event.target.value)
    }

    const onClickInvite = (id) => {
        if (invites.includes(id)) {
            setInvites(invites.filter((_id) => _id !== id))
            setCount(count - 1)
        }
        else {
            setInvites([...invites, id])
            setCount(count + 1)
        }
    }

    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then((res) => res.json()).then(json => { setUsers(json.data)})
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [setLoading])

    return (
        <div className={styles.wrapper}>
            <div>
                <input value={searchValue} onChange={changeValue} placeholder="Search user..." type="text" />
                {isLoading ? (<div className={styles.list}>
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                </div>) : (
                    <div className={styles.list}>
                        {users.filter((user) => {
                            const fullname = (user.first_name + ' ' + user.last_name).toLowerCase()
                            return (fullname.includes(searchValue.toLowerCase()))
                        })
                                .map((user) => <User onClickInvite={onClickInvite} isInvited={invites.includes(user.id)} {...user} />)}
                    </div>
                )}
            </div>
            {invites.length > 0 && <button onClick={() => setSuccess(true)} className={styles.send_btn}>Send invites</button>}
        </div>
    )
}