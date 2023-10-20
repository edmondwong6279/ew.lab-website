import FeatureBlockStatic from "@/components/FeatureBlockStatic";
import ContactForm from "@/components/ContactForm";
import TeamsportImage from "@/public/FeatureBlocks/Teamsport.png";

import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <main className={styles.container}>
      <ContactForm />

      <FeatureBlockStatic
        title={"Teamsport"}
        subtitle={"Moving to a performant composable platform"}
        buttonText={"View Teamsport"}
        buttonLink={"/work/teamsport"}
        backgroundImage={TeamsportImage}
        backgroundImageAlt={"Teamsport background image"}
      />
    </main>
  );
}
