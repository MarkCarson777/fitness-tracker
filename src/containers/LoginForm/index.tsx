// React
import { useContext } from "react";
// Third party
import clsx from "clsx";
// Routing
import { Link, useNavigate } from "react-router-dom";
// Forms and validation
import { Formik, Form } from "formik";
import * as Yup from "yup";
// Contexts
import { AuthContext } from "../../contexts/AuthContext";
// Components
import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";

type LoginFormProps = {
  className?: string;
};

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("An email address is required"),
  password: Yup.string().required("A password is required"),
});

export function LoginForm(props: LoginFormProps) {
  const { className } = props;
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={SignInSchema}
      onSubmit={async (values) => {
        await signInUser(values.email, values.password);
        navigate("/workout");
      }}
    >
      {({ isSubmitting }) => (
        <Form className={clsx("flex flex-col space-y-2", className)}>
          <FormInput
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Email"
            className="rounded-sm"
            aria-label="Email"
          />
          <div className="flex flex-col space-y-2">
            <FormInput
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="Password"
              className="rounded-sm"
              aria-label="Password"
            />
            <p className="space-x-1 text-xs">
              <Link
                className="text-primary-500 underline hover:no-underline"
                to="/password-recovery"
                aria-label="Sign up for an account"
              >
                Forgot your password?
              </Link>
            </p>
          </div>
          <Button
            type="submit"
            color="primary"
            disabled={isSubmitting}
            aria-live="polite"
            pending={isSubmitting}
          >
            <span>Sign in</span>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
