import styles from "@/components/ui/profile/bars/rating/rating.module.scss";

export const Rating = ({
  rating,
  inline,
}: {
  rating: number;
  inline?: boolean;
}) => {
  return (
    <div
      className={styles.rating_wrapper + (inline ? " " + styles.inline : "")}
    >
      <div className={styles.rate}>
        <h2 className={styles.rate_title}>Рейтинг</h2>
        <p className={styles.rate_numbers}>{rating}/10</p>
      </div>
    </div>
  );
};
