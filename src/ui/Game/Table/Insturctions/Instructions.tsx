import { hangmanImage } from "../HangmanPicture";

const Instructions = (props: {
    onAccept: () => void
}) => {

    const { onAccept } = props;

    return (
        <>
            {hangmanImage}
            <div
                className="bold"
            >
                Game Instructions
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate odio ut enim blandit volutpat maecenas.
            </p>
            <p>
                Feugiat sed lectus vestibulum mattis ullamcorper velit. Suspendisse potenti nullam ac tortor vitae.
            </p>
            <button
                className='btn btn-dark'
                onClick={() => {
                    onAccept();
                }}
            >
                GOT IT!
            </button>
        </>
    )
}

export default Instructions;
