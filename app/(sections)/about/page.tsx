import Image from "next/image";

import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import ClientLogos from "@/components/ClientLogos";
import FeatureBlockStatic from "@/components/FeatureBlockStatic";
import LeftAlignedText from "@/components/LeftAlignedText";
import Accordion from "@/components/Accordion";
import whatWeDoImage from "@/public/About-WhatWeDo.png";
import SuperdryImage from "@/public/FeatureBlocks/Superdry.png";
import AboutImage from "@/public/About-Hero.png";

import styles from "./about.module.scss";

export default function About() {
  return (
    <main className={styles.container}>
      <Hero
        heroId={"0"}
        text={"Unlocking magic with insight-led design and technology."}
        buttonText={"Get in touch"}
        buttonLink={"/contact"}
        imageLink={AboutImage}
        imageAlt={"About image"}
        arrow={false}
      />
      <LeftAlignedText>
        <p>
          We aim to become your long-term experience design, insights and
          technology partner, delivering for you with quality and speed.
          Designing and building beautiful and creative scalable solutions that
          are exceptional experiences, that meet your business needs and are
          centred in deep insight, helping you to create lasting relationships
          with your customers.
        </p>
      </LeftAlignedText>
      <div className={styles.whatWeDo}>
        <div className={styles.accordionContainer}>
          <Accordion />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={whatWeDoImage}
            width={589}
            height={760}
            alt="About what we do background image"
          />
        </div>
      </div>
      <div className={styles.clientLogoContainer}>
        <ClientLogos />
      </div>
      <FeatureBlockStatic
        title={"Superdry"}
        subtitle={"Redesigning the mobile e-commerce experience"}
        buttonText={"View Superdry"}
        buttonLink={"/work/superdry"}
        backgroundImage={SuperdryImage}
        backgroundImageAlt={"Superdry background image"}
      />
      <ContactForm />
    </main>
  );
}
