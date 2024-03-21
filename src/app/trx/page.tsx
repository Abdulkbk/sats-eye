import GeneralLayout from "@/components/layout/GeneralLayout";
import TransactionPageComponent from "@/components/transactions/TransactionPageComponent";
import React from "react";

const TransactionsPage = () => {
  return (
    <GeneralLayout>
      <TransactionPageComponent />
    </GeneralLayout>
  );
};

export default TransactionsPage;
