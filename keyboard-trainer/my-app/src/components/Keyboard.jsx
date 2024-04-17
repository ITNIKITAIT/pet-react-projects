import { useContext, useEffect, useState } from 'react';
import KeyButton from './KeyButton';
import { context } from '../App';

const Keyboard = () => {
    const { color } = useContext(context);
    const [buttonKey, setButtonKey] = useState();

    const handleKeyPress = (e) => {
        console.log(e.key);
        setButtonKey(e.key);
    };
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
    }, []);

    return (
        <div
            style={{ backgroundColor: color }}
            className="keyboard mx-auto mt-10 w-fit bg-gray-200 p-1 gap-[6px]">
            <KeyButton buttonKey={buttonKey}>`</KeyButton>
            <KeyButton buttonKey={buttonKey}>1</KeyButton>
            <KeyButton buttonKey={buttonKey}>2</KeyButton>
            <KeyButton buttonKey={buttonKey}>3</KeyButton>
            <KeyButton buttonKey={buttonKey}>4</KeyButton>
            <KeyButton buttonKey={buttonKey}>5</KeyButton>
            <KeyButton buttonKey={buttonKey}>6</KeyButton>
            <KeyButton buttonKey={buttonKey}>7</KeyButton>
            <KeyButton buttonKey={buttonKey}>8</KeyButton>
            <KeyButton buttonKey={buttonKey}>9</KeyButton>
            <KeyButton buttonKey={buttonKey}>0</KeyButton>
            <KeyButton buttonKey={buttonKey}>-</KeyButton>
            <KeyButton buttonKey={buttonKey}>=</KeyButton>
            <KeyButton buttonKey={buttonKey} col={4}>
                Backspace
            </KeyButton>

            <KeyButton buttonKey={buttonKey} col={3}>
                Tab
            </KeyButton>
            <KeyButton buttonKey={buttonKey}>Q</KeyButton>
            <KeyButton buttonKey={buttonKey}>W</KeyButton>
            <KeyButton buttonKey={buttonKey}>E</KeyButton>
            <KeyButton buttonKey={buttonKey}>R</KeyButton>
            <KeyButton buttonKey={buttonKey}>T</KeyButton>
            <KeyButton buttonKey={buttonKey}>Y</KeyButton>
            <KeyButton buttonKey={buttonKey}>U</KeyButton>
            <KeyButton buttonKey={buttonKey}>I</KeyButton>
            <KeyButton buttonKey={buttonKey}>O</KeyButton>
            <KeyButton buttonKey={buttonKey}>P</KeyButton>
            <KeyButton buttonKey={buttonKey}>[</KeyButton>
            <KeyButton buttonKey={buttonKey}>]</KeyButton>
            <KeyButton buttonKey={buttonKey} col={3}>
                \
            </KeyButton>

            <KeyButton buttonKey={buttonKey} col={4}>
                CapsLock
            </KeyButton>
            <KeyButton buttonKey={buttonKey}>A</KeyButton>
            <KeyButton buttonKey={buttonKey}>S</KeyButton>
            <KeyButton buttonKey={buttonKey}>D</KeyButton>
            <KeyButton buttonKey={buttonKey}>F</KeyButton>
            <KeyButton buttonKey={buttonKey}>G</KeyButton>
            <KeyButton buttonKey={buttonKey}>H</KeyButton>
            <KeyButton buttonKey={buttonKey}>J</KeyButton>
            <KeyButton buttonKey={buttonKey}>K</KeyButton>
            <KeyButton buttonKey={buttonKey}>L</KeyButton>
            <KeyButton buttonKey={buttonKey}>:</KeyButton>
            <KeyButton buttonKey={buttonKey}>"</KeyButton>
            <KeyButton buttonKey={buttonKey} col={4}>
                Enter
            </KeyButton>

            <KeyButton buttonKey={buttonKey} col={5}>
                Shift
            </KeyButton>
            <KeyButton buttonKey={buttonKey}>Z</KeyButton>
            <KeyButton buttonKey={buttonKey}>X</KeyButton>
            <KeyButton buttonKey={buttonKey}>C</KeyButton>
            <KeyButton buttonKey={buttonKey}>V</KeyButton>
            <KeyButton buttonKey={buttonKey}>B</KeyButton>
            <KeyButton buttonKey={buttonKey}>N</KeyButton>
            <KeyButton buttonKey={buttonKey}>M</KeyButton>
            <KeyButton buttonKey={buttonKey}>,</KeyButton>
            <KeyButton buttonKey={buttonKey}>.</KeyButton>
            <KeyButton buttonKey={buttonKey}>/</KeyButton>
            <KeyButton buttonKey={buttonKey} col={5}>
                Shift
            </KeyButton>

            <KeyButton buttonKey={buttonKey} col={3}>
                Ctrl
            </KeyButton>
            <KeyButton buttonKey={buttonKey}>Fn</KeyButton>
            <KeyButton buttonKey={buttonKey}>Alt</KeyButton>
            <KeyButton buttonKey={buttonKey} col={15}>
                {' '}
            </KeyButton>
            <KeyButton buttonKey={buttonKey}>Alt</KeyButton>
            <KeyButton buttonKey={buttonKey} col={3}>
                Win
            </KeyButton>
            <KeyButton buttonKey={buttonKey} col={3}>
                Ctrl
            </KeyButton>
        </div>
    );
};

export default Keyboard;
