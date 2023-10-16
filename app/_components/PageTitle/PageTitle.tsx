import cx from "classix";
import styles from "./page-title.module.scss";

export default function PageTitle({
  title,
  variant = "default"
}: {
  title: string;
  variant?: "default" | "work";
}) {
  return (
    <header className={cx(styles.header, styles[variant])}>
      <h1 className={cx(styles.text, styles[variant])}>{title}</h1>
    </header>
  );
}
