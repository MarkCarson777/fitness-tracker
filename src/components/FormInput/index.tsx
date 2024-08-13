import clsx from "clsx";

import { Field } from "formik";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
};

export function FormInput(props: FormInputProps) {
  const { name, type, label, placeholder, autoComplete, className } = props;

  return (
    <>
      {label && (
        <label className="text-xs" htmlFor={type}>
          {label}
        </label>
      )}
      <Field name={name}>
        {({ field, meta }: FieldProps) => (
          <input
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className={clsx(
              "pl-3 h-12",
              meta.touched &&
                meta.error &&
                "ring-[3px] ring-[#cb3e20] ring-inset",
              className
            )}
            {...field}
          />
        )}
      </Field>
    </>
  );
}
