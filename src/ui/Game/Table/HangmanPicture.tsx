import { Fragment } from "react";

const hangmanPieces = [
    <Fragment key={1}><path d="M1,11 h8" /></Fragment>,
    <Fragment key={2}><path d="M9,11 v-10" /></Fragment>,
    <Fragment key={3}><path d="M9,1 h-4" /></Fragment>,
    <Fragment key={4}><path d="M5,1 v2" /></Fragment>,
    <Fragment key={5}><circle cx="5" cy="4" r="1" /></Fragment>,
    <Fragment key={6}><path d="M5,5 v3" /></Fragment>,
    <Fragment key={7}><path d="M5,5 l-2,2" /></Fragment>,
    <Fragment key={8}><path d="M5,5 l2,2" /></Fragment>,
    <Fragment key={9}><path d="M5,8 l-2,2" /></Fragment>,
    <Fragment key={10}> <path d="M5,8 l2,2" /></Fragment>,
]

const hangmanImage = (
    <svg viewBox="0 0 10 12">
        {hangmanPieces.map(piece => piece)}
    </svg>
);

export { hangmanPieces, hangmanImage };
