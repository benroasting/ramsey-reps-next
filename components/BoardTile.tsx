import React from "react";
import { UserType } from "./Board";

const BoardTile = ({ user }: { user: UserType }) => {
  return (
    <div className="flex flex-row items-center justify-between bg-zinc-600 rounded-2xl mb-1">
      <h3 className="my-2 mx-3">
        {user.firstName} {user.lastName}
      </h3>
      <h3 className="mx-3">{user.teamName}</h3>
      <h3 className="mx-3">Exercise: {user.pushUpReps}</h3>
    </div>
  );
};

export default BoardTile;
