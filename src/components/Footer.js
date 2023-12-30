import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white py-8 text-center">
      <h1 className="text-[#00df9a]">CODINGHUB</h1>
      <div className="flex justify-center mt-4">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/shahbazkhan17/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/Khangithub17"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <FaGithub size={30} />
        </a>
      </div>
      <p className="mt-10">&copy; 2023 SHAHBAZ KHAN. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
