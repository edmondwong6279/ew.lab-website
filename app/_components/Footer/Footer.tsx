"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import cx from "classix";

import { footerArray } from "@/constants/index";

import styles from "./footer.module.scss";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className={cx(
        styles.footer,
        "px-20 h-14 flex w-full items-center justify-between"
      )}
    >
      <div>&copy;2023 LAB. All rights reserved.</div>
      <div className="flex">
        {footerArray.map(({ link, text }, idx) => (
          <Link key={idx} href={link} className={cx(styles.link, "px-5")}>
            {text}
          </Link>
        ))}
      </div>
    </footer>
  );
}
