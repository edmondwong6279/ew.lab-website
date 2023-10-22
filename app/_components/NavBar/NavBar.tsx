"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import cx from "classix";

import { navArray } from "@/constants/index";
import { useWindowSize } from "@/hooks/index";
import LogoBlackImage from "@/public/LogoBlack.svg";
import LogoWhiteImage from "@/public/LogoWhite.svg";
import BurgerImage from "@/public/Burger.svg";
import CrossImage from "@/public/Cross.svg";

import stylesVar from "@/styles/variables.module.scss";
import styles from "./nav-bar.module.scss";

export default function NavBar({ theme }: { theme: "light" | "dark" }) {
  const pathname = usePathname();
  const size = useWindowSize();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [viewIsMobile, setviewIsMobile] = useState(false);

  useEffect(() => {
    if (size.width) {
      setviewIsMobile(size.width < parseInt(stylesVar.tablet));
      if (!(size.width < parseInt(stylesVar.tablet))) {
        setIsHamburgerOpen(false);
      }
    }
  }, [viewIsMobile, size]);

  return (
    <nav className={styles.container} id={"nav"}>
      <Link href={"/"}>
        {theme === "light" ? (
          <Image
            src={LogoBlackImage}
            width={80}
            height={34}
            alt="LAB Logo"
            placeholder="blur"
          />
        ) : (
          <Image
            src={LogoWhiteImage}
            width={80}
            height={28}
            alt="LAB Logo"
            placeholder="blur"
          />
        )}
      </Link>
      <div
        className={cx(styles.burger, isHamburgerOpen && styles.burgerOpen)}
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
      >
        <i className={styles.burgerIcon}>
          <Image
            src={BurgerImage}
            width={38}
            height={21}
            alt="Burger menu icon"
            placeholder="blur"
          />
        </i>
        <i className={styles.cross}>
          <Image
            src={CrossImage}
            width={55}
            height={55}
            alt="Cross icon"
            placeholder="blur"
          />
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
