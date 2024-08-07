import { useState, useEffect } from "react";

import { Form, Formik, FieldArray } from "formik";

import { Button } from "../../components/Button";
import { Exercise } from "../../components/Exercise";
import { FormInput } from "../../components/FormInput";

export function WorkoutRecord() {
  const [exercises, setExercises] = useState([
    { id: 1, exerciseName: "", sets: [{ id: 1, weight: "", reps: "" }] },
  ]);

  useEffect(() => {
    console.log("exercises", exercises);
  }, [exercises]);

  return (
    <Formik
      initialValues={{
        date: "",
        workoutName: "",
        startTime: "",
        endTime: "",
        exercises: exercises,
      }}
      onSubmit={(values) => {
        console.log("formValues", values);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form className="flex flex-col">
          <div className="flex">
            <div className="flex flex-col">
              <FormInput type="date" name="date" />
              <FormInput
                type="text"
                name="workoutName"
                placeholder="Workout Name"
              />
            </div>
            <div className="flex flex-col">
              <FormInput type="time" />
              <FormInput type="time" name="endTime" />
            </div>
          </div>
          <FieldArray name="exercises">
            {({ push }) => (
              <div>
                {values.exercises.map((exercise, index) => (
                  <Exercise
                    key={index}
                    index={index}
                    exercise={exercise}
                    setExercises={setExercises}
                  />
                ))}
                <Button
                  type="button"
                  onClick={() => {
                    const newExercise = {
                      id: values.exercises.length + 1,
                      exerciseName: "",
                      sets: [{ id: 1, weight: "", reps: "" }],
                    };
                    setExercises([...exercises, newExercise]);
                    push(newExercise);
                  }}
                >
                  Add exercise
                </Button>
              </div>
            )}
          </FieldArray>
          <Button type="submit" disabled={isSubmitting}>
            <span>Save</span>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
