import { useSearchParams } from "react-router-dom";
import React, { useState ,useEffect } from "react";
import { Board, X, O } from "./components/icons/index";

function TicTacToe() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [history, setHistory] = useState([{ board: Array(9).fill(null), player: "X" }]);
  const [step, setStep] = useState(0);
  const currentBoard = history[step].board;
  const currentPlayer = history[step].player;
  
  useEffect(() => {
    const urlState = searchParams.get("state");
    if (urlState) {
      try {
        const { history: savedHistory, step: savedStep } = JSON.parse(
          decodeURIComponent(urlState)
        );
        setHistory(savedHistory);
        setStep(savedStep);
      } catch (error) {
        console.error("Invalid query state");
      }
    } else {
      const localState = localStorage.getItem("ticTacToeState");
      if (localState) {
        const { history: savedHistory, step: savedStep } = JSON.parse(localState);
        setHistory(savedHistory);
        setStep(savedStep);
      }
    }
  }, []);
  
  useEffect(() => {
    const gameState = JSON.stringify({ history, step });
    localStorage.setItem("ticTacToeState", gameState);
    setSearchParams({ state: encodeURIComponent(gameState) });
  }, [history, step]);


  const checkWinner = (board) => {
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
    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return board.includes(null) ? null : "Draw";
  };

  const winner = checkWinner(currentBoard);

  const handleClick = (index) => {
    if (currentBoard[index] || winner) return;
    const newBoard = currentBoard.slice();
    newBoard[index] = currentPlayer;

    const newHistory = history.slice(0, step + 1).concat({
      board: newBoard,
      player: currentPlayer === "X" ? "O" : "X",
    });

    setHistory(newHistory);
    setStep(newHistory.length - 1);
  };
  
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
        <p>{winner ? (winner === "Draw" ? "It's a draw!" : `Winner: ${winner}`) : `Next Player: ${currentPlayer}`}</p>
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
