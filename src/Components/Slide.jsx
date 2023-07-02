import React from "react";
import Person1 from "../assets/person1.png";
import Person2 from "../assets/person2.png";
import Person3 from "../assets/person3.png";
import Person4 from "../assets/person4.png";
import Person5 from "../assets/person5.png";
import Person6 from "../assets/person6.png";
import Person7 from "../assets/person7.png";
import Person8 from "../assets/person8.png";
import Person9 from "../assets/person9.png";

const Slide = () => {
  return (
    <section className="py-[50px] w-full">
      <div className="container flex justify-center items-center gap-8 flex-wrap">
        <img src={Person1} alt="" className="w-24 md:w-[10rem]" />
        <img src={Person2} alt="" className="w-24 md:w-[10rem]" />
        <img src={Person3} alt="" className="w-24 md:w-[10rem]" />
        <img src={Person4} alt="" className="w-24 md:w-[10rem]" />
        <img src={Person5} alt="" className="w-24 md:w-[10rem]" />
        <img src={Person6} alt="" className="w-24 md:w-[10rem]" />
        <img src={Person7} alt="" className="w-24 md:w-[10rem]" />
        <img src={Person8} alt="" className="w-24 md:w-[10rem]" />
        <img src={Person9} alt="" className="w-24 md:w-[10rem]" />
      </div>
    </section>
  );
};

export default Slide;
