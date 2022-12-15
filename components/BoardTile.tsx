import React from "react";
import { User, Set } from "../models";

type BoardTileProps = {
  user: User;
  sets: Set[];
};

const BoardTile = ({ user, sets }: BoardTileProps) => {
  const reps = sets.reduce((sum, set) => sum + set.reps, 0);

  return (
    <tr className="bg-gray-500 rounded-2xl">
      <td>{user.name()}</td>
      <td className="text-center">{user.team().name}</td>
      <td className="text-center">{reps}</td>
    </tr>
  );
};

export default BoardTile;
