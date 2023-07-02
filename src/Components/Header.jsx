import React from "react";
import Logo from "../assets/logo1.png";

const Header = () => {
  return (
    <header className="py-4 w-full absolute bg-black z-50 top-0 border-b border-white border-opacity-50 ">
      <nav className="container flex justify-between items-center">
        <a href="" className="no">
          <img src={Logo} alt="" />
        </a>
        <ul className="hidden lg:flex justify-between items-center gap-14 capitalize">
          <li className="hover:text-yellow-500 text-xl">
            <a href="no"> home</a>
          </li>
          <li className="hover:text-yellow-500 text-xl">
            <a href="no"> about</a>
          </li>
          <li className="hover:text-yellow-500 text-xl">
            <a href="no"> tokenomics</a>
          </li>
          <li className="hover:text-yellow-500 text-xl">
            <a href="no"> roadmap</a>
          </li>
        </ul>
        <a
          href=""
          className="px-8 py-4 bg-yellow-500 shadow justify-center items-center gap-2.5 inline-flex text-xl capitalize hover:text-black font-titanOne"
        >
          buy now
        </a>
      </nav>
    </header>
  );
};

export default Header;
