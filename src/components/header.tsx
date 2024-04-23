import React from "react";
import { NavBar } from "./nav-bar";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="flex justify-between items-center pt-5 w-3/4 fixed top-0 z-10">
      <div className="text-2xl font-bold">Lucas Waddell</div>
      <div className="flex items-center">
        <NavBar />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
