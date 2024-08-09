import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";

import { AuthContext } from "../../contexts/AuthContext";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("An email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("A password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("A password confirmation is required"),
});

export function SignUp() {
  const { signUpUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="relative gap-2.5 flex flex-col h-screen w-full justify-center items-center bg-black-500">
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={SignUpSchema}
        onSubmit={async (values) => {
          await signUpUser(values.email, values.password);
          navigate("/workout");
        }}
      >
        {({ isSubmitting }) => (
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
                autoComplete="password"
                placeholder="Enter a new password..."
                className="min-w-80 rounded-sm"
                aria-label="new-password"
              />
              <FormInput
                type="password"
                name="confirmPassword"
                autoComplete="confirm-password"
                placeholder="Confirm your new password..."
                className="min-w-80 rounded-sm"
                aria-label="confirm-password"
              />
              <Button
                type="submit"
                color="primary"
                disabled={isSubmitting}
                aria-live="polite"
                pending={isSubmitting}
              >
                <span>Sign Up</span>
              </Button>
            </Form>
            <div className="flex gap-1 text-xs">
              <span className="text-white">Already have an account?</span>
              <Link
                className="text-primary-500 underline hover:no-underline"
                to="/"
                aria-label="Log In"
              >
                Log In
              </Link>
            </div>
          </>
        )}
      </Formik>
      <div
        className="absolute left-8 bottom-8 flex flex-col text-9xl text-white"
        aria-label="Fit Tracker"
      >
        <span>Signup.</span>
      </div>
    </div>
  );
}
