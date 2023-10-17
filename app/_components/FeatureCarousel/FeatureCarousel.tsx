import { homeFeatures } from "@/constants/index";
import FeatureBlock from "@/components/FeatureBlock";
import CarouselIndicatorsWrapper from "@/components/CarouselIndicatorsWrapper";

export default function FeatureCarousel() {
  return (
    <>
      <CarouselIndicatorsWrapper />
      {homeFeatures.map(
        (
          {
            title,
            subtitle,
            buttonText,
            buttonLink,
            backgroundImage,
            backgroundImageAlt
          },
          idx
        ) => (
          <FeatureBlock
            key={idx}
            idx={idx}
            title={title}
            subtitle={subtitle}
            buttonText={buttonText}
            buttonLink={buttonLink}
            backgroundImage={backgroundImage}
            backgroundImageAlt={backgroundImageAlt}
          />
        )
      )}
    </>
  );
}
