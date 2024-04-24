import React from "react";
import { NavBar } from "./nav-bar";
import { ModeToggle } from "./mode-toggle";
import { TypographyH2 } from "./typography/h2";

const Header = () => {
  return (
    <header className="flex justify-between items-center pt-5 w-3/4 fixed top-0 z-10">
      <TypographyH2 text="Lucas Waddell" />
      <div className="flex items-center">
        <NavBar />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
