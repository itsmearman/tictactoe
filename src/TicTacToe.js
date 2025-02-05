import Logo from './asset/Logo.svg';
import React, { useState } from 'react';

function TicTacToe() {
    const [history] = useState([
        { board: Array(9).fill(null) },
      ]);
      const [step] = useState(0);
      const currentBoard = history[step].board;
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">Tic Tac Toe <span className='text-sm'>armani</span></h1>
      <div className="board grid grid-cols-3 w-2/5 mx-auto gap-5 rounded-xl border-b-[1rem] border-r-8 border-l-[1rem] border-t-8 border-black">
        {currentBoard.map((cell, index) => (
          <button className="border border-red-900 rounded-md p-3 h-24" key={index}>{cell}</button>
        ))}
      </div>
      <div className='flex flex-col'>
      <p>winner : </p>
      <button className='text-left w-24'>Undo</button>
      <button className='text-left w-24'>Redo</button>
      <button className='text-left w-24'>Reset</button>
      <h3>Move History</h3>
      </div>
    </div>
  );
}

export default TicTacToe;
