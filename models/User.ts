import { Exercise } from "./Exercise";
import { Team } from "./Team";
import { Set } from "./Set";

type UserProps = {
  externalId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  teams: Team[];
  sets: Set[];
};

export class User {
  externalId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  teams: Team[];
  sets: Set[];

  constructor(props: UserProps) {
    this.externalId = props.externalId;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.email = props.email;
    this.password = props.password;
    this.teams = props.teams;
    this.sets = props.sets;
  }

  public team(): Team {
    return this.teams[0];
  }

  public name(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public getSets(exercise: Exercise): Set[] {
    return this.sets.filter((set) => set.exercise.equals(exercise));
  }
}
