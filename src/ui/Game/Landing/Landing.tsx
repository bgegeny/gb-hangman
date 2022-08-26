import { useState } from 'react';
import '../../styles/Landing.scss'
import { getWordsLength } from '../../../api/words-api';
import _ from 'underscore';


const Landing = (props: {
    startGame: (wordLength: number) => void,
}) => {
    const { startGame } = props;
    const  [ wordsLengthArray ] = useState(getWordsLength());
    const [ activeWordLengthIndex, setActiveWordIndex ] = useState(0);

    return (
        <div
            className="general center"
        >
            <header
                className="bold"
            >
                The Hangman
            </header>
            <div>
                Let's play <span className="bold">Hangman</span>
            </div>
            <div>
                How many letters do you want in your word?
            </div>
            <div
                className="grid-container"
            >
                {
                    wordsLengthArray.map((wordLength, index) =>
                        <div
                            key={index}
                            className={`grid-item bold ${index === activeWordLengthIndex ? 'active' : 'inactive'}`}
                            onClick={() => {
                                setActiveWordIndex(index);
                            }}
                        >
                            {wordLength}
                        </div>
                    )
                }
            </div>
            <div
                className={`random-choice-btn bold ${-1 === activeWordLengthIndex ? 'active' : 'inactive'}`}
                onClick={() => {
                    setActiveWordIndex(-1);
                }}
            >
               Random
            </div>
            <button
                className="btn btn-dark"
                onClick={() => {
                    const param = activeWordLengthIndex === -1 ? _.sample(wordsLengthArray) : wordsLengthArray[activeWordLengthIndex];
                    if(param) {
                        startGame(param);
                    }
                }}
            >
                Let's Play
            </button>
        </div>
    );
}

export default Landing;
