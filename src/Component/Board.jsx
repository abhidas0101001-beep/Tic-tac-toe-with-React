import Strike from "./Strike";
import Tile from "./Tile";
import { useState } from "react";

function Board() {
  const [playerTurn, setPlayerTurn] = useState(0);
  const [playerTxt, setPlayerTxt] = useState("");

  const playerPlay = () => {
    console.log("working");

    if (playerTurn == 0) {
      setPlayerTxt("X");
      setPlayerTurn((prev) => prev + 1);
    } else {
      setPlayerTxt("0");
      setPlayerTurn((prev) => prev - 1);
    }
  };

  return (
    <div className="board">
      <Tile
        className={"right-border bottom-border"}
        onClick={playerPlay}
        player={playerTxt}
      />
      <Tile
        className={"right-border bottom-border"}
        onClick={playerPlay}
        player={playerTxt}
      />
      <Tile
        className={"bottom-border"}
        onClick={playerPlay}
        player={playerTxt}
      />
      <Tile
        className={"right-border bottom-border"}
        onClick={playerPlay}
        player={playerTxt}
      />
      <Tile
        className={"right-border bottom-border"}
        onClick={playerPlay}
        player={playerTxt}
      />
      <Tile
        className={"bottom-border"}
        onClick={playerPlay}
        player={playerTxt}
      />
      <Tile
        className={"right-border"}
        onClick={playerPlay}
        player={playerTxt}
      />
      <Tile
        className={"right-border"}
        onClick={playerPlay}
        player={playerTxt}
      />
      <Tile onClick={playerPlay} player={playerTxt} />
      <Strike />
    </div>
  );
}

export default Board;
