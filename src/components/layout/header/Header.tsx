import { FC } from "react";

import stylesCommon from "@/styles/common.module.scss";
import styles from "./header.module.scss";
import { IconNotific, IconSearch } from "@/components/reused/Icon/Icon";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={stylesCommon.container}>
        <div className={styles.header_inner}>
          <div className={styles.header_userName}>
            <p>Привіт Олекій,</p>
          </div>
          <ul className={styles.header_listNotificCenter}>
            <li className={styles.header_itemNotificCenter}>
              <IconSearch />
            </li>
            <li className={styles.header_itemNotificCenter}>
              <IconNotific />
              <div className={styles.header_wrapperCountNotificCenter}>
                <span className={styles.header_countNotificCenter}>2</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
