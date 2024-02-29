import styles from "./plug5.module.scss";
import {IconRobotWithBooks} from "@/components/reused/Icon/Icon";
export const PartitionPlugVariantFive = () => {
    return (
        <div className={styles.plug}>
            <div className={styles.plug_wrapper}>
                <div className={styles.robot_bg}>
                    <IconRobotWithBooks/>
                </div>
                <div className={styles.plug_inner_bg}>
                    <h1 className={styles.plug_title}>Ви не підключені
                        до жодного навчального процесу
                    </h1>
                </div>
                <div className={`${styles.star} ${styles.star1} ${styles.star_white}`}></div>
                <div className={`${styles.star} ${styles.star2} ${styles.star_green}`}></div>
                <div className={`${styles.star} ${styles.star3} ${styles.star_green}`}></div>
                <div className={`${styles.star} ${styles.star4} ${styles.star_green}`}></div>
                <div className={`${styles.star} ${styles.star5} ${styles.star_white}`}></div>
                <div className={`${styles.star} ${styles.star6} ${styles.star_white}`}></div>
                <div className={`${styles.star} ${styles.star7} ${styles.star_white}`}></div>
                <div className={`${styles.star} ${styles.star8} ${styles.star_white}`}></div>
                <div className={`${styles.star} ${styles.star9} ${styles.star_white}`}></div>
                <div className={`${styles.star} ${styles.star10} ${styles.star_white}`}></div>
                <div className={`${styles.star} ${styles.star11} ${styles.star_white}`}></div>
                <div className={`${styles.star} ${styles.star12} ${styles.star_white}`}></div>
                <div className={`${styles.star} ${styles.star13} ${styles.star_white}`}></div>
            </div>

        </div>
    );
};

