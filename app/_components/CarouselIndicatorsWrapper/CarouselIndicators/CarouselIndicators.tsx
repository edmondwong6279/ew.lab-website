"use client";

import { interpolateRGB, arrayToRGB, calculateOpacity } from "@/utils/index";
import { usePositionInViewport, useWindowSize } from "@/hooks/index";
import { navBarHeight } from "@/constants/index";

import styles from "./carousel-indicator.module.scss";

export default function CarouselIndicator({
  title,
  link
}: {
  title: string;
  link: string;
}) {
  const scrollPos = usePositionInViewport(title, "outerContainer");
  const { height } = useWindowSize();
  const neon: [number, number, number] = [228, 255, 0];
  const black: [number, number, number] = [30, 31, 32];

  const opacity = calculateOpacity(height, scrollPos, navBarHeight);

  const borderColor = arrayToRGB(interpolateRGB(black, neon, opacity));

  return (
    <a href={`#${link}`} className={styles.container} style={{ borderColor }} />
  );
}
