const numberCardsFunc = (diff) => {
    if (diff === 'medium') {
        return 16;
    }
    else if (diff === 'hard') {
        return 20;
    }
    else {
        return 12;
    }
}

export default numberCardsFunc;