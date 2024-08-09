import styles from "./index.module.css";

interface LoaderProps {
  className?: string;
}

export const Loader = (props: LoaderProps) => {
  const { className } = props;

  return (
    <div className={className}>
      <span className={styles.loader} />
    </div>
  );
};
