"use client";
import React from "react";
import GeneralLayout from "../layout/GeneralLayout";
import LatestTransaction from "./LatestTransaction";
import LatestBlocks from "./LatestBlocks";
import ImportantInfo from "../shared/ImportantInfo";

const HomeComponent = () => {
  return (
    <GeneralLayout>
      <main className="">
        <ImportantInfo />
        <LatestTransaction />
        <LatestBlocks />
      </main>
    </GeneralLayout>
  );
};

export default HomeComponent;
