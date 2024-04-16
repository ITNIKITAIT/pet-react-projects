import { useRef, useState } from 'react';

export const useTimer = (defaultValue) => {
    const [time, setTime] = useState(defaultValue);
    const interval = useRef();

    const start = () => {
        interval.current = setInterval(() => {
            setTime((prev) => {
                if (prev === 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const stop = () => {
        clearInterval(interval.current);
        setTime(defaultValue);
    };

    return { time, start, stop };
};
