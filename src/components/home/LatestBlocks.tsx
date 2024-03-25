import React from "react";
import Link from "next/link";
import BlockListTable from "../shared/BlockListTable";

const LatestBlocks = () => {
  return (
    <main className="block bg-base-100 mt-5 px-5 mb-6">
      <section className="">
        <h1 className="text-2xl font-bold h-28 border rounded-lg p-4">
          Latest Blocks
        </h1>
      </section>
      <BlockListTable />
      <section className="bg-base-200 border-t-2 border-base-100  h-10 text-center">
        <Link href={"/blocks"} className="link link-primary">
          See more blocks
        </Link>
      </section>
    </main>
  );
};

export default LatestBlocks;
