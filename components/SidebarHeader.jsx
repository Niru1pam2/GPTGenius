import React from "react";
import ThemeToggle from "./ThemeToggle";
import { SiOpenaigym } from "react-icons/si";

const SidebarHeader = () => {
  return (
    <div className="flex gap-4 mb-4 px-4 items-center">
      <SiOpenaigym className="w-10 h-10 text-primary" />
      <h2 className="mr-auto font-extrabold text-primary text-xl">GPTGenius</h2>
      <ThemeToggle />
    </div>
  );
};

export default SidebarHeader;
