import React from "react";
import BoardTile from "./BoardTile";

export type Users = { users: UserType[] };

export type UserType = {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  teamName: string;
  pushUpReps: number;
};

const Board = (users: Users) => {
  return (
    <div className="bg-slate-700 rounded-2xl p-2">
      <div className="p-3">Title</div>
      {users.users.map((user) => {
        return <BoardTile user={user} key={user.userId} />;
      })}
    </div>
  );
};

export default Board;
