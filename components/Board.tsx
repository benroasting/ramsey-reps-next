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
  // TODO: Convert this to <table /> with <th />
  return (
    <table className=" bg-zinc-700 rounded-2xl p-2">
      <thead>
        <tr className="p-3 font-bold text-lg mb-1">{title}</tr>
        <tr>
          <th>Name</th>
          <th>Team</th>
          <th>Reps</th>
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
