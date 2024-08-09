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
  const {
    name,
    type,
    label,
    placeholder,
    error,
    autoComplete,
    min,
    className,
  } = props;

  return (
    <>
      {label && (
        <label className="text-xs" htmlFor={type}>
          {label}
        </label>
      )}
      <div>
        <Field
          min={min}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={clsx(
            "pl-3 h-12",
            error && "ring-2 ring-[#cb3e20]",
            className
          )}
        />
      </div>
    </>
  );
}
