import styles from "./about.module.scss";
import Hero from "@/app/_components/Hero";
import ContactForm from "@/app/_components/ContactForm";
import ClientLogos from "@/app/_components/ClientLogos";
import FeatureBlockStatic from "@/app/_components/FeatureBlockStatic";

export default function Work() {
  return (
    <main className={styles.container}>
      <Hero
        heroId={"0"}
        text={"Unlocking magic with insight-led design and technology."}
        buttonText={"Get in touch"}
        buttonLink={"#contact"}
        imageLink={"/About-Hero.png"}
        imageAlt={"About image"}
        arrow={false}
      />
      <h1>TODO block of text</h1>
      <h1>TODO accordion and image</h1>
      <ClientLogos />
      <FeatureBlockStatic
        title={"Superdry"}
        subtitle={"Redesigning the mobile e-commerce experience"}
        buttonText={"View Superdry"}
        buttonLink={"/work/superdry"}
        backgroundImage={"/FeatureBlocks/Superdry.png"}
        backgroundImageAlt={"Superdry background image"}
      />
      <ContactForm />
    </main>
  );
}
