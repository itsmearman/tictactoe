export function generateBoardHistory(input) {
    let history = [];
    let board = Array(9).fill(null);
    history.push([...board]);
  
    let moves = input.match(/[0-9][XO]/g) || [];
  
    moves.forEach((move) => {
      let index = parseInt(move[0]);
      let value = move[1];
  
      if (index >= 0 && index < 9 && board[index] === null) {
        board[index] = value;
        history.push([...board]);
      }
    });
  
    return history;
  }
  
  export function checkWinner(board) {
    if (!board || board.length !== 9) return null;
  
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
  }