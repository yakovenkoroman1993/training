// Dirty hack
const asNever = (value: string): never => value as never;

const Screens = {
  HOME: asNever("Home"),
  LOGIN: asNever("Login"),
  TRAINING: asNever("Training"),
  EXAMINATION: asNever("Examination"),
} as const;

export default Screens;
