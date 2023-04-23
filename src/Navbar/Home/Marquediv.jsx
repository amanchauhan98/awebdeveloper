import React from 'react'
import Marqueapi from './Marqueapi';
const Marquediv = () => {
    return <>
    <MarqueHead/>
    <div className='mt-[1rem] mx-auto gradient w-auto h-auto px-2 py-2 shadow-md drop-shadow-xl shadow-[#111827]'>
        <marquee className="" behavior ="scroll" direction="left" scrollamount="8" onMouseOut="this.start();" onMouseOver="this.stop();">
            <div className='flex  font-mono text-white text-lg space-x-[2rem] md:space-x-[4rem]'>

                {Marqueapi.map((data)=>{
                    return <>
                    <div className='flex items-center space-x-2 shadow-lg drop-shadow-2xl hover:bg-[#111827] px-1 py-1 rounded-md  '>
                        <img src= {data.logo} className="h-10 w-10 md:h-14 md:w-14 " alt="" />
                        <h1 className='font-mono tracking-[0.5rem]'>{data.head}</h1>
                    </div>
                    </>
                })}

                {/* <div className='flex items-center space-x-2 shadow-lg drop-shadow-2xl hover:bg-[#111827] px-1 py-1 rounded-md'>
                    <img src={html} className="h-10 w-10 md:h-14 md:w-14 " alt="" />
                    <h1 className='font-mono tracking-[0.5rem]'>HTML5</h1>
                </div> */}
                
                
            </div>
        </marquee>

    </div>
    </>
}
const MarqueHead =() => {
    return <>
    <div className="text-center px-auto overflow-hidden relative mt-[1rem]">
        <p className="text-lg selection:bg-[#111827] font-mono text-[#111827] tracking-[0.5rem] underline underline-offset-8 md:text-[1.5rem] md:underline-offset-[1rem]">OUR WORKING PROGRAMMING LANGUAGES</p>
    </div>
    </>
}


export {MarqueHead, Marquediv};