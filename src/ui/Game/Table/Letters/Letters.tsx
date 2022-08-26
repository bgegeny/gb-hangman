const Letters = (props: {currentGuess: Array<string>}) => {

    const { currentGuess } = props;

    return (
        <>
            {
                currentGuess.map((char, i) =>(
                    <div
                        key={i}
                        className='letter'
                    >
                        {char}
                    </div>
                ))
            }
        </>

    );
}

export default Letters;
