const dublicateFunc = (arr, n) => {
    return [...arr.slice(0, n / 2), ...arr.slice(0, n / 2)]
}

export default dublicateFunc;