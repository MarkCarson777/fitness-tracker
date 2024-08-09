import clsx from "clsx";

import { Loader } from "../Loader";

type ButtonProps = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  color: "primary" | "danger";
  pending?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export function Button(props: ButtonProps) {
  const { children, type, color, pending, disabled, onClick, className } =
    props;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "relative flex font-semibold h-12 justify-center items-center rounded-md text-white",
        color === "primary" && "bg-primary-500",
        color === "danger" && "bg-danger-500",
        className
      )}
    >
      {pending ? <Loader className="text-xs" /> : children}
    </button>
  );
}
