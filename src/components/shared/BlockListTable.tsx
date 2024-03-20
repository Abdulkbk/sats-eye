import React from "react";

interface IBlocks {
  height: number;
  timestamp: number;
  transactions: number;
  size: number;
  weight: number;
}

const BlockListTable = ({
  data: { height, timestamp, transactions, size, weight },
}: {
  data: IBlocks;
}) => {
  return (
    <>
      <tr className="py-2">
        <td>{height}</td>
        <td>{timestamp}</td>
        <td>{transactions}</td>
        <td>{size}</td>
        <td>{weight}</td>
      </tr>
    </>
  );
};

export default BlockListTable;
