import React, { useState } from "react";
import Square from "./Squares";

const Board = () => {

    const [squareIndex, setSquareIndex] = useState(Array(9).fill(null));
    const [isXTrue, setIsXTrue] = useState(true);

    function passIndex(index) {
        if (squareIndex[index] === null) {
            const copySquareIndexes = squareIndex;
            copySquareIndexes[index] = isXTrue ? "x" : "o";
            setSquareIndex(copySquareIndexes);
            setIsXTrue(!isXTrue);
        }
    }

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];


        for (const eachLogic of winnerLogic) {
            const [a, b, c] = eachLogic;
            if (squareIndex[a] !== null && squareIndex[a] === squareIndex[b] && squareIndex[b] === squareIndex[c]) {
                console.log(squareIndex[a], " is won");
            }
        }
    }

    const winner = checkWinner();


    return (
        <div className="board-container">
            <div className="board-row">
                <Square onclick={() => passIndex(0)} value={squareIndex[0]} />
                <Square onclick={() => passIndex(1)} value={squareIndex[1]} />
                <Square onclick={() => passIndex(2)} value={squareIndex[2]} />
            </div>
            <div className="board-row">
                <Square onclick={() => passIndex(3)} value={squareIndex[3]} />
                <Square onclick={() => passIndex(4)} value={squareIndex[4]} />
                <Square onclick={() => passIndex(5)} value={squareIndex[5]} />
            </div>
            <div className="board-row">
                <Square onclick={() => passIndex(6)} value={squareIndex[6]} />
                <Square onclick={() => passIndex(7)} value={squareIndex[7]} />
                <Square onclick={() => passIndex(8)} value={squareIndex[8]} />
            </div>
        </div>
    )
}

export default Board