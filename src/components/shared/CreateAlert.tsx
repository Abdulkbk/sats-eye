"use client";

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import CreateAlertModal from "./CreateAlertModal";

const CreateAlert = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main className="w-full shadow px-5 mt-2 bg-primary text-primary-content items-center rounded h-10 flex justify-between">
      <p>Create alert</p>
      <button className="btn btn-ghost">
        <FaPlus onClick={() => setIsOpen(true)} />
      </button>
      <CreateAlertModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
};

export default CreateAlert;
