import React from "react";
import aboutDp from "../../assets/about-dp.jpg";

function About() {
  return (
    <section
      className="aboutSection bg-[#101010] text-center md:py-20"
      id="aboutMe"
    >
      <div className="aboutWrapper max-h[1200px] mx-auto box-border flex max-w-[1200px] flex-col items-center  justify-center space-y-11  bg-aboutBg p-10 md:flex-row md:space-x-11 md:space-y-0 md:rounded-3xl">
        <img src={aboutDp} className="h-60 w-60 rounded-full" />
        <h3 className="text-justify font-bold text-gray-400 ">
          <p className=" mb-5 text-center text-xl font-bold uppercase text-white md:text-left">
            About <span className="primary-color">Me !</span>
          </p>
          As a passionate Full Stack Web Developer, I bring a strong expertise
          in both frontend and backend technologies. My proficiency spans HTML,
          CSS, JavaScript, React.js, Node.js, and Python, enabling me to craft
          dynamic and effective web solutions. I am an eager learner who always
          stays ahead of industry trends, ensuring that my skills remain
          relevant and cutting-edge. Committed to delivering visually stunning
          and intuitive web applications, I aim to provide unparalleled user
          experiences. I am now seeking entry-level opportunities where I can
          apply my technical prowess and thrive in a collaborative environment,
          ready to embark on an exciting journey in web development.
        </h3>
      </div>
    </section>
  );
}

export default About;
