export const getStatistic = (words, printedWords) => {
    const correctWords = printedWords.reduce((acc, word, i) => {
        return word === words[i] ? acc + 1 : acc;
    }, 0);
    const wrongWords = printedWords.reduce((acc, word, i) => {
        return word !== words[i] ? acc + 1 : acc;
    }, 0);
    const accurancy =
        Math.round((correctWords / printedWords.length) * 10000) / 100;
    const AllLetters = printedWords.reduce((acc, word, i) => {
        return word === words[i] ? acc + word.length : acc;
    }, 0);
    const wpm = AllLetters / 5 || 0;
    return { correctWords, wrongWords, accurancy, wpm };
};
