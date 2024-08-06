import { useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Button } from "../../components/Button";
import { FormError } from "../../components/FormError";
import { FormInput } from "../../components/FormInput";

import { AuthContext } from "../../context/auth-context";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export function SignUp() {
  const { signUpUser } = useContext(AuthContext);

  return (
    <div className="flex flex-col h-screen w-full justify-center items-center gap-2">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          signUpUser(values.email, values.password);
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
                  autoComplete="new-password"
                />
                <FormError name="password" component="div" />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                <span>Sign Up</span>
              </Button>
            </Form>
            <div className="flex gap-1 text-xs">
              <span>Already have an account?</span>
              <Link className="underline" to="/">
                Log In
              </Link>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}
