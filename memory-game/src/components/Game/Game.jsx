import { useEffect, useRef, useState } from 'react';
import { images } from './data';
import numberCardsFunc from '../helpers/numberCardsFunc.js'
import dublicateFunc from '../helpers/dublicateArrayFunc.js';
import useLocalStorage from '../hooks/UseLocalStorage.js';
import './Game.css'
import Timer from '../Timer/Timer.jsx';

const Game = ({setTab, difficulty, setModal, modal}) => {
    // console.log('render')
    const numberOfCards = (numberCardsFunc(difficulty))
    const dublicatedImg = dublicateFunc(images, numberOfCards)

    const [open, setOpen] = useState([])
    const [move, setMove] = useState(0)
    const [isMoved, setIsMoved] = useState(true)
    const [wins, setWins] = useLocalStorage('Wins', 0)

    useEffect(() => {
        const len = open.length;
        if (len !== 0 && len % 2 === 0 ) {
            const prevItem = len - 2
            if (cardsRef.current[open[len-1]].id !== cardsRef.current[open[prevItem]].id) {
                setTimeout(() => setOpen(open.slice(0, prevItem)), 200)
                setIsMoved(false)
            }
            else {
                setMove(prev => prev + 1);
            }
        }
        if (!isMoved && len === 0) setMove(prev => prev + 1);

        if (cardsRef.current.length === len) {
            setWins(wins + 1)
            setModal(true)
        }
        // eslint-disable-next-line
    }, [open, setTab, setModal, setWins])

    useEffect(() => {

    })
    
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
            <p className="wins">Wins - {wins}🏆</p>
            <ul className="stats-list">
                <li className="stats__item">{difficulty.toUpperCase()}</li>
                <li className="stats__item"><Timer modal={modal}/></li>
                <li className="stats__item">{move} Moves</li>
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