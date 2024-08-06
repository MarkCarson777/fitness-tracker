import { Field } from "formik";

type FormInputProps = {
  name: string;
  type: string;
  autoComplete: string;
  [key: string]: any;
};

export function FormInput(props: FormInputProps) {
  return <Field {...props} />;
}
