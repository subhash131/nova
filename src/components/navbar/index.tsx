import React from "react";
import Logo from "./logo";
import NavItems from "./navitems";
import LoginButton from "./login-button";

const Navbar = () => {
  return (
    <div className="w-full h-14 z-50 bg-white flex items-center justify-between px-20 sticky top-0 ">
      <Logo />
      <NavItems />
      <LoginButton />
    </div>
  );
};

export default Navbar;
