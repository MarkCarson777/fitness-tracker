import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  disabled: boolean;
  onClick: () => void;
  className?: string;
};

export function Button(props: ButtonProps) {
  const { children, type, disabled, onClick, className } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx("flex justify-center items-center rounded-md", className)}
    >
      {children}
    </button>
  );
}
