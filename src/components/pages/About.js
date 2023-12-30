import React from "react";
import { Link } from "react-router-dom";
import Team from "../Team"

const About = () => {
  return (
    <div>
      <section className="bg-gray-100 p-8">
        <h2 className="text-4xl font-bold text-center mb-6 text-[#00df9a]">
          About Us
        </h2>
        <div className="flex flex-col lg:flex-row max-w-5xl mx-auto mt-10">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            {/* Add your image here */}
            <img
              src="/images/Web.png"
              alt="About Us"
              className="w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2 lg:ml-8 px-6">
            <h3 className="text-3xl font-bold mb-4">
              Confused about which course to take? Don't worry—I've got you
              covered. Explore our range of courses.
            </h3>

            <p className="mb-8 text-base text-body-color dark:text-dark-6">
              Welcome to CODINGHUB, your premier destination for a
              transformative learning experience in the world of coding and
              technology. At CODINGHUB, we are committed to empowering
              individuals with the skills and knowledge needed to thrive in the
              rapidly evolving digital landscape.
            </p>
            <Link to="/courses">
              <button className="bg-[#00df9a] w-full lg:w-[200px] rounded-md font-medium my-6 py-3 text-black mx-auto lg:mx-0">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Team />
    </div>
  );
};

export default About;
