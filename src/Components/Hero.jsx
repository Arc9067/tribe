import React from "react";
import Logo from "../assets/logo.png";
import Hero1 from "../assets/hero1.png";
import Hero2 from "../assets/hero2.png";

const Hero = () => {
  return (
    <section
      className="pt-[180px] pb-[100px] w-full flex justify-center   items-center relative"
      id="hero"
    >
      <svg
        width="356"
        height="538"
        viewBox="0 0 356 538"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 bottom-0 w-32 lg:w-max"
      >
        <path
          opacity="0.2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 712C196.613 712 356 552.613 356 356C356 159.387 196.613 0 0 0C-196.613 0 -356 159.387 -356 356C-356 552.613 -196.613 712 0 712ZM-0.00100708 599.579C134.524 599.579 243.578 490.525 243.578 356C243.578 221.475 134.524 112.421 -0.00100708 112.421C-134.526 112.421 -243.58 221.475 -243.58 356C-243.58 490.525 -134.526 599.579 -0.00100708 599.579Z"
          fill="url(#paint0_linear_536_155)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_536_155"
            x1="0"
            y1="0"
            x2="0"
            y2="712"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E8AC15" />
            <stop offset="1" stop-color="#7E3A20" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        width="171"
        height="550"
        viewBox="0 0 171 550"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-0"
      >
        <path
          opacity="0.2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M275 550C426.878 550 550 426.878 550 275C550 123.122 426.878 0 275 0C123.122 0 0 123.122 0 275C0 426.878 123.122 550 275 550ZM274.999 463.158C378.916 463.158 463.157 378.917 463.157 275C463.157 171.083 378.916 86.8421 274.999 86.8421C171.082 86.8421 86.8412 171.083 86.8412 275C86.8412 378.917 171.082 463.158 274.999 463.158Z"
          fill="url(#paint0_linear_536_164)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_536_164"
            x1="275"
            y1="0"
            x2="275"
            y2="550"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E8AC15" />
            <stop offset="1" stop-color="#7E3A20" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container flex flex-col justify-center items-center relative">
        <img
          src={Hero1}
          alt=""
          className="absolute top-0 left-0 w-16 lg:w-max hero-image"
        />
        <img
          src={Hero2}
          alt=""
          className="absolute top-10 right-0 w-14 lg:w-max hero-image"
        />
        <h2 className="text-white text-2xl font-ultra hero-text">Welcome To </h2>
        <h1 className="text-yellow-50 text-7xl md:text-9xl font-titanOne hero-text">
          TRIBE
        </h1>
        <img src={Logo} alt="" className="w-8/12 lg:w-max hero-image" />
      </div>
    </section>
  );
};

export default Hero;
