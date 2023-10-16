import Image from "next/image";

import Button from "@/components/Button";

import styles from "./client-logos.module.scss";

export default function ClientLogos() {
  return (
    <div className={styles.clientLogos}>
      <div className={styles.leftHand}>
        <h1 className={styles.leftText}>
          Partering with brands that see the world differently
        </h1>
        <Button text={"See our Work"} link={"#"} variant="clear" />
      </div>
      <div className={styles.rightHand}>
        <Image
          src={"/ClientLogos.svg"}
          width={584}
          height={325}
          alt="Grid of client logos: Superdry, Carter Jones, giffgaff, Danone, Tevva, Neovest, Opayo, Hestia, Hasbean"
        />
      </div>
    </div>
  );
}
