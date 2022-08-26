import { useEffect } from 'react';
import Instructions from './Insturctions/Instructions';
import '../../styles/Table.scss'
import _ from 'underscore'
import State from './State/State';
import { hangmanPieces } from './HangmanPicture';
import useLocalStorage from '../../../api/custom-hooks';
import Letters from './Letters/Letters';
import { numberOfTries } from '../../../sources/constants';

const Table = (props: { solution: string, handleNewGame: () => void }) => {

    const { solution, handleNewGame } = props;

    const  [ isInstructionsOn, setInstructionsOn ] = useLocalStorage('isInstructionsOn', false);
    const  [ triesLeft, setTriesLeft ] = useLocalStorage('triesLeft', numberOfTries);
    const  [ currentGuess, setCurrentGuess ] = useLocalStorage('currentGuess', new Array(solution.length).fill(null));
    const [ isGameOver, setIsGameOver ] = useLocalStorage('isGameOver', false);

    useEffect(() => {
        if(currentGuess.length !== solution.length) setCurrentGuess(new Array(solution.length).fill(null));
    }, [setCurrentGuess, currentGuess.length, solution.length]);

    useEffect(() => {
        if(!isGameOver) {
            const solutionArray = solution.split('');

            const detectKeyDown = (e: KeyboardEvent) => {
                let foundCharacter = false;

                if (e.key.match(/^[a-zA-Z]{1}$/)) {
                    let newArray: Array<string> = [...currentGuess];
                    solutionArray.forEach((char, i) => {
                        if(e.key.toUpperCase() === char) {
                            newArray[i] = solutionArray[i];
                            foundCharacter = true;
                        }
                        setCurrentGuess(newArray);
                    });

                    if(!foundCharacter) {
                        setTriesLeft(triesLeft-1);
                    }
                }
            };
            document.addEventListener('keydown', detectKeyDown);

            if(triesLeft === 0 || _.isEqual(currentGuess, solutionArray)) {
                setIsGameOver(true);
            }

            return () => {
                document.removeEventListener('keydown', detectKeyDown);
            }
        }
    }, [isGameOver, currentGuess, triesLeft, solution, setIsGameOver, setCurrentGuess, setTriesLeft]);

    const picture = [];
    for (let i = 0; i < numberOfTries-triesLeft; i++) {
        picture.push(hangmanPieces[i]);
    }

    return (
        <>
            <div
                className="general center"
            >
                <header
                    className="bold"
                >
                    The Hangman
                </header>
                {
                    isInstructionsOn ?
                        (
                            <Instructions
                                onAccept={() => {
                                    setInstructionsOn((val: boolean) => !val);
                                }}
                            />
                        ) : (
                                <>
                                    <button
                                        className="btn btn-light instructions"
                                        onClick={() => {
                                            setInstructionsOn(true);
                                        }}
                                    >
                                        {"INSTRUCTIONS ->"}
                                    </button>
                                    <svg
                                        viewBox="0 0 10 12"
                                    >
                                        {picture}
                                    </svg>
                                    <State gameEnded={isGameOver} numberOfTries={triesLeft} solution={solution}/>
                                    <div
                                        className="word"
                                    >
                                        <Letters
                                            currentGuess={currentGuess}
                                        />
                                    </div>
                                    <div
                                        className='btn-container'
                                    >
                                        <button
                                            className="btn btn-light"
                                            disabled={isGameOver}
                                            onClick={() => {
                                                setTriesLeft(0);
                                            }}
                                        >
                                            END GAME
                                        </button>
                                        <button
                                            className="btn btn-dark"
                                            disabled={!isGameOver}
                                            onClick={() => {
                                                setInstructionsOn(false);
                                                setTriesLeft(numberOfTries);
                                                setCurrentGuess(new Array(solution.length).fill(null));
                                                setIsGameOver(false);
                                                handleNewGame();
                                            }}
                                        >
                                            START GAME
                                        </button>
                                    </div>
                                </>
                        )
                }
            </div>
        </>
    );
}

export default Table;
