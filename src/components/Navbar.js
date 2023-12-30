import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const linkClickHandler = () => {
    closeNav();
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        <Link to="/" onClick={closeNav}>
          CODINGHUB
        </Link>
      </h1>
      <ul className="hidden md:flex space-x-4">
        <li className="p-4">
          <Link
            to="/"
            className="hover:text-[#00df9a] hover:underline font-bold"
            onClick={linkClickHandler}
          >
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="/about"
            className="hover:text-[#00df9a] hover:underline font-bold"
            onClick={linkClickHandler}
          >
            About
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="/courses"
            className="hover:text-[#00df9a] hover:underline font-bold"
            onClick={linkClickHandler}
          >
            Courses
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="/contact"
            className="hover:text-[#00df9a] hover:underline font-bold"
            onClick={linkClickHandler}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-full h-full bg-[#000300] ease-in-out duration-500 flex flex-col items-center md:hidden"
            : "hidden"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          <Link to="/" onClick={closeNav}>
            CODINGHUB
          </Link>
        </h1>
        <li className="p-4 border-b border-gray-600 w-full text-center">
          <Link
            to="/"
            className="hover:text-[#00df9a] hover:underline font-bold"
            onClick={linkClickHandler}
          >
            Home
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600 w-full text-center">
          <Link
            to="/about"
            className="hover:text-[#00df9a] hover:underline font-bold"
            onClick={linkClickHandler}
          >
            About
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600 w-full text-center">
          <Link
            to="/courses"
            className="hover:text-[#00df9a] hover:underline font-bold"
            onClick={linkClickHandler}
          >
            Courses
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600 w-full text-center">
          <Link
            to="/contact"
            className="hover:text-[#00df9a] hover:underline font-bold"
            onClick={linkClickHandler}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
