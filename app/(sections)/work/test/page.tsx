"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Mousewheel } from "swiper/modules";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./test.module.scss";
import FeatureBlock from "@/components/FeatureBlock";
import ClientLogos from "@/components/ClientLogos";

export default function test() {
  const pagination = {
    clickable: true,
    type: "custom" as "custom",
    renderCustom: (_swiper: any, current: number, total: number) => {
      return `<h1 class='thing' style={{right: 0}}>${current} / ${total} 0 afafadsfnsjk</h1>`;
    }
  };
  return (
    <div>
      <Swiper
        className={styles.testContainer}
        direction={"vertical"}
        modules={[Pagination, Scrollbar, A11y, Mousewheel]}
        mousewheel={{
          // forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true
        }}
        pagination={pagination}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
      >
        <SwiperSlide className={styles.slide}>
          <FeatureBlock
            title={"Superdry"}
            subtitle={"Redesigning the mobile e-commerce experience"}
            buttonText={"View Superdry"}
            buttonLink={"/work/superdry"}
            backgroundImage={"/FeatureBlocks/Superdry.png"}
            backgroundImageAlt={"Superdry background image"}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <FeatureBlock
            title={"Teamsport"}
            subtitle={"Moving to a performant composable platform"}
            buttonText={"View Teamsport"}
            buttonLink={"/work/superdry"}
            backgroundImage={"/FeatureBlocks/Teamsport.png"}
            backgroundImageAlt={"Teamsport background image"}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <FeatureBlock
            title={"Neovest"}
            subtitle={"Refreshing the brand and website for a global hedgfund"}
            buttonText={"View Neovest"}
            buttonLink={"/work/superdry"}
            backgroundImage={"/FeatureBlocks/Neovest.png"}
            backgroundImageAlt={"Neovest background image"}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <FeatureBlock
            title={"Hestia"}
            subtitle={"Designing for empathy"}
            buttonText={"View Hestia"}
            buttonLink={"/work/superdry"}
            backgroundImage={"/FeatureBlocks/Hestia.png"}
            backgroundImageAlt={"Hestia background image"}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <FeatureBlock
            title={"Tevva"}
            subtitle={"Launching Tevva's Hydrogen Electric Truck brand"}
            buttonText={"View Tevva"}
            buttonLink={"/work/superdry"}
            backgroundImage={"/FeatureBlocks/Tevva.png"}
            backgroundImageAlt={"Tevva background image"}
          />
        </SwiperSlide>
      </Swiper>
      <ClientLogos />
    </div>
  );
}
