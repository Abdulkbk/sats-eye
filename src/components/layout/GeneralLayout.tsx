import React from "react";
import MainNavbar from "@/components/navigation/MainNavbar";

const GeneralLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center flex-col lg:px-[30rem] bg-base-200">
      <MainNavbar />
      <main className="w-full shadow-lg p-1">{children}</main>
    </div>
  );
};

export default GeneralLayout;
