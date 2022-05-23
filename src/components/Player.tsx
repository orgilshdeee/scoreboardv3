interface Props {
  playerInfo: {
    name: string;
    score: number;
  } | null;
  key: number;
  deleteStudent: (e: any) => void;
}

export function Player(Props: Props): JSX.Element {
  return (
    <div className="container" style={{ border: "solid 1px black" }}>
      <div className="d-flex justify-content-around">
        <p>{Props.playerInfo?.name}</p>
        <p>{Props.playerInfo?.score}</p>
        <button onClick={() => Props.deleteStudent(Props.playerInfo?.name)}>
          remove
        </button>
      </div>
    </div>
  );
}
