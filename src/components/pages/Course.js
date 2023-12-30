import React from 'react'

const Course = () => {
    const videoLinks = [
      "https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w",
      "https://www.youtube.com/watch?v=IymPq7ik29k&list=PLwGdqUZWnOp2Z3eFOgtOGvOWIk4e8Bsr_",
      "https://www.youtube.com/watch?v=VlPiVmYuoqw",
      "https://www.youtube.com/watch?v=eILUmCJhl64",
      "https://www.youtube.com/watch?v=7wnove7K-ZQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg",

      "https://www.youtube.com/watch?v=tS7upsfuxmo",
      "https://www.youtube.com/watch?v=-t5WNFPoCCE&list=PLQOGKy2nPhxlEVP4RBVrBoXPL6mZNZv5L",
      "https://www.youtube.com/watch?v=ekRpc5YgVZU",
      "https://www.youtube.com/watch?v=LpCFF2hzPzs&list=PLu0W_9lII9ag1cN0n_UcNRN7fYIwNYJDQ",
      "https://www.youtube.com/watch?v=Iskzda0zpuU&list=PL8p2I9GklV466xs0qGUvLGAXy6xLyEcQy",
    ];

    const openYoutubeLink = (link) => {
      window.open(link, "_blank");
    };



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
          <h3 className="text-lg font-bold mb-2">
            Web Development Full Course{" "}
          </h3>
          <p className="text-gray-700 mb-4">
            Web development is a dynamic and ever-evolving field that
            encompasses the creation and maintenance of websites and web
            applications. It involves a combination of programming, design, and
            other skills to build functional and visually appealing online
            experiences. Here are key aspects and concepts related to web
            development
          </p>
          <button
            onClick={() => openYoutubeLink(videoLinks[0])}
            className="bg-[#00df9a] w-full rounded-md font-medium my-6 py-3 text-black"
          >
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
          <button
            onClick={() => openYoutubeLink(videoLinks[1])}
            className="bg-[#00df9a] w-full rounded-md font-medium my-6 py-3 text-black"
          >
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
          <h3 className="text-lg font-bold mb-2">
            {" "}
            JavaScript Full Course (2024){" "}
          </h3>
          <p className="text-gray-700 mb-4">
            JavaScript is a versatile, high-level, and interpreted programming
            language that is widely used for building dynamic and interactive
            web applications. Developed in the mid-1990s by Netscape, JavaScript
            has since become one of the three core technologies of the World
            Wide Web, alongside HTML and CSS. It is supported by all major web
            browsers.
          </p>
          <button
            onClick={() => openYoutubeLink(videoLinks[2])}
            className="bg-[#00df9a] w-full rounded-md font-medium my-6 py-3 text-black"
          >
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
            React JS & Redux Tutorials For Beginners
          </h3>
          <p className="text-gray-700 mb-4">
            In the context of web development, a technology stack refers to the
            combination of programming languages, frameworks, libraries, and
            tools used to build a software application. React.js is a popular
            JavaScript library for building user interfaces.
          </p>
          <button
            onClick={() => openYoutubeLink(videoLinks[3])}
            className="bg-[#00df9a] w-full rounded-md font-medium my-6 py-3 text-black"
          >
            Start Watching
          </button>
        </div>
        <div className="flex-shrink-0 w-full md:max-w-xs bg-gray-200 p-4 rounded-md mb-4 md:mb-0">
          <img
            className="w-full h-40 object-cover mb-4 rounded-md"
            src="https://developers.redhat.com/sites/default/files/styles/article_feature/public/Python-01%20%282%29.webp?itok=TEVIQBQo"
            alt="Course 2"
          />
          <h3 className="text-lg font-bold mb-2">Python Tutorials</h3>
          <p className="text-gray-700 mb-4">
            Python, a versatile and dynamic programming language, has risen to
            prominence as a preferred choice for developers, data scientists,
            and enthusiasts alike. Known for its readability, simplicity, and
            vast community support, Python has become a driving force in various
            domains,Its indentation-based block structure.
          </p>
          <button
            onClick={() => openYoutubeLink(videoLinks[4])}
            className="bg-[#00df9a] w-full rounded-md font-medium my-6 py-3 text-black"
          >
            Start Watching
          </button>
        </div>
      </div>
      {/* New Section */}
      <div className="flex flex-col md:flex-row md:space-x-4 md:justify-center mt-5">
        <div className="flex-shrink-0 w-full md:max-w-xs bg-gray-200 p-4 rounded-md mb-4 md:mb-0">
          <img
            className="w-full h-40 object-cover mb-4 rounded-md"
            src="images/Tailwind.png"
            alt="Course 1"
          />
          <h3 className="text-lg font-bold mb-2">Tailwind Course In Hindi </h3>
          <p className="text-gray-700 mb-4">
            Tailwind CSS is a utility-first CSS framework that provides
            low-level utility classes to build designs directly in your markup.
            It's designed to be highly customizable and provides a rapid way to
            build modern, responsive user interfaces.
          </p>
          <button
            onClick={() => openYoutubeLink(videoLinks[5])}
            className="bg-[#00df9a] w-full rounded-md font-medium my-6 py-3 text-black"
          >
            Start Watching
          </button>
        </div>

        {/* Card 2 */}
        <div className="flex-shrink-0 w-full md:max-w-xs bg-gray-200 p-4 rounded-md mb-4 md:mb-0">
          <img
            className="w-full h-40 object-cover mb-4 rounded-md"
            src="images/wordpress.png"
            alt="Course 2"
          />
          <h3 className="text-lg font-bold mb-2">Wordpress Full Course</h3>
          <p className="text-gray-700 mb-4">
            WordPress is a widely-used open-source content management system
            (CMS) written in PHP. It started as a blogging platform but has
            evolved into a versatile CMS used for various types of websites.
            User-friendly interface for content creation and management{" "}
          </p>

          <button
            onClick={() => openYoutubeLink(videoLinks[6])}
            className="bg-[#00df9a] w-full rounded-md font-medium my-6 py-3 text-black"
          >
            Start Watching
          </button>
        </div>
        {/*Card 3 */}
        <div className="flex-shrink-0 w-full md:max-w-xs bg-gray-200 p-4 rounded-md mb-4 md:mb-0">
          <img
            className="w-full h-40 object-cover mb-4 rounded-md"
            src="images/nodejs.png"
            alt="Course 2"
          />
          <h3 className="text-lg font-bold mb-2">Node JS Course</h3>
          <p className="text-gray-700 mb-4">
            Node.js is an open-source, cross-platform JavaScript runtime
            environment built on the V8 engine. It allows developers to execute
            JavaScript code server-side, enabling the development of scalable
            and high-performance applications.
          </p>
          <button
            onClick={() => openYoutubeLink(videoLinks[7])}
            className="bg-[#00df9a] w-full rounded-md font-medium my-6 py-3 text-black"
          >
            Start Watching
          </button>
        </div>

        {/* Card 3 */}
        <div className="flex-shrink-0 w-full md:max-w-xs bg-gray-200 p-4 rounded-md mb-4 md:mb-0">
          <img
            className="w-full h-40 object-cover mb-4 rounded-md"
            src="images/sanity.webp"
            alt="Course 3"
          />
          <h3 className="text-lg font-bold mb-2">Sanity io Course</h3>
          <p className="text-gray-700 mb-4">
            Sanity.io is a headless content management system that offers a
            structured approach to content management. It allows developers to
            define a content model and provides a customizable and scalable API
            for content delivery.
          </p>
          <button
            onClick={() => openYoutubeLink(videoLinks[8])}
            className="bg-[#00df9a] w-full rounded-md font-medium my-6 py-3 text-black"
          >
            Start Watching
          </button>
        </div>
        <div className="flex-shrink-0 w-full md:max-w-xs bg-gray-200 p-4 rounded-md mb-4 md:mb-0">
          <img
            className="w-full h-40 object-cover mb-4 rounded-md"
            src="/images/java.png"
            alt="Course 2"
          />
          <h3 className="text-lg font-bold mb-2">Java Full Course</h3>
          <p className="text-gray-700 mb-4">
            Java is a widely-used, general-purpose, object-oriented programming
            language that is designed to be platform-independent. Developed by
            James Gosling and Mike Sheridan at Sun Microsystems in the 1990s,
            Java's key features.
          </p>
          <button
            onClick={() => openYoutubeLink(videoLinks[9])}
            className="bg-[#00df9a] w-full rounded-md font-medium my-6 py-3 text-black"
          >
            Start Watching
          </button>
        </div>
      </div>
    </div>
  );
}

export default Course