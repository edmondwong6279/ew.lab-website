import { homeFeatures } from "@/constants/index";
import FeatureBlock from "@/components/FeatureBlock";
import CarouselIndicatorsWrapper from "@/components/CarouselIndicatorsWrapper";

import SuperdryImage from "@/public/FeatureBlocks/Superdry.jpg";
import TeamsportImage from "@/public/FeatureBlocks/Teamsport.jpg";
import NeovestImage from "@/public/FeatureBlocks/Neovest.jpg";
import HestiaImage from "@/public/FeatureBlocks/Hestia.jpg";
import TevvaImage from "@/public/FeatureBlocks/Tevva.jpg";

export default function FeatureCarousel() {
  const imageMapper = {
    Superdry: SuperdryImage,
    Teamsport: TeamsportImage,
    Neovest: NeovestImage,
    Hestia: HestiaImage,
    Tevva: TevvaImage
  };

  return (
    <>
      <CarouselIndicatorsWrapper />
      {homeFeatures.map(
        (
          { title, subtitle, buttonText, buttonLink, backgroundImageAlt },
          idx
        ) => (
          <FeatureBlock
            key={idx}
            title={title}
            subtitle={subtitle}
            buttonText={buttonText}
            buttonLink={buttonLink}
            backgroundImage={imageMapper[title]}
            backgroundImageAlt={backgroundImageAlt}
          />
        )
      )}
    </>
  );
}
