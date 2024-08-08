import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "./config.tsx";

export const createWorkout = (workout) => {
  const ref = collection(firestore, "workouts");

  try {
    addDoc(ref, workout);
  } catch (err) {
    console.log(err);
  }
};
