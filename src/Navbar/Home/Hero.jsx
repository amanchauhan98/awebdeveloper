import React from 'react'
import { Link } from 'react-router-dom';
import awebdevbg from '../images/awebdevblog.jpg';
import profile from '../images/profile.JPG';
import introVideo from '../images/awebdev_intro.mp4';

const Hero = () => {
    return (<>

        <section class="text-gray-600 body-font">
            <div class="container px-5 py-10 mx-auto flex flex-col">
                <div class="lg:w-4/6 mx-auto">
                    <div class="rounded-lg h-64 overflow-hidden">
                        <img alt="content" class="object-cover object-center h-full w-full" src={awebdevbg} />
                    </div>
                    <div class="flex flex-col sm:flex-row mt-10">
                        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div class="w-[8rem] h-[8rem] rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <img src={profile} className="h-[8rem] w-[8rem]  rounded-full" alt="" />
                            </div>
                            <div class="flex flex-col items-center text-center justify-center">
                                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg font-mono">Aman Chauhan</h2>
                                <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                <p class="text-base">Founder of <Link to={"/"} className='text-[#111827] font-bold hover:underline font-mono'>A-Web Developer.</Link></p>
                            </div>
                        </div>
                        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p class="leading-relaxed md:text-lg text-[0.95rem] font-mono mb-4 ">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>)
}

const VideoDiv = () => {
    return (<>
        <div className='md:my-[2rem] md:mx-[2rem] mx-2 my-4 md:h-[30rem] md:w-[80rem] drop-shadow-2xl '>
            <video className='md:h-[30rem] md:w-[80rem] ' controls autoPlay loop muted>
                <source src={introVideo} type="video/mp4"/>
                    <source src="movie.ogg" type="video/ogg"/>
                        Your browser does not support the video tag.
            </video>
        </div>
            </>)
}
            
export  {Hero, VideoDiv};