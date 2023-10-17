"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { usePositionInViewport, useWindowSize } from "@/hooks/index";

import styles from "./feature-block.module.scss";
import { calculateOpacity } from "@/utils/index";
import { navBarHeight } from "@/constants/index";

export default function FeatureBlock({
  idx,
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  backgroundImageAlt
}: {
  idx: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
}) {
  const scrollPos = usePositionInViewport(title, "outerContainer");
  const { height } = useWindowSize();
  const opacity = calculateOpacity(height, scrollPos, navBarHeight);

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
              priority
            />
          </div>
        )}
      </section>
    </div>
  );
}
