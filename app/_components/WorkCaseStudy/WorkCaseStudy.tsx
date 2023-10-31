import React from "react";
import Image, { StaticImageData } from "next/image";
import cx from "classix";

import styles from "./work-case-study.module.scss";
import Link from "next/link";

export default function WorkCaseStudy({
  idx,
  imageSrc,
  imageAlt,
  text,
  button,
  link
}: {
  idx: number;
  imageSrc: StaticImageData;
  imageAlt: string;
  text: string;
  button: React.ReactNode;
  link: string;
}) {
  let width;
  let height;

  // alternate orientation every 2
  if (Math.floor((idx + 1) / 2) % 2 === 0) {
    // landscape
    width = 632;
    height = 440;
  } else {
    // portrait
    width = 524;
    height = 632;
  }

  return (
    <div
      key={idx}
      className={cx(
        styles.container,
        styles[`col-pos-${idx % 4}`],
        styles[`row-pos-${idx}`]
      )}
    >
      <Link href={`/work/${link}`}>
        <Image
          className={styles.image}
          src={imageSrc}
          width={width}
          height={height}
          alt={imageAlt}
          placeholder="blur"
        />
      </Link>
      <h5>{text}</h5>
      <div className={styles.buttonContainer}>{button}</div>
    </div>
  );
}
