import Image from "next/image";

import PageTitle from "@/components/PageTitle";
import LeftAlignedText from "@/components/LeftAlignedText";
import TextWithTitle from "@/components/TextWithTitle";
import Quote from "@/components/Quote";
import FeatureBlockStatic from "@/components/FeatureBlockStatic";

import TeamsportImage from "@/public/FeatureBlocks/Teamsport.jpg";
import SuperdryImage from "@/public/CaseStudy/Superdry.jpg";
import SuperdryMainImage from "@/public/CaseStudy/Superdry-main.jpg";
import SuperdryMobImage from "@/public/CaseStudy/Superdry-mob.jpg";
import SuperdryMainMobImage from "@/public/CaseStudy/Superdry-main-mob.jpg";

import styles from "../workpages.module.scss";

export default function Superdry() {
  return (
    <>
      <PageTitle title="Superdry" />
      <LeftAlignedText>
        <p>
          With the majority of it&apos;s GenZ audience shopping via mobile,
          Superdry wanted to reimagine the mobile shopping experience for them,
          moving beyond a generic desktop-led legacy design and to explore
          emerging conventions such as thumb-only usability and tap/swipe
          interactions, inspired by social media behaviours.
        </p>
        <p>
          Superdry has been nominated for{" "}
          <a href="https://bima.co.uk/announcing-the-bima-awards-2023-shortlist/">
            2023 BIMA Award!
          </a>
        </p>
      </LeftAlignedText>
      <div className={styles.imageContainer}>
        <Image
          className={styles.imageDesktop}
          src={SuperdryImage}
          sizes="100vw"
          priority
          alt="Superdry background image"
          placeholder="blur"
        />
        <Image
          className={styles.imageMob}
          src={SuperdryMobImage}
          sizes="100vw"
          priority
          alt="Superdry background image"
          placeholder="blur"
        />
      </div>
      <TextWithTitle title="Science meets style">
        <p>
          To find out what users thought we partnered with Studio Blup, who
          engaged <a href="https://studioblup.com/blupgen">BLUP:GEN</a>, their
          audience panel made up of a diverse range of over 300 GenZ users, to
          hear from them about their needs from an e-commerce experience. Armed
          with qualitative, quantitative and technical insights, we provided
          Superdry with a new design that was better aligned to their needs of
          their audience, made better use of phone functions and improved the
          usability of the site.
        </p>
      </TextWithTitle>
      <div className={styles.imageContainer}>
        <Image
          className={styles.imageDesktop}
          src={SuperdryMainImage}
          sizes="100vw"
          priority
          alt="Superdry background image"
          placeholder="blur"
        />
        <Image
          className={styles.imageMob}
          src={SuperdryMainMobImage}
          sizes="100vw"
          priority
          alt="Superdry background image"
          placeholder="blur"
        />
      </div>
      <Quote
        quote={
          '"There\'s a reason why Superdry partnered with LAB. They understand the complex challenges facing brands right now and have the broad, in-house talent to help a client face those challenges head-on and thrive. A no-brainer of an investment."'
        }
        author={"Mark Harvey, Head of Digital"}
      />
      <div className={styles.featureBlockContainer}>
        <FeatureBlockStatic
          title={"Teamsport"}
          subtitle={"Moving to a performant composable platform"}
          buttonText={"View Teamsport"}
          buttonLink={"/work/teamsport"}
          backgroundImage={TeamsportImage}
          backgroundImageAlt={"Teamsport background image"}
        />
      </div>
    </>
  );
}
