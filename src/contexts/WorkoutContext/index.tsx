import { createContext } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../../firebase/config.tsx";

type WorkoutProviderProps = {
  children?: ReactNode;
};

type WorkoutContextType = {
  createWorkout: (workout: any) => void;
};

export const WorkoutContext = createContext<WorkoutContextType>({
  createWorkout: () => {},
});

export const WorkoutProvider = ({ children }: WorkoutProviderProps) => {
  const createWorkout = (workout) => {
    const ref = collection(firestore, "workouts");

    try {
      addDoc(ref, workout);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WorkoutContext.Provider
      value={{
        createWorkout,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};
