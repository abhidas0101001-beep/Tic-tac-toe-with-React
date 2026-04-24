import Reset from "./Reset";
import Strike from "./Strike";
import Tile from "./Tile";
import { useState } from "react";

function Board() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [playerTurn, setPlayerTurn] = useState("");

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
  };

  const handleReset = () => {
    setBoard(Array(9).fill(""));
  };

  return (
    <div className="board">
      <Tile
        className={"right-border bottom-border"}
        onClick={() => handleClick(0)}
        player={board[0]}
      />
      <Tile
        className={"right-border bottom-border"}
        onClick={() => handleClick(1)}
        player={board[1]}
      />
      <Tile
        className={"bottom-border"}
        onClick={() => handleClick(2)}
        player={board[2]}
      />
      <Tile
        className={"right-border bottom-border"}
        onClick={() => handleClick(3)}
        player={board[3]}
      />
      <Tile
        className={"right-border bottom-border"}
        onClick={() => handleClick(4)}
        player={board[4]}
      />
      <Tile
        className={"bottom-border"}
        onClick={() => handleClick(5)}
        player={board[5]}
      />
      <Tile
        className={"right-border"}
        onClick={() => handleClick(6)}
        player={board[6]}
      />
      <Tile
        className={"right-border"}
        onClick={() => handleClick(7)}
        player={board[7]}
      />
      <Tile onClick={() => handleClick(8)} player={board[8]} />
      <Strike />
      <Reset onClick={handleReset} />
    </div>
  );
}

export default Board;
