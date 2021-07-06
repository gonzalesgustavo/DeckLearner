const handleDotText = (word: string, max: number): string => {
    let replacedWord: string;
    if(word.length > max) {
        replacedWord = word.substr(0, max) + '...';
    } else {
        replacedWord = word;
    }
    return replacedWord;
}

export default handleDotText;