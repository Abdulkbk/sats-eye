import React from "react";

interface Subscriptions {
  id: string;
  status: boolean;
  target_confirms: number;
  tx_id: string;
  created_at: string;
}

interface IAlert {
  data: Subscriptions;
}

const AlertCard = ({ data }: IAlert) => {
  return (
    <div className="my-2 shadow-lg rounded px-5 py-3">
      <div className="flex justify-between text-lg">
        <p className="">Txid</p>
        <p className="">{data.tx_id}</p>
      </div>
      <div className="flex justify-between text-lg">
        <p className="">Target Confirmations</p>
        <p className="">{data.target_confirms}</p>
      </div>
      <div className="flex justify-between text-lg">
        <p className="">Dispatched</p>
        <p className="">{data.status}</p>
      </div>
      <div className="flex justify-between text-lg">
        <p className="">Date created</p>
        <p className="">{data.created_at}</p>
      </div>
    </div>
  );
};

export default AlertCard;
