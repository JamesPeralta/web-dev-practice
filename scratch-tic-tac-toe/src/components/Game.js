import React from "react";
import Board from "./Board";

function Game() {
    return (
        <div>
            <Board/>
            <h4>Winner: </h4>
            <ol></ol>
        </div>
    );
}

export default Game;