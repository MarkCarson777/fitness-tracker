import { useContext } from "react";
import { WorkoutContext } from "../../contexts/WorkoutContext";

import { v4 as uuidv4 } from "uuid";
import { Form, Formik, FieldArray } from "formik";

import { Button } from "../../components/Button";
import { Exercise } from "../../components/Exercise";
import { FormInput } from "../../components/FormInput";

export function WorkoutRecord() {
  const { createWorkout } = useContext(WorkoutContext);

  return (
    <Formik
      initialValues={{
        date: "",
        workoutName: "",
        startTime: "",
        endTime: "",
        exercises: [
          {
            id: uuidv4(),
            exerciseName: "",
            sets: [{ id: uuidv4(), weight: "", reps: "" }],
          },
        ],
      }}
      onSubmit={async (values) => {
        try {
          await createWorkout(values);
          console.log("Workout created successfully");
        } catch (error) {
          console.log(error);
        }
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
              <FormInput type="time" name="startTime" />
              <FormInput type="time" name="endTime" />
            </div>
          </div>
          <FieldArray name="exercises">
            {({ push }) => (
              <div>
                {values.exercises.map((exercise, index) => (
                  <Exercise
                    key={index}
                    exercise={exercise}
                    exerciseIndex={index}
                  />
                ))}
                <Button
                  type="button"
                  onClick={() => {
                    const newExercise = {
                      id: uuidv4(),
                      exerciseName: "",
                      sets: [{ id: uuidv4(), weight: "", reps: "" }],
                    };

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
