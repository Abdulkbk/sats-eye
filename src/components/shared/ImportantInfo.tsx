import { useGetHomeMetrics } from "@/services/metrics";
import { formatNetworkDifficulty } from "@/utils";
import React from "react";

const ImportantInfo = () => {
  const { data, isLoading, refetch } = useGetHomeMetrics();
  console.log(data);

  return (
    <div className="px-5 my-2 py-3">
      <section className="grid grid-cols-3 gap-4 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-4xl">
            <span>{data?.current_block_height.toLocaleString()}</span>
          </span>
          Block Height
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-4xl">
            <span>
              {data?.difficulty
                ? formatNetworkDifficulty(data!.difficulty)
                : "--"}
            </span>
          </span>
          Network Difficulty
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-4xl">
            {/* <span>{data?.network_hash_rate}</span> */}
            <span>723,895.90</span>
          </span>
          Hash Rate
        </div>

        {/* <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-4xl">
            <span>3000</span>
          </span>
          Mempool Size
        </div> */}
      </section>
    </div>
  );
};

export default ImportantInfo;
