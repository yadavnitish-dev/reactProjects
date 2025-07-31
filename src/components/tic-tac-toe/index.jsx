import React, { useState, useEffect } from "react";

const Square = ({ value, onClick, player }) => {
  return (
    <button
      onClick={onClick}
      disabled={value !== "E" || player !== "E"}
      className={`w-20 h-20 border-2 border-gray-400 flex items-center justify-center text-3xl font-bold
        ${value === "X" ? "text-blue-600" : value === "O" ? "text-pink-500" : ""}
        ${value !== "E" || player !== "E" ? "bg-gray-100 cursor-not-allowed" : "bg-white hover:bg-gray-200"}
        transition-colors duration-200`}
    >
      {value === "E" ? null : <span>{value}</span>}
    </button>
  );
};

const TicTacToe = () => {
  const [board, setBoard] = useState("EEEEEEEEE".split(""));
  const [xTurn, setXTurn] = useState(true);
  const [player, setPlayer] = useState("E");

  const handleOnClick = (curr_square) => {
    if (board[curr_square] !== "E" || player !== "E") return;
    const curr_board = [...board];
    curr_board[curr_square] = xTurn ? "X" : "O";
    setXTurn(!xTurn);
    setBoard(curr_board);
  };

  const winner = (board) => {
    const winning_cases = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    for (let i = 0; i < winning_cases.length; i++) {
      const [x, y, z] = winning_cases[i];
      if (board[x] === board[y] && board[x] === board[z] && board[x] !== "E") {
        return board[x];
      }
    }
    // Check for draw
    if (board.every((cell) => cell !== "E")) return "D";
    return "E";
  };

  useEffect(() => {
    const res = winner(board);
    setPlayer(res);
  }, [board]);

  return (
    <div className="flex flex-col items-center pt-30 min-h-screen bg-black text-white">
      <div className="text-8xl font-medium mb-30">Tic Tac Toe</div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-rows-3 gap-2">
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex gap-2">
              {[0, 1, 2].map((col) => {
                const idx = row * 3 + col;
                return (
                  <Square
                    key={idx}
                    value={board[idx]}
                    onClick={() => handleOnClick(idx)}
                    player={player}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div className="mt-6 text-center text-xl font-semibold">
          {player === "X" || player === "O" ? (
            <span className="text-green-600">Player {player} is the winner!</span>
          ) : player === "D" ? (
            <span className="text-yellow-600">It's a draw!</span>
          ) : (
            <span className="text-gray-500">
              Turn: <span className={xTurn ? "text-blue-600" : "text-pink-500"}>{xTurn ? "X" : "O"}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;