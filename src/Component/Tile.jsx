function Tile(prop) {
  return (
    <div onClick={prop.onClick} className={`tile ${prop.className}`}>
      {prop.player}
    </div>
  );
}

export default Tile;
