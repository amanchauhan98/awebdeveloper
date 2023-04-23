import React from 'react'
import { NavLink } from "react-router-dom";
import GithubApi from './GithubApi';


const Github = () => {
    return <>
    {/* isse sm: breakpoiny pe thikk krne ka h */}
        <div classNameName="mx-2 md:mx-[4rem] my-4 overflow-hidden relative bg-transparent px-2 md:px-[1rem] py-2 md:py-[1rem] md:my-[3rem]">
            <ProgrammingHead />
            <div className="md:grid sm:grid-cols-none mx-[3rem] md:grid-cols-3 md:justify-evenly md:gap-[2rem] space-y-2  md:mx-[2rem] md:mb-[2rem] md:mt-[4rem]">
                {
                    GithubApi.map((data, i) => {
                        return <>
                            <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-sky-200 dark:border-gray-700 hover:scale-105 duration-300 delay-150 ease-in-out transition-all hover:shadow-lg shadow-white hover:drop-shadow-xl">
                                <NavLink to= {data.direct}>
                                    <img className="rounded-t-lg h-auto w-auto" src= {data.photo} alt="" />
                                </NavLink>
                                <div className="p-5">
                                    <NavLink to="/">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.head}</h5>
                                    </NavLink>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.desc}</p>
                                    <NavLink to= {data.direct} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-400 rounded-lg hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-400 dark:hover:bg-sky-500 dark:focus:ring-sky-400">
                                        Read more
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </NavLink>
                                </div>
                            </div>
                           
                        </>
                    })
                }

                

            </div>
        </div>

    </>
}

const ProgrammingHead = () => {
    return <>
        <div className="text-center   px-auto overflow-hidden relative mt-[1rem] md:my-[1rem] mb-4">
            <p className="text-[1.3rem] selection:bg-sky-400  font-mono text-white font-bold tracking-[0.5rem] underline underline-offset-8 md:text-[1.5rem]  md:underline-offset-[1rem]">Our Github Collections</p>
        </div>
    </>
}

export default Github