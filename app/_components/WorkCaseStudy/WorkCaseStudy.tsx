import Image from "next/image";
import styles from "./work-case-study.module.scss";
import React from "react";
import cx from "classix";

export default function WorkCaseStudy({
  idx,
  imageSrc,
  imageAlt,
  text,
  button
}: {
  idx: number;
  imageSrc: string;
  imageAlt: string;
  text: string;
  button: React.ReactNode;
}) {
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
        width={idx % 2 === 0 ? 632 : 524}
        height={idx % 2 === 0 ? 440 : 632}
        alt={imageAlt}
      />
      <h5>{text}</h5>
      <div className={styles.buttonContainer}>{button}</div>
    </div>
  );
}
