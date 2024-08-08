import { v4 as uuidv4 } from "uuid";
import { FieldArray } from "formik";

import { Button } from "../Button";
import { FormInput } from "../FormInput";
import { Set } from "../Set";

type ExerciseProps = {
  exercise: {
    id: string;
    exerciseName: string;
    sets: {
      id: number;
      weight: string;
      reps: string;
    }[];
  };
  exerciseIndex: number;
};

export function Exercise(props: ExerciseProps) {
  const { exercise, exerciseIndex } = props;

  return (
    <div className="flex">
      <FormInput
        type="text"
        name={`exercises[${exerciseIndex}].exerciseName`}
        placeholder="Exercise"
      />
      <FieldArray name={`exercises[${exerciseIndex}].sets`}>
        {({ push }) => (
          <div className="flex">
            {exercise.sets.map((set, setIndex) => (
              <Set
                key={setIndex}
                exerciseIndex={exerciseIndex}
                setIndex={setIndex}
              />
            ))}
            <Button
              type="button"
              onClick={() => {
                const newSet = {
                  id: uuidv4(),
                  weight: "",
                  reps: "",
                };

                push(newSet);
              }}
            >
              <span>Add set</span>
            </Button>
          </div>
        )}
      </FieldArray>
    </div>
  );
}
