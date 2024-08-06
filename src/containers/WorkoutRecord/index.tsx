import { Form, Formik } from "formik";

import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";

export function WorkoutRecord() {
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
              <div>
                <FormInput
                  type="number"
                  name="weightOne"
                  placeholder="Weight1"
                />
                <FormInput type="number" name="repsOne" placeholder="Reps1" />
              </div>
              <div>
                <FormInput
                  type="number"
                  name="weightTwo"
                  placeholder="Weight"
                />
                <FormInput type="number" name="repsTwo" placeholder="Reps" />
              </div>
              <div>
                <FormInput
                  type="number"
                  name="weightThree"
                  placeholder="Weight"
                />
                <FormInput type="number" name="repsThree" placeholder="Reps" />
              </div>
              <div>
                <FormInput
                  type="number"
                  name="weightFour"
                  placeholder="Weight"
                />
                <FormInput type="number" name="repsFour" placeholder="Reps" />
              </div>
              <div>
                <FormInput
                  type="number"
                  name="weightFive"
                  placeholder="Weight"
                />
                <FormInput type="number" name="repsFive" placeholder="Reps" />
              </div>
              <div>
                <FormInput
                  type="number"
                  name="weightSix"
                  placeholder="Weight"
                />
                <FormInput type="number" name="repsSix" placeholder="Reps" />
              </div>
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
