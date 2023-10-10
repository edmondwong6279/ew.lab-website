import Image from "next/image";
import Button from "@/components/Button";
import ArrowDown from "@/components/ArrowDown";
import FeatureBlock from "@/app/_components/FeatureBlock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Image
        src="/FeatureBlocks/RiverrHero-Image.png"
        priority
        fill
        alt={"asd"}
        style={{ zIndex: -1, objectFit: "cover" }}
      /> */}
      <h1>HOME PAGE</h1>
      <Button text="See our work" link="/work" />

      <ArrowDown anchor="#test" />

      <FeatureBlock
        title={"Superdry"}
        subtitle={"Redesigning the mobile e-commerce experience"}
        buttonText={"View Superdry"}
        backgroundImage={"/FeatureBlocks/RiverrHero-Image.png"}
        backgroundImageAlt={"asdf"}
      />
      <div id="test">Thing here</div>
    </main>
  );
}
