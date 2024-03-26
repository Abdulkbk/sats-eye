import React from "react";
import TransactionListCard from "../shared/TransactionListCard";
import Link from "next/link";
import { useGetLatestTrxs } from "@/services/transactions";

const data = [
  { txid: "hsgaufqwejcbsanvlknlfv", value: 1000, size: 145, fee: 40.0 },
  { txid: "hsgaufqwejcbsanvlknlfv", value: 1000, size: 145, fee: 40.0 },
  { txid: "hsgaufqwejcbsanvlknlfv", value: 1000, size: 145, fee: 40.0 },
];

const LatestTransaction = () => {
  const { data: d } = useGetLatestTrxs();
  console.log("data", d);

  return (
    <main className="block bg-base-100 mt-5 px-5 mb-6">
      <section className="">
        <h1 className="text-2xl font-bold h-28 border rounded-lg p-4">
          Latest Transaction
        </h1>
        <section className="mt-1">
          {data.map((data) => (
            <TransactionListCard key={data.txid} data={data} />
          ))}
        </section>
      </section>
      <section className="bg-base-200 border-t-2 border-base-100  h-10 text-center">
        <Link href={"/trx"} className="link link-primary">
          See more transactions
        </Link>
      </section>
    </main>
  );
};

export default LatestTransaction;
