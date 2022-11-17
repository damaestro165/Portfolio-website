import React from 'react';
import Html from '../img/html.png';
import Bootstrap from '../img/bootstrap.png';
import Css from '../img/css.png';
import Github from '../img/github.png';
import Js from '../img/js.png';
import Reactjs from '../img/react.png';
import Tailwind from '../img/tailwind.png';
import Sass from '../img/sass.png';

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen">
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-2xl font-bold inline border-b-4 border-green-800">
            Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className=" shadow-md shadow-slate-200 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Html} alt="html icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className=" shadow-md shadow-slate-200 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Css} alt="Css icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className=" shadow-md shadow-slate-200 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Sass} alt="Sass icon" />
            <p className="my-4">Sass</p>
          </div>
          <div className=" shadow-md shadow-slate-200 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Js} alt="Js icon" />
            <p className="my-4">Js</p>
          </div>
          <div className=" shadow-md shadow-slate-200 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Bootstrap}
              alt="Bootstrap icon"
            />
            <p className="my-4">Bootstrap</p>
          </div>
          <div className=" shadow-md shadow-slate-200 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind Css</p>
          </div>
          <div className=" shadow-md shadow-slate-200 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Reactjs} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className=" shadow-md shadow-slate-200 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="github icon" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
