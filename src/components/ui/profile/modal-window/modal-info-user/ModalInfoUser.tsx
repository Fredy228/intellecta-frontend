import {
  Dispatch,
  type FC,
  FormEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

import styles from "./modal-info-user.module.scss";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "@/redux/user/selectors";
import {
  compareObjects,
  compareStringAndNumber,
} from "@/services/compaire-data";
import { updateUserProfile } from "@/axios/user";
import { DtoUpdateUser } from "@/types/user";
import { getToastify } from "@/services/toastify";
import { ToastifyEnum } from "@/enums/toastify-enum";
import { outputError } from "@/services/output-error";
import { setUserProfile } from "@/redux/user/slice";

type Props = {
  setIsShow: Dispatch<SetStateAction<boolean>>;
};
const ModalInfoUser: FC<Props> = ({ setIsShow }) => {
  const [country, setCountry] = useState<string>("UA");
  const [birthday, setBirthday] = useState<Dayjs | null>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const user = useSelector(selectUser);
  const dispacth: Dispatch<any> = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChangeRegion = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const body: { [key: string]: any } = {
      firstName: compareStringAndNumber(user?.firstName, firstName.trim()),
      lastName: compareStringAndNumber(user?.lastName, lastName.trim()),
      middleName: compareStringAndNumber(user?.middleName, middleName.trim()),
      bio: compareStringAndNumber(user?.bio, bio.trim()),
      birthday: compareStringAndNumber(
        user?.birthday ? new Date(user?.birthday).toISOString() : null,
        birthday?.toISOString(),
      ),
      sex: undefined,
      phone: compareObjects(
        user?.phone ? user?.phone : null,
        phoneNumber.trim()
          ? {
              country,
              number: phoneNumber.trim(),
            }
          : null,
      ),
    };

    if (Object.values(body).every((i) => i === undefined)) {
      setIsShow(false);
      setIsLoading(false);
      return;
    }

    updateUserProfile(body as Partial<DtoUpdateUser>)
      .then(() => {
        let filterBody: { [key: string]: any } = {};
        Object.keys(body).map((i) => {
          if (body.hasOwnProperty(i)) {
            if (body[i] !== undefined) {
              return (filterBody = { ...filterBody, [i]: body[i] });
            }
          } else {
            return;
          }
        });
        dispacth(
          setUserProfile({ ...filterBody, birthday: birthday?.toString() }),
        );
        getToastify("Дані оновлені", ToastifyEnum.SUCCESS);
        setIsShow(false);
      })
      .catch(outputError)
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (!user) return;

    setFirstName(user.firstName || "");
    setLastName(user.lastName || "");
    setMiddleName(user.middleName || "");
    setBio(user.bio || "");
    setBirthday(user.birthday ? dayjs(user.birthday) : null);
    setPhoneNumber(user.phone?.number || "");
    setCountry(user.phone?.country || "");
  }, [user]);

  return (
    <div className={styles.infoUser}>
      <h3 className={styles.infoUser_title}>Персональні дані</h3>

      <form className={styles.infoUser_form} onSubmit={handleSubmitForm}>
        <div className={styles.infoUser_formWrapp}>
          <div className={styles.infoUser_block}>
            <TextField
              id="outlined-basic"
              size="small"
              label="Ім'я"
              variant="outlined"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              size="small"
              label="Призвіще"
              variant="outlined"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              size="small"
              label="Побатькові"
              variant="outlined"
              fullWidth
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              size="small"
              label="Про себе"
              variant="outlined"
              fullWidth
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <div className={styles.infoUser_block}>
            <div className={styles.infoUser_phoneWrap}>
              <FormControl size={"small"} sx={{ minWidth: 90 }}>
                <InputLabel id="demo-select-small-label">Регіон</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={country}
                  label="Регіон"
                  defaultValue={"UA"}
                  onChange={handleChangeRegion}
                >
                  <MenuItem value={"UA"}>+380</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="outlined-basic"
                size="small"
                label="Номер телефону"
                variant="outlined"
                fullWidth
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]} sx={{ width: "100%" }}>
                <DatePicker
                  label="Дата народження"
                  value={birthday}
                  onChange={(newValue) => setBirthday(newValue)}
                  sx={{ width: "100%" }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <div className={styles.infoUser_btnWrapp}>
          <Button
            variant="outlined"
            size="medium"
            disabled={isLoading}
            onClick={() => setIsShow(false)}
          >
            Скасувати
          </Button>
          <Button
            variant="contained"
            size="medium"
            sx={{ position: "relative" }}
            disabled={isLoading}
            type={"submit"}
          >
            {isLoading && (
              <CircularProgress
                size={14}
                sx={{
                  color: "#fff",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  position: "absolute",
                  marginTop: "-7px",
                  marginLeft: "-7px",
                }}
              />
            )}
            <span style={{ opacity: isLoading ? 0 : 1 }}>Зберегти</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ModalInfoUser;
