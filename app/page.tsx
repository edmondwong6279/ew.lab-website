"use client";

// WIP
import Image from "next/image";

import Button from "@/components/Button";
import ArrowDown from "@/components/ArrowDown";
import FeatureBlock from "@/components/FeatureBlock";
import ClientLogos from "@/components/ClientLogos";
import { usePositionInViewport, useScrollPosition } from "@/hooks/index";

import styles from "./root.module.scss";

export default function Home() {
  // const scrollPos = usePositionInViewport("start");

  // TODO use this to determine the pagination thing
  // TODO AND use it to fade the text
  // console.log(scrollPos);

  return (
    <main className={styles.container}>
      <section
        className={styles.hero}
        style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
      >
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
        />
        <div className="absolute bottom-24">
          <ArrowDown anchor="#start" />
        </div>
      </section>

      <div
        style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
        id="start"
      >
        <FeatureBlock
          title={"Superdry"}
          subtitle={"Redesigning the mobile e-commerce experience"}
          buttonText={"View Superdry"}
          buttonLink={"/work/superdry"}
          backgroundImage={"/FeatureBlocks/Superdry.png"}
          backgroundImageAlt={"Superdry background image"}
          // fadePercentage={Math.max(Math.min(scrollPos / 804, 1), 0)}
        />
      </div>

      <div style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}>
        <FeatureBlock
          title={"Teamsport"}
          subtitle={"Moving to a performant composable platform"}
          buttonText={"View Teamsport"}
          buttonLink={"/work/superdry"}
          backgroundImage={"/FeatureBlocks/Teamsport.png"}
          backgroundImageAlt={"Teamsport background image"}
          // fadePercentage={Math.max(Math.min(scrollPos / 804, 1), 0)}
        />
      </div>

      <div style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}>
        <FeatureBlock
          title={"Neovest"}
          subtitle={"Refreshing the brand and website for a global hedgfund"}
          buttonText={"View Neovest"}
          buttonLink={"/work/superdry"}
          backgroundImage={"/FeatureBlocks/Neovest.png"}
          backgroundImageAlt={"Neovest background image"}
          // fadePercentage={Math.max(Math.min(scrollPos / 804, 1), 0)}
        />
      </div>

      <div style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}>
        <FeatureBlock
          title={"Hestia"}
          subtitle={"Designing for empathy"}
          buttonText={"View Hestia"}
          buttonLink={"/work/superdry"}
          backgroundImage={"/FeatureBlocks/Hestia.png"}
          backgroundImageAlt={"Hestia background image"}
          // fadePercentage={1}
        />
      </div>

      <div style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}>
        <FeatureBlock
          title={"Tevva"}
          subtitle={"Launching Tevva's Hydrogen Electric Truck brand"}
          buttonText={"View Tevva"}
          buttonLink={"/work/superdry"}
          backgroundImage={"/FeatureBlocks/Tevva.png"}
          backgroundImageAlt={"Tevva background image"}
          // fadePercentage={1}
        />
      </div>

      <div
        style={{
          scrollSnapAlign: "center"
        }}
        className={styles.lastContainer}
      >
        <ClientLogos />
      </div>
    </main>
  );
}
