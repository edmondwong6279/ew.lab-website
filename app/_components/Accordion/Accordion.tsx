import styles from "./accordion.module.scss";

export default function Accordion() {
  return (
    <div className={styles.container}>
      <h1>What we do</h1>
      <details className={styles.details}>
        <summary className={styles.summary}>Design</summary>
        <ul>
          <li>UX & UI design</li>
          <li>Design systems</li>
          <li>Journey mapping</li>
          <li>Prototyping</li>
          <li>Usability audits</li>
          <li>Inspiration & ideation workshops</li>
          <li>User centred design</li>
        </ul>
      </details>

      <details className={styles.details}>
        <summary className={styles.summary}>Research</summary>
        <ul>
          <li>Placeholder</li>
        </ul>
      </details>

      <details className={styles.details}>
        <summary className={styles.summary}>Engineering</summary>
        <ul>
          <li>Placeholder</li>
        </ul>
      </details>
    </div>
  );
}
