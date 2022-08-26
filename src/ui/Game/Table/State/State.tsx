const State = (props: {
    gameEnded: boolean,
    numberOfTries: number,
    solution: string,
}) => {
    const { gameEnded, numberOfTries, solution } = props;
    if(gameEnded && numberOfTries) {
        return (
            <>
                <div
                    className="text-success"
                >
                    You've Won! :)
                </div>
            </>
        );
    } else if (gameEnded && !numberOfTries) {
        return (
            <>
                <div
                    className="text-danger"
                >
                    You've Lost! :(
                </div>
                <div>Solution was: {solution}</div>
            </>
        );
    }

    return <div>It's a {solution.length} letter word</div>
}

export  default State;
