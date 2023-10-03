import { toast } from "react-toastify";
import { ToastifyEnum } from "@/enums/toastify-enum";

export const getToastify = (
  message: string,
  type: ToastifyEnum = ToastifyEnum.SUCCESS,
) => {
  toast[type](message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
