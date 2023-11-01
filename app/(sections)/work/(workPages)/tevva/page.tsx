import Image from "next/image";

import PageTitle from "@/components/PageTitle";
import LeftAlignedText from "@/components/LeftAlignedText";
import TextWithTitle from "@/components/TextWithTitle";
import FeatureBlockStatic from "@/components/FeatureBlockStatic";
import Quote from "@/components/Quote";

import HestiaImage from "@/public/FeatureBlocks/Hestia.jpg";
import TevvaImage from "@/public/CaseStudy/Tevva.jpg";
import TevvaMainImage from "@/public/CaseStudy/Tevva-main.jpg";
import TevvaMobImage from "@/public/CaseStudy/Tevva-mob.jpg";
import TevvaMainMobImage from "@/public/CaseStudy/Tevva-main-mob.jpg";

import styles from "../workpages.module.scss";

export default function Tevva() {
  return (
    <>
      <PageTitle title="Tevva" />
      <LeftAlignedText>
        <p>
          Tevva is a leading UK manufacturer of Hydrogen Electric Trucks. LAB
          supported the launch of their new brand to market, providing
          technology expertise, recognised a need to move to a modern technology
          stack that could support their marketing and business ambitions, along
          with high ensuring quality brand and design communication of their new
          brand.
        </p>
      </LeftAlignedText>
      <div className={styles.imageContainer}>
        <Image
          className={styles.imageDesktop}
          src={TevvaImage}
          sizes="100vw"
          priority
          alt="Tevva background image"
          placeholder="blur"
        />
        <Image
          className={styles.imageMob}
          src={TevvaMobImage}
          sizes="100vw"
          priority
          alt="Tevva background image"
          placeholder="blur"
        />
      </div>
      <TextWithTitle title="Moving to composable">
        <p>
          Legacy technology was making it difficult for editors to easily
          maintain digital assets and hindering Tevva&apos;s ability to launch
          new digital services. To solve this, we embarked on a complete
          overhaul of the site design, site rebuild and platform migration, all
          delivered in time for a crucial industry event in Germany. We provided
          Tevva with a new Contentful architecture that included CRM
          integration, multi-lingual support and a modern, accessible UI which
          enabled the introduction of a scalable component based design system,
          all of which form the foundations to support future growth.
        </p>
      </TextWithTitle>
      <div className={styles.imageContainer}>
        <Image
          className={styles.imageDesktop}
          src={TevvaMainImage}
          sizes="100vw"
          priority
          alt="Tevva background image"
          placeholder="blur"
        />
        <Image
          className={styles.imageMob}
          src={TevvaMainMobImage}
          sizes="100vw"
          priority
          alt="Tevva background image"
          placeholder="blur"
        />
      </div>
      <TextWithTitle title="Driving the experience forward">
        <p>
          In addition to the new website and technology foundations, we designed
          and developed digital kiosks that are used at key industry events.
        </p>
      </TextWithTitle>
      <Quote
        quote={
          '"We highly recommend LAB for their outstanding contribution to our digital assets project. They skillfully leveraged a state-of-the-art headless CMS website and touch-screen kiosk to create great digital assets. LAB\'s expertise and meticulous attention to detail truly set them apart. Their account management team demonstrated exceptional responsibility and provided valuable support, especially when working with team members less versed in technical matters and they went above and beyond their duty to help us over a holiday period to prepare assets for a show. We enthusiastically endorse Riverr and look forward to the possibility of collaborating with them again in the future."'
        }
        author={"Chris Hawken, Head of Marketing Europe"}
      />
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
