import clsx from "clsx";

import { Field } from "formik";

type FormInputProps = {
  name: string;
  type: string;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
};

export function FormInput(props: FormInputProps) {
  const { name, type, placeholder, autoComplete, className } = props;

  return (
    <Field
      name={name}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={clsx("border-2 border-black", className)}
    />
  );
}
