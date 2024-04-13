const KeyButton = ({ children, col }) => {
    return (
        <div
            style={col && { gridColumn: `span ${col}` }}
            className="bg-white text-black font-semibold text-[16px] h-12 col-span-2 flex justify-center items-center cursor-pointer hover:bg-slate-100">
            {children}
        </div>
    );
};

export default KeyButton;
