import { IApiResponse } from "@/libs/api/types";

export interface CreateUserPayload {
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface SignInUserPayload {
  email: string;
  password: string;
}

export interface ISignIn {
  firstname: string;
  lastname: string;
  email: string;
  id: string;
}

export interface ISignInResponse extends IApiResponse {
  data: ISignIn;
  token: string;
}
