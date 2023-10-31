import PageTitle from "@/components/PageTitle";
import LeftAlignedText from "@/components/LeftAlignedText";
import TextWithTitle from "@/components/TextWithTitle";
import FeatureBlockStatic from "@/components/FeatureBlockStatic";
import Results from "@/components/Results";
import NeovestImage from "@/public/FeatureBlocks/Neovest.jpg";

import styles from "../workpages.module.scss";

export default function Teamsport() {
  return (
    <>
      <PageTitle title="Teamsport" />
      <LeftAlignedText>
        <p>
          Teamsport has a complex product offering, with each Go-Kart track
          having its own range of products for the local area, with different
          pricing and capacities for numbers of drivers. Their legacy booking
          system was limiting their ability to scale and impacting their ability
          to design a better experience for customers. Teamsport turned to LAB
          for delivery of a new solution and to begin a programme of iterative
          design improvements to the experience.
        </p>
      </LeftAlignedText>
      <div className={styles.imageContainer}>
        <picture>
          <source
            srcSet="/CaseStudy/Teamsport.jpg"
            media="(min-width: 768px)"
          />
          <img
            className={styles.image}
            src="/CaseStudy/Teamsport-mob.jpg"
            alt="Teamsport background image"
          />
        </picture>
      </div>
      <Results
        title="Champion results:"
        resultsArray={[
          { large: "36%", small: "Increase in Page Views" },
          { large: "230%", small: "Increase in Conversions to Booking Portal" },
          { large: "62%", small: "Increase in Revenue" }
        ]}
      />
      <TextWithTitle title="Driving a new solution">
        <p>
          We prototyped, designed and built a new booking journey, moving off
          the legacy system and migrating data onto a new, more performant
          platform, using composable architectures. This process required
          careful management and coordination of third parties to maintain a
          smooth transition and no loss of booking ability.
        </p>
        <p>
          Our new solution increased conversions through to the booking system,
          increased average order value through product upsells and improved the
          user experience.
        </p>
      </TextWithTitle>
      <div className={styles.imageContainer}>
        <picture>
          <source
            srcSet="/CaseStudy/Teamsport-main.jpg"
            media="(min-width: 768px)"
          />
          <img
            className={styles.image}
            src="/CaseStudy/Teamsport-main-mob.jpg"
            alt="Teamsport background image"
          />
        </picture>
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
