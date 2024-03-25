import GeneralLayout from "@/components/layout/GeneralLayout";
import SingleBlockComponent from "@/components/shared/SingleBlockComponent";
import React from "react";

const SingleBlockPage = ({
  params: { blockId },
}: {
  params: { blockId: number };
}) => {
  return (
    <GeneralLayout>
      <SingleBlockComponent blockheight={blockId} />
    </GeneralLayout>
  );
};

export default SingleBlockPage;
