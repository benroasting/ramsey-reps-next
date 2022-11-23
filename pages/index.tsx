import React from "react";
import BoardTiles from "../components/BoardTiles";
import data from "../utils/data";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Layout title="Leaderboard">
        Leaderboard
        <BoardTiles users={data.users} />
      </Layout>
    </div>
  );
}
