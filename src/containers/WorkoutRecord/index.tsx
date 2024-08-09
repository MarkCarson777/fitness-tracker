import { useContext } from "react";
import { WorkoutContext } from "../../contexts/WorkoutContext";

import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { Form, Formik, FieldArray } from "formik";

import { Button } from "../../components/Button";
import { Exercise } from "../../components/Exercise";
import { FormInput } from "../../components/FormInput";

const WorkoutSchema = Yup.object().shape({
  date: Yup.date().required("A date is required"),
  workoutName: Yup.string().required("A workout name is required"),
  startTime: Yup.string(),
  endTime: Yup.string().test(
    "is-greater",
    "End time must be later than start time",
    function (value) {
      const { startTime } = this.parent;
      return !startTime || !value || value > startTime;
    }
  ),
  exercises: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.string().required(),
        exerciseName: Yup.string().required("An exercise name is required"),
        sets: Yup.array()
          .of(
            Yup.object().shape({
              id: Yup.string().required(),
              weight: Yup.number().required("A weight is required"),
              reps: Yup.number().required("Reps are required"),
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
          console.error("Error creating workout", error);
        }
      }}
      validationSchema={WorkoutSchema}
    >
      {({ isSubmitting, values, errors }) => (
        <Form className="flex flex-col">
          <div className="flex">
            <div className="flex flex-col flex-1">
              <FormInput type="date" name="date" error={errors.date} />
              <FormInput
                type="text"
                name="workoutName"
                placeholder="Workout Name"
                error={errors.workoutName}
              />
            </div>
            <div className="flex flex-col">
              <FormInput
                type="time"
                name="startTime"
                error={errors.startTime}
              />
              <FormInput type="time" name="endTime" error={errors.endTime} />
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
                    errors={errors}
                  />
                ))}
                <Button
                  color="primary"
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
          <Button color="primary" type="submit" disabled={isSubmitting}>
            <span>Save</span>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
