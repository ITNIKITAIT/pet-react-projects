import { useEffect, useRef, useState } from 'react';
import { images } from './data';
import numberCardsFunc from '../helpers/numberCardsFunc.js'
import dublicateFunc from '../helpers/dublicateArrayFunc.js';
import './Game.css'

const Game = ({setTab, difficulty, setModal}) => {

    const numberOfCards = (numberCardsFunc(difficulty))
    const dublicatedImg = dublicateFunc(images, numberOfCards)

    // console.log('render')
    const [open, setOpen] = useState([])

    useEffect(() => {
        const len = open.length;
        if (len !== 0 && len % 2 === 0 ) {
            const prevItem = len - 2
            if (cardsRef.current[open[len-1]].id !== cardsRef.current[open[prevItem]].id) {
                setTimeout(() => setOpen(open.slice(0, prevItem)), 200)
            }
        }
        if (cardsRef.current.length === len) {
            setModal(true)
        }
    }, [open, setTab, setModal])

    const cardClick = (i) => {
        if (!open.includes(i)) setOpen([...open, i]);
    }

    const shuffle = (array) => {
        return array.toSorted((a, b) => Math.random() - 0.5)
    }

    const cardsRef = useRef(shuffle(dublicatedImg))

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
            <ul className="board" style={{width: numberOfCards === 20 ? '870px' : ''}}>
                {cardsRef.current.map((item, index) => {
                    return (<li key={index} 
                                onClick={() => cardClick(index)} 
                                className={`card ${open.includes(index) ? 'card--active' : ''}`}>
                                    {item.svg}
                            </li>)
                })}
            </ul>
            <button onClick={() => setTab('menu')} className="back">Back</button>
        </div>
     );
}
 
export default Game;