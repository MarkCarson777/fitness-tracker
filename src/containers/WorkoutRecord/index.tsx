import { Form, Formik } from "formik";

import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";
import { Set } from "../../components/Set";

export function WorkoutRecord() {
  const sets = ["1", "2", "3", "4", "5", "6"];

  return (
    <Formik
      initialValues={{}}
      validationSchema={{}}
      onSubmit={(values) => {
        console.log("formValues", values);
      }}
    >
      {({ isSubmitting }) => (
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
          <div className="flex">
            <FormInput type="text" name="exerciseName" placeholder="Exercise" />
            <div className="flex">
              {sets.map((set, index) => (
                <Set setNumber={index + 1} />
              ))}
            </div>
          </div>
          <Button type="submit" disabled={isSubmitting}>
            <span>Save</span>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
