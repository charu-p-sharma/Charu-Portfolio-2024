import React from "react";
import dp1 from "../assets/dp1.jpg";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div>
      <div
        className="align-center mx-auto flex h-[80vh] max-w-[1200px] flex-col-reverse justify-center  sm:flex-row"
        id="hero"
      >
        <div className="mx-auto my-auto flex-col md:mx-0">
          <p className="text-xl font-bold text-gray-200 sm:text-4xl md:text-5xl">
            Hi! I am Charu Sharma
          </p>
          <h1 className="text-4xl font-bold sm:text-6xl md:py-6 md:text-7xl">
            <TypeAnimation
              sequence={["Frontend Dev", 1000, "UI/UX Designer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex items-center justify-center">
            {/* <p className="text-xl font-bold text-gray-500 sm:text-4xl md:text-5xl">
              with 1+ years experience
            </p> */}
          </div>

          <div className="my-7 flex justify-start gap-16 text-5xl text-purple-600">
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillInstagram />
          </div>

          <div className="group relative my-3 inline-flex">
            <div className="animate-tilt absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg transition-all duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>
            <a
              href="https://drive.google.com/file/d/1lbL3ASr7kNrZTUMWdQWo1oS1qGJiD1iI/view?usp=sharing"
              target="blank"
              title="Download CV"
              role="button"
              className="bg-primary-color font-pj relative inline-flex h-[60px] w-[190px] items-center justify-center rounded-xl px-8 py-4 text-lg font-bold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="my-auto">
          <img
            className="mx-auto h-auto w-[300px] rounded-full sm:w-[500px]"
            src={dp1}
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
