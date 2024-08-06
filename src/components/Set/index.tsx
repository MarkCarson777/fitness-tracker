import clsx from "clsx";

import { FormInput } from "../FormInput";

type SetProps = {
  setNumber: string;
  className?: string;
};

export function Set(props) {
  const { setNumber, className } = props;

  return (
    <div className={clsx(className)}>
      <FormInput
        type="number"
        name={`weight${setNumber}`}
        placeholder={`Weight${setNumber}`}
      />
      <FormInput
        type="number"
        name={`reps${setNumber}`}
        placeholder={`Reps${setNumber}`}
      />
    </div>
  );
}
