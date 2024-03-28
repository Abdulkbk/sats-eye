import GeneralLayout from "@/components/layout/GeneralLayout";
import SingleTransactionComponent from "@/components/shared/SingleTransactionComponent";
import React from "react";

const SingleTransactionPage = ({
  params: { txId },
}: {
  params: { txId: string };
}) => {
  return (
    <GeneralLayout>
      <SingleTransactionComponent txId={txId} />
    </GeneralLayout>
  );
};

export default SingleTransactionPage;
