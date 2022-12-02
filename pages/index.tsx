import Link from "next/link";
import React, { useState } from "react";
import Board from "../components/Board";
import Layout from "../components/Layout";
import Tabs from "../components/Tabs";
import data from "../utils/data";

export default function Home() {
  const [exercise, setExercise] = useState(data.exercises[0]);

  const rows = data.users.map((user) => ({
    user: user,
    sets: user.getSets(exercise),
  }));

  return (
    <div>
      <Layout title="Leaderboard">
        <Tabs
          exercises={data.exercises}
          onChange={setExercise}
          active={exercise}
        />
        <hr className="flex m-auto h-1 w-1/4 rounded-2xl border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4" />
        <div className="TabBody flex flex-col px-5 mb-3">
          {/* <Board title="Daily Individual Leaderboard" rows={rows} />
          <Board title="Daily Team Leaderboard" rows={rows} />
          <Board title="Lifetime Individual Leaderboard" rows={rows} />
          <Board title="Lifetime Individual Leaderboard" rows={rows} /> */}
        </div>
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
