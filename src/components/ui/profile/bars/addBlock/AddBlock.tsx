"use client"
import styles from "./addBlock.module.scss";
import {useState} from "react";
import Backdrop from "@/components/reused/backdrop/Backdrop";
import {WidgetsEnum} from "@/enums/widgets/widgets-enum";
import {AnimatePresence,} from "framer-motion";
import {ModalWindow} from "@/components/ui/profile/modal-window/ModalWindow";

const initialWidgets = [
    {
        id: "sdfdsfsf",
        type: WidgetsEnum.CHATS,
        value: "",
    },
];
export const AddBlock = () => {
    const [isShowAddWidget, setIsShowAddWidget] = useState<boolean>(false);

    return (
        <div
            className={styles.add_wrapper}
            onClick={() => setIsShowAddWidget(!isShowAddWidget)}>
            <button
                className={styles.btnAdd}
                type={"button"}
                onClick={() => setIsShowAddWidget(true)}
            ></button>
                    <div >
                        <AnimatePresence>
                            {isShowAddWidget && (
                                <Backdrop setShow={setIsShowAddWidget}>
                                    <ModalWindow />
                                </Backdrop>
                            )}
                        </AnimatePresence>
                    </div>
        </div>
    );
};
