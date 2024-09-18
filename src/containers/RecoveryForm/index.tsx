import clsx from "clsx";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";

type RecoveryFormProps = {
  className?: string;
};

const RecoverySchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("An email is required"),
});

export function RecoveryForm(props: RecoveryFormProps) {
  const { className } = props;
  const { recoverPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={RecoverySchema}
      onSubmit={async (values) => {
        console.log("values", values);
        await recoverPassword(values.email);
        console.log("Password recovery email sent");
        navigate("/");
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
          <Button
            type="submit"
            color="primary"
            disabled={isSubmitting}
            aria-live="polite"
            pending={isSubmitting}
          >
            <span>Recover your password</span>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
