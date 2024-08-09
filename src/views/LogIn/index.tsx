import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { AuthContext } from "../../contexts/AuthContext";
import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";
import { Icon } from "../../components/Icon";

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("An email address is required"),
  password: Yup.string().required("A password is required"),
});

export function Login() {
  const { googleSignIn, signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="relative gap-4 flex flex-col h-screen w-full justify-center items-center bg-black-500">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={async (values) => {
          await signInUser(values.email, values.password);
          navigate("/workout");
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <>
            <Form className="flex flex-col w-fit gap-4">
              <FormInput
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your email address..."
                className="min-w-80 rounded-sm"
                aria-label="Email"
              />
              <FormInput
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="Enter your password..."
                className="min-w-80 rounded-sm text-black"
                aria-label="Password"
              />
              <Button
                primary
                type="submit"
                disabled={isSubmitting}
                aria-live="polite"
                pending={isSubmitting}
              >
                <span>Log In</span>
              </Button>
            </Form>
            <div className="flex flex-col gap-2.5 items-center">
              <button
                aria-label="Sign in with Google"
                className="flex gap-2 bg-white text-black font-semibold h-12 justify-center items-center rounded-full px-3.5"
                onClick={async () => {
                  await googleSignIn();
                  navigate("/workout");
                }}
              >
                <Icon icon="Google" size={24} />
                <span className="pb-0.5 text-gray-500">
                  Sign in with Google
                </span>
              </button>
              <div className="flex gap-1 text-xs">
                <span className="text-white">Don't have an account?</span>
                <Link
                  className="text-primary-500 underline hover:no-underline"
                  to="/signup"
                  aria-label="Sign up for an account"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </>
        )}
      </Formik>
      <div
        className="absolute left-8 bottom-8 flex flex-col text-9xl text-white"
        aria-label="Fit Tracker"
      >
        <span>Fit</span>
        <span>Tracker.</span>
      </div>
    </div>
  );
}
