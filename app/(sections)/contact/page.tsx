import FeatureBlockStatic from "@/components/FeatureBlockStatic";
import styles from "./contact.module.scss";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className={styles.container}>
      <div className={styles.form}>
        <ContactForm />
      </div>
      <FeatureBlockStatic
        title={"Teamsport"}
        subtitle={"Moving to a performant composable platform"}
        buttonText={"View Teamsport"}
        buttonLink={"/work/teamsport"}
        backgroundImage={"/FeatureBlocks/Teamsport.png"}
        backgroundImageAlt={"Teamsport background image"}
      />
    </main>
  );
}
