import Image from "next/image";

import Button from "@/components/Button";
import clientLogosTop from "@/public/ClientLogos/TopRow.svg";
import clientLogosMiddle from "@/public/ClientLogos/MiddleRow.svg";
import clientLogosBottom from "@/public/ClientLogos/BottomRow.svg";

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
          src={clientLogosTop}
          alt="Grid of client logos: Superdry, Carter Jones, giffgaff"
          width={576}
        />
        <Image
          src={clientLogosMiddle}
          alt="Grid of client logos:Danone, Tevva, Neovest"
          width={576}
        />
        <Image
          src={clientLogosBottom}
          alt="Grid of client logos: Opayo, Hestia, Hasbean"
          width={576}
        />
      </div>
    </div>
  );
}
