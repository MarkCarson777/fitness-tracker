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
      id: string;
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
    <div className={clsx("flex gap-0.5", className)}>
      <FormInput
        type="text"
        name={`exercises[${exerciseIndex}].exerciseName`}
        placeholder="Exercise"
      />
      <FieldArray name={`exercises[${exerciseIndex}].sets`}>
        {({ push, remove }) => (
          <div className="flex gap-0.5">
            {exercise.sets.map((_, setIndex) => (
              <>
                <Set
                  key={setIndex}
                  exerciseIndex={exerciseIndex}
                  setIndex={setIndex}
                  errors={errors}
                />
                <Button
                  color="primary"
                  type="button"
                  onClick={() => remove(setIndex)}
                >
                  <span>Remove</span>
                </Button>
              </>
            ))}
            {exercise.sets.length < 8 && (
              <Button
                color="primary"
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
            )}
          </div>
        )}
      </FieldArray>
    </div>
  );
}
