"use client";

import { type FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/scss";
// import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "./custom-style-swiper.scss";
import styles from "./ad-slider.module.scss";

import { listSlides } from "@/components/ui/home/intro/ad-slider/list-slides";

SwiperCore.use([Autoplay, Pagination]);

const AdSlider: FC = () => {
  return (
    <div className={styles.adSlider_innerGrid}>
      <div className={styles.adSlider_carouselWrap}>
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={20}
          className={styles.adSlider}
        >
          {listSlides.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.adSlider_item}>
                <Image
                  src={`${process.env.NEXT_URL}/${item.image}`}
                  alt={"Incubator advertising"}
                  width={"1066"}
                  height={"600"}
                  quality={100}
                  className={styles.adSlider_image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default AdSlider;
