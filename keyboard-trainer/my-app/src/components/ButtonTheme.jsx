import { useState } from 'react';

const ButtonTheme = () => {
    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
        document.body.classList.toggle('dark');
    };

    return (
        <button onClick={changeTheme} className="btn-theme">
            <div
                className={`flex justify-center items-center bg-white rounded-full w-fit p-1 ${
                    theme === 'dark' ? 'ml-auto' : ''
                }`}>
                {theme === 'light' ? (
                    <svg
                        className="fill-[#D4EB08] light-svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="#D4EB08">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line
                            x1="18.36"
                            y1="18.36"
                            x2="19.78"
                            y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                ) : (
                    <svg
                        className="dark-svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="black"
                        stroke="black">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                )}
            </div>
        </button>
    );
};

export default ButtonTheme;
