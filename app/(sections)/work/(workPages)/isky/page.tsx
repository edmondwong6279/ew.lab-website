import Image from "next/image";

import PageTitle from "@/components/PageTitle";
import LeftAlignedText from "@/components/LeftAlignedText";
import TextWithTitle from "@/components/TextWithTitle";
import FeatureBlockStatic from "@/components/FeatureBlockStatic";

import NeovestImage from "@/public/FeatureBlocks/Neovest.jpg";
import iskyImage from "@/public/CaseStudy/isky.jpg";
import iskyMainImage from "@/public/CaseStudy/isky-main.jpg";
import iskyMobImage from "@/public/CaseStudy/isky-mob.jpg";
import iskyMainMobImage from "@/public/CaseStudy/isky-main-mob.jpg";

import styles from "../workpages.module.scss";

export default function isky() {
  return (
    <>
      <PageTitle title="iSky" />
      <LeftAlignedText>
        <p>
          iSky Research provides an innovative financial services CX (Customer
          Experience) digital intelligence platform. Through their online
          portal, iSky Research displays unique data insights incorporating
          hundreds of banking channels, as well as innovation news, competitor
          insights and a library of visual content including screenshots, video
          and banking correspondence.
        </p>
      </LeftAlignedText>
      <div className={styles.imageContainer}>
        <Image
          className={styles.imageDesktop}
          src={iskyImage}
          sizes="100vw"
          alt="isky background image"
          placeholder="blur"
        />
        <Image
          className={styles.imageMob}
          src={iskyMobImage}
          sizes="100vw"
          alt="isky background image"
          placeholder="blur"
        />
      </div>
      <TextWithTitle title="Complex migration and delivery of a new platform">
        <p>
          ISky needed our expertise to pick up a PoC and turn it into a solid
          MVP for launch, tackling complex interface needs due to large amounts
          of data visualisation required and ability for users to customise how
          huge data sets are displayed. Our team optimised the build, adding new
          features both front and back end, completely new data sets, migrating
          all the content from Drupal to Contentful and improved the
          performance, stability, security and user experience of the frontend.
        </p>
      </TextWithTitle>
      <div className={styles.imageContainer}>
        <Image
          className={styles.imageDesktop}
          src={iskyMainImage}
          sizes="100vw"
          alt="isky background image"
          placeholder="blur"
        />
        <Image
          className={styles.imageMob}
          src={iskyMainMobImage}
          sizes="100vw"
          alt="isky background image"
          placeholder="blur"
        />
      </div>
      <div className={styles.featureBlockContainer}>
        <FeatureBlockStatic
          title={"Neovest"}
          subtitle={"Refreshing the brand and website for a global hedgfund"}
          buttonText={"View Neovest"}
          buttonLink={"/work/neovest"}
          backgroundImage={NeovestImage}
          backgroundImageAlt={"Neovest background image"}
        />
      </div>
    </>
  );
}
