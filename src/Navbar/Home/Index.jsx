import React, { useState } from 'react'
import CrowselAPI from './CrowselAPI'
import { FaSearch } from "react-icons/fa";
import {Hero, VideoDiv} from './Hero';
import BlackImg from './BlackImg';
import AnimateHead from './AnimateHead';
import {Marquediv} from './Marquediv';
import Accordion from './Accordion';
import Qrcode from './Qrcode';
import Footer from './Footer';

const Index = () => {
    return (<>
        <Crowsel />
        <SearchBar/>
        <Hero/>
        <VideoDiv/>
        <BlackImg/>
        <AnimateHead/>
        <Marquediv/>
        <Accordion/>
        <Qrcode/>
        <Footer/>
    </>)
}

const Crowsel = () => {
    return (<>

        <div id="default-carousel" className="relative" data-carousel="static">

            <div className="relative h-56 overflow-hidden  md:h-[30rem] ">
                {/* <!-- Item 1 --> */}
                {
                    CrowselAPI.map((data, i) => {
                        return (<>
                            <div key={i} className="hidden duration-700 ease-in-out overflow-hidden hover:scale-105 delay-150" data-carousel-item>
                                <img src= {data.image} className="absolute block w-full brightness-50  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                <span className="absolute font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#111827] to-white drop-shadow-2xl  md:text-[2rem] font-semibold  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl  ">{data.title}</span>
                            </div>
                        </>)
                    })
                }
               
            </div>
            {/* <!-- Slider indicators --> */}
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    </>)
}

// search bar component
const SearchBar = () => {
    const[serach, setSearch] = useState("");
    let searchEvent = (event) => {
            let val= event.target.value
            setSearch(val);
    }
    return(<>
            <div className='w-[full] h-[auto] md:px-3 md:py-2 py-2 px-2 bg-gray-100 md:bg-gray-100 md:mx-[2rem] md:my-[2rem] mx-[1rem] my-[1rem] border-[0.01rem] overflow-hidden flex font-mono '>
                <input onChange={searchEvent} value={serach} type="text" className='md:px-[2rem] px-2 md:py-2 py-1 font-mono tracking-widest md:text-xl text-lg w-full focus:outline-none ' placeholder='Enter Your Queries here...' />
                <button className='bg-[#111827] h-[3rem] w-[4rem] px-1 py-1 md:text-xl pl-4 text-2xl dark:text-white text-black hover:bg-white  hover:text-[#111827] hover:border-[0.01rem] border-[#111827] active:bg-[#111827] active:text-white active:border-white active:ring-1 ring-[#111827]'><FaSearch/></button>
            </div>
    </>)
}

export default Index;