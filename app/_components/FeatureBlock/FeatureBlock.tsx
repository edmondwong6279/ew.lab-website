import Image from "next/image";
import Button from "@/components/Button";

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
    <div className="relative">
      {backgroundImage && backgroundImageAlt && (
        <Image alt={backgroundImageAlt} src={backgroundImage} fill />
      )}
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
      <Button text={buttonText} link="/" />
    </div>
  );
}
