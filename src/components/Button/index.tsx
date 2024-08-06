import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
};

export function Button(props: ButtonProps) {
  const { children, className } = props;

  return (
    <button
      className={clsx(
        "flex justify-center items-center border-2 border-blue-500 rounded",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
