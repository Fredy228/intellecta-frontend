import { isAxiosError } from "axios";
import { getToastify } from "@/services/toastify";
import { ToastifyEnum } from "@/enums/toastify-enum";

export function outputError(e: Error | unknown) {
  if (isAxiosError(e) && e.response?.data?.message) {
    const parseErr: string[] = e.response.data.message.split("|");

    if (parseErr.length === 2) {
      getToastify(parseErr[1], ToastifyEnum.ERROR, 5000);
      return parseErr[0];
    }
    getToastify(e.response.data.message, ToastifyEnum.ERROR, 5000);
  } else {
    getToastify("Unknown error", ToastifyEnum.ERROR, 3000);
  }

  return null;
}
