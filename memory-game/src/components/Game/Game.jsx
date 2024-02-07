import './Game.css'

const Game = () => {
    return ( 
        <div className="wrapper">
            <p className="title">Matching Game</p>
            <ul className="stats-list">
                <li className="stats__item">Difficulty</li>
                <li className="stats__item">time</li>
                <li className="stats__item">moves</li>
                <li className="stats__item">reload</li>
            </ul>
            <ul className="board">
                <li className="card">
   
                </li>
                <li className="card">
   
                </li>
                <li className="card">
   
                </li>
                <li className="card">
   
                </li>
                <li className="card">
   
                </li>
                <li className="card">
   
                </li>
                <li className="card">
   
                </li>
                <li className="card">
   
                </li>
            </ul>
            <p className="back">Back</p>
        </div>
     );
}
 
export default Game;