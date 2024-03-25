"use client";

import { useGetSubscribeTx } from "@/services/transactions";
import React from "react";

const MyAlerts = () => {
  const { data, isLoading } = useGetSubscribeTx();
  console.log(data);

  return <div className="mt-4 p-5">MyAlerts</div>;
};

export default MyAlerts;
