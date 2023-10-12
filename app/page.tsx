import Image from "next/image";

import Button from "@/components/Button";
import ArrowDown from "@/components/ArrowDown";
import FeatureBlock from "@/app/_components/FeatureBlock";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between">
      <section className="">
        <div>
          <h1>Delivering insight-led, impactful digital experiences.</h1>
          <Button
            text="See our work"
            link="/work"
            textColor={"#000"}
            borderColor={"#000"}
            backgroundColor={"transparent"}
          />
        </div>
        <div>
          <Image
            className="-z-10"
            alt={"Riverr Hero Image"}
            src={"/RiverrHero-Image.png"}
            fill
          />
        </div>

        <ArrowDown anchor="#test" />
      </section>

      <FeatureBlock
        title={"Superdry"}
        subtitle={"Redesigning the mobile e-commerce experience"}
        buttonText={"View Superdry"}
        backgroundImage={"/FeatureBlocks/Superdry.png"}
        backgroundImageAlt={"Superdry background image"}
      />

      <FeatureBlock
        title={"Teamsport"}
        subtitle={"Moving to a performant composable platform"}
        buttonText={"View Teamsport"}
        backgroundImage={"/FeatureBlocks/Teamsport.png"}
        backgroundImageAlt={"Teamsport background image"}
      />

      <FeatureBlock
        title={"Neovest"}
        subtitle={"Refreshing the brand and website for a global hedgfund"}
        buttonText={"View Neovest"}
        backgroundImage={"/FeatureBlocks/Neovest.png"}
        backgroundImageAlt={"Neovest background image"}
      />

      <FeatureBlock
        title={"Hestia"}
        subtitle={"Designing for empathy"}
        buttonText={"View Hestia"}
        backgroundImage={"/FeatureBlocks/Hestia.png"}
        backgroundImageAlt={"Hestia background image"}
      />

      <FeatureBlock
        title={"Tevva"}
        subtitle={"Launching Tevva's Hydrogen Electric Truck brand"}
        buttonText={"View Tevva"}
        backgroundImage={"/FeatureBlocks/Tevva.png"}
        backgroundImageAlt={"Tevva background image"}
      />

      <div id="test">Thing here</div>
    </main>
  );
}
