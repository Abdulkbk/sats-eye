import { Api } from "@/libs/api";
import { useSatEyeQuery } from "@/libs/react-query/query";
import { UseQueryOptions } from "react-query";

const TRX_API_BASE = "transactions";

interface ITrx {
  hash: string;
  height: number;
  size: number;
  weight: number;
  time: number;
}

interface IGetTrxsResponse {
  blocks: ITrx[];
}

const getLatestTrx = async () => {
  const res: IGetTrxsResponse = await Api.get(`${TRX_API_BASE}/latest`);
  console.log("latest", res);

  return res;
};

export const useGetLatestTrxs = (
  options: UseQueryOptions<IGetTrxsResponse, string, IGetTrxsResponse> = {}
) =>
  useSatEyeQuery<IGetTrxsResponse, string, IGetTrxsResponse>({
    queryKey: ["latest-trx"],
    queryFn: getLatestTrx,
    ...options,
  });
