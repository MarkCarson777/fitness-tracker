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
            <Form className="flex flex-col w-fit gap-3">
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <FormInput
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email"
                  className="min-w-[320px] rounded-sm"
                  aria-labelledby="email-label"
                />
                <FormError name="email" component="div" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password">Password</label>
                <FormInput
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  className="min-w-[320px] rounded-sm"
                  aria-labelledby="password-label"
                />
                <FormError name="password" component="div" />
              </div>
              <Button
                className="h-[48px] bg-[#3163d9]"
                type="submit"
                disabled={isSubmitting}
                aria-live="polite"
              >
                <span>Log In</span>
              </Button>
            </Form>
            <div className="flex gap-1 text-xs">
              <span>Don't have an account?</span>
              <Link
                className="underline"
                to="/signup"
                aria-label="Sign up for an account"
              >
                Sign Up
              </Link>
            </div>
          </>
        )}
      </Formik>
      <div
        className="absolute left-8 bottom-8 flex flex-col text-9xl"
        aria-label="Fit Tracker"
      >
        <span>Fit</span>
        <span>Tracker.</span>
      </div>
    </div>
  );
}
