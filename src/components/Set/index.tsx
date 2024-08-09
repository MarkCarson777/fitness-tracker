import clsx from "clsx";

import { FormInput } from "../FormInput";

type SetProps = {
  setIndex: number;
  exerciseIndex: number;
  errors: any;
  className?: string;
};

export function Set(props: SetProps) {
  const { setIndex, exerciseIndex, errors, className } = props;

  return (
    <div className={clsx("flex flex-col", className)}>
      <FormInput
        type="number"
        placeholder="Weight"
        name={`exercises[${exerciseIndex}].sets[${setIndex}].weight`}
        min="0"
        error={
          errors.exercises &&
          errors.exercises[exerciseIndex]?.sets[setIndex]?.weight
        }
      />
      <FormInput
        type="number"
        placeholder="Reps"
        name={`exercises[${exerciseIndex}].sets[${setIndex}].reps`}
        min="0"
        error={
          errors.exercises &&
          errors.exercises[exerciseIndex]?.sets[setIndex]?.reps
        }
      />
    </div>
  );
}
