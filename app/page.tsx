// WIP
import Image from "next/image";

import Button from "@/components/Button";
import ArrowDown from "@/components/ArrowDown";
import ClientLogos from "@/components/ClientLogos";
import FeatureCarousel from "@/components/FeatureCarousel";

import styles from "./root.module.scss";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero
        heroId={"hero"}
        text={"Delivering insight-led, impactful digital experiences."}
        buttonText={"See our work"}
        buttonLink={"/work"}
        imageLink={"/RiverrHero-Image.png"}
        imageAlt={"Riverr Hero Image"}
        arrow={true}
        scrollSnap={true}
      />
      <FeatureCarousel />

      <div className={styles.lastContainer} id={"lastFeature"}>
        <ClientLogos />
      </div>
    </main>
  );
}
