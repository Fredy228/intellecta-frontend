import { FC } from "react";

import styles from "./header.module.scss";
import { IconNotific, IconSetting } from "@/components/reused/Icon/Icon";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <div className={styles.header_userName}>
          <p>Привіт Олекій,</p>
        </div>
        <ul className={styles.header_listNotificCenter}>
          <li className={styles.header_itemNotificCenter}>
            <IconSetting />
          </li>
          <li className={styles.header_itemNotificCenter}>
            <IconNotific />
            <div className={styles.header_wrapperCountNotificCenter}>
              <span className={styles.header_countNotificCenter}>2</span>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
