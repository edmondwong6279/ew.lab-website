import Image, { StaticImageData } from "next/image";

import Button from "@/components/Button";

import styles from "./feature-block-static.module.scss";

export default function FeatureBlockStatic({
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
  return (
    <section className={styles.container}>
      <div className={styles.featureText}>
        <h1 className={styles.heading}>{title}</h1>
        <h5 className={styles.subtitle}>{subtitle}</h5>
        <div className={styles.buttonContainer}>
          <Button text={buttonText} link={buttonLink} variant="white" />
        </div>
      </div>
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
  );
}
