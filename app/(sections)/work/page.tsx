import PageTitle from "@/components/PageTitle";
import { projectsArray } from "@/constants/index";
import WorkCaseStudy from "@/components/WorkCaseStudy";
import Button from "@/components/Button";
import SuperdryImage from "@/public/WorkLanding/Superdry.png";
import iSkyImage from "@/public/WorkLanding/isky.png";
import HestiaImage from "@/public/WorkLanding/Hestia.png";
import NeovestImage from "@/public/WorkLanding/Neovest.png";
import TeamsportImage from "@/public/WorkLanding/Teamsport.png";
import TevvaImage from "@/public/WorkLanding/Tevva.png";
import HasbeanImage from "@/public/WorkLanding/Hasbean.png";

import styles from "./work.module.scss";

export default function Work() {
  const imageMapper = {
    Superdry: SuperdryImage,
    iSky: iSkyImage,
    Hestia: HestiaImage,
    Neovest: NeovestImage,
    Teamsport: TeamsportImage,
    Tevva: TevvaImage,
    Hasbean: HasbeanImage
  };

  return (
    <main>
      <PageTitle
        title="Combining the right expertise to deliver new approaches and lasting impact"
        variant="work"
      />
      <div className={styles.workList}>
        {projectsArray.map(({ link, text, subtitle }, idx) => (
          <WorkCaseStudy
            key={idx}
            idx={idx}
            imageSrc={imageMapper[text]}
            imageAlt={`${text} image`}
            text={subtitle}
            button={
              <Button
                text={`See ${text}`}
                link={`/work/${link}`}
                variant={"white"}
              />
            }
          />
        ))}
      </div>
    </main>
  );
}
