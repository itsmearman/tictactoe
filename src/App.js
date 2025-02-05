import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicTacToe from "./TicTacToe";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
}

export default App;
