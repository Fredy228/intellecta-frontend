"use client";

import type { FC } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { widgetList } from "@/components/ui/home/ad/home-widget/widgetList";
import styles from "./home-widget.module.scss";

import { TWidget } from "@/types/widget";
import { WidgetsEnum } from "@/enums/widgets/widgets-enum";
import AddWidget from "@/components/ui/home/ad/home-widget/add-widget/AddWidget";
import Backdrop from "@/components/reused/backdrop/Backdrop";

const initialWidgets = [
  {
    id: "sdfdsfsf",
    type: WidgetsEnum.CHATS,
    value: "",
  },
];

const HomeWidget: FC = () => {
  const [widgets, setWidgets] = useState<Array<TWidget>>(initialWidgets);
  const [isShowAddWidget, setIsShowAddWidget] = useState<boolean>(false);
  const [isShowOption, setIsShowOption] = useState<boolean>(false);
  const [currentIdDelete, setCurrentIdDelete] = useState<string | null>(null);

  const openWidgetOption = (id: string) => {
    setCurrentIdDelete(id);
    setIsShowOption(true);
  };

  const deleteWidget = (id: string) => {
    setWidgets((prevState) => prevState.filter((i) => i.id !== id));
  };

  return (
    <div className={styles.homeWidget_flex}>
      <ul className={styles.homeWidget_list}>
        <AnimatePresence>
          {widgets.length > 0 &&
            widgets.map((item) => {
              const Widget = widgetList[item.type];
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={styles.homeWidget_item}
                >
                  <div className={styles.homeWidget_itemInner}>
                    <span
                      className={styles.homeWidget_option}
                      onClick={() => openWidgetOption(item.id)}
                    >
                      ..
                    </span>
                    {isShowOption && currentIdDelete === item.id && (
                      <>
                        <Backdrop
                          backgroundColor={"transparent"}
                          setShow={setIsShowOption}
                        ></Backdrop>
                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          type={"button"}
                          className={styles.homeWidget_optionBtn}
                          onClick={() => deleteWidget(item.id)}
                        >
                          Видалити
                        </motion.button>
                      </>
                    )}
                    <Widget />
                  </div>
                </motion.li>
              );
            })}
          {widgets.length < 3 && (
            <li
              className={`${styles.homeWidget_item} ${
                widgets.length === 2 ? styles.add1 : styles.add2
              }`}
            >
              <div
                className={styles.homeWidget_itemInner}
                onClick={() => setIsShowAddWidget(true)}
              >
                <div className={styles.homeWidget_itemAdd}>
                  <button
                    className={styles.homeWidget_itemAddBtn}
                    type={"button"}
                  ></button>
                </div>
              </div>
            </li>
          )}
        </AnimatePresence>
      </ul>
      <AnimatePresence>
        {isShowAddWidget && (
          <Backdrop setShow={setIsShowAddWidget}>
            <AddWidget
              widgetList={widgetList}
              widgets={widgets}
              setWidgets={setWidgets}
              setShow={setIsShowAddWidget}
            />
          </Backdrop>
        )}
      </AnimatePresence>
    </div>
  );
};
export default HomeWidget;
