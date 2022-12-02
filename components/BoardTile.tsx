import React from "react";
import { User, Set } from "../models";

type BoardTileProps = {
  user: User;
  sets: Set[];
};

const BoardTile = ({ user, sets }: BoardTileProps) => {
  const reps = sets.reduce((sum, set) => sum + set.reps, 0);

  return (
    <tr>
      <td>{user.name()}</td>
      <td>{user.team().name}</td>
      <td>{reps}</td>
    </tr>
  );
};

export default BoardTile;
