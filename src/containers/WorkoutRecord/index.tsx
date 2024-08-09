import { useContext } from "react";
import { WorkoutContext } from "../../contexts/WorkoutContext";

import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { Form, Formik, FieldArray } from "formik";

import { Button } from "../../components/Button";
import { Exercise } from "../../components/Exercise";
import { FormInput } from "../../components/FormInput";

const validationSchema = Yup.object().shape({
  date: Yup.date().required("Date is required"),
  workoutName: Yup.string().required("Workout Name is required"),
  startTime: Yup.string().required("Start Time is required"),
  endTime: Yup.string()
    .required("End Time is required")
    .test(
      "is-greater",
      "End Time must be later than Start Time",
      function (value) {
        const { startTime } = this.parent;
        return !startTime || !value || value > startTime;
      }
    ),
  exercises: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.string().required(),
        exerciseName: Yup.string().required("Exercise Name is required"),
        sets: Yup.array()
          .of(
            Yup.object().shape({
              id: Yup.string().required(),
              weight: Yup.number()
                .required("Weight is required")
                .positive("Weight must be a positive number"),
              reps: Yup.number()
                .required("Reps are required")
                .positive("Reps must be a positive number")
                .integer("Reps must be an integer"),
            })
          )
          .min(1, "At least one set is required"),
      })
    )
    .min(1, "At least one exercise is required"),
});

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
