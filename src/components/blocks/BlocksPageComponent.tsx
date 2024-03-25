import React from "react";
import BlockListTable from "../shared/BlockListTable";

const BlocksPageComponent = () => {
  return (
    <main className="block bg-base-100 mt-5 px-5 mb-6">
      <section className="">
        <h1 className="text-2xl font-bold h-28 border rounded-lg p-4">
          Blocks
        </h1>
      </section>
      <BlockListTable />
    </main>
  );
};

export default BlocksPageComponent;
