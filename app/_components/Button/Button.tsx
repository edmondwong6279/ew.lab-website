import Link from "next/link";
import styles from "./button.module.scss";

export default function Button({
  text,
  link,
  textColor,
  borderColor,
  backgroundColor
}: {
  text: string;
  link: string;
  textColor: string;
  borderColor: string;
  backgroundColor: string;
}) {
  return (
    <Link
      href={link}
      className={styles.outerContainer}
      style={{ borderColor: borderColor, backgroundColor: backgroundColor }}
    >
      <p className={styles.text} style={{ color: textColor }}>
        {text}
      </p>
      <div className={styles.innerContainer}></div>
    </Link>
  );
}
