"use client";
import { useGetLatestBlocks } from "@/services/blocks";
import Link from "next/link";
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
                <Link href={`/blocks/${block.height}`}>
                  <tr className="py-2" key={block.height}>
                    <td>{block.height}</td>
                    <td>{block.time}</td>
                    <td>{block.size}</td>
                    <td>{block.weight}</td>
                  </tr>
                </Link>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default BlockListTable;
