function PlayerX(props) {
  return (
    <div
      className={`font-extrabold text-lg border-2 rounded-sm m-2 py-1.5 px-1 
        ${props.winner === "X" ? "text-[#f5d939]" : "text-[#39B9F5]"}`}
    >
      <p>playerX</p>
      <p>{props.timer}ms</p>
      <p className="font-medium">Win={props.winner}</p>
    </div>
  );
}

export default PlayerX;
