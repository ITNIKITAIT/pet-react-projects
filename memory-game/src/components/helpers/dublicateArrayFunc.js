const dublicateFunc = (arr, n) => {
    console.log([...arr.slice(0, n / 2), ...arr.slice(0, n / 2)])
    return [...arr.slice(0, n / 2), ...arr.slice(0, n / 2)]
}

export default dublicateFunc;