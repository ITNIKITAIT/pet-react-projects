import { useEffect, useState } from "react"

const getStorageValue = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => getStorageValue(key, defaultValue))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, setValue, key])
    
    return [value, setValue]
}