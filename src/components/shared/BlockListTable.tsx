"use client";
import { useGetLatestBlocks } from "@/services/blocks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

// interface IBlocks {
//   height: number;
//   time: number;
//   size: number;
//   weight: number;
// }

const BlockListTable = () => {
  const { data, isLoading } = useGetLatestBlocks();
  const router = useRouter();
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
                <tr
                  className="py-2 hover:bg-base-200 cursor-pointer"
                  key={block.height}
                  onClick={() => router.push(`/blocks/${block.height}`)}
                >
                  <td className="underline link link-primary">
                    {" "}
                    <Link href={`/blocks/${block.height}`}>
                      {block.height}{" "}
                    </Link>
                  </td>
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
