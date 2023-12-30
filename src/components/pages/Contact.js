import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("moqgqvon");

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Your custom logic here, for example, show an alert
    alert("Thank you! Your message was received successfully!");

    // Optionally, you can submit the form using the Formspree hook
    await handleSubmit(e);
  };

  if (state.succeeded) {
    return <p>Thank you! Your message was received successfully!</p>;
  }

  return (
    <div className="mb-16">
      <section className="bg-gray-100 p-8 text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#00df9a]">Contact Us</h2>
      </section>

      <section className="bg-gray-100 p-8 flex flex-col lg:flex-row max-w-5xl mx-auto">
        {/* Column with map */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8396.512350686737!2d72.9196755195398!3d20.373772908160923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ce2c01246603%3A0xca6d49eb7baace15!2sVapi%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1703936177972!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Column with form */}
        <div className="lg:w-1/2 lg:ml-8 px-6">
          {/* Form */}
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#00df9a]"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div>
              <label
                htmlFor="number"
                className="block text-sm font-semibold text-gray-600"
              >
                Number
              </label>
              <input
                type="text"
                id="number"
                name="number"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#00df9a]"
              />
              <ValidationError
                prefix="Number"
                field="number"
                errors={state.errors}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#00df9a]"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#00df9a]"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              className="bg-[#00df9a] w-full rounded-md text-white py-2 transition duration-300 hover:bg-opacity-80"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
