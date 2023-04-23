import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import video1 from '../images/video1.mp4';
import video2 from '../images/video2.mp4';
import video3 from '../images/video3.mp4';

const DjangoProject = () => {

    return <>
        <div className='md:my-[2rem] md:mx-[1rem] h-auto w-full rounded-lg '>
            <section className="text-gray-600 body-font">
                {
                    DjangoProjectApi.map((data) => {
                        if ((data.id) % 2 == 0) {
                            return <>
                                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-evenly md:gap-[2rem]">
                                    <ProjectImg image={data.photo} />
                                    <ProjectDesc title={data.heading} desc={data.description} link={data.link} />
                                </div>
                            </>
                        }
                        else {
                            return <>
                                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-evenly md:gap-[2rem]">
                                    <ProjectDesc title={data.heading} desc={data.description} link={data.link} />
                                    <ProjectImg image={data.photo} />
                                </div>
                            </>
                        }
                    })
                }
            </section>
        </div>


    </>
}

const ProjectImg = (props) => {
    return <>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <video className="object-cover object-center rounded" controls autoPlay>
                <source src= {props.image} />
            </video>
        </div>

    </>
}
const ProjectDesc = (props) => {
    return <>
        <div className=" md:w-1/2   flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-sky-300 font-mono  drop-shadow-xl">{props.title}
                <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed bg-sky-300 text-white px-3 py-2 rounded-xl font-mono">{props.desc}.</p>
            <div className="flex justify-end items-end">
                <NavLink to={props.link}><button className="inline-flex ease-in-out duration-200 delay-150 transition-all text-white font-mono font-medium bg-sky-300 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-sky-500 rounded text-lg space-x-4">Know more <FaChevronRight className='mt-2 text-sm' /></button></NavLink>
            </div>
        </div>

    </>
}

// api of django project
const DjangoProjectApi = [
    {
        id: 1,
        photo: video1,
        heading: "A-Web Developer Django Project",
        description: "Django is a popular web framework used for developing dynamic and scalable web applications, including blogs. A Django blog website for Aman Chauhan could be a great way for him to showcase his thoughts and ideas to the world.With Django, the development of a blog website becomes easy and efficient. Django provides pre-built components such as an ORM, authentication, and admin interface, which makes it simple to build complex web applications. Django also offers built-in security features that ensure the safety of user data.",
        link: "/",
    },
    {
        id: 2,
        photo: video2,
        heading: "Aman Chauhan Portfolio Website",
        description: "Django is a popular web framework used for developing dynamic and scalable web applications, including blogs. A Django blog website for Aman Chauhan could be a great way for him to showcase his thoughts and ideas to the world.With Django, the development of a blog website becomes easy and efficient. Django provides pre-built components such as an ORM, authentication, and admin interface, which makes it simple to build complex web applications. Django also offers built-in security features that ensure the safety of user data.",
        link: "/",

    },
    {
        id: 3,
        photo: video3,
        heading: "KunalBlogsOfVlogs Website Using Tailwind CSS",
        description: "Django is a popular web framework used for developing dynamic and scalable web applications, including blogs. A Django blog website for Aman Chauhan could be a great way for him to showcase his thoughts and ideas to the world.With Django, the development of a blog website becomes easy and efficient. Django provides pre-built components such as an ORM, authentication, and admin interface, which makes it simple to build complex web applications. Django also offers built-in security features that ensure the safety of user data.",
        link: "/",
    }
]
export default DjangoProject;