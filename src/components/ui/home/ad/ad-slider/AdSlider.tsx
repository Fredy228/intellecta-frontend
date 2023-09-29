"use client";

import { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

import styles from "./ad-slider.module.scss";

const AdSlider: FC = () => {
  const settings = {
    infiniteLoop: true,
    stopOnHover: true,
    autoPlay: true,
    interval: 5000,
    showStatus: false,
    dynamicHeight: false,
    showThumbs: false,
    emulateTouch: true,
    // centerMode: true,
    // centerSlidePercentage: 100,
  };

  return (
    <div className={styles.adSlider_innerGrid}>
      <div className={styles.adSlider_carouselWrap}>
        <Carousel {...settings} className={styles.adSlider}>
          <div className={styles.adSlider_item}>
            <Image
              src={"http://localhost:3000/img/ad/incubator.png"}
              alt={"Incubator advertising"}
              width={"599"}
              height={"336"}
              className={styles.adSlider_image}
            />
          </div>
          <div>
            <Image
              src={"http://localhost:3000/img/ad/img-for-slide.png"}
              alt={""}
              width={"550"}
              height={"296"}
              className={styles.adSlider_image}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default AdSlider;
