import React, { useEffect, useState } from "react";
import { AddButton } from "./components/AddButton";
import { Header } from "./components/Header";
import { Player } from "./components/Player";

interface Player {
  name: string;
  score: number;
}

function App(): JSX.Element {
  const [players, setPlayers] = useState<Array<Player>>([]);

  useEffect(() => {
    fetch("data/players.json")
      .then((res) => res.json())
      .then((res) => setPlayers(res.students));
  }, []);
  function AddPlayer(e: any) {
    setPlayers([...players, e]);
  }
  function deletePlayer(e: any) {
    console.log(e);
    setPlayers(
      players.filter((player) => {
        return e !== player.name;
      })
    );
  }
  return (
    <div className="container">
      <Header totalPlayers={players?.length} />
      {players?.map((player: Player, i: number) => {
        return (
          <Player playerInfo={player} key={i} deleteStudent={deletePlayer} />
        );
      })}
      <AddButton addingPlayer={AddPlayer} />
    </div>
  );
}

export default App;
