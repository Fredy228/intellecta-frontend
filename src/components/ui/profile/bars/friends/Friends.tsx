import { IconFriends } from "@/components/reused/Icon/Icon";
import styles from "./friends.module.scss";
export const Friends = () => {
  return (
    <div className={styles.friend_wrapper}>
      <div className={styles.info_wrapper}>
        <h1 className={styles.info_title}>Друзі</h1>
        <h2 className={styles.info_quantity}>525</h2>
      </div>
      <IconFriends />
    </div>
  );
};
