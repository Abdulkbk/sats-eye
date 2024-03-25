import { Cookies } from "react-cookie";
import { Api } from "@/libs/api";
import { USER_TOKEN_KEY } from "@/constants";
import type {
  CreateUserPayload,
  ISignInResponse,
  SignInUserPayload,
} from "@/types/user";
import type { IApiSuccessResponse } from "@/libs/api/types";

const cookies = new Cookies();
const AUTH_API_BASE = "auth";

export const loadAuthToken = (): string => cookies.get(USER_TOKEN_KEY) || "";

export const saveAuthToken = (token: string) => {
  const twoWeeksInSeconds = 30 * 24 * 60 * 60; // 30 days in seconds
  const date = new Date(Date.now() + twoWeeksInSeconds * 1000);
  return cookies.set(USER_TOKEN_KEY, token, { path: "/", expires: date });
};

export const removeAuthToken = () => cookies.remove(USER_TOKEN_KEY);

export const signInUser = async (
  data: SignInUserPayload,
  onSuccess: (data: any) => void
) => {
  const res: { data: ISignInResponse } = await Api.post(`/login`, data);
  saveAuthToken(res.data.token);
  console.log(res.data.data);
  onSuccess(res.data.data);
  return res;
};

export const signUpUser = async (data: CreateUserPayload) => {
  try {
    const res: IApiSuccessResponse = await Api.post<IApiSuccessResponse>(
      `/register`,
      data
    );
    console.log(res);
    return res;
  } catch (error) {
    throw error;
  }
};
