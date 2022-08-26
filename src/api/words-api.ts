import words from '../sources/hangman_words';
import _ from 'underscore';

export const getWord = (wordLength: number) => {
    const result: Array<string> = [];

    words.forEach(word => {
        if(word.length === wordLength) result.push(word);
    });

    return _.sample(result) || 'ERROR';
}

export const getWordsLength = () => {
    const result: Array<number> = [];
    words.forEach(word => {
        if(!result.includes(word.length)) {
            result.push(word.length);
        }
    })
    return result;
}
