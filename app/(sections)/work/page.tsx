// WIP
import PageTitle from "@/components/PageTitle";
import { projectsArray } from "@/constants/index";
import Link from "next/link";
import styles from "./work.module.scss";
import WorkCaseStudy from "@/components/WorkCaseStudy";
import Button from "@/components/Button";

export default function Work() {
  return (
    <main>
      <PageTitle
        title="Combining the right expertise to deliver new approaches and lasting impact"
        variant="work"
      />
      <div className={styles.workList}>
        {projectsArray.map(({ link, text, imageSrc, subtitle }, idx) => (
          <>
            <WorkCaseStudy
              key={idx}
              idx={idx}
              imageSrc={imageSrc}
              imageAlt={"asdasdf"}
              text={subtitle}
              button={
                <Button
                  text={`See ${text}`}
                  link={`/work/${link}`}
                  variant={"white"}
                />
              }
            />
          </>
        ))}
      </div>
    </main>
  );
}
