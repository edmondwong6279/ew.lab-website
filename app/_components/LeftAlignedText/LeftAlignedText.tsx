import styles from "./left-aligned-text.module.scss";

export default function LeftAlignedText({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.container}>{children}</div>;
}
