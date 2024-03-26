import { useGetTransactionByTxid } from "@/services/transactions";
import React from "react";
import { FiBox } from "react-icons/fi";

const SingleTransactionComponent = ({ txId }: { txId: string }) => {
  const { data } = useGetTransactionByTxid(txId);
  return (
    <div className="w-full mt-10 shadow rounded">
      <section className="flex space-x-5 items-center text-4xl font-bold">
        <FiBox />
        <h2>Txid #{txId}</h2>
      </section>
      <section className="mt-5 w-full">
        <div className="flex justify-between p-2">
          <p className="">CONFIRMATIONS</p>
          <p className="">{data?.confirmations}</p>
        </div>
        <div className="flex justify-between p-2">
          <p className="">SIZE</p>
          <p className="">{data?.size}</p>
        </div>
        <div className="flex justify-between p-2">
          <p className="">VIRTUAL SIZE</p>
          <p className="">{data?.vsize}</p>
        </div>
        <div className="flex justify-between p-2">
          <p className="">WEIGHT</p>
          <p className="">{data?.weight}</p>
        </div>
        <div className="flex justify-between p-2">
          <p className="">VERSION</p>
          <p className="">{data?.weight}</p>
        </div>
        <div className="flex justify-between p-2">
          <p className="">LOCKTIME</p>
          <p className="">{data?.locktime}</p>
        </div>
        <div className="flex justify-between p-2">
          <p className="">BLOCK TIME</p>
          <p className="">{data?.time}</p>
        </div>
        <div className="flex justify-between p-2">
          <p className="">HASH</p>
          <p className="">{data?.hash}</p>
        </div>
        <div className="flex justify-between p-2">
          <p className="">HEX</p>
          <p className="">{data?.hex}</p>
        </div>
      </section>
    </div>
  );
};

export default SingleTransactionComponent;
