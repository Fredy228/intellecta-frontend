"use client";

import { type NextPage } from "next";
import { PropsWithChildren, useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import classNames from "classnames/bind";

import styles from "./lists.module.scss";

import SelectedCustom, {
  TSelectedItem,
} from "@/components/reused/selected-custom/SelectedCustom";
import { listOption } from "@/components/screens/lists/listOption";

import {
  IconSmallRightArrow,
  IconTriangleArrow,
} from "@/components/reused/Icon/Icon";

import { SearchField } from "@/components/reused/fields/search/SearchField";
import Link from "next/link";

const cx = classNames.bind(styles);

type Props = {
  path: string;
} & PropsWithChildren;

const Lists: NextPage<Props> = ({ children, path }) => {
  const [currentOption, setCurrentOption] = useState<TSelectedItem>(
    listOption[0]
  );

  return (
    <main className={styles.lists}>
      <div className={styles.lists_titleWrapper}>
        <h2 className={styles.lists_title}>Усе готово для навчання?</h2>
        {/* <SelectedCustom
          list={listOption}
          currentValue={currentOption}
          setValue={setCurrentOption}
          stylePop={{ top: "calc(100% + 10px)", right: "0" }}
        />
        <div className={styles.lists_createBtnWrapper}>
          <button className={styles.lists_createBtn} type={"button"}></button>
        </div> */}
      </div>
      <div className={styles.lists_listBlock}>
        <ul className={styles.lists_navigationList}>
          {listOption.map(({ id, name, value }) => (
            <li
              key={id}
              className={cx({
                lists_navItem: true,
                active: path === value,
              })}
            >
              <Link href={`/dashboard/lists/${value}`}>
                <p>{name}</p>
              </Link>
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
          {children}
          <div className={styles.lists_listRangeBlock}>
            <div className={styles.rangeSelector}>
              <div className={styles.rangeSelector_selectedRange}>
                <p className={styles.rangeSelector_text}>
                  Rows per page <span>5</span>
                </p>
                <IconTriangleArrow className={styles.rangeSelector_image} />
              </div>
              <ul className={styles.rangeSelector_rangeOptions}></ul>
            </div>
            <p className={styles.lists_rangeText}>1-5 of 13</p>
            <div className={styles.lists_arrowBlock}>
              <IconSmallRightArrow className={styles.lists_arrowPrev} />
              <IconSmallRightArrow className={styles.lists_arrowNext} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Lists;
