import React from "react";
import { Player1, Player2 } from "./icons";

const PlayerInfo = ({ currentPlayer }) => {
  return (
    <div className="flex justify-center gap-2">
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
  );
};

export default PlayerInfo;