"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import cx from "classix";

import { navArray } from "@/constants/index";

import styles from "./nav-bar.module.scss";
import { useEffect, useState } from "react";

export default function NavBar({ theme }: { theme: "light" | "dark" }) {
  const pathname = usePathname();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  console.log(isHamburgerOpen);

  return (
    <nav className="px-5 md:px-20 h-14 flex w-full items-center justify-between bg-white sticky top-0 z-50">
      <Link href={"/"}>
        {theme === "light" ? (
          <Image
            priority
            src={"/LogoBlack.svg"}
            width={80}
            height={28}
            alt="LAB Logo"
          />
        ) : (
          <Image
            priority
            src={"/LogoWhite.svg"}
            width={80}
            height={28}
            alt="LAB Logo"
          />
        )}
      </Link>
      <div
        id={styles["nav-icon3"]}
        className={cx(styles[`${isHamburgerOpen ? "open" : ""}`], "md:hidden")}
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={cx(`hidden md:flex gap-8`, styles["asd"])}>
        {navArray.map(({ link, text }, idx) => (
          <Link
            key={idx}
            href={link}
            className={cx(styles.link, pathname === link && styles.current)}
          >
            {text}
          </Link>
        ))}
      </div>
    </nav>
  );
}
