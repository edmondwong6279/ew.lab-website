import Link from "next/link";
import styles from "./button.module.scss";

export default function Button({ text, link }: { text: string; link: string }) {
  return (
    <Link href={link} className={styles.outerContainer}>
      <p className={styles.text}>{text}</p>
      <div className={styles.innerContainer}></div>
    </Link>
  );
}
