import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  disabled: boolean;
  className?: string;
};

export function Button(props: ButtonProps) {
  const { children, type, disabled, className } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        "flex justify-center items-center border-2 border-blue-500 rounded",
        className
      )}
    >
      {children}
    </button>
  );
}
