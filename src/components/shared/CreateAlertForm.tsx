import React from "react";
import { useForm } from "react-hook-form";

type FieldType = {
  tx_ix: string;
  target_confirms: number;
};

const CreateAlertForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const loading = false;

  return (
    <form className="">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Transaction Id</span>
          <span className="label-text-alt"></span>
        </div>
        <input
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          {...register("tx_id")}
          required
        />
        {errors.tx_id && (
          <small className="text-red-400">
            {errors.tx_id.message as string}
          </small>
        )}
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Target Confirmations</span>
          <span className="label-text-alt"></span>
        </div>
        <input
          placeholder="ex: 6"
          type="number"
          className="input input-bordered w-full max-w-xs"
          {...register("target_confirms")}
          required
        />
        {errors.target_confirms && (
          <small className="text-red-400">
            {errors.target_confirms.message as string}
          </small>
        )}
      </label>
      <div className="mt-5">
        <button className="btn w-full" disabled={loading}>
          {loading ? (
            <span className="loading loading-infinity loading-md bg-white"></span>
          ) : (
            "Create Alert"
          )}
        </button>
      </div>
    </form>
  );
};

export default CreateAlertForm;
