import Image from "next/image";

import PageTitle from "@/components/PageTitle";
import LeftAlignedText from "@/components/LeftAlignedText";
import TextWithTitle from "@/components/TextWithTitle";
import FeatureBlockStatic from "@/components/FeatureBlockStatic";

import SuperdryImage from "@/public/FeatureBlocks/Superdry.jpg";
import HasbeanImage from "@/public/CaseStudy/Hasbean.jpg";
import HasbeanMainImage from "@/public/CaseStudy/Hasbean-main.jpg";
import HasbeanMobImage from "@/public/CaseStudy/Hasbean-mob.jpg";
import HasbeanMainMobImage from "@/public/CaseStudy/Hasbean-main-mob.jpg";

import styles from "../workpages.module.scss";

export default function HasbeanComponent() {
  return (
    <>
      <PageTitle title="Hasbean" />
      <LeftAlignedText>
        <p>
          Hasbean is a premium coffee retail brand with a focus on specialty
          coffee, roasted fresh to order. Hasbean enlisted LAB to migrate them
          into a modern Shopify architecture whilst also updating their brand
          and user experience to better serve their customer’s needs.
        </p>
      </LeftAlignedText>
      <div className={styles.imageContainer}>
        <Image
          className={styles.imageDesktop}
          src={HasbeanImage}
          sizes="100vw"
          priority
          alt="Hasbean background image"
          placeholder="blur"
        />
        <Image
          className={styles.imageMob}
          src={HasbeanMobImage}
          sizes="100vw"
          priority
          alt="Hasbean background image"
          placeholder="blur"
        />
      </div>
      <TextWithTitle title="Serving up results">
        <p>
          Our comprehensive technical audit outlined the previous solution flaws
          and security issues. LAB successfully migrated Hasbean onto a modern,
          performant Shopify architecture using theme 2.0. This brought complete
          customisation across products and pages using a component-driven
          design system, delivered using modern web standards and a technical
          debt-free code base.
        </p>
      </TextWithTitle>
      <div className={styles.imageContainer}>
        <Image
          className={styles.imageDesktop}
          src={HasbeanMainImage}
          sizes="100vw"
          priority
          alt="Hasbean background image"
          placeholder="blur"
        />
        <Image
          className={styles.imageMob}
          src={HasbeanMainMobImage}
          sizes="100vw"
          priority
          alt="Hasbean background image"
          placeholder="blur"
        />
      </div>
      <TextWithTitle title="Open to all">
        <p>
          Feedback from customers drove our experience updates, to improve
          user&apos;s paths to purchase and provide new features, such as a
          bespoke product filtering experience, &quot;Coffee Picker&quot;. We
          gave special consideration for those who use assistive technology,
          creating a best of breed accessible user experience for everyone
          wishing to buy coffee online.
        </p>
      </TextWithTitle>
      <div className={styles.featureBlockContainer}>
        <FeatureBlockStatic
          title={"Superdry"}
          subtitle={"Redesigning the mobile e-commerce experience"}
          buttonText={"View Superdry"}
          buttonLink={"/work/superdry"}
          backgroundImage={SuperdryImage}
          backgroundImageAlt={"Superdry background image"}
        />
      </div>
    </>
  );
}
