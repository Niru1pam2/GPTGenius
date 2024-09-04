import Sidebar from "@/components/Sidebar";
import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const layout = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <label
          htmlFor="my-drawer-2"
          className=" drawer-button lg:hidden fixed top-6 right-6"
        >
          <FaBarsStaggered className="w-6 h-6 text-primary" />
        </label>
        <div className="min-h-screen bg-base-200">{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
};

export default layout;
