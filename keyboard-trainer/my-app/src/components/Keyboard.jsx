import KeyButton from './KeyButton';

const Keyboard = () => {
    return (
        <div className="keyboard mx-auto mt-10 w-fit bg-gray-200 p-1 gap-[6px]">
            <KeyButton>`</KeyButton>
            <KeyButton>1</KeyButton>
            <KeyButton>2</KeyButton>
            <KeyButton>3</KeyButton>
            <KeyButton>4</KeyButton>
            <KeyButton>5</KeyButton>
            <KeyButton>6</KeyButton>
            <KeyButton>7</KeyButton>
            <KeyButton>8</KeyButton>
            <KeyButton>9</KeyButton>
            <KeyButton>0</KeyButton>
            <KeyButton>-</KeyButton>
            <KeyButton>=</KeyButton>
            <KeyButton col={4}>Backspace</KeyButton>

            <KeyButton col={3}>Tab</KeyButton>
            <KeyButton>Q</KeyButton>
            <KeyButton>W</KeyButton>
            <KeyButton>E</KeyButton>
            <KeyButton>R</KeyButton>
            <KeyButton>T</KeyButton>
            <KeyButton>Y</KeyButton>
            <KeyButton>U</KeyButton>
            <KeyButton>I</KeyButton>
            <KeyButton>O</KeyButton>
            <KeyButton>P</KeyButton>
            <KeyButton>[</KeyButton>
            <KeyButton>]</KeyButton>
            <KeyButton col={3}>\</KeyButton>

            <KeyButton col={4}>CapsLock</KeyButton>
            <KeyButton>A</KeyButton>
            <KeyButton>S</KeyButton>
            <KeyButton>D</KeyButton>
            <KeyButton>F</KeyButton>
            <KeyButton>G</KeyButton>
            <KeyButton>H</KeyButton>
            <KeyButton>J</KeyButton>
            <KeyButton>K</KeyButton>
            <KeyButton>L</KeyButton>
            <KeyButton>:</KeyButton>
            <KeyButton>"</KeyButton>
            <KeyButton col={4}>Enter</KeyButton>

            <KeyButton col={5}>Shift</KeyButton>
            <KeyButton>Z</KeyButton>
            <KeyButton>X</KeyButton>
            <KeyButton>C</KeyButton>
            <KeyButton>V</KeyButton>
            <KeyButton>B</KeyButton>
            <KeyButton>N</KeyButton>
            <KeyButton>M</KeyButton>
            <KeyButton>,</KeyButton>
            <KeyButton>.</KeyButton>
            <KeyButton>/</KeyButton>
            <KeyButton col={5}>Shift</KeyButton>

            <KeyButton col={3}>Ctrl</KeyButton>
            <KeyButton>Fn</KeyButton>
            <KeyButton>Alt</KeyButton>
            <KeyButton col={15}>Space</KeyButton>
            <KeyButton>Alt</KeyButton>
            <KeyButton col={3}>Win</KeyButton>
            <KeyButton col={3}>Ctrl</KeyButton>
        </div>
    );
};

export default Keyboard;
