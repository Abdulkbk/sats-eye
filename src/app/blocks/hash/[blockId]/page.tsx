import GeneralLayout from "@/components/layout/GeneralLayout";
import SingleBlockComponent from "@/components/shared/SingleBlockComponent";
import React from "react";

const SingleBlockPage = ({
  params: { blockId },
}: {
  params: { blockId: string };
}) => {
  return (
    <GeneralLayout>
      <SingleBlockComponent blockheight={blockId} isHash />
    </GeneralLayout>
  );
};

export default SingleBlockPage;
