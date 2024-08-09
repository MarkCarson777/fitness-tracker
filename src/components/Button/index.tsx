import clsx from "clsx";

import { Loader } from "../Loader";

type ButtonProps = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  pending;
  disabled: boolean;
  onClick?: () => void;
  className?: string;
};

export function Button(props: ButtonProps) {
  const { children, type, pending, disabled, onClick, className } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "relative flex justify-center items-center rounded-md text-white",
        className
      )}
    >
      {pending ? <Loader className="text-xs" /> : children}
    </button>
  );
}
