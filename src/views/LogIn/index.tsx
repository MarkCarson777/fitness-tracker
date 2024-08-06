import { useContext } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { AuthContext } from "../../context/auth-context";

import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export function Login() {
  const { signIn } = useContext(AuthContext);

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          signIn(values.email, values.password);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col w-fit gap-2">
            <FormInput type="email" name="email" autoComplete="email" />
            <ErrorMessage name="email" component="div" />
            <FormInput
              type="password"
              name="password"
              autoComplete="current-password"
            />
            <ErrorMessage name="password" component="div" />
            <Button type="submit" disabled={isSubmitting} label="Log in">
              <span>Log In</span>
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
