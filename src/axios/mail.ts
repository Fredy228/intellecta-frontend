import { TEmailBody } from "@/types/user";
import axios from "axios";

export const sendEmail = async (credentials: TEmailBody) => {
  const { data } = await axios.post("/api/mail/forgot-password", credentials, {
    withCredentials: true,
  });
  return data;
};
