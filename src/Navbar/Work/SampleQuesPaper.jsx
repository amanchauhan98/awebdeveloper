import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ErrorPage from '../ErrorPage'
import SampleQuesPaperApi from './SampleQuesPaperApi'

const SampleQuesPaper = () => {
    const course = useParams()
    if(course.samplepaper == "bca"){

      
        return <QuesPaperDiv head = {SampleQuesPaperApi[0].bca.head} notes = {SampleQuesPaperApi[0].bca.notes} paperlink = {SampleQuesPaperApi[0].bca.paperlink} noteslink =  {SampleQuesPaperApi[0].bca.noteslink}/>

    }
    else if(course.samplepaper == "btech"){
       return  <QuesPaperDiv head = {SampleQuesPaperApi[1].btech.head} notes = {SampleQuesPaperApi[1].btech.notes} paperlink = {SampleQuesPaperApi[1].btech.paperlink} noteslink =  {SampleQuesPaperApi[1].btech.noteslink} />
    }
    else if (course.samplepaper == "bba"){
        return <QuesPaperDiv head = {SampleQuesPaperApi[2].bba.head} notes = {SampleQuesPaperApi[2].bba.notes} paperlink = {SampleQuesPaperApi[2].bba.paperlink} noteslink =  {SampleQuesPaperApi[2].bba.noteslink}/>
    }
    else if(course.samplepaper == "mba")
    {
        return <QuesPaperDiv head = {SampleQuesPaperApi[3].mba.head} notes = {SampleQuesPaperApi[3].mba.notes} paperlink = {SampleQuesPaperApi[3].mba.paperlink} noteslink =  {SampleQuesPaperApi[3].mba.noteslink}/>
    }
    else 
    {
        return <ErrorPage/>
    }
}
const QuesPaperDiv = ({head, notes, paperlink, noteslink}) => {
  let gettime = new Date().toDateString()
  const [updateTime, setUpdateTime] = useState(gettime)

    function getTimeNow(){
      const gettime2 = new Date().toDateString()
      setUpdateTime(gettime2)
    }
    setTimeout(getTimeNow, 1000);

    // const showEvent =  (event) =>{
    //     console.log(event.target.href);
    //     if(event.target.href == ''){ // code this!
    //       alert("Error! The Papers and Notes Will be Available ASAP!")
    //     }
    // }
    return <>

<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">{head}</span>
          <span class="mt-1 text-gray-500 text-sm">{updateTime}</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{head}</h2>
          <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <a href={paperlink} class="text-blue-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">{notes}</span>
          <span class="mt-1 text-gray-500 text-sm">{updateTime}</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{notes}</h2>
          <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <a href={noteslink} class="text-blue-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      
    </div>
  </div>
</section>
    </>
}





export default SampleQuesPaper