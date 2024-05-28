import React from "react";
import dp5 from "../assets/dp5.jpg";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-center px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="text-center lg:w-3/5 lg:text-left">
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
          <div className="my-7 flex justify-center gap-16 text-5xl text-purple-600 lg:justify-start">
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillInstagram />
          </div>
          <div className="group relative my-3 inline-flex">
            <div className="animate-tilt absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg transition-all duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>
            <a
              href="https://drive.google.com/file/d/1FJ4H6dnEJSJjyhhC42CiwIsTrZRxBcQO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              title="Download CV"
              className="bg-primary-color font-pj relative mb-4 inline-flex h-[60px] w-[190px] items-center justify-center rounded-xl px-8 py-4 text-lg font-bold text-white shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 lg:mb-0 lg:h-[80px] lg:w-[220px]"
            >
              Download CV
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-primary-color font-pj relative inline-flex h-[60px] w-[190px] items-center justify-center rounded-xl px-8 py-4 text-lg font-bold text-white shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 lg:h-[80px] lg:w-[220px]"
            >
              Hire Me
            </Link>
          </div>
        </div>
        <div className="lg:w-2/5">
          <img
            className="mx-auto h-auto w-full rounded-full p-11 shadow-lg sm:w-[300px] lg:w-[500px]"
            src={dp5}
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
