import Image from "next/image";

import PageTitle from "@/components/PageTitle";
import LeftAlignedText from "@/components/LeftAlignedText";
import TextWithTitle from "@/components/TextWithTitle";
import Quote from "@/components/Quote";
import FeatureBlockStatic from "@/components/FeatureBlockStatic";

import styles from "../workpages.module.scss";

export default function Hasbean() {
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
        <picture>
          <source srcSet="/CaseStudy/Hasbean.png" media="(min-width: 768px)" />
          <img
            className={styles.image}
            src="/CaseStudy/Hasbean-mob.png"
            alt="Hasbean background image"
          />
        </picture>
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
        <picture>
          <source
            srcSet="/CaseStudy/Hasbean-main.png"
            media="(min-width: 768px)"
          />
          <img
            className={styles.image}
            src="/CaseStudy/Hasbean-main-mob.png"
            alt="Hasbean background image"
          />
        </picture>
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
      <FeatureBlockStatic
        title={"Superdry"}
        subtitle={"Redesigning the mobile e-commerce experience"}
        buttonText={"View Superdry"}
        buttonLink={"/work/superdry"}
        backgroundImage={"/FeatureBlocks/Superdry.png"}
        backgroundImageAlt={"Superdry background image"}
      />
    </>
  );
}