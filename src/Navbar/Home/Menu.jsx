import React from 'react'
import { NavLink } from 'react-router-dom'
import aweblogo from '../images/awebdevblog.jpg'
import profile from '../images/profile.JPG';

const Menu = () => {
    return(<>
    
<nav className="  bg-gradient-to-r from-[#111827] to-white border-gray-200 px-2 sm:px-4 py-2.5 ">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <NavLink index to='/' className="flex items-center">
      <img src= {aweblogo} className="h-5 mr-5 sm:h-9" alt="awebdevlogo" />
      <span className="self-center md:text-2xl text-xl font-mono font-semibold whitespace-nowrap dark:text-white ">A-Web Developer</span>
  </NavLink>
  <div className="flex items-center md:order-2">
      <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src={profile} alt="userphoto"/>
      </button>
    
      <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul className="py-1" aria-labelledby="user-menu-button">
          <li>
            <NavLink index to="/" className="block font-mono  px-4 py-2 text-sm text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">index</NavLink>
          </li>
          <li>
            <NavLink index to="/work" className="block font-mono px-4 py-2 text-sm text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Work</NavLink>
          </li>
          <li>
            <NavLink index to="/gallery" className="block font-mono  px-4 py-2 text-sm text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Gallery</NavLink>
          </li>
          <li>
            <NavLink index to="/contact" className="block font-mono  px-4 py-2 text-sm text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Contact</NavLink>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  text-clip ">
      <li className='overflow-hidden'>
        <NavLink index to="/" className="block font-mono md:text-[1.1rem] py-2 pl-3 pr-4 text-gray-700  rounded md:bg-transparent md:dark:hover:underline md:dark:hover:underline-offset-8 md:p-0 md:hover:text-blue-700 hover:underline underline-offset-8 dark:text-white" aria-current="page">Home</NavLink>
      </li>
      <li>
        <NavLink index to="/work" className="block font-mono md:text-[1.1rem] py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-600 md:dark:hover:underline md:dark:hover:underline-offset-8 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Work</NavLink>
      </li>
      <li>
        <NavLink  index to="gallery" className="block font-mono md:text-[1.1rem] py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-600 md:dark:hover:underline md:dark:hover:underline-offset-8 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Gallery</NavLink>
      </li>
      <li>
        <NavLink index to="contact" className="block font-mono md:text-[1.1rem] py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-600 md:dark:hover:underline md:dark:hover:underline-offset-8 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
      </li>
      
    </ul>
  </div>
  </div>
</nav>

    </>)
}

export default Menu;