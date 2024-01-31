"use client";

import { type FC } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./home-widget.module.scss";

import { widgetList } from "@/components/ui/home/intro/home-widget/widgetList";

import { TWidget } from "@/types/widget";
import { WidgetsEnum } from "@/enums/widgets/widgets-enum";

import AddWidget from "@/components/ui/home/intro/home-widget/add-widget/AddWidget";
import ModalWindow from "@/components/reused/modal-window/ModalWindow";
import PopapMenuWrap from "@/components/reused/popap-menu-wrap/PopapMenuWrap";

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
  const [isShowOption, setIsShowOption] = useState<number | null>(null);

  const deleteWidget = (id: string) => {
    setWidgets((prevState) => prevState.filter((i) => i.id !== id));
  };

  return (
    <div className={styles.homeWidget_flex}>
      <ul className={styles.homeWidget_list}>
        <AnimatePresence>
          {widgets.length > 0 &&
            widgets.map((item, index) => {
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
                      onClick={() => setIsShowOption(index)}
                    >
                      ..
                    </span>
                    {isShowOption === index && (
                      <>
                        <PopapMenuWrap
                          stylePop={{ top: "15px", right: "15px" }}
                          keyItem={46532}
                          setShowIdx={setIsShowOption}
                        >
                          <button
                            type={"button"}
                            className={styles.homeWidget_optionBtn}
                            onClick={() => deleteWidget(item.id)}
                          >
                            Видалити
                          </button>
                        </PopapMenuWrap>
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
          <ModalWindow setShow={setIsShowAddWidget} position={"bottom"}>
            <AddWidget
              widgetList={widgetList}
              widgets={widgets}
              setWidgets={setWidgets}
              setShow={setIsShowAddWidget}
            />
          </ModalWindow>
        )}
      </AnimatePresence>
    </div>
  );
};
export default HomeWidget;
