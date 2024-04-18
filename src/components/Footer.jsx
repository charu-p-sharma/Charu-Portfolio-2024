import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="w-max-[800px] mt-12 border-t border-gray-500 text-center"
      id="footer"
    >
      <p className="my-5 text-gray-500">
        Shantiniketan Layout <br /> Medahalli, Bangalore
      </p>
      <div className="inline-flex gap-4 text-3xl text-gray-500">
        <FaInstagramSquare />
        <FaGithubSquare />
        <FaLinkedin />
      </div>
    </div>
  );
};

export default Footer;
