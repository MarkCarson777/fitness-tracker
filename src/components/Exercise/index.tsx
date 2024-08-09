import clsx from "clsx";
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
  errors: any;
  className?: string;
};

export function Exercise(props: ExerciseProps) {
  const { exercise, exerciseIndex, errors, className } = props;

  return (
    <div className={clsx("flex", className)}>
      <FormInput
        type="text"
        name={`exercises[${exerciseIndex}].exerciseName`}
        placeholder="Exercise"
        error={
          errors.exercises && errors.exercises[exerciseIndex]?.exerciseName
        }
      />
      <FieldArray name={`exercises[${exerciseIndex}].sets`}>
        {({ push }) => (
          <div className="flex">
            {exercise.sets.map((set, setIndex) => (
              <Set
                key={setIndex}
                exerciseIndex={exerciseIndex}
                setIndex={setIndex}
                errors={errors}
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
