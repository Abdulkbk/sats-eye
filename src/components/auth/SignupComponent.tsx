"use client";

import { signUpUser } from "@/services/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FieldType = {
  username: string;
  email: string;
  password: string;
  phone?: string;
};

const SignupComponent: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const handleFormSubmit = async (formData: any) => {
    try {
      setLoading(true);
      await signUpUser(formData);
      setLoading(false);
      router.push("/signin");
    } catch (error) {}
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
              <span className="label-text">Choose a Username</span>
              <span className="label-text-alt"></span>
            </div>
            <input
              placeholder="ex. JohnSats"
              className="input input-bordered w-full max-w-xs"
              {...register("username")}
              required
            />
            {errors.username && (
              <small className="text-red-400">
                {errors.username.message as string}
              </small>
            )}
          </label>
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
              <span className="label-text">What is your Phone number</span>
              <span className="label-text-alt"></span>
            </div>
            <input
              placeholder="ex. +234 901 234 5678"
              className="input input-bordered w-full max-w-xs"
              {...register("phone")}
              required
            />
            {errors.phone && (
              <small className="text-red-400">
                {errors.phone.message as string}
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
              placeholder="**********"
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
                Don't have account?{" "}
                <a href="/signin" className="text-blue-500">
                  Sign in
                </a>
              </span>
            </div>
          </label>
          <div className="mt-5">
            <button className="btn w-full" disabled={loading}>
              {loading ? (
                <span className="loading loading-infinity loading-md bg-white"></span>
              ) : (
                "Sign up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
