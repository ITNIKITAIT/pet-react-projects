import { useRef, useState } from 'react';

export const useTimer = (defaultValue) => {
    const [time, setTime] = useState(defaultValue);
    const interval = useRef();

    const start = () => {
        interval.current = setInterval(() => {
            console.log('tick');
            setTime((prev) => {
                if (prev === 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const clear = () => {
        clearInterval(interval.current);
    };

    return { time, setTime, start, clear };
};
