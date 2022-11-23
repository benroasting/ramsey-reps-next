import React from "react";

const BoardTile = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-slate-700 rounded-3xl">
      <h3 className="my-2 mx-3">Team Member</h3>
      <h3 className="mx-3">Team</h3>
      <h3 className="mx-3">Reps</h3>
    </div>
  );
};

export default BoardTile;
