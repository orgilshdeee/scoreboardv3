import { type } from "os";
import { useState } from "react";
import { Score } from "./Score";

interface Props {
  playerInfo: {
    name: string;
    score: number;
  } | null;
  key: number;
  deleteStudent: (e: any) => void;
}

export function Player(Props: Props) {
  const [score, setScore] = useState<number | undefined>(
    Props.playerInfo?.score
  );

  return (
    <div className="" style={{ borderBottom: "1px solid black" }}>
      <div className="d-flex justify-content-around">
        <p>{Props.playerInfo?.name}</p>
        <Score score={score} setScore={setScore} />
        {/* <p>{Props.playerInfo?.score}</p> */}
        <button onClick={() => Props.deleteStudent(Props.playerInfo?.name)}>
          remove
        </button>
      </div>
    </div>
  );
}
