import React from "react";
import { User, Set } from "../models";

type BoardTileProps = {
  user: User;
  sets: Set[];
};

const BoardTile = ({ user, sets }: BoardTileProps) => {
  const reps = sets.reduce((sum, set) => sum + set.reps, 0);

  // TODO: Convert these to <tr />
  return (
    <div className="flex flex-row items-center justify-between bg-zinc-600 rounded-2xl mb-1">
      <h3 className="my-2 mx-3">{user.name()}</h3>
      <h3 className="mx-3">{user.team().name}</h3>
      <h3 className="mx-3">{reps}</h3>
    </div>
  );
};

export default BoardTile;
