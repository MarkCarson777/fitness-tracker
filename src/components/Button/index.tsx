type ButtonProps = {
  label: string;
};

export function Button(props: ButtonProps) {
  const { label, className } = props;

  return <button className={className}>{label}</button>;
}
