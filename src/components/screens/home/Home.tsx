"use client";

import { type NextPage } from "next";
import { useSession } from "next-auth/react";

import styles from "./home.module.scss";

import ListSubjects from "@/components/ui/home/list-subjects/ListSubjects";
import Intro from "@/components/ui/home/intro/intro";

import { UserInterface } from "@/interfaces/user";
import { RoleEnum } from "@/enums/user/role-enum";

const Home: NextPage = () => {
  const { data } = useSession();
  const currentUser = data?.user as UserInterface;

  return (
    <main className={styles.home}>
      <div>
        <h2 className={styles.home_title}>
          {currentUser?.role === RoleEnum.STUDENT && "Чому ще не на уроці"}
          {currentUser?.role === RoleEnum.TEACHER && "Ви готові викладати"}
          {currentUser?.role === RoleEnum.ADMIN && "Усе готово для навчання"}?
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
