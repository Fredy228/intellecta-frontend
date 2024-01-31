import { type Dispatch, type FC, type SetStateAction, useState } from "react";

import styles from "./selected-custom.module.scss";

import SelectedList from "@/components/reused/selected-custom/list/SelectedList";

import { IconSmallRightArrow } from "@/components/reused/Icon/Icon";
import { AnimatePresence } from "framer-motion";
import PopapMenuWrap from "@/components/reused/popap-menu-wrap/PopapMenuWrap";

export type TSelectedItem = {
  id: number;
  value: string;
  name: string;
};

type Props = {
  list: Array<TSelectedItem>;
  currentValue: TSelectedItem;
  setValue: Dispatch<SetStateAction<TSelectedItem>>;
  stylePop: Record<string, string>;
};
const SelectedCustom: FC<Props> = ({
  list,
  currentValue,
  setValue,
  stylePop,
}) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={styles.selected}>
      <button
        className={styles.selected_button}
        type={"button"}
        onClick={() => setIsShow((prevState) => !prevState)}
      >
        Відображати {currentValue.name} <IconSmallRightArrow />
      </button>
      <AnimatePresence>
        {isShow && (
          <PopapMenuWrap setShow={setIsShow} keyItem={423} stylePop={stylePop}>
            <SelectedList
              list={list}
              setValue={setValue}
              setIsShow={setIsShow}
            />
          </PopapMenuWrap>
        )}
      </AnimatePresence>
    </div>
  );
};
export default SelectedCustom;
