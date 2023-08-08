import React from "react";
import Logo from "../assets/logo1.png";
import Uniswap from "../assets/uniswap.svg";

const Footer = () => {
  return (
    <footer className="py-10 w-full ">
      <div className="container flex gap-9 justify-center items-center flex-col">
        <a href="" className="">
          <img src={Logo} alt="" />
        </a>

        <div className="flex w-full gap-16 justify-center items-center flex-col md:flex-row ">
          <p className="">
            Copyright © {new Date().getFullYear()} TRIBE. All Rights Reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
