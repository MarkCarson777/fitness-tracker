import clsx from "clsx";

import { FormInput } from "../FormInput";

type SetProps = {
  setIndex: number;
  exerciseIndex: number;
  className?: string;
};

export function Set(props: SetProps) {
  const { setIndex, exerciseIndex, className } = props;

  return (
    <div className={clsx("flex flex-col", className)}>
      <FormInput
        type="number"
        placeholder="Weight"
        name={`exercises[${exerciseIndex}].sets[${setIndex}].weight`}
      />
      <FormInput
        type="number"
        placeholder="Reps"
        name={`exercises[${exerciseIndex}].sets[${setIndex}].reps`}
      />
    </div>
  );
}
