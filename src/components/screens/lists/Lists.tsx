"use client";

import { FC, ReactElement, useEffect } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import classNames from "classnames/bind";
import { useRouter } from "next/navigation";

import styles from "./lists.module.scss";

import { SearchField } from "@/components/reused/fields/search/SearchField";
import { TeacherList } from "@/components/ui/lists/teacher-list/TeacherList";
import { StudentList } from "@/components/ui/lists/student-list/StudentList";
import { GroupList } from "@/components/ui/lists/group-list/GroupList";
import { listOption } from "@/components/screens/lists/listOption";
import { listTypeEnum } from "@/enums/lists/listType-enum";
import { getToastify } from "@/services/toastify";
import { ToastifyEnum } from "@/enums/toastify-enum";

const cx = classNames.bind(styles);

type Props = {
  type: string | null;
};

const listTabs: { [key in listTypeEnum]: ReactElement } = {
  [listTypeEnum.TEACHER]: <TeacherList />,
  [listTypeEnum.STUDENT]: <StudentList />,
  [listTypeEnum.GROUP]: <GroupList />,
};

const Lists: FC<Props> = ({ type }) => {
  const router = useRouter();

  useEffect(() => {
    if (type === null) router.push(`/dashboard/lists?type=teacher`);
    else if (!Object.values(listTypeEnum).includes(type as listTypeEnum))
      getToastify("Невірний тип списку", ToastifyEnum.ERROR);
  }, []);

  return (
    <main className={styles.lists}>
      <div className={styles.lists_titleWrapper}>
        <h2 className={styles.lists_title}>Усе готово для навчання?</h2>
      </div>
      <div className={styles.lists_listBlock}>
        <ul className={styles.lists_navigationList}>
          {listOption.map(({ id, name, value }) => (
            <li
              key={id}
              className={cx({
                lists_navItem: true,
                active: type === value,
              })}
            >
              <button
                type="button"
                onClick={() => router.push(`/dashboard/lists?type=${value}`)}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.lists_body}>
          <div className={styles.lists_managment}>
            <div className={styles.lists_buttons}>
              <button className={styles.lists_manageBtn}>
                <FilterListIcon
                  className={styles.lists_iconBtn}
                  color="primary"
                />
                <p className={styles.lists_textBtn}>ФІЛЬТР</p>
              </button>
              <button className={styles.lists_manageBtn}>
                <FileDownloadOutlinedIcon
                  className={styles.lists_iconBtn}
                  color="primary"
                />
                <p className={styles.lists_textBtn}>ДОДАТИ</p>
              </button>
            </div>
            <SearchField />
          </div>
          {listTabs[type as listTypeEnum]}
        </div>
      </div>
    </main>
  );
};
export default Lists;
