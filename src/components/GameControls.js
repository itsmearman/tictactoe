import React from "react";

const GameControls = ({ undoMove, redoMove, resetGame, history, future }) => {
  return (
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
  );
};

export default GameControls;