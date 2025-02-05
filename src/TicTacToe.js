import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import PlayerInfo from "./components/PlayerInfo";
import MoveHistory from "./components/MoveHistory";
import GameControls from "./components/GameControls";
import WinnerModal from "./components/WinnerModal";
import { generateBoardHistory, checkWinner } from "./utils/gameLogic";

function TicTacToe() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [history, setHistory] = useState([]);
  const [step, setStep] = useState(0);
  const [future, setFuture] = useState([]);
  const [isExploding, setIsExploding] = useState(false);

  const currentBoard = Array.isArray(history[step]) ? history[step] : Array(9).fill(null);
  const currentPlayer = step % 2 === 0 ? "X" : "O";
  const urlState = searchParams.get("state");
  const savedState = localStorage.getItem("ticTacToeState");
  const winner = checkWinner(currentBoard);

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
        const { history: savedHistory, step: savedStep } = JSON.parse(savedState);
        if (Array.isArray(savedHistory) && savedHistory.length > 0) {
          setHistory(savedHistory);
          setStep(savedStep);
        }
      } catch (error) {
        console.error("Error parsing localStorage:", error);
      }
    } else {
      setHistory([Array(9).fill(null)]);
      setStep(0);
    }
  }, [urlState]);

  useEffect(() => {
    if (!history || history.length === 0 || !history[step]) return;

    const moves = currentBoard
      .map((cell, index) => (cell ? `${index}${cell}` : ""))
      .join("");

    setSearchParams(moves ? { state: moves } : {});
    localStorage.setItem("ticTacToeState", JSON.stringify({ history, step }));
  }, [history, step]);

  const handleClick = (index) => {
    if (!currentBoard || currentBoard[index] || winner) return;

    const newBoard = [...currentBoard];
    newBoard[index] = currentPlayer;

    setHistory([...history.slice(0, step + 1), newBoard]);
    setStep(step + 1);
    setFuture([]);
  };

  const undoMove = () => {
    if (history.length > 1) {
      const lastState = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setFuture([lastState, ...future]);
      if (step > 0) setStep(step - 1);
    }
  };

  const redoMove = () => {
    if (future.length > 0) {
      setHistory([...history.slice(0, step + 1), future[0]]);
      setStep(step + 1);
      setFuture(future.slice(1));
    }
    if (step > 0) setStep(step + 1);
  };

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

  useEffect(() => {
    if (winner === "X" || winner === "O") {
      setIsExploding(true);
      setTimeout(() => setIsExploding(false), 5000);
    }
  }, [winner]);

  return (
    <div className="text-center bg-[url(./asset/Cover.svg)] bg-cover overflow-y-scroll no-scrollbar h-screen">
      <div>
        <div className="flex flex-col sm:flex-row justify-evenly px-4 w-full h-screen">
          <div className="flex flex-col w-full sm:w-2/3 sm:px-40 justify-center gap-5">
            <h1 className="text-3xl font-bold">Tic Tac Toe</h1>
            <PlayerInfo currentPlayer={currentPlayer} />
            <Board currentBoard={currentBoard} handleClick={handleClick} />
          </div>
          <div className="mt-4 flex flex-col py-5 gap-5">
            <GameControls
              undoMove={undoMove}
              redoMove={redoMove}
              resetGame={resetGame}
              history={history}
              future={future}
            />
            <h3 className="bg-white w-auto h-12 rounded-xl border-b-4 border-r-4 border-l-4 border-t-4 border-black p-2 font-bold">
              Move History
            </h3>
            <MoveHistory history={history} jumpTo={jumpTo} />
          </div>
        </div>
      </div>
      {winner && <WinnerModal winner={winner} resetGame={resetGame} isExploding={isExploding} />}
    </div>
  );
}

export default TicTacToe;