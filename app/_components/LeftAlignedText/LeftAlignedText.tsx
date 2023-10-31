import cx from "classix";
import styles from "./left-aligned-text.module.scss";

export default function LeftAlignedText({
  children,
  variant = "default"
}: {
  variant?: "default" | "black";
  children: React.ReactNode;
}) {
  return (
    <div className={cx(styles.container, styles[variant])}>{children}</div>
  );
}
