import React from "react";


const Analytics = () => {
  return (
    <div className="bg-white p-4 md:p-8">
      <h2 className="text-4xl font-bold mt-5 text-center mb-6 text-[#00df9a]">
        Recommended Courses
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-4 md:justify-center mt-5">
        {/* Card 1 */}
        <div className="flex-shrink-0 w-full md:max-w-xs bg-gray-200 p-4 rounded-md mb-4 md:mb-0">
          <img
            className="w-full h-40 object-cover mb-4 rounded-md"
            src="images/WebDev.png"
            alt="Course 1"
          />
          <h3 className="text-lg font-bold mb-2">Web Development </h3>
          <p className="text-gray-700 mb-4">
            Web development is a dynamic and ever-evolving field that
            encompasses the creation and maintenance of websites and web
            applications. It involves a combination of programming, design, and
            other skills to build functional and visually appealing online
            experiences. Here are key aspects and concepts related to web
            development
          </p>
          <button className="bg-[#00df9a] w-full rounded-md font-medium my-6 py-3 text-black">
            Start Watching
          </button>
        </div>

        {/* Card 2 */}
        <div className="flex-shrink-0 w-full md:max-w-xs bg-gray-200 p-4 rounded-md mb-4 md:mb-0">
          <img
            className="w-full h-40 object-cover mb-4 rounded-md"
            src="images/MERN.png"
            alt="Course 2"
          />
          <h3 className="text-lg font-bold mb-2">MERN Stack Course</h3>
          <p className="text-gray-700 mb-4">
            The MERN stack is a popular and powerful set of technologies used
            for building modern web applications. MERN stands for MongoDB,
            Express.js, React, and Node.js, and it represents a full-stack
            development environment that covers both the front-end and back-end
            aspects of web development Each component.
          </p>
          <button className="bg-[#00df9a] w-full rounded-md font-medium my-6 py-3 text-black">
            Start Watching
          </button>
        </div>
        {/*Card 3 */}
        <div className="flex-shrink-0 w-full md:max-w-xs bg-gray-200 p-4 rounded-md mb-4 md:mb-0">
          <img
            className="w-full h-40 object-cover mb-4 rounded-md"
            src="images/JS.png"
            alt="Course 2"
          />
          <h3 className="text-lg font-bold mb-2">Ultimate JavaScript Course</h3>
          <p className="text-gray-700 mb-4">
            JavaScript is a versatile, high-level, and interpreted programming
            language that is widely used for building dynamic and interactive
            web applications. Developed in the mid-1990s by Netscape, JavaScript
            has since become one of the three core technologies of the World
            Wide Web, alongside HTML and CSS. It is supported by all major web
            browsers.
          </p>
          <button className="bg-[#00df9a] w-full rounded-md font-medium my-6 py-3 text-black">
            Start Watching
          </button>
        </div>

        {/* Card 3 */}
        <div className="flex-shrink-0 w-full md:max-w-xs bg-gray-200 p-4 rounded-md mb-4 md:mb-0">
          <img
            className="w-full h-40 object-cover mb-4 rounded-md"
            src="images/React.png"
            alt="Course 3"
          />
          <h3 className="text-lg font-bold mb-2">
            React JS Tutorials For Beginners
          </h3>
          <p className="text-gray-700 mb-4">
            In the context of web development, a technology stack refers to the
            combination of programming languages, frameworks, libraries, and
            tools used to build a software application. React.js is a popular
            JavaScript library for building user interfaces, and when used in
            conjunction with other technologies.
          </p>
          <button className="bg-[#00df9a] w-full rounded-md font-medium my-6 py-3 text-black">
            Start Watching
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Analytics;
