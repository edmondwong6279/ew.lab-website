"use client";

import { calculateOpacity } from "@/utils/index";
import styles from "./carousel-indicator-wrapper.module.scss";
import { usePositionInViewport, useWindowSize } from "@/hooks/index";
import { navBarHeight, homeFeatures } from "@/constants/index";
import CarouselIndicator from "@/components/CarouselIndicatorsWrapper/CarouselIndicators";

export default function CarouselIndicatorWrapper() {
  const scrollPosTop = usePositionInViewport("hero", "outerContainer");
  const scrollPosBottom = usePositionInViewport(
    "lastFeature",
    "outerContainer"
  );
  const { height } = useWindowSize();

  const opacityTop = height
    ? 1 - calculateOpacity(height, scrollPosTop, navBarHeight)
    : 0;
  const opacityBottom = height
    ? 1 - calculateOpacity(height, scrollPosBottom, navBarHeight)
    : 0;

  const opacity = Math.min(opacityTop, opacityBottom);

  return (
    <div
      className={styles.container}
      style={{ opacity, pointerEvents: opacity === 1 ? "auto" : "none" }}
    >
      {homeFeatures.map(({ title }, idx) => (
        <CarouselIndicator key={idx} title={title} link={title} />
      ))}
    </div>
  );
}
