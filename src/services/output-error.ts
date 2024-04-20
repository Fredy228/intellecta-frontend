import { isAxiosError } from "axios";
import { getToastify } from "@/services/toastify";
import { ToastifyEnum } from "@/enums/toastify-enum";

export function outputError(e: Error | unknown) {
  if (isAxiosError(e) && e.response?.data?.message) {
    getToastify(e.response?.data?.message, ToastifyEnum.ERROR, 5000);
  } else {
    getToastify("Unknown error", ToastifyEnum.ERROR, 3000);
  }
}
