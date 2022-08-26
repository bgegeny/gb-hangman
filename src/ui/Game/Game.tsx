import '../styles/common.scss'
import Table from './Table/Table';
import Landing from './Landing/Landing';
import { getWord } from '../../api/words-api';
import useLocalStorage from "../../api/custom-hooks";

const Game = () => {

    const [ solution, setSolution ] = useLocalStorage('solution', '');

    const reset = () => {
        setSolution('');
    }

    return (
        <>
            <div
                className="main"
            >
                {
                    solution.length === 0 ? (
                        <Landing
                            startGame={(wordLength => {
                                setSolution(getWord(wordLength).toUpperCase());
                            })}
                        />
                    ) : (
                        <Table
                            solution={solution}
                            handleNewGame={() => {
                                reset();
                            }}
                        />
                    )
                }
            </div>
        </>
    );
}

export default Game;
