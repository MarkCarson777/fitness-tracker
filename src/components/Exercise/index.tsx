import { useState, useEffect } from "react";
import { FieldArray } from "formik";

import { Button } from "../Button";
import { FormInput } from "../FormInput";
import { Set } from "../Set";

export function Exercise(props) {
  const { exercise, setExercises, index } = props;

  return (
    <div className="flex">
      <FormInput
        type="text"
        name={`exercises[${index}].exerciseName`}
        placeholder="Exercise"
        value={exercise.exerciseName}
      />
      <FieldArray name={`exercises[${index}].sets`}>
        {({ push: pushSet }) => (
          <div className="flex">
            {exercise.sets.map((set, setIndex) => (
              <Set
                key={setIndex}
                set={set}
                exIndex={index}
                setIndex={setIndex}
              />
            ))}
            <Button
              type="button"
              onClick={() => {
                const newSet = {
                  id: exercise.sets.length + 1,
                  weight: "",
                  reps: "",
                };
                const updatedExercises = [...exercise.sets, newSet];

                setExercises((prevExercises) =>
                  prevExercises.map((ex, exIndex) =>
                    exIndex === index ? { ...ex, sets: updatedExercises } : ex
                  )
                );
                pushSet(newSet);
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
