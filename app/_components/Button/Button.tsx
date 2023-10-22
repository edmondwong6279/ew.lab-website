import Link from "next/link";
import cx from "classix";

import styles from "./button.module.scss";

export default function Button({
  text,
  link,
  variant,
  onClick
}: {
  text: string;
  link: string;
  variant:
    | "black"
    | "yellow"
    | "yellow-line"
    | "white"
    | "clear"
    | "white-fill";
  onClick?: (e: any) => any;
}) {
  return (
    <Link
      href={link}
      className={cx(styles.outerContainer, styles[variant])}
      onClick={onClick}
    >
      <p className={styles.text}>{text}</p>
      <div className={styles.innerContainer}></div>
    </Link>
  );
}
