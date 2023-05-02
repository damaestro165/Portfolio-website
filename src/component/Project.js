import React from 'react';
import ProjectCard from './ProjectCard';
import CryptoWorld from '../assets/Crpytoworld.png';
import Snap from '../assets/snap.jpeg';
import Funiro from '../assets/funiroo.png';
import VirtualCard from '../assets/virtualcard.png';
import Dashboard from '../assets/dashboard.jpeg';
import ImageSearch from '../assets/imageSearch.png';
import Metabnb from '../assets/Metabnb.png';

function Project() {
  const projects = [
    {
      id: 1,
      image: Funiro,
      liveUrl: 'https://funiro-three.vercel.app/',
      github: 'https://github.com/damaestro165/funiro',
      title: 'Funiro',
      description:
        'It is an Ecommerce store made using React, Redux Toolkit Query and Chakra UI',
    },
    // {
    //   id: 2,
    //   image: CryptoWorld,
    //   liveUrl: 'https://courageous-mousse-737172.netlify.app/',
    //   github: 'https://github.com/damaestro165/cryptoworld',
    //   title: 'CryptoWorld',
    //   description: '',
    // },
    {
      id: 3,
      image: Snap,
      liveUrl: 'https://dynamic-scone-042a9c.netlify.app/',
      github: 'https://github.com/damaestro165/frontend-navigation-challenge',
      title: 'Snap Home Page',
      description: '',
    },
    {
      id: 4,
      image: VirtualCard,
      liveUrl: 'https://interactive-card55.netlify.app/',
      github: 'https://github.com/damaestro165/Interactive-card55',
      title: 'Virtual Card',
      description: '',
    },
    {
      id: 5,
      image: Dashboard,
      liveUrl: 'https://time-trackingdb.netlify.app/',
      github: 'https://github.com/damaestro165/Time-Tracking-Dashboard',
      title: 'Dashboard',
      description: '',
    },
    {
      id: 6,
      image: ImageSearch,
      liveUrl: 'https://poetic-nasturtium-6b38f0.netlify.app/',
      github: 'https://github.com/damaestro165/Image-Search',
      title: 'Image Search App',
      description: '',
    },
    {
      id: 7,
      image: Metabnb,
      liveUrl: 'https://metabnb-hng-task3.netlify.app/',
      github: '',
      title: 'MetaBNB',
      description: 'A metaverse landing page',
    },
  ];
  return (
    <div name='projects' className='w-full  md:h-screen'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div className='pb-10'>
          <p className='text-2xl sm:mt-10 font-bold inline border-b-4 border-green-800'>
            Some Things I've Built
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-4'>
          {projects.map((item) => (
            <div key={item.id}>
              <ProjectCard
                code={item.github}
                imageBg={item.image}
                demo={item.liveUrl}
                description={item.description}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
