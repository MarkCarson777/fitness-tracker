import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { firebaseSignUp } from "../firebase/AuthService";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export function Root() {
  return (
    <>
      <h1>Fitness Tracker</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          firebaseSignUp({ email: values.email, password: values.password });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col border-2 w-fit">
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button className="w-fit" type="submit" disabled={isSubmitting}>
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
