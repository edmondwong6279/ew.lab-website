import ArrowDown from "@/app/_components/ArrowDown";
import PageTitle from "@/app/_components/PageTitle";
import Button from "@/components/Button";

export default function Work() {
  return (
    <main className="flex flex-auto flex-col items-center justify-between w-full relative">
      <PageTitle title="Hasbean" />
      <PageTitle
        title="Combining the right expertise to deliver new approaches and lasting impact"
        variant="work"
      />
      <div className="flex flex-col gap-3 p-3 bg-gray-300">
        <Button
          text={"See our Work"}
          link="/"
          textColor={"#000"}
          borderColor={"#000"}
          backgroundColor={"transparent"}
        />
        <Button
          text={"See our Work"}
          link="/"
          textColor={"#fff"}
          borderColor={"#000"}
          backgroundColor={"#000"}
        />
        <Button
          text={"See our Work"}
          link="/"
          textColor={"#fff"}
          borderColor={"#fff"}
          backgroundColor={"transparent"}
        />
        <Button
          text={"See our Work"}
          link="/"
          textColor={"#E4FF00"}
          borderColor={"#E4FF00"}
          backgroundColor={"transparent"}
        />
      </div>
      <ArrowDown anchor={"#"} />
    </main>
  );
}
