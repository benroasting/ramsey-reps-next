type ExerciseProps = {
  id: string;
  name: string;
  sequence: number;
};

export class Exercise {
  id: string;
  name: string;
  sequence: number;

  constructor(props: ExerciseProps) {
    this.id = props.id;
    this.name = props.name;
    this.sequence = props.sequence;
  }

  public equals(exercise: Exercise) {
    return this.id === exercise.id;
  }
}
