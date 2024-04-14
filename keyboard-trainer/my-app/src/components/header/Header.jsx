import ButtonTheme from '../ButtonTheme';

const Header = () => {
    return (
        <header className="py-2 border-b-2">
            <div className="flex justify-between items-center max-w-[1200px] mx-auto">
                <h2 className="text-[30px] bg-gradient-to-r from-violet-400 to-violet-600 text-transparent bg-clip-text font-semibold">
                    KeyboardTrainer
                </h2>
                <div className="flex gap-5 items-center">
                    <input
                        type="color"
                        value="#8C27F0"
                        className="w-[90px] h-[35px] cursor-pointer bg-transparent"></input>
                    <ButtonTheme />
                </div>
            </div>
        </header>
    );
};

export default Header;
