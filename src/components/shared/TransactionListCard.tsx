import React from "react";

interface Itrx {
  txid: string;
  value: number;
  size: number;
  fee: number;
}

const TransactionListCard = ({
  data: { txid, value, size, fee },
}: {
  data: Itrx;
}) => {
  return (
    <div className="shadow-md hover:bg-base-100 bg-base-200 pt-2 flex justify-center items-center border rounded border-base-100 px-4">
      <div className="h-[10rem] w-full ">
        <div className="space-y-3 flex flex-col justify-center">
          <div className="flex justify-between">
            <strong>TXID</strong>
            <p>{txid}</p>
          </div>
          <div className="flex justify-between">
            <strong>Value</strong>
            <p>{value}</p>
          </div>
          <div className="flex justify-between">
            <strong>Size</strong>
            <p>{size}</p>
          </div>
          <div className="flex justify-between">
            <strong>Fee</strong>
            <p>{fee}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionListCard;
