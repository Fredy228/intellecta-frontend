import { type FC } from "react";

import styles from "./intro.module.scss";

import AdSlider from "@/components/ui/home/intro/ad-slider/AdSlider";
import HomeWidget from "@/components/ui/home/intro/home-widget/HomeWidget";

const Intro: FC = () => {
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
export default Intro;
