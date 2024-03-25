import { Api } from "@/libs/api";
import { useSatsEyeMutation } from "@/libs/react-query/mutation";
import { useSatEyeQuery } from "@/libs/react-query/query";
import { UseQueryOptions } from "react-query";

const TRX_API_BASE = "transactions";
const TRX_ALERT_API_BASE = "txsubscribe";

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

interface IGetTrxSubResponse {
  blocks: ITrx[];
}

interface ICreateTxAlertResponse {
  txid: string;
}

interface ICreateTxAlertPayload {
  tx_ix: string;
  target_confirms: number;
}

const getLatestTrx = async () => {
  const res: IGetTrxsResponse = await Api.get(`${TRX_API_BASE}/latest`);
  console.log("latest", res);

  return res;
};

const createTx = async (data: ICreateTxAlertPayload) => {
  const res: ICreateTxAlertResponse = await Api.post(
    `${TRX_ALERT_API_BASE}/create`,
    data
  );
  return res;
};

const getSubscribeTx = async () => {
  const res: IGetTrxSubResponse = await Api.get(
    `${TRX_ALERT_API_BASE}/subscribe`
  );
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

export const useCreateTxAlert = (onSuccess: () => void) =>
  useSatsEyeMutation<ICreateTxAlertResponse, string, ICreateTxAlertPayload>({
    mutationFn: createTx,
    onSuccess,
  });

export const useGetSubscribeTx = (
  options: UseQueryOptions<IGetTrxSubResponse, string, IGetTrxSubResponse> = {}
) =>
  useSatEyeQuery<IGetTrxSubResponse, string, IGetTrxSubResponse>({
    queryKey: ["subscribe-trx"],
    queryFn: getSubscribeTx,
    ...options,
  });
