import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#202020]">
      <div className="mx-auto max-w-[1200px] space-y-5 pb-5 pt-10  text-center">
        <a
          href="https://www.linkedin.com/in/charu-pankaj-sharma/"
          target="blank"
        >
          <div className="author font-bold tracking-[0.5rem] text-white">
            Charu <span className="primary-color">Sharma</span>
          </div>
        </a>
        <div className="socialLinks flex justify-center space-x-5 text-slate-200">
          <a href="https://github.com/charu-p-sharma" target="blank">
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/charu-pankaj-sharma/"
            target="blank"
          >
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/charu_p_sharma/" target="blank">
            <AiFillInstagram size={30} />
          </a>
        </div>
        <p className="text-xs text-slate-400 md:text-lg">
          &copy; Copyrights 2024-2025. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
