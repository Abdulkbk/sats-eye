import React from "react";

const ImportantInfo = () => {
  return (
    <div className="px-5 my-2 py-3">
      <section className="grid grid-cols-4 gap-4 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-5xl">
            <span>1502</span>
          </span>
          Block Height
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-5xl">
            <span>83.95</span>
          </span>
          Network Difficulty
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-5xl">
            <span>731.91</span>
          </span>
          Hash Rate
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-5xl">
            <span>3000</span>
          </span>
          Mempool Size
        </div>
      </section>
    </div>
  );
};

export default ImportantInfo;
