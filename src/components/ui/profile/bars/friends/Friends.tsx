import { IconFriends } from "@/components/reused/Icon/Icon";
import styles from "./friends.module.scss";
export const Friends = () => {
  return (
    <div className={styles.friendWrapper}>
      <div className={styles.infoWrapper}>
        <h1>Друзі</h1>
        <h2>525</h2>
      </div>
      <IconFriends />
    </div>
  );
};
