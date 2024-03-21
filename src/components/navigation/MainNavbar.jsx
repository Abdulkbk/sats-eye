import React from "react";
import Avatar from "../shared/Avatar";
import Link from "next/link";

const MainNavbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          SatsEye
        </Link>
      </div>
      <Avatar />
    </div>
  );
};

export default MainNavbar;
