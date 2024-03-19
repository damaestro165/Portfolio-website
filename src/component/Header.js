import React, { useState } from 'react';
import './Header.css';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';

import { Link } from 'react-scroll';

function Header() {
  const [nav, Setnav] = useState(false);
  const handleClick = () => Setnav(!nav);
  return (
    <div className=' fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-100'>
      <div className='font-bold text-2xl ml-5'>Yomi.dev</div>

      <ul className='nav-bar  hidden md:flex '>
        <li className='nav-item'>
          <Link
            to='home'
            spy={true}
            smooth={true}
            duration={500}
            activeClass='active'
          >
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            activeClass='active'
            to='about'
            smooth={true}
            duration={500}
            spy={true}
          >
            About Me
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            activeClass='active'
            to='skills'
            smooth={true}
            duration={500}
            spy={true}
          >
            Skills
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            activeClass='active'
            to='projects'
            smooth={true}
            duration={500}
            spy={true}
          >
            Projects
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            activeClass='active'
            to='contact'
            smooth={true}
            duration={500}
            spy={true}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className=' z-10 md:hidden ' onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <div
        className={
          !nav
            ? 'hidden'
            : ' absolute top-0 right-0 w-3/5 h-screen bg-slate-100 flex flex-col justify-center items-center'
        }
      >
        <ul className=''>
          <li className='py-6 text-xl nav-item'>
            <Link
              activeClass='active'
              to='home'
              smooth={true}
              duration={500}
              spy={true}
            >
              Home
            </Link>
          </li>
          <li className='py-6 text-xl nav-item '>
            <Link
              activeClass='active'
              to='about'
              smooth={true}
              duration={500}
              spy={true}
            >
              About Me
            </Link>
          </li>
          <li className='py-6 text-xl nav-item '>
            <Link
              activeClass='active'
              to='skills'
              smooth={true}
              duration={500}
              spy={true}
            >
              Skills
            </Link>
          </li>
          <li className='py-6 text-xl nav-item '>
            <Link
              activeClass='active'
              to='projects'
              smooth={true}
              duration={500}
              spy={true}
            >
              Projects
            </Link>
          </li>
          <li className='py-6 text-xl nav-item '>
            <Link
              activeClass='active'
              to='contact'
              smooth={true}
              duration={500}
              spy={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className='hidden md:flex fixed flex-col left-0 top-[60%]'>
        <ul className='left-0'>
          <li className='pt-4 justify-between items-center '>
            <a href='https://github.com/damaestro165'>
              <FaGithub size={30} />
            </a>
          </li>
          <li className='pt-4'>
            <a href='https://twitter.com/yomi_dev'>
              <FaTwitter size={30} />
            </a>
          </li>
          <li className='pt-4'>
            <FaLinkedinIn size={30} />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
