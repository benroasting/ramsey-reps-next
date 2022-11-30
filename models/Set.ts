import { Exercise } from "./Exercise";

type SetProps = {
  id: string;
  reps: number;
  date: Date;
  exercise: Exercise;
};

export class Set {
  id: string;
  reps: number;
  date: Date;
  exercise: Exercise;

  constructor(props: SetProps) {
    this.id = props.id;
    this.reps = props.reps;
    this.date = props.date;
    this.exercise = props.exercise;
  }
}
