"use client";

import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React from "react";
import { RxAvatar } from "react-icons/rx";

const Avatar = () => {
  const { id } = useAppSelector((state) => state.user);
  console.log(id);

  return (
    <>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="w-10 rounded-full flex justify-center items-center">
              <RxAvatar size={25} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {id !== "" ? (
              <DashBoardButton />
            ) : (
              <>
                <li>
                  <Link href={"/signin"}>Sign in</Link>
                </li>
                <li>
                  <Link href={"/signup"}>Sign up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Avatar;

const DashBoardButton: React.FC = () => (
  <>
    <button>
      <Link href={"/dashboard"}>Dashboard</Link>
    </button>
    <button>
      <Link href={"/logout"}>Log out</Link>
    </button>
  </>
);
