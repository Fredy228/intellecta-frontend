import { useState } from "react";
import Backdrop from "@/components/reused/backdrop/Backdrop";
import Notice from "@/components/layout/header/notice/Notice";
export const ModalWindow = () => {
  const [isShowNotice, setIsShowNotice] = useState<boolean>(false);

  return (
    <div>
      {isShowNotice && (
        <>
          <Notice isShow={isShowNotice} />
          <Backdrop
            setShow={setIsShowNotice}
            backgroundColor={"transparent"}
          ></Backdrop>
        </>
      )}
    </div>
  );
};
