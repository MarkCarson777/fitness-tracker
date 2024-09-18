// React
import { useContext } from "react";
// Routing
import { useNavigate } from "react-router-dom";
// Forms and validation
import { Formik, Form } from "formik";
import * as Yup from "yup";
// Contexts
import { AuthContext } from "../../contexts/AuthContext";
// Components
import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("An email address is required"),
  password: Yup.string().required("A password is required"),
});

export function LoginForm() {
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
  );
}
