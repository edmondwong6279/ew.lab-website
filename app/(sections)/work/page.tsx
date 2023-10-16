// WIP
import PageTitle from "@/components/PageTitle";
import { projectsArray } from "@/constants/index";
import Link from "next/link";

export default function Work() {
  return (
    <main className="">
      <PageTitle
        title="Combining the right expertise to deliver new approaches and lasting impact"
        variant="work"
      />
      <ol className="flex justify-between">
        {projectsArray.map(({ link, text }, idx) => (
          <li key={idx}>
            <Link href={`/work/${link}`}>{text}</Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
