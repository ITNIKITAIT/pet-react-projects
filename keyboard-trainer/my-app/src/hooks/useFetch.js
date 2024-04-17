import { useState } from 'react';

export const useFetch = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [words, setWords] = useState([]);
    const doRequest = async () => {
        setIsLoading(true);
        await fetch('https://random-word-api.herokuapp.com/word?number=150')
            .then((res) => res.json())
            .then((data) => setWords(data))
            .catch((err) => console.log(err));
        setIsLoading(false);
    };
    return { words, doRequest, isLoading };
};
