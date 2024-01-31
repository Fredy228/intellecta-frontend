import { type Dispatch, type FC, type SetStateAction } from "react";

import styles from "./selected-list.module.scss";

import { TSelectedItem } from "@/components/reused/selected-custom/SelectedCustom";

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
    <ul className={styles.option_list}>
      {list.map((item) => (
        <li
          key={item.id}
          className={styles.option_item}
          onClick={() => handleSelect(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};
export default SelectedList;
