import Logo from "@/components/logo";
import ThemeToggle from "@/components/theme-toggle";
import CustomUserButton from "@/components/user-button";
import React from "react";

const Header = () => {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-3">
        <Logo />
        <div className="flex items-center justify-between gap-3">
          <ThemeToggle />
          <CustomUserButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
