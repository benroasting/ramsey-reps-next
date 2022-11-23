import React from "react";
import BoardTile from "./BoardTile";

type Users = {
  users: UserType[];
};

type UserType = {
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
    <div className="flex flex-row items-center justify-between bg-slate-500 rounded-3xl">
      <h3 className="my-2 mx-3">
        {users.users[0].firstName} {users.users[0].lastName}
      </h3>
      <h3 className="mx-3">{users.users[0].teamName}</h3>
      <h3 className="mx-3">Push Ups: {users.users[0].pushUpReps}</h3>
    </div>
  );
  const renderBoardTiles = (): JSX.Element[] => {
    return users.map((user) => {
      return <BoardTile key={user} />;
    });
  };
};

export default Board;
