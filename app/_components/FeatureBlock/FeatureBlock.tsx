import Image from "next/image";
import Button from "@/components/Button";

import styles from "./feature-block.module.scss";

export default function FeatureBlock({
  title,
  subtitle,
  buttonText,
  backgroundImage,
  backgroundImageAlt
}: {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
}) {
  return (
    <div className="relative h-screen w-screen">
      {backgroundImage && backgroundImageAlt && (
        <Image
          className="-z-10 object-cover"
          alt={backgroundImageAlt}
          src={backgroundImage}
          fill
        />
      )}
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
      <Button
        text={buttonText}
        link="/"
        textColor={"#000"}
        borderColor={"#000"}
        backgroundColor={"transparent"}
      />
    </div>
  );
}
