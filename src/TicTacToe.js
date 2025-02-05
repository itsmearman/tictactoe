import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function TicTacToe() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [history, setHistory] = useState([]);
  const [step, setStep] = useState(0);
  const [future, setFuture] = useState([]);

  // Initialize state
  const currentBoard = history[step] || Array(9).fill(null);
  const currentPlayer = step % 2 === 0 ? "X" : "O";
  const urlState = searchParams.get("state");
  const savedState = localStorage.getItem("ticTacToeState");

  function generateBoardHistory(input) {
    let history = []; // Array to store board history
    let board = Array(9).fill(null); // Initial board state (single row)

    history.push([...board]); // Store initial state

    // Extract moves like "0X", "4O" from input
    let moves = input.match(/[0-9][XO]/g) || [];

    moves.forEach((move) => {
      let index = parseInt(move[0]); // Extract position (0-8)
      let value = move[1]; // Extract "X" or "O"

      if (index >= 0 && index < 9 && board[index] === null) {
        board[index] = value; // Update the board state
        history.push([...board]); // Store updated state
      }
    });

    return history;
  }
  // Init localStorage
  useEffect(() => {
    if (urlState) {
      try {
        const historyParam = generateBoardHistory(urlState);
        setHistory(historyParam);
        setStep(historyParam.length - 1);
      } catch (error) {
        console.error("Invalid URL state:", error);
      }
    } else if (savedState) {
      try {
        const { history: savedHistory, step: savedStep } =
          JSON.parse(savedState);
        if (Array.isArray(savedHistory) && savedHistory.length > 0) {
          setHistory(savedHistory);
          setStep(savedStep);
        }
      } catch (error) {
        console.error("Error parsing localStorage:", error);
      }
    } else {
      // Init history
      setHistory([Array(9).fill(null)]);
      setStep(0);
    }
  }, [urlState]);

  // Change Init
  useEffect(() => {
    if (!history || history.length === 0 || !history[step]) return;

    const moves = currentBoard
      .map((cell, index) => (cell ? `${index}${cell}` : ""))
      .join("");

    // Save in URL
    setSearchParams(moves ? { state: moves } : {});

    // Save in localStorage
    localStorage.setItem("ticTacToeState", JSON.stringify({ history, step }));
  }, [history, step]);

  // Winner check
  const checkWinner = (board) => {
    if (!board || board.length !== 9) return null; // بررسی مقدار board قبل از پردازش

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
    if (!currentBoard || currentBoard[index] || winner) return;

    const newBoard = [...currentBoard];
    newBoard[index] = currentPlayer;

    setHistory([...history.slice(0, step + 1), newBoard]);
    setStep(step + 1);
    setFuture([]); //future
  };

  // Undo
  const undoMove = () => {
    if (history.length > 1) {
      // Keep at least the initial empty board
      const lastState = history[history.length - 1];
      setHistory(history.slice(0, -1)); // Remove last state from history
      setFuture([lastState, ...future]);
      if (step > 0) setStep(step - 1); // Add to the future stack
    }
    console.log(history, future);
  };

  // Redo: Moves last state from future to history
  const redoMove = () => {
    if (future.length > 0) {
      setHistory([...history.slice(0, step + 1), future[0]]); //Add future
      setStep(step + 1);
      setFuture(future.slice(1));
    }
    if (step > 0) setStep(step + 1);
  };

  // Reset
  const resetGame = () => {
    setHistory([Array(9).fill(null)]);
    setStep(0);
    setFuture([]);
    setSearchParams({});
    localStorage.removeItem("ticTacToeState");
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 w-64 mx-auto gap-2 mt-4">
        {currentBoard.map((cell, index) => (
          <button
            key={index}
            className="border p-6 text-2xl font-bold"
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {winner ? (
          <p className="text-xl font-semibold">
            {winner === "Draw" ? "It's a draw!" : `Winner: ${winner}`}
          </p>
        ) : (
          <p>Next Player: {currentPlayer}</p>
        )}
      </div>
      <div className="mt-4 space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={undoMove}
          disabled={history?.length === 1}
        >
          Undo
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={redoMove}
          disabled={future?.length === 0}
        >
          Redo
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={resetGame}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default TicTacToe;
