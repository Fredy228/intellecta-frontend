import { type NextPage } from "next";
import { useState } from "react";

import styles from "./lists.module.scss";

import SelectedCustom, {
  TSelectedItem,
} from "@/components/reused/selected-custom/SelectedCustom";
import ListsList from "@/components/ui/lists/lists-list/ListsList";

import { listOption } from "@/components/screens/lists/listOption";

const Lists: NextPage = () => {
  const [currentOption, setCurrentOption] = useState<TSelectedItem>(
    listOption[0],
  );

  return (
    <main className={styles.lists}>
      <div className={styles.lists_titleWrapper}>
        <h2 className={styles.lists_title}>Усе готово для навчання?</h2>
        <SelectedCustom
          list={listOption}
          currentValue={currentOption}
          setValue={setCurrentOption}
          stylePop={{ top: "calc(100% + 10px)", right: "0" }}
        />
        <div className={styles.lists_createBtnWrapper}>
          <button className={styles.lists_createBtn} type={"button"}></button>
        </div>
      </div>
      <ListsList />
    </main>
  );
};
export default Lists;
