import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-white ">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 uppercase">
          Unlock Your Coding Potential
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-5">
          Welcome to CodingHub Where Skills Meet Innovation!
        </h1>

        <p className="md:text-2xl text-xl font-bold text-gray-500 md:pl-4 pl-2 py-4">
          Let's learn together!
        </p>
        
        <Link to="/courses">
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black ">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
