"use client";
import { useGetLatestBlocks } from "@/services/blocks";
import React from "react";

// interface IBlocks {
//   height: number;
//   time: number;
//   size: number;
//   weight: number;
// }

const BlockListTable = () => {
  const { data, isLoading } = useGetLatestBlocks();
  return (
    <>
      <section className="mt-1">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Height</th>
                <th>Timestamp</th>
                <th>Size (KB)</th>
                <th>Weight (KWU)</th>
              </tr>
            </thead>
            <tbody>
              {data?.blocks.map((block) => (
                <tr className="py-2">
                  <td>{block.height}</td>
                  <td>{block.time}</td>
                  <td>{block.size}</td>
                  <td>{block.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default BlockListTable;
