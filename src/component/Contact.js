import React from 'react';

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4 "
    >
      <form
        action="https://getform.io/f/ed63c3fa-5437-4958-8658-fd7111d67908"
        method="POST"
        className="flex flex-col max-w-[600px] w-full h-full"
      >
        <div className="pb-8">
          <p className="text-2xl sm:mt-10 font-bold inline border-b-4 border-green-800">
            Contact
          </p>
          <p className="text-gray-600 py-4">
            I'm currently available to get involved in new projects, so get in
            touch if you'd like to work together.
          </p>
        </div>

        <input
          type="text"
          placeholder="Name"
          name="name"
          className="my-4 p-2 bg-slate-200 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="my-4 p-2 bg-slate-200 rounded-md"
        />
        <textarea
          className="p-2 bg-slate-200 rounded-md"
          placeholder="Messege"
          name="message"
          rows="10"
        ></textarea>
        <button className=" text-gray-800 border-2 border-slate-500 hover:bg-slate-500 hover:text-white rounded-md hover:border-white px-4 my-8 py-3 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
