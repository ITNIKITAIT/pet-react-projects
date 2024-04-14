import { createContext, useState } from 'react';
import Keyboard from './components/Keyboard';
import Header from './components/header/Header';

export const context = createContext();

function App() {
    const [color, setColor] = useState('#E5E7EB');

    return (
        <context.Provider value={{ color: color, setColor: setColor }}>
            <Header />
            <Keyboard />
        </context.Provider>
    );
}

export default App;
