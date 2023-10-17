import styles from "./text-with-title.module.scss";

export default function TextWithTitle({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}
