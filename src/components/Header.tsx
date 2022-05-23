interface Props {
  totalPlayers: number | undefined;
}

export function Header(Props: Props): JSX.Element {
  return <div>Total Number of Players : {Props.totalPlayers}</div>;
}
