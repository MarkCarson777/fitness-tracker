import clsx from "clsx";

import { Loader } from "../Loader";

type ButtonProps = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  primary?: boolean;
  pending?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export function Button(props: ButtonProps) {
  const { children, type, primary, pending, disabled, onClick, className } =
    props;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "flex font-semibold h-12 justify-center items-center rounded-md text-white",
        primary && "bg-primary-500",
        className
      )}
    >
      {pending ? <Loader className="text-xs" /> : children}
    </button>
  );
}
