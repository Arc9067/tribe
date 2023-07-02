import React from "react";
import AboutPng from "../assets/aboutImg.png";
import Circle from "../assets/circle.png";

const About = () => {
  return (
    <section className="py-12 w-full relative ">
      <img src={Circle} alt="" className="absolute bottom-0 right-[50%]" />

      <div className="container grid gap-14 lg:grid-cols-2 justify-center items-center">
        <img src={AboutPng} alt="" />
        <article className="flex flex-col gap-8 items-start">
          <div>
            <h2 className="text-white text-2xl font-ultra capitalize">
              about{" "}
            </h2>
            <h1 className="text-yellow-50 text-7xl md:text-9xl font-titanOne">
              TRIBE
            </h1>
          </div>

          <div className="flex flex-col gap-8 font-fredokaOne">
            <div className="justify-start items-center gap-5 inline-flex">
              <div className="w-2.5 h-20 relative bg-gradient-to-b from-amber-500 to-green-500" />
              <div className=" text-white text-[16px] font-normal leading-loose">
                American dollar is loosing its value. Crypto Era is becoming
                mainstream and there’s very chance that world adopts Ethereum as
                the global leading{" "}
              </div>
            </div>
            <div className="justify-start items-center gap-5 inline-flex">
              <div className="w-2.5 h-20 relative bg-gradient-to-b from-blue-700 to-orange-400" />
              <div className=" text-white text-[16px] font-normal leading-loose">
                American dollar is loosing its value. Crypto Era is becoming
                mainstream and there’s very chance that world adopts Ethereum as
                the global leading{" "}
              </div>
            </div>
            <div className="justify-start items-center gap-5 inline-flex">
              <div className="w-2.5 h-20 relative bg-gradient-to-b from-red-600 to-amber-400" />
              <div className=" text-white text-[16px] font-normal leading-loose">
                American dollar is loosing its value. Crypto Era is becoming
                mainstream and there’s very chance that world adopts Ethereum as
                the global leading{" "}
              </div>
            </div>
          </div>
          <a
            href=""
            className="px-8 py-4 bg-yellow-500 shadow justify-center items-center gap-2.5 inline-flex text-xl capitalize hover:text-black font-titanOne"
          >
            live chart
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
