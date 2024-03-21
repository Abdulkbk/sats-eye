import React from "react";
import CreateAlertForm from "./CreateAlertForm";

interface IModalParams {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateAlertModal = ({ isOpen, setIsOpen }: IModalParams) => {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog
        id="my_modal_3"
        className={`modal bg-accent z-10 ${isOpen ? "modal-open" : ""}`}
      >
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </form>
          <CreateAlertForm />
        </div>
      </dialog>
    </>
  );
};

export default CreateAlertModal;
