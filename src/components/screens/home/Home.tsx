"use client";

import { type NextPage } from "next";
import { useSelector } from "react-redux";

import styles from "./home.module.scss";

import ListSubjects from "@/components/ui/home/list-subjects/ListSubjects";
import Intro from "@/components/ui/home/intro/intro";
import { RoleEnum } from "@/enums/user/role-enum";
import { selectUser } from "@/redux/user/selectors";

const Home: NextPage = () => {
  const user = useSelector(selectUser);

  return (
    <main className={styles.home}>
      <div>
        <h2 className={styles.home_title}>
          {user?.role === RoleEnum.STUDENT && "Чому ще не на уроці"}
          {user?.role === RoleEnum.TEACHER && "Ви готові викладати"}
          {user?.role === RoleEnum.ADMIN && "Усе готово для навчання"}?
        </h2>
      </div>
      <div className={styles.home_wrapper}>
        <Intro />
        <ListSubjects />
      </div>
    </main>
  );
};

export default Home;
