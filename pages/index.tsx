import React from "react";
import Board from "../components/Board";
import data from "../utils/data";
import Layout from "../components/Layout";

export default function Home() {
  console.log("Blah!", data.users);
  return (
    <div>
      <Layout title="Leaderboard">
        <h2>Leaderboard</h2>
        <Board users={data.users} />
      </Layout>
    </div>
  );
}
