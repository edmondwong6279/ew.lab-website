import cx from "classix";
import styles from "./results.module.scss";

export default function Results({
  title,
  resultsArray
}: {
  title: string;
  resultsArray: { large: string; small: string }[];
}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.results}>
        {resultsArray.map((result, idx) => {
          return (
            <div
              key={idx}
              className={cx(styles.result, styles[`align-${idx % 2}`])}
            >
              <h1 className={styles.large}>{result.large}</h1>
              <p className={styles.small}>{result.small}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
