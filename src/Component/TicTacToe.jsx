import Board from "./Board";

function TicTacToe() {
  return (
    <div>
      <h1
        className="text-4xl font-extrabold bg-linear-to-r 
from-cyan-400 to-blue-500 text-transparent bg-clip-text"
      >
        TicTacToe
      </h1>
      <Board />
    </div>
  );
}

export default TicTacToe;
