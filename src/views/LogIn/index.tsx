import { useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { AuthContext } from "../../context/auth-context";

import { Button } from "../../components/Button";
import { FormError } from "../../components/FormError";
import { FormInput } from "../../components/FormInput";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export function Login() {
  const { signInUser } = useContext(AuthContext);

  return (
    <div className="relative flex flex-col h-screen w-full justify-center items-center gap-2 bg-[#16171a] text-[#ffffff]">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          signInUser(values.email, values.password);
        }}
      >
        {({ isSubmitting }) => (
          <>
            <Form className="flex flex-col w-fit gap-2">
              <div>
                <FormInput type="email" name="email" autoComplete="email" />
                <FormError name="email" component="div" />
              </div>
              <div>
                <FormInput
                  type="password"
                  name="password"
                  autoComplete="current-password"
                />
                <FormError name="password" component="div" />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                <span>Log In</span>
              </Button>
            </Form>
            <div className="flex gap-1 text-xs">
              <span>Don't have an account?</span>
              <Link className="underline" to="/signup">
                Sign Up
              </Link>
            </div>
          </>
        )}
      </Formik>
      <div className="absolute left-8 bottom-8 flex flex-col text-9xl">
        <span>Fit</span>
        <span>Tracker.</span>
      </div>
    </div>
  );
}
