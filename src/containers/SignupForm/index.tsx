// Third party
import clsx from "clsx";
// Routing
import { useNavigate } from "react-router-dom";
// Forms and validation
import { Formik, Form } from "formik";
import * as Yup from "yup";
// Contexts
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
// Components
import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";

type SignupFormProps = {
  className?: string;
};

const SignupSchema = Yup.object().shape({
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
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("A password confirmation is required"),
});

export function SignupForm(props: SignupFormProps) {
  const { className } = props;
  const { signUpUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        await signUpUser(values.email, values.password);
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
          <FormInput
            type="password"
            name="password"
            autoComplete="password"
            placeholder="Password"
            className="rounded-sm"
            aria-label="new-password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            autoComplete="confirm-password"
            placeholder="Confirm password"
            className="rounded-sm"
            aria-label="confirm-password"
          />
          <Button
            type="submit"
            color="primary"
            disabled={isSubmitting}
            aria-live="polite"
            pending={isSubmitting}
          >
            <span>Sign up</span>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
