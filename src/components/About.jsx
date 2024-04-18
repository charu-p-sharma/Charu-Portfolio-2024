import React from "react";
import aboutImg from "../assets/aboutImg.jpeg";

const About = () => {
  return (
    <div className="h-auto bg-[#232325] py-10 text-white" id="about">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full sm:w-[50%] md:w-[40%] lg:w-[30%]">
          <img
            src={aboutImg}
            alt=""
            className="h-[300px] w-full rounded-xl object-cover brightness-50 grayscale filter"
          />
        </div>

        <div className="w-full sm:w-[50%] md:w-[60%] lg:w-[70%]">
          <div className="p-2">
            <div className="my-3 text-gray-300">
              <h3 className="mb-5 text-4xl font-semibold">
                About <span className="primary-text">Me</span>{" "}
              </h3>
              <p className="w-full text-base leading-7 sm:text-lg md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                rerum facere culpa dolores. Natus deleniti hic labore harum iste
                expedita sequi cumque, architecto iusto recusandae officia,
                consequatur rem! Et rem, minus eius veritatis fugit quibusdam
                suscipit earum asperiores eveniet minima.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-7 sm:grid-cols-4 sm:gap-4">
            <StatCard number={11} label="Projects" />
            <StatCard number={1} label="years experience" />
            <StatCard number={10} label="happy clients" />
            <StatCard number={10} label="happy reviews" />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ number, label }) => {
  return (
    <div className="rounded-lg bg-[#333333]/40 p-4 sm:p-9">
      <h3 className="text-lg font-semibold text-white md:text-2xl">
        {number} <span className="primary-text">+</span>{" "}
      </h3>
      <p>
        <span className="text-xs sm:text-sm md:text-base">{label}</span>
      </p>
    </div>
  );
};

export default About;
