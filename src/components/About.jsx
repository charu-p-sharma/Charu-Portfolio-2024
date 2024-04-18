import React from "react";
import aboutImg from "../assets/aboutImg.jpeg";

const About = () => {
  return (
    <div className="h-auto bg-[#232325] py-10 text-white" id="about">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-10 sm:flex-row md:gap-6">
        <div>
          <div className="h-full w-[400px]">
            <img
              src={aboutImg}
              alt=""
              className="h-[300px] rounded-xl object-cover brightness-50 grayscale filter"
            />
          </div>
        </div>

        <div>
          <div className="p-2">
            <div className="my-3 text-gray-300">
              <h3 className="mb-5 text-4xl font-semibold">
                About <span className="primary-text">Me</span>{" "}
              </h3>
              <p className="mx-auto w-11/12 text-justify leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                rerum facere culpa dolores. Natus deleniti hic labore harum iste
                expedita sequi cumque, architecto iusto recusandae officia,
                consequatur rem! Et rem, minus eius veritatis fugit quibusdam
                suscipit earum asperiores eveniet minima.
              </p>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-7">
            <div className="rounded-lg bg-[#333333]/40 p-5">
              <h3 className="text-2xl font-semibold text-white md:text-4xl">
                11 <span className="primary-text">+</span>{" "}
              </h3>
              <p>
                <span className="text-xs md:text-base">Projects</span>
              </p>
            </div>

            <div className="rounded-lg bg-[#333333]/40 p-5">
              <h3 className="text-2xl font-semibold text-white md:text-4xl">
                1 <span className="primary-text">+</span>{" "}
              </h3>
              <p>
                <span className="text-xs md:text-base">years experience</span>
              </p>
            </div>

            <div className="rounded-lg bg-[#333333]/40 p-5">
              <h3 className="text-2xl font-semibold text-white md:text-4xl">
                10 <span className="primary-text">+</span>{" "}
              </h3>
              <p>
                <span className="text-xs md:text-base">happy clients</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
