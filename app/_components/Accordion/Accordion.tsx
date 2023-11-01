import styles from "./accordion.module.scss";

export default function Accordion() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Services</h1>
      <details className={styles.details}>
        <summary className={styles.summary}>Design</summary>
        <ul>
          <li>UX & UI design</li>
          <li>Design systems</li>
          <li>Journey mapping</li>
          <li>Prototyping</li>
          <li>Usability audits</li>
          <li>Inspiration & ideation workshops</li>
        </ul>
      </details>

      <details className={styles.details}>
        <summary className={styles.summary}>Research</summary>
        <ul>
          <li>User research</li>
          <li>Data led user profiling</li>
          <li>Persona creation</li>
          <li>Data analysis</li>
          <li>Social listening</li>
          <li>Machine learning models</li>
        </ul>
      </details>

      <details className={styles.details}>
        <summary className={styles.summary}>Engineering</summary>
        <ul>
          <li>Composable Architectures</li>
          <li>Performant UI code</li>
          <li>Web and Native apps</li>
          <li>Data platforms</li>
          <li>Monolith migrations</li>
          <li>Tech Vendor PoC&apos;s</li>
          <li>DevOps configuration</li>
        </ul>
      </details>
    </div>
  );
}
