import { useRef, useState } from 'react';
import './Menu.css'

const Menu = () => {

    const [active, setActive] = useState(false)

    const startRef = useRef(null)

    const handleOnClick = () => {
        if (!startRef.current.classList.contains('start--active')) {
            startRef.current.classList.add('start--active')
            setActive(true)
        }
    }


    return ( 
        <div className="menu">
            <p className="menu__title">Card Memory Game</p>
            <div ref={startRef} className="start" onClick={() => handleOnClick()}>
                {!active ? <p className="text">Start</p> : (
                    <ul className='difficulty-list'>
                        <li style={{borderRadius: '10px 10px 0 0'}} className='difficulty__item'>CASUAL</li>
                        <li className='difficulty__item bordered'>MEDIUM</li>
                        <li style={{borderRadius: '0 0 10px 10px'}} className='difficulty__item'>HARD</li>
                    </ul>
)}
            </div>
        </div>
     );
}
 
export default Menu;