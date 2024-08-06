import clsx from "clsx";

type ButtonProps = {
  label: string;
  className?: string;
};

export function Button(props: ButtonProps) {
  const { label, className } = props;

  return <button className={clsx(className)}>{label}</button>;
}
