import { type Dispatch, type FC, type SetStateAction } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

import styles from "./add-widget.module.scss";

import { TWidget, TWidgetList } from "@/types/widget";
import { WidgetsEnum } from "@/enums/widgets/widgets-enum";
import { getToastify } from "@/services/toastify";
import { ToastifyEnum } from "@/enums/toastify-enum";

type Props = {
  widgetList: TWidgetList;
  widgets: TWidget[];
  setWidgets: Dispatch<SetStateAction<TWidget[]>>;
  setShow: Dispatch<SetStateAction<boolean>>;
};

const AddWidget: FC<Props> = ({ widgetList, widgets, setWidgets, setShow }) => {
  const keys = Object.keys(widgetList);

  const handleWidget = (item: WidgetsEnum) => {
    if (widgets.find((i) => i.type === item))
      return getToastify("Такий віджет вже існує", ToastifyEnum.WARNING);

    setWidgets((prevState) => [
      ...prevState,
      {
        id: uuidv4(),
        type: item,
        value: "",
      },
    ]);
    setShow(false);
  };

  return (
    <div className={styles.addWidget}>
      <ul className={styles.addWidget_list}>
        {keys.map((item, index) => {
          const Widget = widgetList[item];

          return (
            <li key={index} className={styles.addWidget_item}>
              <div
                className={styles.addWidget_wrapper}
                onClick={() => handleWidget(item as WidgetsEnum)}
              >
                <Widget />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default AddWidget;
