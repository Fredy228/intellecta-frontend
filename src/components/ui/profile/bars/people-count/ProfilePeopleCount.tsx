import { IconFriends } from "@/components/reused/Icon/Icon";
import styles from "./peopleCount.module.scss";
import { Color } from "@/types/color";
export const ProfilePeopleCount = ({
  count,
  title,
  color,
}: {
  count: number;
  title: string;
  color: Color;
}) => {
  return (
    <div className={styles.count_wrapper}>
      <div className={styles.info_wrapper}>
        <span className={styles.info_quantity}>
          {count.toLocaleString() ?? <code>undefined</code>}
        </span>
        <span className={styles.info_title}>
          {title ?? <code>undefined</code>}
        </span>
      </div>
      <div style={{ stroke: color }}>
        <IconFriends />
      </div>
    </div>
  );
};
