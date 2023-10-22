import React from "react";
import Image, { StaticImageData } from "next/image";
import cx from "classix";

import styles from "./work-case-study.module.scss";

export default function WorkCaseStudy({
  idx,
  imageSrc,
  imageAlt,
  text,
  button
}: {
  idx: number;
  imageSrc: StaticImageData;
  imageAlt: string;
  text: string;
  button: React.ReactNode;
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
      <Image
        className={styles.image}
        src={imageSrc}
        width={width}
        height={height}
        alt={imageAlt}
        placeholder="blur"
      />
      <h5>{text}</h5>
      <div className={styles.buttonContainer}>{button}</div>
    </div>
  );
}
