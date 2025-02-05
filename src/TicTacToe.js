import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Board, X, O, Player1, Player2 } from "./components/icons";
import ConfettiExplosion from "react-confetti-explosion";

function TicTacToe() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [history, setHistory] = useState([]);
  const [step, setStep] = useState(0);
  const [future, setFuture] = useState([]);

  // Initialize state
  const currentBoard = Array.isArray(history[step])
    ? history[step]
    : Array(9).fill(null);
  const currentPlayer = step % 2 === 0 ? "X" : "O";
  const urlState = searchParams.get("state");
  const savedState = localStorage.getItem("ticTacToeState");

  function generateBoardHistory(input) {
    let history = []; // Array to store board history
    let board = Array(9).fill(null); // Initial board state (single row)

    history.push([...board]); // Store initial state

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

  const jumpTo = (move) => {
    setHistory(history.slice(0, move + 1));
    setFuture(history.slice(move + 1));
    setStep(move);
  };
  const [isExploding, setIsExploding] = useState(true);

  useEffect(() => {
    
    if (winner) {
      setIsExploding(true);
      setTimeout(() => setIsExploding(false), 3000); // Stop after 3 seconds
    }
  }, [winner]);

  return (
    <div className="text-center bg-[url(./asset/Cover.svg)] bg-cover overflow-y-scroll no-scrollbar h-screen">
      <div>
        <div className="flex flex-col sm:flex-row justify-evenly px-4 w-full h-screen">
          <div className="flex flex-col w-full sm:w-2/3  sm:px-40 justify-center gap-5">
            <h1 className="text-3xl font-bold">Tic Tac Toe</h1>
            <div className="flex g justify-center gap-2">
              {currentPlayer === "X" ? (
                <div className="flex flex-col">
                  <Player1 className="w-16 h-16" />
                  <p className="font-bold">Player 1</p>
                </div>
              ) : (
                <div className="flex flex-col">
                  <Player2 className="w-16 h-16" />
                  <p className="font-bold">Player 2</p>
                </div>
              )}
            </div>

            <div className="board grid grid-cols-3 w-full sm:w-2/3 mx-auto gap-2 rounded-3xl border-b-[1rem] border-r-8 border-l-[1rem] border-t-8 border-black p-5 sm:p-8 bg-white">
              {currentBoard.map((cell, index) => (
                <div
                  key={index}
                  className="w-full h-auto mx-auto cursor-pointer hover:scale-105 transition duration-300 "
                  onClick={() => handleClick(index)}
                >
                  {cell ? (
                    cell === "X" ? (
                      <X className="w-full h-auto" />
                    ) : (
                      <O className="w-full h-auto" />
                    )
                  ) : (
                    <Board className="w-full h-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-col py-5 gap-5 ">
            <div className="flex gap-2">
              <button
                className="board mx-auto gap-2 w-24 rounded-xl border-b-4 border-r-4 border-l-4 border-t-4 border-black p-2 bg-primary_blue font-bold cursor-pointer hover:bg-primary_yellow"
                onClick={undoMove}
                disabled={history?.length === 1}
              >
                Undo
              </button>
              <button
                className="board mx-auto gap-2 w-24 rounded-xl border-b-4 border-r-4 border-l-4 border-t-4 border-black p-2 bg-primary_blue font-bold cursor-pointer hover:bg-primary_yellow"
                onClick={redoMove}
                disabled={future?.length === 0}
              >
                Redo
              </button>
              <button
                className="board mx-auto gap-2 w-24 rounded-xl border-b-4 border-r-4 border-l-4 border-t-4 border-black p-2 bg-primary_blue font-bold cursor-pointer hover:bg-primary_yellow"
                onClick={resetGame}
              >
                Reset
              </button>
            </div>
            <h3 className="bg-white w-auto h-12 rounded-xl border-b-4 border-r-4 border-l-4 border-t-4 border-black p-2 font-bold">
              Move History
            </h3>
            <ol className="flex flex-col gap-2">
              {history.map((_, move) => (
                <li key={move}>
                  <button
                    className="board mx-auto gap-2 w-full rounded-xl border-b-4 border-r-4 border-l-4 border-t-4 border-black p-2 bg-primary_yellow font-bold cursor-pointer hover:bg-primary_blue"
                    onClick={() => jumpTo(move)}
                  >
                    {move === 0 ? "Start" : `Step #${move}`}
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      {winner && (
        <div className="absolute flex w-full h-screen bg-black bg-opacity-80 items-center justify-center  top-0 z-10">
          <div className="w-full sm:w-2/6 h-2/6 bg-white rounded-2xl text-center flex flex-col items-center justify-center gap-10">
            <p className="font-bold text-3xl">
              {isExploding && (
                  <ConfettiExplosion
                     force= "0.6"
                     duration= "5000"
                     particleCount= "200"
                     floorHeight= "1600"
                     floorWidth= "1600"
                  />
              )}
              {winner === "Draw"
                ? "It's a draw!"
                : `Player ${winner === "X" ? "1" : "2"} wins!`}
            </p>
            <button
              className="board mx-auto gap-2 w-auto  rounded-xl border-b-4 border-r-4 border-l-4 border-t-4 border-black px-10 py-3 bg-primary_blue font-bold text-xl cursor-pointer hover:bg-primary_yellow"
              onClick={resetGame}
            >
              Reset Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TicTacToe;
