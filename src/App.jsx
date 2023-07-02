import React, { useEffect, useState } from "react";
import MainPage from "./Pages/MainPage";
import Loader from "./Components/Loader";
import Enter from "./assets/enter.png";
import firstImg from "./assets/3.png";
import secImg from "./assets/4.png";
import thrImg from "./assets/5.png";

const App = () => {
  useEffect(() => {
    document.querySelectorAll("img").forEach((ele) => {
      ele.setAttribute("loading", "lazy");
    });
    document.querySelectorAll("a").forEach((anchor) => {
      anchor.setAttribute("target", "_blank");
    });
  });
  const [isReady, setIsReady] = useState(false);
  const Loading = () => {
    return (
      <div className="fixed z-[1000] h-screen w-full bg-black top-0 right-0 flex justify-center items-center">
        <div className="h-screen w-full relative flex justify-center items-center">
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

          <img src={firstImg} alt="" className="absolute top-0 w-20 right-0" />
          <img src={secImg} alt="" className="absolute top-16 w-20 left-0" />
          <img
            src={thrImg}
            alt=""
            className="absolute bottom-52 w-20 left-16"
          />

          <button
            className="hover:scale-75 transition z-40"
            onClick={() => setIsReady(true)}
          >
            <img src={Enter} alt="" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full bg-black text-white font-freckleFace relative">
      {isReady ? <MainPage /> : <Loading />}
    </div>
  );
};

export default App;
