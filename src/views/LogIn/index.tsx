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
    <main className="relative flex flex-col h-screen w-full justify-center items-center bg-black-500">
      <header className="sr-only">
        <h1>Login to Fit Tracker</h1>
      </header>
      <section
        aria-labelledby="login-section"
        className="max-w-56 md:max-w-72 lg:max-w-96 space-y-2 w-full"
      >
        <h2 id="login-section" className="sr-only">
          Sign In to Your Account
        </h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignInSchema}
          onSubmit={async (values) => {
            await signInUser(values.email, values.password);
            navigate("/workout");
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col space-y-2">
              <FormInput
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email"
                className="rounded-sm"
                aria-label="Email"
              />
              <FormInput
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="Password"
                className="rounded-sm"
                aria-label="Password"
              />
              <Button
                type="submit"
                color="primary"
                disabled={isSubmitting}
                aria-live="polite"
                pending={isSubmitting}
              >
                <span>Log In</span>
              </Button>
            </Form>
          )}
        </Formik>
        <div className="space-y-1.5 w-full flex flex-col items-center">
          <button
            aria-label="Sign in with Google"
            className="flex space-x-2 bg-white font-semibold py-3 rounded-full px-3.5"
            onClick={async () => {
              await googleSignIn();
              navigate("/workout");
            }}
          >
            <Icon icon="Google" size={24} />
            <span className=" text-gray-500">Sign in with Google</span>
          </button>
          <p className="space-x-1 text-xs">
            <span className="text-white">Don't have an account?</span>
            <Link
              className="text-primary-500 underline hover:no-underline"
              to="/signup"
              aria-label="Sign up for an account"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </section>
      <footer
        className="absolute left-8 bottom-8 flex flex-col text-6xl md:text-8xl lg:text-9xl text-white"
        aria-label="Fit Tracker"
      >
        <span>Fit</span>
        <span>Tracker.</span>
      </footer>
    </main>
  );
}
