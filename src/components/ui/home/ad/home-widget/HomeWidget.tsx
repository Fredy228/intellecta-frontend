import { FC } from "react";
import { widgetList } from "@/components/ui/home/ad/home-widget/widgetList";

import styles from "./home-widget.module.scss";
import Image from "next/image";

const HomeWidget: FC = () => {
  return (
    <div className={styles.homeWidget_flex}>
      <ul className={styles.homeWidget_list}>
        {widgetList.map((item) => (
          <li key={item.id} className={styles.homeWidget_item}>
            <span className={styles.homeWidget_itemOption}>..</span>
            <h4 className={styles.homeWidget_itemTitle}>{item.title}</h4>
            <p className={styles.homeWidget_itemText}>{item.text}</p>
            <div className={styles.homeWidget_itemBottomWrapper}>
              <ul className={styles.homeWidget_itemUserList}>
                {item.urls.map(({ id, url }) => (
                  <li key={id} className={styles.homeWidget_itemUserItem}>
                    <Image
                      src={`${process.env.NEXT_URL}/${url}`}
                      alt={""}
                      width={"24"}
                      height={"24"}
                      className={styles.homeWidget_itemUserImg}
                    />
                  </li>
                ))}
              </ul>
              <span className={styles.homeWidget_itemNotice}>
                {item.notice}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HomeWidget;
