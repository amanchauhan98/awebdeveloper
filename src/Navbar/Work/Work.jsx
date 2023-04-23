import React from 'react'
import '../../App.css'
import worksapins from '../images/workimg.svg';
import workingavatar from '../images/working_avatar.png';
import {Cards} from './Cards';
import DjangoProject from './DjangoProject';
import Github from './Github';
import ProfileHire from './ProfileHire';
import SamplePaper from './SamplePaper';
import Youtube from './Youtube';
import Footer from '../Home/Footer';

const Work = () => {
    return (<>
    <div className='work-bg h-auto w-auto relative overflow-hidden'>
       <WorkHero/>
       <AvatarWorking/>
       <Cards/>
       <Youtube/>
       <Github/>
       <DjangoProject/>
       <ProfileHire/>
       <SamplePaper/>
       <Footer/>
    </div>
        
    </>)
}



// heading of working 

// 1st element of work
const WorkHero = () => {
return <>
    <div className='mx-[2rem] my-[2rem] overflow-hidden relative h-auto w-auto md:flex md:flex-row-reverse md:justify-evenly md:gap-[4rem]'>
        <div className='flex justify-center h-auto w-auto md:-mt-[4rem]'>
            <img src={worksapins} className="drop-shadow-lg h-auto w-auto md:h-[40rem] md:w-[40rem]" alt="worksapins" />
        </div>
        <div className='text-center md:text-left h-auto w-auto relative md:mt-[5rem]'>
            <h1 className='font-mono text-[2rem] font-medium text-sky-200 md:text-[4rem] drop-shadow-lg '>A-Web Developer</h1>
            <h3 className='text-white font-mono tracking-widest md:text-3xl'>FINDS ALL  SOLUTIONS</h3>
            <p className='text-sm font-mono text-white bg-sky-200 px-2 py-1 rounded-md mt-2 md:w-[30rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis placeat laborum maxime illum asperiores facilis neque, accusamus dignissimos quas, inventore error repellat cum fugit quaerat eius rem labore, sapiente ex vitae id!</p>
            <div className='flex justify-start md:justify-end relative overflow-auto mx-4 mt-6'>
            <button className=' px-4 py-2 md:px-6 md:py-3 md:text-lg font-mono bg-sky-200 text-white  rounded-md hover:border-[0.01rem] hover:bg-white hover:text-sky-300 border-sky-300 duration-300 delay-150 active:bg-sky-200 active:text-white'>Know More</button>

        </div>
        </div>
       

    </div>
</>
}

// for avatar telling about the working
const AvatarWorking = () => {
    return <>
    <div className='mt-[2rem] mx-3 md:mx-[3rem] overflow-hidden relative h-auto w-auto md:flex md:gap-[6rem] md:items-end md:justify-center md:border-b-2 border-spacing-10 border-sky-300 '>
        <div className='flex justify-center px-2 py-1 bg-transparent md:-ml-[4rem]'>
            <img src={workingavatar} className="h-[20rem] w-[20rem] md:h-[24rem] md:w-[28rem] drop-shadow-lg "  alt="working sapiens" />
        </div>
        <hr className='mt-2 md:hidden text-sky-200 border-2 border-sky-200 rounded-xl'/>
        <div className='my-[1rem] text-center overflow-hidden relative space-y-3 md:h-auto md:w-[50rem]'>
            <h1 className='text-white text-2xl font-mono drop-shadow-lg px-2 py-1 bg-sky-200 rounded-md '>Our Professional Working Area</h1>
            <p className='text-white font-mono tracking-wider md:text-right '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cumque ducimus nemo iusto, quasi mollitia iste neque fuga enim molestiae dolorem incidunt explicabo, vero sunt tenetur in odit eligendi voluptatem suscipit quas fugiat nobis vel magnam. Voluptates et delectus similique quis sint corrupti consectetur amet cupiditate ad aspernatur. Amet dignissimos temporibus reiciendis consequatur nemo quisquam!</p>
        </div>

    </div>
 <hr className='my-2 mx-[4rem] hidden  text-sky-200 border-2 border-sky-200 rounded-xl '/>
    
    </>
}

export default Work;