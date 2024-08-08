import { useState } from "react";
import clsx from "clsx";

import { Field } from "formik";

import { FormError } from "../FormError";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
};

export function FormInput(props: FormInputProps) {
  const { name, type, label, placeholder, error, autoComplete, className } =
    props;
  const [displayError, setDisplayError] = useState(false);

  return (
    <>
      <div className="flex gap-1">
        {label && (
          <label className="text-xs" htmlFor={type}>
            {label}
          </label>
        )}
        {displayError && <FormError name={type} component="div" />}
      </div>
      <div className="relative">
        <Field
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={clsx(
            "pl-3 h-[48px]",
            error && "ring-2 ring-[#cb3e20]",
            className
          )}
        />
        {error && (
          <div
            onMouseLeave={() => setDisplayError(false)}
            onMouseEnter={() => setDisplayError(true)}
            className="absolute flex justify-center items-center rounded-full h-[16px] w-[16px] bg-[#cb3e20] top-0 right-0 translate-x-1/2 -translate-y-1/2 "
          >
            <span className="text-xs font-semibold">!</span>
          </div>
        )}
      </div>
    </>
  );
}
