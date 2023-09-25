import { NextPage } from "next";
import ListSubjects from "@/components/ui/home/list-subjects/list-subjects";
import Ad from "@/components/ui/home/ad/ad";
import styles from "./home.module.scss";

const Home: NextPage = () => {
  return (
    <main className={styles.home}>
      <h2 className={styles.home_title}>Чому ще не на уроці?</h2>
      <div className={styles.home_wrapper}>
        <Ad />
        <ListSubjects />
      </div>
    </main>
  );
};

export default Home;
