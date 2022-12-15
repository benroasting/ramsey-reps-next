import Link from "next/link";
import React, { useState } from "react";
import Board from "../components/Board";
import Layout from "../components/Layout";
import Tabs from "../components/Tabs";
import { Exercise, Set, User } from "../models";
import data from "../utils/data";

class ExerciseSearch {
  private exercise: Exercise;
  private users: User[];
  private sets: Set[];

  constructor(exercise: Exercise, users: User[]) {
    this.exercise = exercise;
    this.users = users;
    this.sets = users.flatMap((user) => user.getSets(this.exercise));
  }

  public since(date: Date): ExerciseSearch {
    this.sets = this.sets.filter((set) => set.date >= date);

    return this;
  }

  public forUser(user: User) {
    this.sets = this.sets.filter((set) => set.belongsTo(user));
  }

  public toList() {
    return this.users
      .map((user) => ({
        user,
        sets: this.sets.filter((set) => set.belongsTo(user)),
      }))
      .filter((item) => item.sets.length > 0);
  }
}

const beginningOfDay = (() => {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  return today;
})();

export default function Home() {
  const [exercise, setExercise] = useState(data.exercises[0]);

  const dailyRows = new ExerciseSearch(exercise, data.users)
    .since(beginningOfDay)
    .toList();
  console.log(dailyRows);
  const dailyRank = dailyRows.sort();
  const lifetimeRows = new ExerciseSearch(exercise, data.users).toList();

  // const individualDailyRows = data.users.map((user) => ({
  //   user: user,
  //   sets: user.getSets(exercise).since(today),
  // }));
  // const individualLifetimeRows = data.users.map((user) => ({
  //   user: user,
  //   sets: user.getSets(exercise).since(2020).for(user),
  // }));

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
          <Board title="Daily Individual Leaderboard" rows={dailyRows} />
          <Board title="Daily Team Leaderboard" rows={dailyRows} />

          <Board title="Lifetime Individual Leaderboard" rows={lifetimeRows} />
          <Board title="Lifetime Team Leaderboard" rows={lifetimeRows} />
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
