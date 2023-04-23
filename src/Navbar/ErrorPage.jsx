import React from "react";
import '../App.css';
import errorimg from '../Navbar/images/Errorimg.png';
import wave from '../Navbar/images/wave.svg'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return <>
       <div className="h-full w-full overflow-hidden relative">
       <div className="space-y-[1rem]">
            <h1 className="text-[4rem] font-mono  text-center text-[#111827] hover:animate-bounce">404 ERROR</h1>
            <div className="flex justify-center ">
                <img src={errorimg} className="h-auto w-auto hover:animate-spin shadow-[#111827]" alt="" />
            </div>
            <div className="flex justify-center relative overflow-hidden">
                <NavLink to="/"><button className="text-2xl font-mono px-4 py-2 text-white font-bold bg-sky-300 flex space-x-4 items-center hover:bg-white hover:text-sky-300 hover:border-[0.02rem] border-sky-300">Back to Home<span className="ml-4"><FaArrowRight/></span></button></NavLink>
            
            
            </div>
        <img src={wave} className='overflow-hidden ' alt="" />
        </div>
       </div>
        

    </>
}
export default ErrorPage;