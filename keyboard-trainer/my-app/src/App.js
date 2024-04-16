import { createContext, useEffect, useState } from 'react';
import Keyboard from './components/Keyboard';
import Header from './components/header/Header';
import Field from './components/Field';

export const context = createContext();

function App() {
    const [color, setColor] = useState('#E5E7EB');
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch('https://random-word-api.herokuapp.com/word?number=100')
            .then((res) => res.json())
            .then((data) => setWords(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <context.Provider
            value={{ color: color, setColor: setColor, words: words }}>
            <Header />
            <Field />
            <Keyboard />
        </context.Provider>
    );
}

export default App;
