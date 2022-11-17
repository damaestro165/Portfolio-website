import React from 'react';

function ProjectCard({ imageBg, demo, code, title, description }) {
  return (
    <div
      style={{ backgroundImage: `url(${imageBg})` }}
      className="shadow-md shadow-slate-200 group container rounded-md justify-center items-center mx-auto content-div  "
    >
      <div className="opacity-0 group-hover:opacity-100 bg-slate-800 bg-opacity-40 flex justify-center items-center flex-col h-[12rem]">
        <span className="text-xl font-semibold text-white tracking-wider">
          {title}
        </span>
        <p className="text-slate-800 font-bold"></p>
        <div className="pt-8 text-center ">
          <a href={demo} target="blank">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-green-800 text-white  text-lg">
              Demo
            </button>
          </a>
          <a href={code} target="blank">
            <button className="text-center rounded-lg m-2 px-4 py-3 bg-green-800 text-white  text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
