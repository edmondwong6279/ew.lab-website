"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import cx from "classix";

import { navArray } from "@/constants/index";
import { useWindowSize } from "@/hooks/index";
import stylesVar from "@/styles/variables.module.scss";
import styles from "./nav-bar.module.scss";

export default function NavBar({ theme }: { theme: "light" | "dark" }) {
  const pathname = usePathname();
  const size = useWindowSize();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [viewIsMobile, setviewIsMobile] = useState(
    size.width < parseInt(stylesVar.tablet)
  );

  useEffect(() => {
    setviewIsMobile(size.width < parseInt(stylesVar.tablet));
    if (!(size.width < parseInt(stylesVar.tablet))) {
      setIsHamburgerOpen(false);
    }
  }, [viewIsMobile, size]);

  // for freezing the body
  if (typeof window !== "undefined") {
    if (isHamburgerOpen) {
      document.body.style.height = "100%";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "unset";
      document.body.style.overflow = "unset";
    }
  }

  return (
    <nav className={styles.container}>
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
        className={cx(styles.burger, isHamburgerOpen && styles.burgerOpen)}
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
      >
        <i className={styles.burgerIcon}>
          <Image
            src={"/Burger.svg"}
            width={38}
            height={21}
            alt="Burger menu icon"
          />
        </i>
        <i className={styles.cross}>
          <Image src={"/Cross.svg"} width={55} height={55} alt="Cross icon" />
        </i>
      </div>
      <div
        className={cx(
          viewIsMobile ? styles.mobile : styles.desktop,
          viewIsMobile && isHamburgerOpen ? styles.navOpen : styles.navClose
        )}
      >
        <Link
          href={"/"}
          onClick={() => setIsHamburgerOpen(false)}
          className={cx(
            styles.link,
            styles.mobileHome,
            pathname === "/" && styles.current
          )}
        >
          Home
        </Link>
        {navArray.map(({ link, text }, idx) => (
          <Link
            key={idx}
            href={link}
            onClick={() => setIsHamburgerOpen(false)}
            className={cx(
              styles.link,
              pathname.includes(link) && styles.current
            )}
          >
            {text}
          </Link>
        ))}
      </div>
    </nav>
  );
}
