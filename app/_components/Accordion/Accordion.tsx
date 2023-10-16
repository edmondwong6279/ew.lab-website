import styles from "./accordion.module.scss";

export default function Accordion() {
  return (
    <div className={styles.container}>
      <details className={styles.details}>
        <summary className={styles.summary}>Related documents</summary>
        <ul>
          <li>
            <a href="#">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </a>
          </li>
          <li>
            <a href="#">Aliquam tincidunt mauris eu risus.</a>
          </li>
          <li>
            <a href="#">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </a>
          </li>
          <li>
            <a href="#">Aliquam tincidunt mauris eu risus.</a>
          </li>
        </ul>
      </details>
    </div>
  );
}
