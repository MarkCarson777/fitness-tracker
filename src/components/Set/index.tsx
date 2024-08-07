import clsx from "clsx";

import { FormInput } from "../FormInput";

type SetProps = {
  setNumber: string;
  className?: string;
};

export function Set(props) {
  const { set, exIndex, setIndex, className } = props;

  return (
    <div className={clsx("flex flex-col", className)}>
      <FormInput
        type="number"
        name={`weight${setIndex}`}
        placeholder={`Weight${setIndex}`}
        name={`exercises[${exIndex}].sets[${setIndex}].weight`}
      />
      <FormInput
        type="number"
        name={`reps${setIndex}`}
        placeholder={`Reps${setIndex}`}
        name={`exercises[${exIndex}].sets[${setIndex}].reps`}
      />
    </div>
  );
}
