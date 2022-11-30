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
    <div className=" bg-zinc-700 rounded-2xl p-2">
      <div className="p-3 font-bold text-lg mb-1">{title}</div>
      {rows.map(({ user, sets }) => {
        return <BoardTile user={user} sets={sets} key={user.externalId} />;
      })}
    </div>
  );
};

export default Board;
