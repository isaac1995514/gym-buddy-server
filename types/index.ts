// This project doesn't use typescript, just using this for brainstorming

type SEX = "Male" | "Female";

type BODY_PART = "Chest" | "Back" | "Leg" | "Upper Body" | "Lower Body" | "Arm";

type WEIGHT_TYPE = "Dumbbell" | "Barbell" | "Stress Band" | "No Weight";

type MUSCLE_TYPE =
  | "Back"
  | "Leg"
  | "Tricep"
  | "Bicep"
  | "Shoulder"
  | "Chest"
  | "Abs"
  | "Others";

type DAY_OF_WEEK =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

interface Exercise {
  id: string;
  weightType: WEIGHT_TYPE;
  muscleType: MUSCLE_TYPE;
}

interface ExerciseSet {
  index: number;
  id: string;
  exercise: Exercise;
  sets: number;
  reps: number[];
  ERP: number;
}

interface Schedule {
  id: string;
  dayOfWeek: DAY_OF_WEEK;
  bodyPart: BODY_PART;
  exerciseSets: ExerciseSet[];
}

interface User {
  name: string;
  email: string;
  sex: SEX;
  friends: string[];
  schedules: Schedule[];
}
