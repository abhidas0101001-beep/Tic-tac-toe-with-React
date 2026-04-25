import Reset from "./Reset";
import Strike from "./Strike";
import Tile from "./Tile";
import { useState } from "react";
import { useEffect } from "react";

function Board() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [playerTurn, setPlayerTurn] = useState(0);
  const [lastMove, setLastMove] = useState(null);
  let check = "null";
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] !== "") return;

    const newBoard = [...board];

    if (playerTurn === 0) {
      newBoard[index] = "X";
      setPlayerTurn(1);
    } else {
      newBoard[index] = "0";
      setPlayerTurn(0);
    }

    setBoard(newBoard);
    setLastMove(index);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(""));
    setWinner(null);
  };

  const handleWin = () => {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [A, B, C] of wins) {
      if (board[A] && board[A] === board[B] && board[A] === board[C]) {
        console.log("Winner:", board[A]);
        setWinner(board[A]);
        return;
      }
    }
  };

  useEffect(() => {
    if (lastMove !== null) {
      console.log("Updated index", lastMove);
      check = board[lastMove];
      console.log("Value:", check);
      handleWin();
    }
  }, [board]);

  return (
    <div className="board">
      <Tile
        className={"right-border bottom-border"}
        onClick={() => {
          handleClick(0);
        }}
        player={board[0]}
      />
      <Tile
        className={"right-border bottom-border"}
        onClick={() => {
          handleClick(1);
        }}
        player={board[1]}
      />
      <Tile
        className={"bottom-border"}
        onClick={() => {
          handleClick(2);
        }}
        player={board[2]}
      />
      <Tile
        className={"right-border bottom-border"}
        onClick={() => {
          handleClick(3);
        }}
        player={board[3]}
      />
      <Tile
        className={"right-border bottom-border"}
        onClick={() => {
          handleClick(4);
        }}
        player={board[4]}
      />
      <Tile
        className={"bottom-border"}
        onClick={() => {
          handleClick(5);
        }}
        player={board[5]}
      />
      <Tile
        className={"right-border"}
        onClick={() => {
          handleClick(6);
        }}
        player={board[6]}
      />
      <Tile
        className={"right-border"}
        onClick={() => {
          handleClick(7);
        }}
        player={board[7]}
      />
      <Tile
        onClick={() => {
          handleClick(8);
        }}
        player={board[8]}
      />
      <Strike winner={winner} />
      <Reset onClick={handleReset} />
    </div>
  );
}

export default Board;
