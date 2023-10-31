import ClientLogos from "@/components/ClientLogos";
import FeatureCarousel from "@/components/FeatureCarousel";
import Hero from "@/components/Hero";
import RiverrHero from "@/public/RiverrHero-Image.jpg";

import styles from "./root.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero
        heroId={"hero"}
        text={"Impactful digital experiences."}
        buttonText={"See our work"}
        buttonLink={"/work"}
        imageLink={RiverrHero}
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
