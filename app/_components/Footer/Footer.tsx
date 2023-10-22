import Link from "next/link";
import Image from "next/image";
import cx from "classix";

import { footerArray } from "@/constants/index";
import AccreditationImage from "@/public/accreditation.png";
import LinkedinImage from "@/public/linkedin.svg";

import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.item}>&copy;2023 LAB. All rights reserved.</div>
      <div className={styles.social}>
        Follow us:{" "}
        <a href="https://www.linkedin.com/company/labgroupdigital/">
          <Image
            width={39}
            height={38}
            src={LinkedinImage}
            alt="Linkedin icon"
            placeholder="blur"
          />
        </a>
      </div>
      <div className={cx(styles.accreditation, styles.item)}>
        Accreditation:{" "}
        <Image
          className={styles.image}
          width={95}
          height={45}
          src={AccreditationImage}
          alt="Accreditation icons"
          placeholder="blur"
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
