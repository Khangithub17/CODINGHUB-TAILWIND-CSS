import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const TeamMember = ({ name, role, imageUrl, linkedin, instagram }) => {
  return (
    <div className="max-w-sm mx-auto my-8 rounded-full overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img className="w-100 h-100" src={imageUrl} alt={`${name} - ${role}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{role}</p>
      </div>
      <div className="px-6 py-4 flex justify-center">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mx-2 hover:text-blue-700"
          >
            <FaLinkedin size={20} />
          </a>
        )}
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 mx-2 hover:text-pink-700"
          >
            <FaInstagram size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Shahbaz Khan",
      role: "Full Stack Developer",
      imageUrl: "images/Shahbaz.png",
      linkedin: "https://www.linkedin.com/in/shahbazkhan17/",
      instagram: "https://www.instagram.com/ig_khanop_17/",
    },
    {
      name: "Priyanka Singh",
      role: "Backend Developer",
      imageUrl: "images/Priyanka.png",
      linkedin: "https://www.linkedin.com/in/priyanka-singh-079ab91a7/",
      instagram: "https://www.instagram.com/",
    },
    {
      name: "Aman Tiwari",
      role: "Graphic Designer",
      imageUrl: "images/Aman.png",
      linkedin: "https://www.linkedin.com/in/damaodesign/",
      instagram: "https://www.instagram.com/",
    },

    {
      name: "Archis Kamli",
      role: "Marketing Cordinator",
      imageUrl: "images/Archis.png",
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/",
    },
    // Add more team members as needed
  ];

  return (
    <div className="bg-gray-100 py-16 text-center">
      <h2 className="text-3xl font-bold mb-8 text-4xl font-bold mt-5 text-center mb-6 text-[#00df9a]">
        Our Team
      </h2>
      <div className="container mx-auto flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
