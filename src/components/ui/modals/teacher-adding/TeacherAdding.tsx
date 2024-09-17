import {
  BaseSyntheticEvent,
  Dispatch,
  DragEvent,
  FC,
  FormEventHandler,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

import styles from "../modal-adding.module.scss";

import { AddingInput } from "@/components/reused/fields/adding/AddingInput";
import { IconXlsFile } from "@/components/reused/Icon/Icon";
import { teacherSchema } from "@/joi/teacher.schema";
import { getToastify } from "@/services/toastify";
import { ToastifyEnum } from "@/enums/toastify-enum";
import { CustomButtonDefault } from "@/components/reused/custom-btn/custom-btn-default/CustomButtonDefault";
import LoaderButton from "@/components/reused/loader/loader-button";
import { isAxiosError } from "axios";
import { createManyTeachers, createOneTeacher } from "@/axios/teacher";
import { outputError } from "@/services/output-error";
import { useDispatch } from "react-redux";
import { listFetch } from "@/redux/list/slice";

type Props = {
  setShow: Dispatch<SetStateAction<boolean>>;
};

export const TeacherAdding: FC<Props> = ({ setShow }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [invalidInput, setInvalidInput] = useState<Array<string>>([]);
  const [dragging, setDragging] = useState<boolean>(false);
  const [XlsFile, setXlsFile] = useState<File>();
  const fileRef = useRef<HTMLInputElement>(null);

  const submitForm: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setInvalidInput([]);

    const { error } = teacherSchema.validate({
      email: email.trim(),
      job_title: jobTitle.trim(),
    });

    if (error) {
      const nameField = error.message.split("|")[0];
      setInvalidInput((prevState) => [...prevState, nameField]);

      setIsLoading(false);
      return getToastify(error.message.split("|")[1], ToastifyEnum.ERROR, 5000);
    }

    try {
      const teacher = await createOneTeacher(
        {
          email: email.trim(),
          job_title: jobTitle.trim(),
        },
        1
      );

      if (teacher) {
        setEmail("");
        setJobTitle("");
        getToastify("Вчитель успішно доданий у систему");
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

  const clickToFileInput = () => {
    if (!fileRef.current) return;
    fileRef.current.click();
  };

  const closeModal = () => {
    setShow(false);
  };

  const fileDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  const fileDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const onFileDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const allowedExtensions = [".xls", ".xlsx"];
    const files = Array.from(e.dataTransfer.files);
    if (allowedExtensions.includes(`.${files[0].name.split(".").pop()}`)) {
      setXlsFile(files[0]);
    } else {
      getToastify(
        "Данний файл не відповідає формату .xls чи .xlsx",
        ToastifyEnum.ERROR,
        3000
      );
    }
  };

  const onChangeInputFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setXlsFile(file);
  };

  const sendExelFile = async () => {
    setIsLoading(true);
    try {
      if (!XlsFile) return;
      const formData = new FormData();
      formData.append("file", XlsFile);
      const teachers = await createManyTeachers(formData, 1);
      if (teachers) {
        getToastify("Вчителі успішно добавленні у систему");
        setXlsFile(undefined);
      }
    } catch (err) {
      outputError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${styles.modalAdding} ${styles.teacherModal}`}>
      <button onClick={closeModal} className={styles.modalAdding_closeBtn}>
        <CloseIcon />
      </button>
      <h2 className={styles.modalAdding_title}>Викладачі</h2>
      <div className={styles.modalAdding_addingBlock}>
        <div
          onDragLeave={fileDragLeave}
          onDragOver={fileDragOver}
          onDrop={onFileDrop}
          className={styles.modalAdding_file}
        >
          <h3 className={styles.file_title}>Завантажити Excel файл</h3>
          <IconXlsFile className={styles.file_xlsFile} />
          <button onClick={clickToFileInput} className={styles.file_btn}>
            <AddIcon style={{ fontSize: "25px", fill: "#ADADAD" }} />
          </button>
          <input
            ref={fileRef}
            onChange={onChangeInputFile}
            className={styles.file_inputFile}
            type="file"
            accept=".xls, .xlsx"
          />
          <p className={styles.file_text}>
            {XlsFile
              ? `Файл ${XlsFile.name.slice(0, 12)}...`
              : "Щоб завантажити натисніть або перемістіть файл у це вікно"}
          </p>
          {XlsFile && (
            <CustomButtonDefault
              onClick={sendExelFile}
              className={styles.file_sendBtn}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <LoaderButton color={"#fff"} width={"25"} height={"25"} />
              ) : (
                <>{"Відправити файл"}</>
              )}
            </CustomButtonDefault>
          )}
        </div>
        <p className={styles.modalAdding_text}>АБО</p>
        <div className={styles.modalAdding_file}>
          <h3 className={styles.file_title}>Завантажити Excel файл</h3>
          <div className={styles.file_circle}>
            <ArrowOutwardRoundedIcon
              style={{ transform: "scale(2.2)", fill: "#FFF" }}
            />
          </div>
          <form className={styles.file_form} onSubmit={submitForm}>
            <AddingInput
              style={{ marginBottom: "10px" }}
              id="email"
              label="Email"
              placeholder={"Введіть email"}
              error={invalidInput.includes("email")}
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <AddingInput
              style={{ marginBottom: "10px" }}
              id="job_title"
              label="Job title"
              placeholder={"Введіть посаду"}
              error={invalidInput.includes("job_title")}
              value={jobTitle}
              onChange={(e) => setJobTitle(e.currentTarget.value)}
            />
            <CustomButtonDefault
              className={styles.file_sendBtn}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <LoaderButton color={"#fff"} width={"25"} height={"25"} />
              ) : (
                <>{"Створити вчителя"}</>
              )}
            </CustomButtonDefault>
          </form>
        </div>
      </div>
    </div>
  );
};
