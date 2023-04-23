import React from 'react'
import Youtubeitem from './Youtubeitem';
import YoutubeApi from './YoutubeApi';





const Youtube = () => {
    return <>
    <div className='h-screen w-auto overflow-auto relative md:my-[2rem] md:mx-[2rem]  drop-shadow-xl rounded-lg  md:shadow-xl md:shadow-gray-400'>
        <div className='md:flex md:px-4 md:py-4 overflow-hidden relative h-auto w-auto md:gap-[2rem]'>
            <Sidebar/>  {/* yhaa pe lgana hai ek map */}
            <div className='md:h-auto md:w-auto text-center overflow-hidden relative md:flex-col  md:ml-[8rem] md:space-y-[5rem]'>
                <h1 className='md:text-sky-300 md:text-6xl md:font-mono md:drop-shadow-xl '>Youtube A-Web Developer</h1>
                <Youtubelink  /> {/* yhaa pe lgana hai ek map */}
                <div className='md:code md:h-auto w-auto md:relative md:overflow-hidden'>
                    <Code  />{/* yhaa pe lgana hai ek map */}
                </div>
            </div>       
        </div>

    </div>
    </>
}
const Sidebar = () => {
    return <>
    <div className='md:bg-sky-300  md:w-[18rem] md:h-screen md:scroll-auto  md:relative md:overflow-hidden md:px-1 md:py-1 md:rounded-lg'>
        <h1 className='md:text-2xl md:text-white md:font-mono md:drop-shadow-lg md:text-center md:mb-6 md:underline md:underline-offset-8'>Tailwind Playlist</h1>
        <ul className='md:space-y-[1rem] md:flex-col md:text-center md:text-white md:font-mono md:font-medium  '>
            {
                    Youtubeitem.map((data)=>{
                        return <li onClick={(obj)=>{
                           let elemId =  obj.target.id
                            console.log(elemId);
                            let i =0;
                            while (i < YoutubeApi.length) {
                                console.log(YoutubeApi[i].id)
                                if(elemId === YoutubeApi[i].id){
                                    console.log("ander hu")
                                }
                                i++;
                            }
                            
                           
                        //    for(let i = 0 ; i<YoutubeApi.length-1; i++){
                        //     console.log(YoutubeApi[i].id)
                        //        if(elemId == YoutubeApi[i].id){
                        //            return <>
                        //            { console.log("return ke ander")}
                        //         <Youtubelink iframe = {YoutubeApi[i].iFrame} />
                        //         <Code code = {YoutubeApi[i].Code}/>
                        //         </>
                        //     }
                            
                        //    }
                        }} key={data.id} className='md:px-1 md:py-1 md:bg-sky-500 md:hover:bg-sky-600 md:active:bg-sky-700 md:text-lg md:rounded-lg'>{data.title}</li> 
                        
                    })
            }
            {/* <li className='md:px-1 md:py-1 md:bg-sky-500 md:hover:bg-sky-600 md:active:bg-sky-700 md:text-lg md:rounded-lg'>Tailwind Playlist 1</li> */}
           

        </ul>
    </div>
    
    </>
}
// youtube video link
const Youtubelink = (props) => {
    return <>
    <div className='md:h-[20rem] md:w-[40rem] bg-gray-200 overflow-hidden relative rounded-lg '>
        {props.iframe}
        {console.log("youtube link ke ander")}
    {/* <iframe className='md:h-[20rem] md:w-[40rem]' src="https://www.youtube.com/embed/Evz_X2TW7UA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

    </div>
    </>
}
// code 
const Code = (props)=> {
    return <>
    <div className='md:px-2 md:py-1 md:overflow-scroll'>
        <h1 className='md:text-white md:text-xl md:font-mono '>Code : Tailwind Tutorial 1</h1>
        <div className='md:h-[15rem] md:w-[50rem] md:text-left  md:scroll-auto md:text-black '>
            <pre className='md:bg-gray-200 md:py-2  md:px-4'>
                <code id="code" onDoubleClick={()=>{document.getElementById("code").classList.add("select-all")}} className=' whitespace-pre-line '>
                        {props.code}
                </code>
            </pre>

        </div>

    </div>
    </>
}
export default Youtube