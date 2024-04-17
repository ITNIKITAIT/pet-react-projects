import { createContext, useEffect, useState } from 'react';
import Keyboard from './components/Keyboard';
import Header from './components/header/Header';
import Field from './components/Field';
import { useFetch } from './hooks/useFetch';

export const context = createContext();

function App() {
    const [color, setColor] = useState('#E5E7EB');
    const { words, doRequest, isLoading } = useFetch([]);

    useEffect(() => {
        doRequest();
        // eslint-disable-next-line
    }, []);

    return (
        <context.Provider
            value={{
                color: color,
                setColor: setColor,
                words: words,
                doRequest: doRequest,
                isLoading: isLoading,
            }}>
            <Header />
            <Field />
            <Keyboard />
        </context.Provider>
    );
}

export default App;
