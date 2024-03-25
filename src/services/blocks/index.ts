import { Api } from "@/libs/api";
import { useSatEyeQuery } from "@/libs/react-query/query";
import { UseQueryOptions } from "react-query";

const BLOCKS_API_BASE = "blocks";

interface IBlock {
  hash: string;
  height: number;
  size: number;
  weight: number;
  time: number;
}

interface IGetBlocksResponse {
  blocks: IBlock[];
}

const getLatestBlocks = async () => {
  const res: IGetBlocksResponse = await Api.get(`${BLOCKS_API_BASE}/latest`);
  console.log("latest", res);

  return res;
};

export const useGetLatestBlocks = (
  options: UseQueryOptions<IGetBlocksResponse, string, IGetBlocksResponse> = {}
) =>
  useSatEyeQuery<IGetBlocksResponse, string, IGetBlocksResponse>({
    queryKey: ["latest-blocks"],
    queryFn: getLatestBlocks,
    ...options,
  });
