import { type FC } from "react";
import Image from "next/image";

import styles from "./widget-chats.module.scss";

type Props = {};

const listUser: Array<{ id: number; url: string }> = [
  {
    id: 1,
    url: "img/avatars/avatar-1.png",
  },
  {
    id: 2,
    url: "img/avatars/avatar-2.png",
  },
  {
    id: 3,
    url: "img/avatars/avatar-3.png",
  },
  {
    id: 4,
    url: "img/avatars/avatar-4.png",
  },
  {
    id: 5,
    url: "img/avatars/avatar-5.png",
  },
];
const WidgetChats: FC<Props> = () => {
  return (
    <div className={styles.widgetChats}>
      {/*<span className={styles.widgetChats_option}>..</span>*/}
      <h4 className={styles.widgetChats_title}>Наш чат</h4>
      <p className={styles.widgetChats_text}>
        Чат учнів, для усіх хто забув записати дз
      </p>
      <div className={styles.widgetChats_bottomWrapper}>
        <ul className={styles.widgetChats_userList}>
          {listUser.map(({ id, url }) => (
            <li key={id} className={styles.widgetChats_userItem}>
              <Image
                src={`${process.env.NEXT_URL}/${url}`}
                alt={"mini avatars"}
                width={"24"}
                height={"24"}
                className={styles.homeWidget_itemUserImg}
              />
            </li>
          ))}
        </ul>
        <span className={styles.widgetChats_notice}>22</span>
      </div>
    </div>
  );
};
export default WidgetChats;
