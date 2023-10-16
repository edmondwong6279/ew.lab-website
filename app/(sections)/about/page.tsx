// WIP
import Accordion from "@/components/Accordion";
import ArrowDown from "@/components/ArrowDown";
import Button from "@/components/Button";
import ClientLogos from "@/components/ClientLogos";
import PageTitle from "@/components/PageTitle";

import styles from "./about.module.scss";

export default function Work() {
  return (
    <main className={styles.container}>
      <PageTitle title="Hasbean" />
      <PageTitle
        title="Combining the right expertise to deliver new approaches and lasting impact"
        variant="work"
      />
      <div className={styles.buttonContainer}>
        <Button text={"See our Work"} link="/" variant="black" />
        <Button text={"See our Work"} link="/" variant="clear" />
        <Button text={"See our Work"} link="/" variant="white" />
        <Button text={"See our Work"} link="/" variant="yellow" />
        <Button text={"See our Work"} link="/" variant="yellow-line" />
      </div>
      <ArrowDown anchor={"#"} />
      {/* <Accordion /> */}
      <ClientLogos />
    </main>
  );
}
