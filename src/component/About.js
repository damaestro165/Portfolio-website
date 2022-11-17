import React from 'react';

function About() {
  return (
    <div name="about" className="w-full h-screen text-slate-800 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-2xl font-bold inline border-b-4 border-green-800">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px]  w-full  grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-xl font-bold">
            <p>Hi, welcome to my portifolio. Nice to meet you</p>
          </div>
          <div>
            <p>
              In recent years, I've been focused on programming, building a
              solid frontend stack and creating exciting projects that solve
              real-world problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
