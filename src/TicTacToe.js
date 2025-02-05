import React, { useState } from "react";
import { Board, X, O } from "./components/icons/index";

function TicTacToe() {
  const [history, setHistory] = useState([{ board: Array(9).fill(null), player: "X" }]);

  const [step, setStep] = useState(0);

  const handleClick = (index) => {
    if (currentBoard[index]) return;
    const newBoard = currentBoard.slice();
    newBoard[index] = currentPlayer;

    const newHistory = history.slice(0, step + 1).concat({
      board: newBoard,
      player: currentPlayer === "X" ? "O" : "X",
    });

    setHistory(newHistory);
    setStep(newHistory.length - 1);
  };
  const currentBoard = history[step].board;
  const currentPlayer = history[step].player;
  
  const jumpTo = (move) => setStep(move);
  
  const resetGame = () => {
    setHistory([{ board: Array(9).fill(null), player: "X" }]);
    setStep(0);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">
        Tic Tac Toe <span className="text-sm">armani</span>
      </h1>
      <div className="board grid grid-cols-3 w-[90%] sm:w-1/3 mx-auto gap-2 rounded-xl border-b-[1rem] border-r-8 border-l-[1rem] border-t-8 border-black">
        {currentBoard.map((cell, index) => (
          <button
            className="border border-red-900 rounded-md p-3 h-24"
            key={index}
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>
      <div className="flex flex-col">
        <p>winner : </p>
        <button className="text-left w-24" onClick={() => step > 0 && setStep(step - 1)}>Undo</button>
        <button className="text-left w-24" onClick={() => step < history.length - 1 && setStep(step + 1)}>Redo</button>
        <button className="text-left w-24" onClick={resetGame}>Reset</button>
        <h3>Move History</h3>
        <ol>
        {history.map((_, move) => (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>
              {move === 0 ? "Start" : `Move ${move}`}
            </button>
          </li>
        ))}
      </ol>
      </div>
    </div>
  );
}

export default TicTacToe;
