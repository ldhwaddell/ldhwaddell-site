import React from "react";
import { NavBar } from "./nav-bar";
import { ModeToggle } from "./mode-toggle";
import { TypographyH2 } from "./typography/h2";

const Header = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-20 bg-background">
      <header className="relative mx-auto flex justify-between items-center w-3/4 h-24 bg-background">
        <TypographyH2 text="Lucas Waddell" />
        <div className="flex items-center">
          <NavBar />
          <ModeToggle />
        </div>
      </header>
    </div>
  );
};

export default Header;
