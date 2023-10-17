import Link from "next/link";

import { footerArray } from "@/constants/index";

import styles from "./footer.module.scss";
import Image from "next/image";
import cx from "classix";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.item}>&copy;2023 LAB. All rights reserved.</div>
      <div className={styles.social}>Follow us:</div>
      <div className={cx(styles.accreditation, styles.item)}>
        Accreditation:{" "}
        <Image
          width={115}
          height={54}
          src={"/accreditation.png"}
          alt="Accreditation icons"
        />
      </div>
      <div className={cx(styles.links, styles.item)}>
        {footerArray.map(({ link, text }, idx) => (
          <Link key={idx} href={link} className={styles.link}>
            {text}
          </Link>
        ))}
      </div>
    </footer>
  );
}
