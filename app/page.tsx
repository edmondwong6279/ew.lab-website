// WIP
import Image from "next/image";

import Button from "@/components/Button";
import ArrowDown from "@/components/ArrowDown";
import FeatureBlock from "@/components/FeatureBlock";
import ClientLogos from "@/components/ClientLogos";

import styles from "./root.module.scss";
import { homeFeatures } from "./_constants";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.textContainer}>
          <h1 className={styles.text}>
            Delivering insight-led, impactful digital experiences.
          </h1>
          <Button text="See our work" link="/work" variant="clear" />
        </div>
        <Image
          className={styles.image}
          alt={"Riverr Hero Image"}
          src={"/RiverrHero-Image.png"}
          height={800}
          width={740}
          priority
        />
        <div className={styles.arrow}>
          <ArrowDown anchor="#Superdry" />
        </div>
      </section>

      {homeFeatures.map(
        (
          {
            title,
            subtitle,
            buttonText,
            buttonLink,
            backgroundImage,
            backgroundImageAlt
          },
          idx
        ) => (
          <FeatureBlock
            key={idx}
            title={title}
            subtitle={subtitle}
            buttonText={buttonText}
            buttonLink={buttonLink}
            backgroundImage={backgroundImage}
            backgroundImageAlt={backgroundImageAlt}
          />
        )
      )}

      <div className={styles.lastContainer}>
        <ClientLogos />
      </div>
    </main>
  );
}
