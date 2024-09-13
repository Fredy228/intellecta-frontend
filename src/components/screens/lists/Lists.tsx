"use client";

import { FC, ReactElement, useEffect, useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import classNames from "classnames/bind";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

import styles from "./lists.module.scss";

import { SearchField } from "@/components/reused/fields/search/SearchField";
import { TeacherList } from "@/components/ui/lists/teacher-list/TeacherList";
import { StudentList } from "@/components/ui/lists/student-list/StudentList";
import { GroupList } from "@/components/ui/lists/group-list/GroupList";
import { listOption } from "@/components/screens/lists/listOption";
import { listTypeEnum } from "@/enums/lists/listType-enum";
import { UserFilterType } from "@/types/user";
import { GroupFilterType } from "@/types/group";
import { SubjectList } from "@/components/ui/lists/subject-list/SubjectList";
import { SubjectFilterType } from "@/types/subject";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { SubjectAdding } from "@/components/ui/modals/subject-adding/SubjectAdding";
import { StudentAdding } from "@/components/ui/modals/student-adding/StudentAdding";
import { TeacherAdding } from "@/components/ui/modals/teacher-adding/TeacherAdding";
import { GroupAdding } from "@/components/ui/modals/group-adding/subject-adding/GroupAdding";

const cx = classNames.bind(styles);

const ModalWindow = dynamic(
  () => import("@/components/reused/modal-window/ModalWindow"),
  {
    ssr: false,
  }
);

type Props = {
  type: string;
};

const Lists: FC<Props> = ({ type }) => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery] = useDebounce(query, 300);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [userFilterQuery, setUserFilterQuery] = useState<UserFilterType>({});
  const [groupFilterQuery, setGroupFilterQuery] = useState<GroupFilterType>({});
  const [subjectFilterQuery, setSubjectFilterQuery] =
    useState<SubjectFilterType>({});

  const listTabs: { [key in listTypeEnum]: ReactElement } = {
    [listTypeEnum.TEACHER]: <TeacherList filter={userFilterQuery} />,
    [listTypeEnum.STUDENT]: <StudentList filter={userFilterQuery} />,
    [listTypeEnum.GROUP]: <GroupList filter={groupFilterQuery} />,
    [listTypeEnum.SUBJECT]: <SubjectList filter={subjectFilterQuery} />,
  };

  const listModal: { [key in listTypeEnum]: ReactElement } = {
    [listTypeEnum.TEACHER]: <TeacherAdding setShow={setIsShow} />,
    [listTypeEnum.STUDENT]: <StudentAdding />,
    [listTypeEnum.GROUP]: <GroupAdding setShow={setIsShow} />,
    [listTypeEnum.SUBJECT]: <SubjectAdding setShow={setIsShow} />,
  };

  useEffect(() => {
    if (debouncedQuery.trim()) {
      const searchVariables = debouncedQuery.split(" ");
      if (listTypeEnum.STUDENT === type || listTypeEnum.TEACHER === type) {
        const filter: UserFilterType = {};
        if (debouncedQuery.split("").includes(":")) {
          for (let i = 0; i < searchVariables.length; i++) {
            switch (searchVariables[i][0]) {
              case "f":
                filter["firstName"] = searchVariables[i].slice(2);
                break;
              case "m":
                filter["middleName"] = searchVariables[i].slice(2);
                break;
              case "s":
                filter["lastName"] = searchVariables[i].slice(2);
                break;
              case "e":
                filter["email"] = searchVariables[i].slice(2);
                break;
            }
          }
          setUserFilterQuery(filter);
        } else {
          if (searchVariables[0]) filter["lastName"] = searchVariables[0];
          if (searchVariables[1]) filter["firstName"] = searchVariables[1];
          if (searchVariables[2]) filter["middleName"] = searchVariables[2];
          setUserFilterQuery(filter);
        }
      } else if (listTypeEnum.GROUP == type) {
        if (query.trim()) setGroupFilterQuery({ name: query });
      } else if (listTypeEnum.SUBJECT === type) {
        const filter: SubjectFilterType = {};
        if (debouncedQuery.split("").includes(":")) {
          for (let i = 0; i < searchVariables.length; i++) {
            switch (searchVariables[i][0]) {
              case "s":
                filter["short_name"] = searchVariables[i].slice(2);
                break;
            }
          }
        } else {
          filter["name"] = query;
        }
        setSubjectFilterQuery(filter);
      }
    }
  }, [debouncedQuery, type]);

  const resetInput = () => {
    setQuery("");
    setUserFilterQuery({});
    setGroupFilterQuery({});
    setSubjectFilterQuery({});
  };

  const openModalWindow = () => {
    setIsShow(true);
  };

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
                onClick={() => {
                  router.push(`/dashboard/lists?type=${value}`);
                }}
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
              <button
                onClick={openModalWindow}
                className={styles.lists_manageBtn}
              >
                <FileDownloadOutlinedIcon
                  className={styles.lists_iconBtn}
                  color="primary"
                />
                <p className={styles.lists_textBtn}>ДОДАТИ</p>
              </button>
            </div>
            <SearchField
              value={query}
              onChange={setQuery}
              onClickClose={resetInput}
            />
          </div>
          {Object.values(listTypeEnum).includes(type as listTypeEnum) ? (
            listTabs[type as listTypeEnum]
          ) : (
            <p>Не вірний тип списку</p>
          )}
        </div>
      </div>
      <AnimatePresence>
        {isShow && (
          <ModalWindow setShow={setIsShow}>
            {Object.values(listTypeEnum).includes(type as listTypeEnum) ? (
              listModal[type as listTypeEnum]
            ) : (
              <p>Не вірний тип списку</p>
            )}
          </ModalWindow>
        )}
      </AnimatePresence>
    </main>
  );
};
export default Lists;
