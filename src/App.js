import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicTacToe from "./TicTacToe"; // مطمئن شوید که مسیر درست است
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
