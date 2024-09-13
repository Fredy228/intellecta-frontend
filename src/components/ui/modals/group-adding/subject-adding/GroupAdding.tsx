import {
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useState,
} from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

import styles from "../../modal-adding.module.scss";

import { AddingInput } from "@/components/reused/fields/adding/AddingInput";
import { groupSchema } from "@/joi/group.schema";
import { getToastify } from "@/services/toastify";
import { ToastifyEnum } from "@/enums/toastify-enum";
import { CustomButtonDefault } from "@/components/reused/custom-btn/custom-btn-default/CustomButtonDefault";
import LoaderButton from "@/components/reused/loader/loader-button";
import { createGroup } from "@/axios/group";
import { isAxiosError } from "axios";
import { useDispatch } from "react-redux";
import { listFetch } from "@/redux/list/slice";

type Props = {
  setShow: Dispatch<SetStateAction<boolean>>;
};

export const GroupAdding: FC<Props> = ({ setShow }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [level, setLevel] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [invalidInput, setInvalidInput] = useState<Array<string>>([]);

  const submitForm: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setInvalidInput([]);

    const { error } = groupSchema.validate({
      name: name.trim(),
      level: level,
    });

    if (error) {
      const nameField = error.message.split("|")[0];
      setInvalidInput((prevState) => [...prevState, nameField]);

      setIsLoading(false);
      return getToastify(error.message.split("|")[1], ToastifyEnum.ERROR, 5000);
    }

    try {
      const group = await createGroup(1, {
        name: name.trim(),
        level: level,
      });

      if (group) {
        setName("");
        setLevel(0);
        getToastify("Группа успішно додана у систему");
        dispatch(listFetch());
      }
    } catch (e) {
      if (isAxiosError(e) && e.response?.data?.message) {
        getToastify(e.response.data.message, ToastifyEnum.ERROR, 3000);
      } else {
        getToastify("Unknown error", ToastifyEnum.ERROR, 3000);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <div className={`${styles.modalAdding} ${styles.groupModal}`}>
      <button onClick={closeModal} className={styles.modalAdding_closeBtn}>
        <CloseIcon />
      </button>
      <h2 className={styles.modalAdding_title}>Группи</h2>
      <div className={styles.modalAdding_addingBlock}>
        <div className={styles.modalAdding_file}>
          <h3 className={styles.file_title}>Завантаження через форму</h3>
          <div className={styles.file_circle}>
            <ArrowOutwardRoundedIcon
              style={{ transform: "scale(2.2)", fill: "#FFF" }}
            />
          </div>
          <form className={styles.file_form} onSubmit={submitForm}>
            <AddingInput
              style={{ marginBottom: "10px", width: "320px" }}
              id="name"
              label="Name"
              placeholder={"Введіть назву"}
              error={invalidInput.includes("name")}
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <AddingInput
              style={{ marginBottom: "10px" }}
              id="level"
              label="Level"
              placeholder={"Введіть номер курсу"}
              error={invalidInput.includes("level")}
              value={level}
              onChange={(e) => setLevel(+e.currentTarget.value)}
            />
            <CustomButtonDefault
              className={styles.file_sendBtn}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <LoaderButton color={"#fff"} width={"25"} height={"25"} />
              ) : (
                <>{"Створити группу"}</>
              )}
            </CustomButtonDefault>
          </form>
        </div>
      </div>
    </div>
  );
};