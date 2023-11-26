import type { NextPage } from "next";

import styles from "./lists.module.scss";
import { useState } from "react";
import SelectedCustom, {
  TSelectedItem,
} from "@/components/reused/selected-custom/SelectedCustom";
import { listOption } from "@/components/screens/lists/listOption";
import ListsList from "@/components/ui/lists/lists-list/ListsList";

type Props = {};
const Lists: NextPage<Props> = () => {
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
          position={"right"}
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
