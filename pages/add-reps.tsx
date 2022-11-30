import Link from "next/link";
import React from "react";

export default function addReps() {
  return (
    <div className="m-0">
      <Link
        className="rounded-2xl text-green-400 font-bold text-2xl border-1 border-solid border-green-400"
        href="/add-reps"
      >
        Clear
      </Link>
      <Link
        className="rounded-2xl text-black font-bold text-2xl bg-gradient-to-b from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 m-3 p-3"
        href="/add-reps"
      >
        Submit
      </Link>
    </div>
  );
}
