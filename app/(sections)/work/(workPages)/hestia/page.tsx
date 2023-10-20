import PageTitle from "@/components/PageTitle";
import LeftAlignedText from "@/components/LeftAlignedText";
import TextWithTitle from "@/components/TextWithTitle";
import Quote from "@/components/Quote";
import FeatureBlockStatic from "@/components/FeatureBlockStatic";

import styles from "../workpages.module.scss";

export default function Hestia() {
  return (
    <>
      <PageTitle title="Hestia" />
      <LeftAlignedText>
        <p>
          Hestia is a leading charity providing support to those dealing with
          domestic abuse, a harrowing reality for countless victims around the
          world. They developed their Bright Sky app to help but a lack of
          empathetic visual design and poor user experience patterns impacted
          the app&apos;s effectiveness.
        </p>
      </LeftAlignedText>
      <div className={styles.imageContainer}>
        <picture>
          <source srcSet="/CaseStudy/Hestia.png" media="(min-width: 768px)" />
          <img
            className={styles.image}
            src="/CaseStudy/Hestia-mob.png"
            alt="Hestia background image"
          />
        </picture>
      </div>
      <TextWithTitle title="A path to safety">
        <p>
          Using a combination of user insight and inclusive design principles,
          we created a new visual design language and enhanced the user
          journeys. The new visual language focused on breathing new life into
          the entire experience. White space and composition gave the design a
          more peaceful, calming feel. New icon and illustration sets were
          introduced to reassure users across the journey. Content hierarchy and
          additional copy was introduced to make it easier to find and consume
          content.
        </p>
      </TextWithTitle>
      <div className={styles.imageContainer}>
        <picture>
          <source
            srcSet="/CaseStudy/Hestia-main.png"
            media="(min-width: 768px)"
          />
          <img
            className={styles.image}
            src="/CaseStudy/Hestia-main-mob.png"
            alt="Hestia background image"
          />
        </picture>
      </div>
      <Quote
        quote={
          "“LAB made my job so easy - they took time to really understand the brief, worked around our needs and preferences, and produced an excellent final output. Given we were working on a product relating to domestic abuse, they also coupled digital/design expertise with sensitivity in handling the subject matter. Fully recommend.”"
        }
        author={"Rachel Misra, Head of Digital"}
      />
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
