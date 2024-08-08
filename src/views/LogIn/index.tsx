import { useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { AuthContext } from "../../context/auth-context";

import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";
import { Icon } from "../../components/Icon";

import { _googleSignIn } from "../../firebase/auth";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("An email address is required"),
  password: Yup.string().required("A password is required"),
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
        {({ isSubmitting, errors }) => (
          <>
            <Form className="flex flex-col w-fit gap-2">
              <div className="flex flex-col gap-1">
                <FormInput
                  type="email"
                  name="email"
                  label="Email"
                  autoComplete="email"
                  placeholder="Enter your email address..."
                  className="min-w-[320px] rounded-sm text-[#000]"
                  aria-labelledby="email-label"
                  error={errors.email}
                />
              </div>
              <div className="flex flex-col gap-1">
                <FormInput
                  type="password"
                  name="password"
                  label="Password"
                  autoComplete="current-password"
                  placeholder="Enter your password..."
                  className="min-w-[320px] rounded-sm text-[#000]"
                  aria-labelledby="password-label"
                  error={errors.password}
                />
              </div>
              <Button
                className="h-[48px] bg-[#3a76eb] font-semibold mt-4"
                type="submit"
                disabled={isSubmitting}
                aria-live="polite"
              >
                <span>Log In</span>
              </Button>
            </Form>
            <button
              className="flex gap-2 bg-[#fff] text-[#000] font-semibold h-[48px] justify-center items-center rounded-full px-[10px] mt-1"
              onClick={() => _googleSignIn()}
            >
              <Icon icon="Google" size={24} />
              <span className="pb-0.5">Sign in with Google</span>
            </button>
            <div className="flex gap-1 text-xs mt-1">
              <span>Don't have an account?</span>
              <Link
                className="text-[#3a76eb] underline"
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
