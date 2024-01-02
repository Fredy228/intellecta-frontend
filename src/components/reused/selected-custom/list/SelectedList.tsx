import { type Dispatch, type FC, type SetStateAction } from "react";
import { motion } from "framer-motion";

import styles from "./selected-list.module.scss";

import { TSelectedItem } from "@/components/reused/selected-custom/SelectedCustom";

type Props = {
  list: Array<TSelectedItem>;
  setValue: Dispatch<SetStateAction<TSelectedItem>>;
  setIsShow: Dispatch<SetStateAction<boolean>>;
  position: "left" | "right";
};
const SelectedList: FC<Props> = ({ list, setValue, setIsShow, position }) => {
  const handleSelect = (value: TSelectedItem) => {
    setValue(value);
    setIsShow(false);
  };

  const pos = (): { [key: string]: string | number } => {
    if (position === "left") return { left: 0, right: "initial" };
    if (position === "right") return { right: 0, left: "initial" };
    return {};
  };

  return (
    <>
      <motion.ul
        initial={{ translateY: "100%" }}
        animate={{ translateY: 0 }}
        exit={{ opacity: 0 }}
        className={styles.option_list}
        style={pos()}
      >
        {list.map((item) => (
          <li
            key={item.id}
            className={styles.option_item}
            onClick={() => handleSelect(item)}
          >
            {item.name}
          </li>
        ))}
      </motion.ul>
      <div
        className={styles.option_backdrop}
        onClick={() => setIsShow(false)}
      ></div>
    </>
  );
};
export default SelectedList;
