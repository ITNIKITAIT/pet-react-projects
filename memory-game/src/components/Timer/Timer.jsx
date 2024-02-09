import { useEffect, useState } from 'react';

const Timer = ({modal}) => {
    const [time, setTime] = useState(0)
    useEffect(() => {
        let timer;

        if (!modal) {
            timer = setInterval(() => setTime(prev => prev + 1), 1000);
        }
        else {
            clearInterval(timer)
        }
        return () => clearInterval(timer)
    }, [modal])
    const second = `${time % 60}`.padStart(2, '0')
    const minute = `${Math.floor(time / 60)}`.padStart(2, '0')
    return ( 
        <p>{minute}:{second}</p>
     );
}
 
export default Timer;