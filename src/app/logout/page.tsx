"use client";
import { useAppDispatch } from "@/redux/hooks";
import { removeAuthToken } from "@/services/auth";
import { clearUserData } from "@/store/slices/user";
import React, { useEffect } from "react";

const LogoutPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(clearUserData());
    removeAuthToken();
  }, [dispatch]);
  return <div>Logging out...</div>;
};

export default LogoutPage;
