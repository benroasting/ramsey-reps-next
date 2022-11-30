import { Team, User, Exercise, Set } from "./../models";

const FPUTeam = new Team({
  id: "1",
  name: "FPU",
});

const SmartDollarTeam = new Team({
  id: "1",
  name: "SmartDollar",
});

const pushUp = new Exercise({
  id: "push-ups",
  name: "Push Ups",
  sequence: 1,
});

const sitUp = new Exercise({
  id: "sit-ups",
  name: "Sit Ups",
  sequence: 2,
});

const squat = new Exercise({
  id: "squats",
  name: "Squats",
  sequence: 3,
});

const data = {
  exercises: [pushUp, sitUp, squat],
  users: [
    new User({
      externalId: "1",
      firstName: "Luke",
      lastName: "Stitzinger",
      email: "luke.stitzinger@ramseysolutions.com",
      password: "password1",
      teams: [FPUTeam],
      sets: [
        new Set({
          id: "1",
          reps: 10,
          date: new Date(),
          exercise: pushUp,
        }),
      ],
    }),
    new User({
      externalId: "2",
      firstName: "Rob",
      lastName: "Carr",
      email: "rob.carr@ramseysolutions.com",
      password: "password1",
      teams: [FPUTeam],
      sets: [],
    }),
    new User({
      externalId: "3",
      firstName: "Kelley",
      lastName: "Black",
      email: "kelley.black@ramseysolutions.com",
      password: "password1",
      teams: [FPUTeam],
      sets: [],
    }),
    new User({
      externalId: "4",
      firstName: "Patrick",
      lastName: "Brady",
      email: "patrick.brady@ramseysolutions.com",
      password: "password1",
      teams: [SmartDollarTeam],
      sets: [
        new Set({
          id: "1",
          reps: 50,
          date: new Date(),
          exercise: sitUp,
        }),
      ],
    }),
  ],
};

export default data;
