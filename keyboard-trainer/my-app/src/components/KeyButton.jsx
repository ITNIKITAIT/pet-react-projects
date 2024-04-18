const KeyButton = ({ children, col, buttonKey }) => {
    return (
        <div
            style={col && { gridColumn: `span ${col}` }}
            className={`bg-keyButton text-primaryColor font-semibold text-[16px] h-12 col-span-2 flex justify-center items-center cursor-pointer hover:bg-hoverKey ${
                (buttonKey === children ||
                    buttonKey === children.toLowerCase()) &&
                'animate-[pulseK_200ms_ease-in-out]'
            }`}>
            {children}
        </div>
    );
};

export default KeyButton;
