import { projectsArray } from "@/constants/index";
import Link from "next/link";

export default function Work() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Work Landing Page</h1>
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
