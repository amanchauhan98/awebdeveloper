import React from 'react'
import Gallery1 from './Gallery1api'
import image1 from '../images/Gallery/gallery2img1.jpg'
import image2 from '../images/Gallery/gallery2img2.jpg'
import image3 from '../images/Gallery/gallery2img3.png'
import image4 from '../images/Gallery/gallery2img4.png'
import image5 from '../images/Gallery/gallery2img5.png'
import image6 from '../images/Gallery/gallery2img6.png'
import image7 from '../images/Gallery/gallery2img7.png'
import image8 from '../images/Gallery/gallery2img8.png'
import image9 from '../images/Gallery/gallery2img9.jpg'
import Footer from '../Home/Footer'
const Gallery = () => {
    return (<>
    <div className='gallery-div'>
        <GalleryHeading/>
        <GalleryOne/>
        <Gallery2/>
        <Footer/>
    </div>
    </>)
}

const GalleryOne = () => {
    return <>
    
    <section class="text-white font-mono body-font">
  <div class="container px-5 py-12 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4 font-mono">A-Web Developer Project Gallery</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Here is Our all Project is listed with an images, Mainly programming language is HTML5, CSS3 , Tailwind CSS, JavaScript , jQuery and React.js and Other programming language are Python, C , etc.</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={image1}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={image2}/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={image3}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={image4}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={image5}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={image6}/>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
}

const Gallery2 = () => {
    return <>
    
    <section class="text-white font-mono body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-3xl font-medium title-font mb-4 text-white font-mono md:font-bold">A-WEb Developer Achievement</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est neque sit dolor adipisci ut animi, quis ad quisquam libero culpa ullam nostrum fuga ipsum id minus sed nesciunt vero accusantium a nisi?</p>
    </div>
    <div class="flex flex-wrap -m-4">
       
        {
          Gallery1.map((data, index)=>{
            return <>
            <div class="lg:w-1/3 sm:w-1/2 p-4" key={index}>
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src= {data.img}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">{data.subtitle}</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{data.desc}</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
            </>
          })
        }
    </div>
  </div>
</section>
    </>
}

const GalleryHeading = () => {
    return <>
    <div className='w-full px-[0.5rem] h-auto text-white font-mono text-center overflow-hidden relative py-[2rem] '>
        <h1 className='text-3xl shadow-xl drop-shadow-xl  font-bold tracking-widest px-2 py-2 bg-red-500 rounded-lg '>A-WEB DEVELOPER GALLERY</h1>

    </div>
    </>
}
export default Gallery;