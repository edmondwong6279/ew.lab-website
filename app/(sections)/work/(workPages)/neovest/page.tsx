import Image from "next/image";

import PageTitle from "@/components/PageTitle";
import LeftAlignedText from "@/components/LeftAlignedText";
import TextWithTitle from "@/components/TextWithTitle";
import FeatureBlockStatic from "@/components/FeatureBlockStatic";

import HestiaImage from "@/public/FeatureBlocks/Hestia.jpg";
import NeovestImage from "@/public/CaseStudy/Neovest.jpg";
import NeovestMainImage from "@/public/CaseStudy/Neovest-main.jpg";
import NeovestMobImage from "@/public/CaseStudy/Neovest-mob.jpg";
import NeovestMainMobImage from "@/public/CaseStudy/Neovest-main-mob.jpg";

import styles from "../workpages.module.scss";

export default function Neovest() {
  return (
    <>
      <PageTitle title="Neovest" />
      <LeftAlignedText>
        <p>
          Neovest is a global, multi-broker electronic trading platform that
          specialises in equities, futures, options, and FX markets accessed via
          one integrated ecosystem. Neovest needed a new brand and digital
          experience that would elevate them in a competitive marketplace, while
          being achievable within a legacy component library contained within
          Adobe Experience Manager (AEM). We knew that by combining our
          creativity with the available tools, we could create something truly
          impactful.
        </p>
      </LeftAlignedText>
      <div className={styles.imageContainer}>
        <Image
          className={styles.imageDesktop}
          src={NeovestImage}
          sizes="100vw"
          alt="Neovest background image"
          placeholder="blur"
        />
        <Image
          className={styles.imageMob}
          src={NeovestMobImage}
          sizes="100vw"
          alt="Neovest background image"
          placeholder="blur"
        />
      </div>
      <TextWithTitle title="Tricks of the trade">
        <p>
          We took the time to analyse and benchmark the competition, looking for
          interesting visual elements and identifying a tone of voice to best
          connect with our trader target audience. To ensure that everything has
          a cohesive look and feel, we carefully crafted a design system and
          translated this into Adobe Experience Manager to maintain consistency
          throughout the website.
        </p>
      </TextWithTitle>
      <div className={styles.imageContainer}>
        <Image
          className={styles.imageDesktop}
          src={NeovestMainImage}
          sizes="100vw"
          alt="Neovest background image"
          placeholder="blur"
        />
        <Image
          className={styles.imageMob}
          src={NeovestMainMobImage}
          sizes="100vw"
          alt="Neovest background image"
          placeholder="blur"
        />
      </div>
      <div className={styles.featureBlockContainer}>
        <FeatureBlockStatic
          title={"Hestia"}
          subtitle={"Designing for empathy"}
          buttonText={"View Hestia"}
          buttonLink={"/work/hestia"}
          backgroundImage={HestiaImage}
          backgroundImageAlt={"Hestia background image"}
        />
      </div>
    </>
  );
}
