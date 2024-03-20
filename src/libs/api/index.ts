import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import _axios from "axios";
import axiosRetry from "axios-retry";
import { USER_TOKEN_KEY, API_BASE_URL } from "@/constants";
import { Cookies } from "react-cookie";
import type { IApiErrorResponse } from "./types";

const cookies = new Cookies();

const axios = _axios.create({
  baseURL: `${API_BASE_URL}/`,
  headers: {
    "Content-Type": "application/json",
  },
});

/* Add auth header interceptor */
axios.interceptors.request.use(
  (config) => {
    const token = cookies.get(USER_TOKEN_KEY);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// https://github.com/softonic/axios-retry/issues/87
const retryDelay = (retryNumber = 0) => {
  const seconds = Math.pow(2, retryNumber) * 1000;
  const randomMs = 1000 * Math.random();
  return seconds + randomMs;
};

const retryConfig = {
  retries: 2,
  retryDelay,
  // retry on Network Error & 5xx responses
  retryCondition: axiosRetry.isRetryableError,
};

const handleApiSuccess = (res: AxiosResponse) => {
  return res.data;
};

const handleApiError = (err: {
  response?: AxiosResponse;
  request?: any;
  code?: string;
}) => {
  let errorMessagge = "";

  // request was manually cancelled in a `useEffect` hook
  if (_axios.isCancel(err)) {
    return; // fail silently
  }

  if (err.response) {
    //   @ts-ignore
    const apiError: IApiErrorResponse = err.response.data;
    // client received an error response (5xx, 4xx)
    console.error(
      `Backend returned code ${err.code}:${apiError.statusCode}, ` +
        `body was: ${apiError.message}`,
      "data:",
      apiError.data
    );
    errorMessagge = apiError.message;
  } else if (err.request) {
    // client never received a response, or request never left
    //   @ts-ignore
    console.error("An error occurred:", err.message);
  } else {
    // anything else
    //   @ts-ignore
    console.error("Well, that was unexpected:", err.message);
  }

  throw (
    errorMessagge ||
    "We couldn't complete your request. Please try again or check your internet connection."
  );
};

export const Api = {
  getCancelTokenSource: () => _axios.CancelToken.source(),
  get: <T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> =>
    axios
      .get(endpoint, { "axios-retry": retryConfig, ...config })
      .then(handleApiSuccess)
      .catch(handleApiError),
  post: <T>(
    endpoint: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> =>
    axios
      .post(endpoint, data, config)
      .then(handleApiSuccess)
      .catch(handleApiError),
  put: <T>(
    endpoint: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> =>
    axios
      .put(endpoint, data, config)
      .then(handleApiSuccess)
      .catch(handleApiError),
  patch: <T>(
    endpoint: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> =>
    axios
      .patch(endpoint, data, config)
      .then(handleApiSuccess)
      .catch(handleApiError),
  delete: <T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> =>
    axios.delete(endpoint, config).then(handleApiSuccess).catch(handleApiError),
};
