import React, {useState, useEffect, useRef} from "react";
import Cell from "./Cell";

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function Board() {
    const [gameState, setGameState] = useState({
        board: Array(9).fill(""),
        xTurn: true,
        winner: ""
    });

    const handleClick = (index) => {
        if (gameState.winner !== "") {
            return;
        }

        setGameState(prevGame => {
            const newBoard = [...prevGame.board];
            newBoard[index] = prevGame.xTurn ? "X" : "O";
            const winner = calculateWinner(newBoard);

            const newTurn = !prevGame.xTurn;
            return {
                board: newBoard,
                xTurn: newTurn,
                winner: winner !== null ? winner : ""
            };
        });
    }

    return (
        <div>
            <div className="column">
                <Cell cellValue={gameState.board[0]} index="0" handleClick={handleClick}/>
                <Cell cellValue={gameState.board[1]} index="1" handleClick={handleClick}/>
                <Cell cellValue={gameState.board[2]} index="2" handleClick={handleClick}/>
            </div>
            <div className="column">
                <Cell cellValue={gameState.board[3]} index="3" handleClick={handleClick}/>
                <Cell cellValue={gameState.board[4]} index="4" handleClick={handleClick}/>
                <Cell cellValue={gameState.board[5]} index="5" handleClick={handleClick}/>
            </div>
            <div className="column">
                <Cell cellValue={gameState.board[6]} index="6" handleClick={handleClick}/>
                <Cell cellValue={gameState.board[7]} index="7" handleClick={handleClick}/>
                <Cell cellValue={gameState.board[8]} index="8" handleClick={handleClick}/>
            </div>
        </div>
    )
}

export default Board;