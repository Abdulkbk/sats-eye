import React from "react";
import BlockListTable from "../shared/BlockListTable";

const blocksData = [
  {
    height: 3,
    timestamp: 1656688743,
    transactions: 500,
    size: 1762.99,
    weight: 8892.12,
  },
  {
    height: 2,
    timestamp: 1656688743,
    transactions: 500,
    size: 1762.99,
    weight: 8892.12,
  },
  {
    height: 1,
    timestamp: 1656688743,
    transactions: 500,
    size: 1762.99,
    weight: 8892.12,
  },
];

const BlocksPageComponent = () => {
  return (
    <main className="block bg-base-100 mt-5 px-5 mb-6">
      <section className="">
        <h1 className="text-2xl font-bold h-28 border rounded-lg p-4">
          Blocks
        </h1>
      </section>
      <section className="mt-1">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Height</th>
                <th>Timestamp</th>
                <th>Transactions</th>
                <th>Size (KB)</th>
                <th>Weight (KWU)</th>
              </tr>
            </thead>
            <tbody>
              {blocksData.map((data) => (
                <BlockListTable key={data.height} data={data} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default BlocksPageComponent;
