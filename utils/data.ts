import { Team, User, Exercise, Set } from "./../models";

const today = new Date();

const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

const lastWeek = new Date();
lastWeek.setDate(today.getDate() - 7);

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
          date: today,
          exercise: pushUp,
          userExternalId: "1",
        }),
        new Set({
          id: "2",
          reps: 20,
          date: yesterday,
          exercise: pushUp,
          userExternalId: "1",
        }),
        new Set({
          id: "3",
          reps: 50,
          date: lastWeek,
          exercise: pushUp,
          userExternalId: "1",
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
      sets: [
        new Set({
          id: "4",
          reps: 20,
          date: today,
          exercise: pushUp,
          userExternalId: "2",
        }),
        new Set({
          id: "5",
          reps: 20,
          date: today,
          exercise: squat,
          userExternalId: "2",
        }),
        new Set({
          id: "6",
          reps: 20,
          date: today,
          exercise: sitUp,
          userExternalId: "2",
        }),
      ],
    }),
    new User({
      externalId: "5",
      firstName: "Jonathan",
      lastName: "Taylor",
      email: "jonathan.taylor@ramseysolutions.com",
      password: "password1",
      teams: [FPUTeam],
      sets: [
        new Set({
          id: "7",
          reps: 25,
          date: today,
          exercise: squat,
          userExternalId: "5",
        }),
        new Set({
          id: "8",
          reps: 7,
          date: today,
          exercise: pushUp,
          userExternalId: "5",
        }),
      ],
    }),
    new User({
      externalId: "3",
      firstName: "Kelley",
      lastName: "Black",
      email: "kelley.black@ramseysolutions.com",
      password: "password1",
      teams: [FPUTeam],
      sets: [
        new Set({
          id: "9",
          reps: 28,
          date: today,
          exercise: squat,
          userExternalId: "3",
        }),
        new Set({
          id: "12",
          reps: 30,
          date: today,
          exercise: sitUp,
          userExternalId: "3",
        }),
      ],
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
          id: "10",
          reps: 50,
          date: today,
          exercise: sitUp,
          userExternalId: "6",
        }),
        new Set({
          id: "11",
          reps: 100,
          date: yesterday,
          exercise: sitUp,
          userExternalId: "6",
        }),
      ],
    }),
  ],
};

export default data;
