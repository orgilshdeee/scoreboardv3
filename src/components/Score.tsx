interface Props {
  score: number | undefined;
  setScore: React.Dispatch<React.SetStateAction<number | undefined>>;
}
export function Score(Props: Props): JSX.Element {
  function clickHandler(e: any) {
    if (e.target.outerText == "+") {
      Props.setScore(Props?.score ? Props?.score + 1 : 0);
    } else {
      Props.setScore(Props?.score ? Props?.score - 1 : 0);
    }
  }
  return (
    <div className="d-flex">
      <button onClick={clickHandler}>-</button>
      <p className="d-flex">{Props.score}</p>
      <button onClick={clickHandler}>+</button>
    </div>
  );
}
