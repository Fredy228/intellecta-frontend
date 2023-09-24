import { NextPage } from "next";
import { IconSearch } from "@/components/reused/Icon/Icon";
import styles from "./home.module.scss";
const Home: NextPage = () => {
  return (
    <main>
      <h1>Домашня сторінка</h1>
      <div className={styles.wrapperIcon}>
        <IconSearch className={styles.icon} />
      </div>
    </main>
  );
};

export default Home;
