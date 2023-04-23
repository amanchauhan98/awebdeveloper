import React from 'react'
import profile from '../images/profile.JPG'

const ProfileHire = () => {
    return <>
   
<div className="overflow-y-auto sm:p-0 pt-4 pr-4 pb-20 pl-4 flex justify-center bg-sky-300 rounded-lg md:mx-[15rem] md:mb-[2rem] mb-2 shadow-lg drop-shadow-2xl ">
  
    <div className= "inline-block text-left bg-sky-500 rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
      <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
        <div className="grid grid-cols-1">
          <div className="mt-4 mr-auto mb-4 ml-auto bg-sky-500 max-w-lg">
            <div className="flex flex-col items-center pt-6 pr-6 pb-6 pl-6">
              <img
                  src={profile} className="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl"/>
              <p className="mt-8 text-2xl font-semibold leading-none text-sky-300 drop-shadow-xl font-mono  tracking-tighter lg:text-3xl">Aman
                  Chauhan</p>
              <p className="mt-3 text-base leading-relaxed text-center text-gray-200 font-mono">I am a Fullstack Web Developer
                  with ReactJS for frontend and NodeJS for backend</p>
              <div className="w-full mt-6">
                <a href='mailto:avinashthakurchauhan07@gmail.com'
                   className="flex text-center items-center justify-center w-full pt-4 pr-10 pb-4 pl-10 text-base
                    font-medium text-white hover:text-sky-400 font-mono bg-sky-300 rounded-xl transition duration-500 ease-in-out transform
                    hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Mail
                    me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
 
    </>
}
export default ProfileHire;