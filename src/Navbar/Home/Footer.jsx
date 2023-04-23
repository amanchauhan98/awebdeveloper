import React from 'react'
import logo from '../images/awebdevblog.jpg';
import { FaFacebookF, FaGithub, FaInstagramSquare, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";



const Footer = () => {
    return <>
        <DescriptionFooter/>
        <footer class="text-gray-600 body-font">
            <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <img src= {logo} className='h-[2rem] w-[4rem] rounded-lg'/>
                    <span class="ml-3 text-xl">A-Web Developer</span>
                </a>
                <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 A-Web Developer
                    <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@amanchauhan</a>
                </p>
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a class="text-gray-500">
                        <FaFacebookF title='Join us on Facebook' className='hover:text-sky-500 duration-200 delay-100 text-2xl'/>
                    </a>
                    <a class="ml-3 text-gray-500">
                        <FaGithub title='Join us on Github'  className='hover:text-sky-500 duration-200 delay-100 text-2xl'/>
                    </a>
                    <a class="ml-3 text-gray-500">
                        <FaInstagramSquare title='Join us on Instagram'  className='hover:text-sky-500 duration-200 delay-100 text-2xl'/>
                    </a>
                    <a class="ml-3 text-gray-500">
                        <FaLinkedin  title='Join us on LinkedIn' className='hover:text-sky-500 duration-200 delay-100 text-2xl'/>
                    </a>
                    <a class="ml-3 text-gray-500">
                        <FaTelegram title='Join us on Telegram'  className='hover:text-sky-500 duration-200 delay-100 text-2xl'/>
                    </a>
                    <a class="ml-3 text-gray-500">
                        <FaYoutube title='Join us on Youtube'  className='hover:text-sky-500 duration-200 delay-100 text-2xl'/>
                    </a>
                    
                </span>
            </div>
        </footer>
    </>
}

const DescriptionFooter = () => {
    return <>
        <div className='mt-[2rem] mx-4 my-1 text-xs font-mono font-normal text-gray-700 w-auto h-auto overflow-hidden'>
            <p className='ml-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ipsam ad odit id quaerat aliquam, sapiente, repudiandae voluptate perspiciatis consequatur qui. Quisquam, reprehenderit quis.</p>
            <br />
            
            <p>***Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ratione quis libero vero, culpa beatae provident laborum unde consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo excepturi nisi perspiciatis. Quidem reprehenderit dicta non officia eaque quisquam exercitationem, accusamus sit nihil pariatur explicabo doloremque in placeat animi, dolorum eos laudantium quod sed consequatur provident perferendis doloribus sint! Reiciendis iure iste quisquam qui eius assumenda obcaecati voluptates rem nam, blanditiis consequuntur ipsam magni architecto asperiores aspernatur inventore doloribus earum expedita tenetur, reprehenderit velit dignissimos? Dignissimos provident expedita asperiores quibusdam consequatur, eos consequuntur eius cumque architecto necessitatibus suscipit placeat eum, nulla inventore illum deserunt tempora officiis, a labore. Nesciunt, alias? Hic ipsa blanditiis adipisci optio inventore voluptatibus laudantium vitae! <span  className='font-bold '>Visit more for reading : <a className='text-sky-500 hover:underline underline-offset-4 ' href="">A-Web Developer</a></span></p>
            <br />
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ut?</span>
            <br />
            <br />
            <hr className='bg-gray-300' />
        </div>

    </>
}

export default Footer