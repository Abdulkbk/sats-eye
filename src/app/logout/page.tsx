"use client";
import { useAppDispatch } from "@/redux/hooks";
import { removeAuthToken } from "@/services/auth";
import { clearUserData } from "@/store/slices/user";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LogoutPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(clearUserData());
    removeAuthToken();
    router.push("/");
  }, [dispatch]);
  return <div>Logging out...</div>;
};

export default LogoutPage;
