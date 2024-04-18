import React from "react";

const Contact = () => {
  return (
    <div
      className="my-5 flex h-full items-center justify-center sm:h-[70vh]"
      id="contact"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mr-2 flex flex-col justify-around rounded-xl bg-gray-800 p-6">
            <h1 className="text-4xl text-white sm:text-5xl">
              Contact <span>Me</span>
            </h1>
            <p className="text-normal mt-2 text-lg font-medium text-gray-400">
              Let's connet on LinkedIn <br /> or send me an Email
            </p>

            <div className="mt-2 flex items-center text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                ></path>
              </svg>
              <div className="text-md ml-4 w-40 font-semibold tracking-wide">
                <p className="uppercase">charu p. sharma</p>
              </div>
            </div>
          </div>

          <form
            action="https://getform.io/f/jawxyjdb"
            method="post"
            className="flex max-w-[700px] flex-col justify-center p-6"
          >
            <div className="flex flex-col">
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-100 mt-2 rounded-lg border-gray-700 bg-gray-800 p-3 px-3 text-white "
              />
            </div>

            <div className="mt-2 flex flex-col">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-100 mt-2 rounded-lg border-gray-700 bg-gray-800 p-3 px-3 text-white "
              />
            </div>

            <div className="mt-2 flex flex-col">
              <textarea
                type="message"
                name="message"
                id="message"
                placeholder="Your Message"
                className="w-100 mt-2 rounded-lg border-gray-700 bg-gray-800 p-3 px-3 text-white "
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary-color mt-3 rounded-lg px-6 py-3 text-white md:w-32"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
