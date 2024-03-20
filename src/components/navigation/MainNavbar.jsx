import React from "react";
import Avatar from "../shared/Avatar";

const MainNavbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">SatsEye</a>
      </div>
      <Avatar />
    </div>
  );
};

export default MainNavbar;
