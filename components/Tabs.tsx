import React from "react";
import { Exercise } from "../models";
import clsx from "clsx";

type TabProps = {
  exercises: Exercise[];
  onChange: (exercise: Exercise) => void;
  active: Exercise;
};

const Tabs = ({ exercises, onChange, active }: TabProps) => {
  return (
    <div className="TabContainer">
      <ul className="TabNav flex justify-center mb-4">
        {exercises.map((exercise) => {
          return (
            <li
              className={clsx("m-2 p-2 hover:font-bold", {
                active: exercise.equals(active),
              })}
              onClick={() => onChange(exercise)}
              key={exercise.id}
            >
              {exercise.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
