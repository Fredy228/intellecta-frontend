import styles from "./schedule.module.scss";
import { NextPage } from "next";
import InDevelop from "@/components/ui/in-develop/InDevelop";

const Schedule: NextPage = () => {
  return (
    <main className={styles.schedule}>
      <div>
        <h2 className={styles.schedule_title}>Твій розклад:</h2>
      </div>
      <div className={styles.schedule_wrapper}>
        <InDevelop name={"Розклад"} />
      </div>
    </main>
  );
};
export default Schedule;
