import React from "react";
import Token from "../assets/token.png";

const Mics = () => {
  return (
    <section className="py-12 w-full relative">
      <div className="container">
        <h1 className="text-yellow-50 text-6xl capitalize text-center lg:text-9xl font-titanOne">
          tribemics
        </h1>
      </div>
      <div className="container grid gap-14 lg:grid-cols-2 justify-center items-center mt-14">
        <img src={Token} alt="" />
        <article className="flex flex-col ">
          <h3 className="text-white text-2xl font-timmana">
            TOKEN SUPPLY: 1, 000, 000, 000
          </h3>

          <div className="flex flex-col mt-10 gap-8 font-fredokaOne">
            <div className="flex flex-col gap-5">
              <div className="w-full h-8 justify-between items-start inline-flex">
                <div className="text-white text-[24px] font-normal leading-loose">
                  Supply
                </div>
                <div className="text-yellow-500 text-[24px] font-normal leading-loose">
                  100B
                </div>
              </div>
              <div className="w-full h-5  bg-red-100 rounded-full justify-start items-center inline-flex">
                <div className="w-11/12 h-5 relative bg-amber-300 rounded-full" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full h-8 justify-between items-start inline-flex">
                <div className="text-white text-[24px] font-normal leading-loose">
                  Tax
                </div>
                <div className="text-orange-600 text-[24px] font-normal leading-loose">
                  0%
                </div>
              </div>
              <div className="w-full h-5  bg-red-100 rounded-full justify-start items-center inline-flex">
                <div className="w-4/12 h-5 relative bg-blue-400 rounded-full" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full h-8 justify-between items-start inline-flex">
                <div className="text-white text-[24px] font-normal leading-loose">
                  Max Wallet
                </div>
                <div className="text-emerald-500 text-[24px] font-normal leading-loose">
                  2%
                </div>
              </div>
              <div className="w-full h-5  bg-red-100 rounded-full justify-start items-center inline-flex">
                <div className="w-9/12 h-5 relative bg-emerald-500 rounded-full" />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Mics;
