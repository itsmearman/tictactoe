import React from "react";
import { X, O, Board as BoardIcon } from "./icons";

const Board = ({ currentBoard, handleClick }) => {
  return (
    <div className="board grid grid-cols-3 w-full sm:w-2/3 mx-auto gap-2 rounded-3xl border-b-[1rem] border-r-8 border-l-[1rem] border-t-8 border-black p-5 sm:p-8 bg-white">
      {currentBoard.map((cell, index) => (
        <div
          key={index}
          className="w-full h-auto mx-auto cursor-pointer hover:scale-105 transition duration-300"
          onClick={() => handleClick(index)}
        >
          {cell ? (
            cell === "X" ? (
              <X className="w-full h-auto" />
            ) : (
              <O className="w-full h-auto" />
            )
          ) : (
            <BoardIcon className="w-full h-auto" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Board;