import { Formik, Form, Field, ErrorMessage } from "formik";

import { firebaseSignUp } from "../firebase/AuthService";

export function Root() {
  return (
    <>
      <h1>Fitness Tracker</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={() => {
          firebaseSignUp({ email, password });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col border-2 w-fit">
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button className="w-fit" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
