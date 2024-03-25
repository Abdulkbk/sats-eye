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

interface ISingleBlock {
  hash: string;
  height: number;
  size: number;
  weight: number;
  time: number;
  version: number;
  merkleroot: string;
  difficulty: number;
  previousblockhash: string;
  confirmations: number;
}

interface IGetSingleBlockResponse {
  block: ISingleBlock;
}

const getLatestBlocks = async () => {
  const res: IGetBlocksResponse = await Api.get(`${BLOCKS_API_BASE}/latest`);
  console.log("latest", res);

  return res;
};

const getBlockByHeight = async (height: number) => {
  const res: IGetSingleBlockResponse = await Api.get(`block/height/${height}`);
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

export const useGetBlockByHeight = (
  height: number,
  options: UseQueryOptions<
    IGetSingleBlockResponse,
    string,
    IGetSingleBlockResponse
  > = {}
) =>
  useSatEyeQuery<IGetSingleBlockResponse, string, IGetSingleBlockResponse>({
    queryKey: ["single-block", height],
    queryFn: () => getBlockByHeight(height),
  });
