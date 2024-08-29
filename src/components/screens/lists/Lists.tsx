"use client";

import {
  BaseSyntheticEvent,
  FC,
  ReactElement,
  useEffect,
  useState,
} from "react";
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
import { FilterQueryType } from "@/types/user";

const cx = classNames.bind(styles);

type Props = {
  type: string;
};

const Lists: FC<Props> = ({ type }) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);
  const [filterQuery, setFilterQuery] = useState<FilterQueryType>();

  const listTabs: { [key in listTypeEnum]: ReactElement } = {
    [listTypeEnum.TEACHER]: <TeacherList filter={filterQuery ?? {}} />,
    [listTypeEnum.STUDENT]: <StudentList filter={filterQuery ?? {}} />,
    [listTypeEnum.GROUP]: <GroupList />,
  };

  useEffect(() => {
    if (debouncedQuery.trim()) {
      const filterQuery: FilterQueryType = {};
      const searchVariables = debouncedQuery.split(" ");
      if (debouncedQuery.split("").includes(":")) {
        for (let i = 0; i < searchVariables.length; i++) {
          switch (searchVariables[i][0]) {
            case "f":
              filterQuery["firstName"] = searchVariables[i].slice(2);
              break;
            case "m":
              filterQuery["middleName"] = searchVariables[i].slice(2);
              break;
            case "s":
              filterQuery["lastName"] = searchVariables[i].slice(2);
              break;
            case "e":
              filterQuery["email"] = searchVariables[i].slice(2);
              break;
          }
        }
      } else {
        if (searchVariables[0]) filterQuery["lastName"] = searchVariables[0];
        if (searchVariables[1]) filterQuery["firstName"] = searchVariables[1];
        if (searchVariables[2]) filterQuery["middleName"] = searchVariables[2];
      }

      setFilterQuery(filterQuery);
    } else {
      setFilterQuery({});
    }
  }, [debouncedQuery]);

  const onChangeSearch = (event: BaseSyntheticEvent) => {
    setQuery(event.target.value);
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
            <SearchField
              value={query}
              onChange={(event) => onChangeSearch(event)}
            />
          </div>
          {Object.values(listTypeEnum).includes(type as listTypeEnum) ? (
            listTabs[type as listTypeEnum]
          ) : (
            <p>Не вірний тип списку</p>
          )}
        </div>
      </div>
    </main>
  );
};
export default Lists;
