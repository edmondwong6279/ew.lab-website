import Link from "next/link";
import styles from "./arrow-down.module.scss";

export default function ArrowDown({ anchor }: { anchor: string }) {
  return (
    <Link href={anchor} className={styles.outerContainer}>
      <svg
        width="57"
        height="57"
        viewBox="0 0 57 57"
        fill="none"
        className="-z-0"
      >
        {/* <circle
          opacity="0.9"
          cx="28.5"
          cy="28.5"
          r="28"
          fill="white"
          stroke="black"
        /> */}
        <path
          d="M46 25L28.3716 37.8541L10.7449 25"
          strokeWidth="2"
          strokeMiterlimit={10}
          className={styles.line}
        />
      </svg>
      <div className={styles.innerContainer}></div>
    </Link>
  );
}
