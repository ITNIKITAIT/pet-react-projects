import { useEffect, useRef, useState } from 'react';
import { images } from './data';
import './Game.css'

const Game = () => {
    // console.log('render')
    const [open, setOpen] = useState([])

    useEffect(() => {
        const len = open.length
        if (len !== 0 && len % 2 === 0 ) {
            if (cardsRef.current[open[len-1]].id !== cardsRef.current[open[len-2]].id) {
                setTimeout(() => setOpen(open.slice(0, len-2)), 200)
            }
        }
        if (images.length === len) {
            console.log('win')
        }
    }, [open])

    const cardClick = (i) => {
        if (!open.includes(i)) setOpen([...open, i]);
    }

    const shuffle = (array) => {
        return array.toSorted((a, b) => Math.random() - 0.5)
    }

    const cardsRef = useRef(shuffle(images))

    return ( 
        <div className="wrapper">
            <p className="title">Matching Game</p>
            <p className="wins">Win streak - 0🏆</p>
            <ul className="stats-list">
                <li className="stats__item">Difficulty</li>
                <li className="stats__item">time</li>
                <li className="stats__item">moves</li>
                <li className="stats__item">reload</li>
            </ul>
            <ul className="board">
                {cardsRef.current.map((item, index) => {
                    return (<li key={index} 
                                onClick={() => cardClick(index)} 
                                className={`card ${open.includes(index) ? 'card--active' : ''}`}>
                                    {item.svg}
                            </li>)
                })}
            </ul>
            <p className="back">Back</p>
        </div>
     );
}
 
export default Game;