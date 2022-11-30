import Link from "next/link";
import React from "react";
import Board from "../components/Board";
import Layout from "../components/Layout";
import Tabs from "../components/Tabs";
import data from "../utils/data";

export default function Home() {
  return (
    <div>
      <Layout title="Leaderboard">
        <Tabs />
        <Board users={data.users} />
        <Link
          className="rounded-2xl text-black font-bold text-2xl bg-gradient-to-b from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 m-3 p-3"
          href="/add-reps"
        >
          Log Reps
        </Link>
      </Layout>
    </div>
  );
}
