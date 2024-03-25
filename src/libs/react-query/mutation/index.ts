import type { MutationOptions } from "react-query";
import { useMutation } from "react-query";

export const useSatsEyeMutation = <ResponseType, ErrorType, PayloadType>(
  options: MutationOptions<ResponseType, ErrorType, PayloadType>
) => {
  const defaultSettings: MutationOptions<ResponseType, ErrorType, PayloadType> =
    {
      retry: 0,
      retryDelay: 0,
    };

  const combinedOptions = { ...defaultSettings, ...options };
  return useMutation<ResponseType, ErrorType, PayloadType>({
    ...combinedOptions,
  });
};
