import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <div name='home' className='w-full h-screen '>
      <div className='max-w-[1000px] mx-auto px-5 flex flex-col justify-center h-full'>
        <div className=''>
          <h1 className='text-green-800 text-lg md:text-xl '>Hi, my name is</h1>
          <h1 className='text-slate-700 md:font-bold font-semibold  text-5xl md:text-[5rem] my-4'>
            Adeniyi Abayomi
          </h1>
          <TypeAnimation
            // Same String at the start will only be typed once, initially
            sequence={[
              " I'm a Frontend Developer",
              1000,
              'I build on web solutions',
              1000,
              'I build things web',
              1000,
              'Allthings JavaScript',
              1000,
            ]}
            deletionSpeed={99}
            speed={50}
            wrapper='h2'
            repeat={Infinity}
            className='text-slate-700 font-bold text-xl text- md:text-3xl'
          />

          <p className='text-2xl'>
            I build Custom Web Solution, website that works and look good.
          </p>
          <div className='mt-5'>
            <button
              type='button'
              className='text-white text-lg font-medium p-5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-none  px-5 py-2.5 text-center mr-2 mb-2'
            >
              Hire Me
            </button>
            <button
              type='button'
              className='text-white text-lg font-semibold p-5 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800  rounded-none  px-5 py-2.5 text-center mr-2 mb-2'
            >
              CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
