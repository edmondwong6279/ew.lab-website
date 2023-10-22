"use client";

import Image, { StaticImageData } from "next/image";

import Button from "@/components/Button";
import { usePositionInViewport, useWindowSize } from "@/hooks/index";
import { calculateOpacity } from "@/utils/index";
import { navBarHeight } from "@/constants/index";

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
  backgroundImage?: StaticImageData;
  backgroundImageAlt?: string;
}) {
  const scrollPos = usePositionInViewport(title, "outerContainer");
  const { height } = useWindowSize();
  const opacity = calculateOpacity(height, scrollPos, navBarHeight);

  return (
    <div className={styles.outerContainer} id={title}>
      <div
        className={styles.featureText}
        // We expect opacity to reach 1.0 but the calculation on mobile
        // gives 0.9998, so we set 0.9 as the threshold
        style={{ opacity, pointerEvents: opacity > 0.9 ? "auto" : "none" }}
      >
        <h1 className={styles.heading}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <div className={styles.buttonContainer}>
          <Button text={buttonText} link={buttonLink} variant="white" />
        </div>
      </div>
      <section className={styles.container}>
        {backgroundImage && backgroundImageAlt && (
          <div className={styles.backgroundFade}>
            <Image
              className={styles.image}
              alt={backgroundImageAlt}
              src={backgroundImage}
              placeholder="blur"
              fill
              priority
            />
          </div>
        )}
      </section>
    </div>
  );
}
