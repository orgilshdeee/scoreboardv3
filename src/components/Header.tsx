interface Props {
  totalPlayers: number | undefined;
}

export function Header(Props: Props): JSX.Element {
  return (
    <div
      className="d-flex justify-content-between"
      style={{
        borderBottom: "1px solid black",
        backgroundColor: "blueviolet",
        color: "white",
      }}
    >
      <div
        className="col-4 d-flex"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        Total Number of Players : {Props.totalPlayers}
      </div>
      <div className="col-4 d-flex" style={{ justifyContent: "center" }}>
        <h2>SCOREBOARD</h2>
      </div>
      <div className="col-4"></div>
    </div>
  );
}
