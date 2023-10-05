import { toast } from "react-toastify";
import { ToastifyEnum } from "@/enums/toastify-enum";

export const getToastify = (
  message: string,
  type: ToastifyEnum = ToastifyEnum.SUCCESS,
  delay: number = 3000,
) => {
  toast[type](message, {
    position: "top-right",
    autoClose: delay,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
