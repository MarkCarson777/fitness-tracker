import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { signInUser } from "../../firebase/auth";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export function Login() {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        signInUser(values.email, values.password).then(() =>
          navigate("/workout")
        );
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col border-2 w-fit">
          <Field type="email" name="email" autoComplete="email" />
          <ErrorMessage name="email" component="div" />
          <Field
            type="password"
            name="password"
            autoComplete="current-password"
          />
          <ErrorMessage name="password" component="div" />
          <button className="w-fit" type="submit" disabled={isSubmitting}>
            Log In
          </button>
        </Form>
      )}
    </Formik>
  );
}
