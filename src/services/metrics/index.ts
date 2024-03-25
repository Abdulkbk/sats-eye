import { Api } from "@/libs/api";
import { useSatEyeQuery } from "@/libs/react-query/query";
import { UseQueryOptions } from "react-query";

const METRICS_API_BASE = "info";

interface IGetMetricsResponse {
  current_block_height: number;
  difficulty: number;
  network_hash_rate: number;
}

const getMetrics = async () => {
  const res: IGetMetricsResponse = await Api.get(`${METRICS_API_BASE}`);
  return res;
};

export const useGetHomeMetrics = (
  options: UseQueryOptions<
    IGetMetricsResponse,
    string,
    IGetMetricsResponse
  > = {}
) =>
  useSatEyeQuery<IGetMetricsResponse, string, IGetMetricsResponse>({
    queryKey: ["home-metrics"],
    queryFn: getMetrics,
    ...options,
  });
