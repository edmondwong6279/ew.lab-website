"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import cx from "classix";

import { footerArray } from "@/constants/index";

import styles from "./footer.module.scss";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div>&copy;2023 LAB. All rights reserved.</div>
      <div className={styles.links}>
        {footerArray.map(({ link, text }, idx) => (
          <Link key={idx} href={link} className={styles.link}>
            {text}
          </Link>
        ))}
      </div>
    </footer>
  );
}
