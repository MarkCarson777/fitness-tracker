import { useState, useEffect } from "react";

import { Form, Formik, FieldArray } from "formik";

import { Button } from "../../components/Button";
import { Exercise } from "../../components/Exercise";
import { FormInput } from "../../components/FormInput";

export function WorkoutRecord() {
  const [exercises, setExercises] = useState([{ id: 1 }]);

  useEffect(() => {
    console.log(exercises);
  }, [exercises]);

  return (
    <Formik
      initialValues={{
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
              <FormInput type="text" name="name" placeholder="Workout Name" />
            </div>
            <div className="flex flex-col">
              <FormInput type="time" name="start" />
              <FormInput type="time" name="finish" />
            </div>
          </div>
          <FieldArray name="exercises">
            {({ push }) => (
              <div>
                {values.exercises.map((exercise, index) => (
                  <Exercise key={index} index={index} />
                ))}
                <Button
                  type="button"
                  onClick={() => {
                    const newExercise = { id: values.exercises.length + 1 };
                    setExercises([...exercises, newExercise]);
                    push(newExercise);
                  }}
                >
                  Add
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
