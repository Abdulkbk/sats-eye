"use client";

import { useGetBlockByHeight } from "@/services/blocks";
import React from "react";
import { BiBox } from "react-icons/bi";
import { FiBox } from "react-icons/fi";

const SingleBlockComponent = ({
  blockheight,
  isHash = false,
}: {
  blockheight: string;
  isHash?: boolean;
}) => {
  const { data } = useGetBlockByHeight(blockheight, isHash);
  console.log(data);

  return (
    <div className="w-full mt-10 shadow rounded">
      <section className="flex space-x-5 items-center text-4xl font-bold">
        <FiBox />
        <h2>Block #{blockheight}</h2>
      </section>
      <section className="mt-5 w-full">
        <div className="flex justify-between p-2">
          <p className="">HEIGHT</p>
          <p className="">{data?.block.height}</p>
        </div>
        <div className="flex justify-between p-2">
          <p className="">CONFIRMATIONS</p>
          <p className="">{data?.block.confirmations}</p>
        </div>
        <div className="flex justify-between p-2">
          <p className="">SIZE</p>
          <p className="">{data?.block.size}</p>
        </div>
        <div className="flex justify-between p-2">
          <p className="">WEIGHT</p>
          <p className="">{data?.block.weight}</p>
        </div>
        <div className="flex justify-between p-2">
          <p className="">TIME</p>
          <p className="">{data?.block.time}</p>
        </div>
        <div className="flex justify-between p-2">
          <p className="">VERSION</p>
          <p className="">{data?.block.version}</p>
        </div>
        <div className="flex justify-between p-2">
          <p className="">DIFFICULTY</p>
          <p className="">{data?.block.difficulty}</p>
        </div>
        <div className="flex justify-between p-2">
          <p className="">DIFFICULTY</p>
          <p className="">{data?.block.difficulty}</p>
        </div>
        <div className="flex justify-between p-2">
          <p className="">HASH</p>
          <p className="">{data?.block.hash}</p>
        </div>
        <div className="flex justify-between p-2">
          <p className="">MERCKLE ROOT</p>
          <p className="">{data?.block.merkleroot}</p>
        </div>
      </section>
    </div>
  );
};

export default SingleBlockComponent;
