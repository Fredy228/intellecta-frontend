import axios from "@/axios/base";
import { TLoginBody } from "@/types/auth/login-body";
import { TAnswerLogin } from "@/types/auth/answer-login";

export const loginUser = async (
  credentials: TLoginBody,
): Promise<TAnswerLogin> => {
  const { data } = await axios.post("/api/auth/login", credentials);
  return data;
};
