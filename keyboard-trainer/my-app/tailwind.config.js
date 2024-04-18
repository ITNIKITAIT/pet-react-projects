/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                animation: {
                    pulseK: '1s ease-in-out infinite',
                },
                pulseK: {
                    '0%, 100%': {
                        transform: 'scale(1)',
                        color: '#fff',
                        backgroundColor: 'black',
                    },
                    '50%': {
                        transform: 'scale(1.05)',
                        color: '#fff',
                        backgroundColor: 'black',
                    },
                },
            },
            colors: {
                primaryColor: 'var(--primary-color)',
                timer: 'var(--timer)',
            },
            backgroundColor: {
                primaryColor: 'var(--primary-bg-color)',
                currWord: 'var(--curr-word)',
                secondColor: 'var(--second-bg)',
                keyButton: 'var(--reverse-bg)',
                hoverKey: 'var(--hover-key)',
            },
            borderColor: {
                primaryColor: 'var(--primary-border-color)',
            },
        },
    },
    plugins: [],
};
