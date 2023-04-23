import React from 'react'
import BlackDivApi from './BlackDivApi'
const BlackImg = () => {
    return (<>
        <div className='bg-[#111827] w-full h-auto md:mt-[2rem] sm:my-[1rem] my-0 overflow-auto'>
            <HeadingYoutube />
            <div className='md:px-[5rem] md:py-[5rem] px-[1rem] py-[1rem]'>
                <div className='md:grid md:grid-cols-2 md:gap-[20rem]   w-auto sm:space-y-[3rem] md:space-y-0 rounded-xl'>
                    {
                        BlackDivApi.map((data)=>{

                            if((data.id)%2 == 0){
                                
                                return(<>
                            
                                <Iframe link={data.iframe} />
                                <HeadingDiv head={data.heading}/>
                                {/* <hr className='text-gray-300 drop-shadow-lg shadow-white shadow-md '/> */}
                                </>)   
                            }
                            else{
                                return(<>
                                <HeadingDiv head={data.heading}/>
                                <Iframe link={data.iframe}/>
                                </>)
                            }
                        })
                    }

                </div>

            </div>

        </div>
    </>)
}

// iframes components
const Iframe = (props) => {
    return (<>
        <div className='imgdiv rounded-xl  md:h-[16rem] md:w-[28rem] shadow-lg drop-shadow-2xl shadow-gray-300 hover:scale-105 duration-500 delay-200'>
            {props.link}
            {/* <iframe className='h-[16rem] w-[28rem]  rounded-xl' src="https://www.youtube.com/embed/N_7FXlVuN4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
    </>)
}
// heading div
const HeadingDiv = (props) => {
    return (<>
        <div className='md:w-[30rem] pt-[3rem]  text-white font-mono md:tracking-wider md:text-[1rem] text-sm'>
            
            {props.head}
            {/* <h1 id='textContainer' className='shadow-xl font-medium drop-shadow-md '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nesciunt harum velit ex nisi enim perspiciatis nam veritatis! Doloremque minus qui repellat explicabo?</h1> */}
        </div>
    </>)
}

const HeadingYoutube = () => {
    return (<>
        <div className='text-center md:py-[2rem] py-3 md:tracking-wider relative overflow-hidden'>
            <h1 className='md:text-9xl font-bold font-mono text-7xl brightness-75 text-gray-500 hover:text-red-600 hover:drop-shadow-2xl shadow-red-500 duration-500 delay-300'>YouTube</h1>
            <h1 className='md:text-7xl font-mono text-4xl text-center color-text absolute top-[2.8rem] left-[6rem] md:left-[23rem] md:top-[6rem]   drop-shadow-2xl shadow-gray-200 '>A-Web Developer</h1>
        </div>
    </>)
}

export default BlackImg;