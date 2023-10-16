// WIP
import PageTitle from "@/components/PageTitle";
import { projectsArray } from "@/constants/index";
import Link from "next/link";
import styles from "./work.module.scss";

export default function Work() {
  return (
    <main>
      <PageTitle
        title="Combining the right expertise to deliver new approaches and lasting impact"
        variant="work"
      />
      <ol className={styles.workList}>
        {projectsArray.map(({ link, text }, idx) => (
          <li key={idx}>
            <Link href={`/work/${link}`}>{text}</Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
