import styles from "./plug3.module.scss";
import {IconRobot} from "@/components/reused/Icon/Icon";
export const PartitionPlugVariantThree = () => {
    return (
        <div className={styles.plug}>
            <div className={styles.plug_wrapper}>
                <div className={styles.robot_bg}>
                    <IconRobot/>
                </div>
                <h1 className={styles.plug_title}>Ви не підключені
                    до жодного навчального процесу</h1>
                <div className={styles.cube__wrapper}>
                    <div className={styles.cube}>
                        <div className={`${styles.front} ${styles.side}`}></div>
                        <div className={`${styles.top} ${styles.side}`}></div>
                        <div className={`${styles.right_side} ${styles.side}`}></div>
                    </div>
                </div>
            </div>
            <div className={styles.cube_wrapper_second}>
                <div className={styles.cube_second}>
                    <div className={`${styles.front_second} ${styles.side_second}`}></div>
                    <div className={`${styles.top_second} ${styles.side_second}`}></div>
                    <div className={`${styles.right_side_second} ${styles.side_second}`}></div>
                </div>
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
    );
};

