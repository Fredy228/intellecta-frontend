import styles from "./plug.module.scss";
export const PartitionPlugVariantOne = () => {
    return (
        <div className={styles.plug} >
            <div className={styles.plug_wrapper}>
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
            <div className={styles.star1}></div>
            <div className={styles.star2}></div>
            <div className={styles.star3}></div>
            <div className={styles.star4}></div>
            <div className={styles.star5}></div>
            <div className={styles.star6}></div>
            <div className={styles.star7}></div>
            <div className={styles.star8}></div>
            <div className={styles.star9}></div>
            <div className={styles.star10}></div>
            <div className={styles.star11}></div>
            <div className={styles.star12}></div>
            <div className={styles.star13}></div>
        </div>
    );
};

