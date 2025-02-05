import React from "react";

const MoveHistory = ({ history, jumpTo }) => {
  return (
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
  );
};

export default MoveHistory;