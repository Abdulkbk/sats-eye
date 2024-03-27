import { Api } from "@/libs/api";
import { useSatsEyeMutation } from "@/libs/react-query/mutation";
import { useSatEyeQuery } from "@/libs/react-query/query";
import { UseQueryOptions } from "react-query";

const TRX_API_BASE = "transactions";
const ONE_TRX_API_BASE = "transaction";
const TRX_ALERT_API_BASE = "txsubscribe";

interface ITrx {
  hash: string;
  height: number;
  size: number;
  weight: number;
  time: number;
}

interface Subscriptions {
  id: string;
  status: boolean;
  target_confirms: number;
  tx_id: string;
  created_at: string;
}

interface IGetTrxSubResponse {
  data: Subscriptions[];
}

interface ICreateTxAlertResponse {
  txid: string;
}

interface ICreateTxAlertPayload {
  tx_ix: string;
  target_confirms: number;
}

interface IGetTrxsResponse {
  hex: string;
  txid: string;
  hash: string;
  size: number;
  vsize: number;
  weight: number;
  version: number;
  locktime: number;
  vin: [];
  confirmations: number;
  time: number;
}

const getLatestTrx = async () => {
  const res: IGetTrxsResponse[] = await Api.get(`${TRX_API_BASE}/latest`);
  console.log("latest", res);

  return res;
};

const getTransactionByTxid = async (txid: string) => {
  const res: IGetTrxsResponse = await Api.get(`${ONE_TRX_API_BASE}/${txid}`);
  return res;
};

const createTx = async (data: ICreateTxAlertPayload) => {
  const res: ICreateTxAlertResponse = await Api.post(
    `${TRX_ALERT_API_BASE}/create`,
    data
  );
  return res;
};

export const getSubscribeTx = async () => {
  console.log("getSubscribeTx");

  const res: IGetTrxSubResponse = await Api.get(`${TRX_ALERT_API_BASE}/`);
  console.log("response", res);

  return res;
};

export const useGetLatestTrxs = (
  options: UseQueryOptions<IGetTrxsResponse[], string, IGetTrxsResponse[]> = {}
) =>
  useSatEyeQuery<IGetTrxsResponse[], string, IGetTrxsResponse[]>({
    queryKey: ["latest-trx"],
    queryFn: getLatestTrx,
    ...options,
  });

export const useCreateTxAlert = (onSuccess: () => void) =>
  useSatsEyeMutation<ICreateTxAlertResponse, string, ICreateTxAlertPayload>({
    mutationFn: createTx,
    onSuccess,
  });

export const useGetSubscribeTx = () =>
  useSatEyeQuery<IGetTrxSubResponse, string, IGetTrxSubResponse>({
    queryKey: "subscriptions",
    queryFn: getSubscribeTx,
  });

export const useGetTransactionByTxid = (
  txid: string,
  options: UseQueryOptions<IGetTrxsResponse, string, IGetTrxsResponse> = {}
) =>
  useSatEyeQuery<IGetTrxsResponse, string, IGetTrxsResponse>({
    queryKey: ["single-trx", txid],
    queryFn: () => getTransactionByTxid(txid),
  });
