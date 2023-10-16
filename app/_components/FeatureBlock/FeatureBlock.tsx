"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { usePositionInViewport, useWindowSize } from "@/hooks/index";

import styles from "./feature-block.module.scss";

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

  // opacity based on value of scrollPos and the height of the viewport
  // divide by 3 to have a space between blocks that have no title
  // just hard coded the navbar height for now, it's defined in @/styles/globals.css
  const navBarHeight = 54;
  const opacity = height
    ? 1 -
      Math.min(
        Math.max(Math.abs((scrollPos - navBarHeight) / (height / 3)), 0),
        1
      )
    : 0;

  return (
    <div className={styles.outerContainer} id={title}>
      <div
        className={styles.featureText}
        style={{ opacity, pointerEvents: opacity === 1 ? "auto" : "none" }}
      >
        <h1 className={styles.heading}>{title}</h1>
        <h5 className={styles.subtitle}>{subtitle}</h5>
        <Button text={buttonText} link={buttonLink} variant="white" />
      </div>
      <section className={styles.container}>
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
    </div>
  );
}
