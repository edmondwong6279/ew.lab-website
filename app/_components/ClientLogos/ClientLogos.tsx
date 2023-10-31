import Image from "next/image";

import Button from "@/components/Button";
import clientLogosImage from "@/public/ClientLogos.svg";

import styles from "./client-logos.module.scss";

export default function ClientLogos() {
  return (
    <div className={styles.clientLogos}>
      <div className={styles.leftHand}>
        <h1 className={styles.leftText}>
          Partnering with brands that see the world differently.
        </h1>
        <div className={styles.buttonContainer}>
        <Button text={"See our Work"} link={"/work"} variant="clear" />
        </div>
      </div>
      <div className={styles.rightHand}>
        <Image
          src={clientLogosImage}
          fill
          alt="Grid of client logos: Superdry, Carter Jones, giffgaff, Danone, Tevva, Neovest, Opayo, Hestia, Hasbean"
        />
      </div>
    </div>
  );
}
