import LoaderButton from "@/components/reused/loader/loader-button";

import styles from "./sidebar-skeleton.module.scss";
import { FC } from "react";

type Props = {
  pathname: string;
};
const SidebarSkeleton: FC<Props> = ({ pathname }) => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      {arr.map((i) => (
        <li key={i} className={styles.skeleton_item}>
          <div className={styles.skeleton_loaderCircle}>
            <LoaderButton width={"35px"} height={"35px"} color={"#438CED"} />
          </div>
          {pathname === "/dashboard" && (
            <div className={styles.skeleton_loaderLine}>
              <p className={styles.skeleton_loaderLine_text}>Завантаження...</p>
            </div>
          )}
        </li>
      ))}
    </>
  );
};
export default SidebarSkeleton;
