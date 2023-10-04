import styles from "./conference-control.module.scss";
import Link from "next/link";
import {
  IconCamera,
  IconExit,
  IconFullScreen,
  IconMicrophone,
  IconSmsConf,
} from "@/components/reused/Icon/Icon";

const ConferenceControl = () => {
  return (
    <div className={styles.control}>
      <div className={styles.control_wrapper}>
        <ul className={styles.control_list}>
          <li className={`${styles.control_item} ${styles.active}`}>
            <IconMicrophone />
          </li>
          <li className={`${styles.control_item} ${styles.active}`}>
            <IconCamera />
          </li>
          <li className={styles.control_item}>
            <IconSmsConf />
          </li>
          <li className={styles.control_item}>
            <IconFullScreen />
          </li>
        </ul>
        <div className={styles.control_exitWrapper}>
          <Link href={"/dashboard"} className={styles.control_exitLink}>
            Вийти <IconExit />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ConferenceControl;
