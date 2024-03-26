"use client";

import { useGetSubscribeTx } from "@/services/transactions";
import React from "react";
import AlertCard from "./AlertCard";

const datat = [
  {
    created_at: "2024-03-26T15:23:54.466+01:00",
    id: "09969dff-302e-4839-9a0c-c71899f76ab4",
    status: false,
    target_confirms: "3",
    tx_id: "d18a203c4cc75903f90f91fc096165524de50f1d2769aaf827b463ebe5c0a5d5",
    updated_at: "2024-03-26T15:23:54.466+01:00",
  },
  {
    created_at: "2024-03-26T15:23:42.78+01:00",
    id: "78c3beca-2f4f-4357-ae1d-d6b44e8ba88f",
    status: false,
    target_confirms: "3",
    tx_id: "d18a203c4cc75903f90f91fc096165524de50f1d2769aaf827b463ebe5c0a5d5",
    updated_at: "2024-03-26T15:23:42.78+01:00",
  },
  {
    created_at: "2024-03-26T15:23:24.35+01:00",
    id: "e6370b8c-ae0c-4f80-ad4f-9493aa11a62f",
    status: false,
    target_confirms: "3",
    tx_id: "d18a203c4cc75903f90f91fc096165524de50f1d2769aaf827b463ebe5c0a5d5",
    updated_at: "2024-03-26T15:23:24.35+01:00",
  },
];

const MyAlerts = () => {
  const { data } = useGetSubscribeTx();
  console.log("My alerts", data);

  return (
    <div className="mt-4 p-5">
      {datat.map((alert) => (
        <AlertCard data={alert} />
      ))}
    </div>
  );
};

export default MyAlerts;
