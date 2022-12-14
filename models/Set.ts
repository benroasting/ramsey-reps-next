import { Exercise } from "./Exercise";
import { User } from "./User";

type SetProps = {
  id: string;
  reps: number;
  date: Date;
  exercise: Exercise;
  userExternalId: string;
};

export class Set {
  id: string;
  reps: number;
  date: Date;
  exercise: Exercise;
  userExternalId: string;

  constructor(props: SetProps) {
    this.id = props.id;
    this.reps = props.reps;
    this.date = props.date;
    this.exercise = props.exercise;
    this.userExternalId = props.userExternalId;
  }

  public belongsTo(user: User) {
    return this.userExternalId === user.externalId;
  }
}
