"use client";

import { useAppDispatch } from "@/redux/hooks";
import { signInUser } from "@/services/auth";
import { updateUserData } from "@/store/slices/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const SigninComponent: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const dispatch = useAppDispatch();

  const onSuccess = (data: any) => {
    dispatch(updateUserData(data));
    setLoading(false);
    router.push("/");
  };

  const handleFormSubmit = async (formData: any) => {
    console.log(formData);
    try {
      setLoading(true);
      await signInUser(formData, onSuccess);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <form className="" onSubmit={handleSubmit(handleFormSubmit)}>
          <section>
            <Link href={"/"}>
              <h1 className="text-3xl text-center my-2 font-bold hover:bg-base-200 p-2 rounded-lg">
                SatsEye
              </h1>
            </Link>
          </section>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your Email?</span>
              <span className="label-text-alt"></span>
            </div>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("email")}
              required
            />
            {errors.email && (
              <small className="text-red-400">
                {errors.email.message as string}
              </small>
            )}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your password?</span>
              <span className="label-text-alt"></span>
            </div>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("password")}
              required
            />
            {errors.password && (
              <small className="text-red-400">
                {errors.password.message as unknown as string}
              </small>
            )}
            <div className="label">
              <span className="label-text-alt">
                Don&apos;t have account?{" "}
                <a href="/signup" className="text-blue-500">
                  Sign up
                </a>
              </span>
            </div>
          </label>
          <div className="mt-5">
            <button className="btn w-full" disabled={loading}>
              {loading ? (
                <span className="loading loading-infinity loading-md bg-white"></span>
              ) : (
                "Sign in"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninComponent;
