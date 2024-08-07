import clsx from "clsx";

import { ErrorMessage } from "formik";

type FormErrorProps = {
  name: string;
  component: string;
  className?: string;
};

export function FormError(props: FormErrorProps) {
  const { name, component, className } = props;

  return (
    <ErrorMessage
      className={clsx("text-xs text-[#d95644]", className)}
      name={name}
      component={component}
    />
  );
}
