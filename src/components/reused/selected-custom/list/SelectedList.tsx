import { Dispatch, FC, SetStateAction } from "react";
import { motion } from "framer-motion";

import { TSelectedItem } from "@/components/reused/selected-custom/SelectedCustom";
import styles from "./selected-list.module.scss";

type Props = {
  list: Array<TSelectedItem>;
  setValue: Dispatch<SetStateAction<TSelectedItem>>;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};
const SelectedList: FC<Props> = ({ list, setValue, setIsShow }) => {
  const handleSelect = (value: TSelectedItem) => {
    setValue(value);
    setIsShow(false);
  };

  return (
    <>
      <motion.ul
        initial={{ translateY: "100%" }}
        animate={{ translateY: 0 }}
        exit={{ opacity: 0 }}
        className={styles.option_list}
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
