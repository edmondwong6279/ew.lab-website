"use client";
import Image from "next/image";
import Button from "@/components/Button";
import { usePositionInViewport, useWindowSize } from "@/hooks/index";

import styles from "./feature-block.module.scss";
import cx from "classix";

export default function FeatureBlock({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  backgroundImageAlt
}: {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
}) {
  const scrollPos = usePositionInViewport(title);
  const { height } = useWindowSize();

  // const opacity = Math.abs(Math.max(Math.min(scrollPos / height, 1), 0));
  const opacity = scrollPos / height;

  console.log(title, scrollPos);

  return (
    <>
      <div className={styles.featureText} style={{ opacity }}>
        <h1 className={styles.heading}>{title}</h1>
        <h5 className={styles.subtitle}>{subtitle}</h5>
        <Button text={buttonText} link={buttonLink} variant="white" />
      </div>
      <section className={styles.container} id={title}>
        {backgroundImage && backgroundImageAlt && (
          <div className={styles.backgroundFade}>
            <Image
              className={styles.image}
              alt={backgroundImageAlt}
              src={backgroundImage}
              fill
            />
          </div>
        )}
      </section>
    </>
  );
}
