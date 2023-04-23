import React from 'react'
import { ProgrammingHead } from '../Work/Cards';
import telegram from '../images/telegramqr.png';
import { NavLink } from 'react-router-dom';

const Qrcode = () => {
    return <>
        <ProgrammingHead head={"OUR SOCIAL MEDIA QRCODE"} />
        <div className='gradient w-full h-auto my-3 relative overflow-hidden md:h-full md:w-full '>
            <div className=' mx-2 my-2 overflow-hidden md:grid md:grid-cols-2 md:gap-[2rem] md:my-[4rem]'>
                {SocialMedia_Api.map((data)=>{
                    return <SocialMediatemp head = {data.title} image={data.photo} direct = {data.link}/>
                })}

            </div>
        </div>
    </>
}
const SocialMediatemp = ({ head, image, direct }) => {
    return <>
        <div className='bg-sky-300  px-6 py-4 rounded-lg md:rounded-2xl h-auto w-full space-y-3 my-3'>
            <h1 className='text-center text-white font-medium font-mono text-xl '>Scan <span className='text-sky-500 font-bold text-2xl'>{head}</span> Code Here</h1>
            <div className='flex justify-center'>
                <img title='Scan the QR Code here' src={image} className="h-[13rem] w-auto drop-shadow-2xl shadow-2xl shadow-sky-400 hover:scale-105" alt="" />
            </div>
            <p className='text-white text-2xl font-mono text-center font-medium mt-5'>OR</p>
            <div className='flex justify-center'>
                <NavLink to={direct}><button className='text-white text-center font-medium bg-sky-500 px-16 py-2 rounded-lg font-mono text-lg hover:bg-white hover:text-sky-300 hover:font-bold hover:border-sky-500 duration-300 delay-200'>Join here</button></NavLink>
            </div>
        </div>
    </>
}

// api for social media
const SocialMedia_Api = [
    {
        id:1,
        title : "Telegram",
        photo : telegram,
        link : "/",
    },
    {
        id:2,
        title : "Instagram",
        photo : telegram,
        link : "/",
    },
    {
        id:3,
        title : "Facebook",
        photo : telegram,
        link : "/",
    },
    {
        id:4,
        title : "Youtube",
        photo : telegram,
        link : "/",
    },
    {
        id:5,
        title : "What'sapp",
        photo : telegram,
        link : "/",
    },

]

export default Qrcode;