// WIP
import Accordion from "@/components/Accordion";
import ArrowDown from "@/components/ArrowDown";
import Button from "@/components/Button";
import ClientLogos from "@/components/ClientLogos";
import PageTitle from "@/components/PageTitle";

export default function Work() {
  return (
    <main className="flex flex-auto flex-col items-center justify-between w-full relative">
      <PageTitle title="Hasbean" />
      <PageTitle
        title="Combining the right expertise to deliver new approaches and lasting impact"
        variant="work"
      />
      <div className="flex flex-col gap-3 p-3 bg-gray-300">
        <Button text={"See our Work"} link="/" variant="black" />
        <Button text={"See our Work"} link="/" variant="clear" />
        <Button text={"See our Work"} link="/" variant="white" />
        <Button text={"See our Work"} link="/" variant="yellow" />
        <Button text={"See our Work"} link="/" variant="yellow-line" />
      </div>
      <ArrowDown anchor={"#"} />
      <Accordion />
      <ClientLogos />
    </main>
  );
}
