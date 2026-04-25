import Reset from "./Reset";
import Tile from "./Tile";
import { useState } from "react";
import { useEffect } from "react";
import Timer from "./Timer";
import PlayerX from "./PlayerX";
import Player0 from "./Player0";

function Board() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [playerTurn, setPlayerTurn] = useState("");
  const [lastMove, setLastMove] = useState(null);
  const [winner, setWinner] = useState("");
  const [playerX_Timer, setPlayerX_Timer] = useState(0);
  const [player0_Timer, setPlayer0_Timer] = useState(0);
  const [player0Interval, setPlayer0Interval] = useState(null);

  let interval;

  const handleClick = (index) => {
    if (board[index] !== "" || winner !== "") return;

    const newBoard = [...board];

    if (playerTurn === "X") {
      newBoard[index] = "X";
      setPlayerTurn("0");
    } else {
      newBoard[index] = "0";
      setPlayerTurn("X");
    }

    setBoard(newBoard);
    setLastMove(index);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(""));
    setWinner("");
    clearInterval(interval);
    setPlayer0_Timer(0);
    setPlayerX_Timer(0);
    setPlayerTurn("");
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
        setWinner(board[A]);
        return;
      }
    }
  };

  useEffect(() => {
    if (lastMove !== null) {
      handleWin();
    }
  }, [board]); //for handle win

  useEffect(() => {
    if (winner !== "") {
      return;
    }

    if (playerTurn !== "") {
      if (playerTurn === "0") {
        interval = setInterval(() => {
          setPlayer0_Timer((prev) => prev + 1);
        }, 100);
      } else {
        interval = setInterval(() => {
          setPlayerX_Timer((prev) => prev + 1);
        }, 100);
      }

      return () => clearInterval(interval);
    }
  }, [playerTurn, winner]);

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
      <Player0 timer={player0_Timer} winner={winner} />
      <Reset onClick={handleReset} />
      <PlayerX timer={playerX_Timer} winner={winner} />
    </div>
  );
}

export default Board;
