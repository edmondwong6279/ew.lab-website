import styles from "./quote.module.scss";

export default function Quote({
  quote,
  author
}: {
  quote: string;
  author: string;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <p className={styles.quote}>{quote}</p>
        <p className={styles.author}>{author}</p>
      </div>
    </div>
  );
}
