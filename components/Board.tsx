import React from "react";
import BoardTile from "./BoardTile";
import { User, Set } from "../models";

type UserReps = {
  user: User;
  sets: Set[];
};

export type BoardProps = {
  title: string;
  rows: UserReps[];
};

const Board = ({ rows, title }: BoardProps) => {
  const heading = ["Name", "Team", "Reps"];
  // TODO: Convert this to <table /> with <th />
  return (
    <table className="bg-zinc-700 rounded-2xl p-2 mb-4 w-1/2">
      <thead>
        <tr className="p-3 font-bold text-lg mb-1 text-center">{title}</tr>
        <tr>
          <th className="text-left">Name</th>
          <th className="">Team</th>
          <th className="">Reps</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(({ user, sets }) => {
          return <BoardTile user={user} sets={sets} key={user.externalId} />;
        })}
      </tbody>
    </table>
  );
};

export default Board;
