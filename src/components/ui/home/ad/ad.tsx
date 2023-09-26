import { FC } from "react";
import styles from "./ad.module.scss";
import AdSlider from "@/components/ui/home/ad/ad-slider/AdSlider";
import HomeWidget from "@/components/ui/home/ad/home-widget/HomeWidget";

const Ad: FC = () => {
  return (
    <div className={styles.ad}>
      <div className={styles.ad_sliderWrapper}>
        <AdSlider />
      </div>
      <div className={styles.ad_widgetWrapper}>
        <HomeWidget />
      </div>
    </div>
  );
};
export default Ad;
