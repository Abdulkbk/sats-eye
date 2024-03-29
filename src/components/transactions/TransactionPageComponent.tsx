"use client";
import React from "react";
import TransactionListCard from "../shared/TransactionListCard";
import { useGetLatestTrxs } from "@/services/transactions";

const datat = [
  { txid: "hsgaufqwejcbsanvlknlfv", value: 1000, size: 145, fee: 40.0 },
  { txid: "hsgaufqwejcbsanvlknlfv", value: 1000, size: 145, fee: 40.0 },
  { txid: "hsgaufqwejcbsanvlknlfv", value: 1000, size: 145, fee: 40.0 },
];

const TransactionPageComponent = () => {
  const { data } = useGetLatestTrxs();
  console.log(data);

  return (
    <main className="block bg-base-100 mt-5 px-5 mb-6">
      <section className="">
        <h1 className="text-2xl font-bold h-28 border rounded-lg p-4">
          Transactions
        </h1>
        <section className="mt-1">
          {datat.map((data) => (
            <TransactionListCard key={data.txid} data={data} />
          ))}
        </section>
      </section>
    </main>
  );
};

export default TransactionPageComponent;
