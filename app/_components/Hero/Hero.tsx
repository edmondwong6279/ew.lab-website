import ArrowDown from "@/components/ArrowDown";
import Button from "@/components/Button";
import styles from "./hero.module.scss";
import Image from "next/image";
import cx from "classix";

export default function Hero({
  heroId,
  text,
  buttonText,
  buttonLink,
  imageLink,
  imageAlt,
  arrow = false,
  scrollSnap = false
}: {
  heroId: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  imageLink: string;
  imageAlt: string;
  arrow?: boolean;
  scrollSnap?: boolean;
}) {
  return (
    <section
      className={cx(styles.hero, scrollSnap && styles.scrollSnap)}
      id={heroId}
    >
      <div className={styles.textContainer}>
        <h1 className={styles.text}>{text}</h1>
        <div className={styles.buttonContainer}>
          <Button text={buttonText} link={buttonLink} variant="clear" />
        </div>
      </div>
      <Image
        className={styles.image}
        src={imageLink}
        alt={imageAlt}
        height={800}
        width={740}
      />
      {arrow && (
        <div className={styles.arrow}>
          <ArrowDown anchor="#Superdry" />
        </div>
      )}
    </section>
  );
}