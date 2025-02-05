import React from "react";
import Confetti from "react-confetti";

const WinnerModal = ({ winner, resetGame, isExploding }) => {
  console.log("isExploding:", isExploding);
  return (
    <div className="absolute flex w-full h-screen bg-black bg-opacity-80 items-center justify-center top-0 z-10">
      <div className="w-full sm:w-2/6 h-2/6 bg-white rounded-2xl text-center flex flex-col items-center justify-center gap-10">
        <p className="font-bold text-3xl">
        {isExploding && (
         <Confetti
         width={1600}
         height={1600}
       />
        )}
          {winner === "Draw"
            ? "It's a draw!"
            : `Player ${winner === "X" ? "1" : "2"} wins!`}
        </p>
        <button
          className="board mx-auto gap-2 w-auto rounded-xl border-b-4 border-r-4 border-l-4 border-t-4 border-black px-10 py-3 bg-primary_blue font-bold text-xl cursor-pointer hover:bg-primary_yellow"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default WinnerModal;
