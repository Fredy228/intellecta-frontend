import { TestList, ITestList } from "../../list";
import { TestCard } from "../TestCard";
import styles from "../TestCard.module.scss";
export default function TestCardList() {
  return (
    <div className={styles.cardWrapper}>
      <h1 className={styles.title}>
        Чому освітні курси - це ефективний інструмент розвитку?
      </h1>
      <ul className={styles.card_list}>
        {TestList.map((course: ITestList) => (
          <TestCard key={course.id} {...course} />
        ))}
      </ul>
    </div>
  );
}
