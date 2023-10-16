import Image from "next/image";
import Button from "@/components/Button";

import styles from "./case-study.module.scss";

export default function CaseStudy({
  orientation = "portrait",
  imageLink,
  imageAlt,
  text,
  buttonText,
  buttonLink
}: {
  orientation?: "portrait" | "landscape";
  imageLink: string;
  imageAlt: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}) {
  return (
    <div className={styles.container}>
      <Image className={styles.image} alt={imageAlt} src={imageLink} fill />
      <h5>{text}</h5>
      <Button text={buttonText} link={buttonLink} variant="black" />
    </div>
  );
}
