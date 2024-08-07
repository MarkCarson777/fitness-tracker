import { useState } from "react";

import { FormInput } from "../FormInput";
import { Set } from "../Set";

export function Exercise(props) {
  const { index } = props;
  const [sets, setSets] = useState([{ id: 1 }]);

  const addSet = () => {
    setSets([...sets, { id: sets.length + 1 }]);
  };

  return (
    <div className="flex">
      <FormInput type="text" name="exerciseName" placeholder="Exercise" />
      <div className="flex">
        {sets.map((set, index) => (
          <Set key={index} setNumber={index + 1} />
        ))}
      </div>
    </div>
  );
}
