import React from 'react'
import { ProgrammingHead } from '../Work/Cards'
const Accordion = () => {

  return <>
    <ProgrammingHead head={"FREQUENTLY ASKED QUESTION"}/>
     <div id="accordion-collapse" data-accordion="collapse" className='md:mx-[2rem] md:my-[2rem] mx-[1rem] my-[1rem]'>
    {
      AskQuesApi.map((data)=>{
        return <>
          <AskQues prasan = {data.Ques} uttar = {data.Ans} id={data.id} />
        </>
      })
    }
    </div>
  </>
}

const AskQues = ({prasan, uttar}) => {

  return <>
 
      <h2  id="accordion-collapse-heading-1" name="head">
        <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-black border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-[#111827] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
          <span>{prasan}</span>
          <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-1" className="hidden" name="answer" aria-labelledby="accordion-collapse-heading-1">
        <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{uttar}</p>
          <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
        </div>
      </div>
    

  </>
}

// Ask Ques Api 
const AskQuesApi = [
  {
    id: 1,
    Ques: "What is a website?",
    Ans: "A website is a collection of related web pages that are typically accessed through a domain name and hosted on a server.",
  },
  {
    id: 2,
    Ques: "What is web development?",
    Ans: "Web development refers to the process of creating, designing, building and maintaining websites, web applications, and other digital platforms.",
  },
  {
    id: 3,
    Ques: "What is a domain name?",
    Ans: "A domain name is the unique address that identifies a website on the internet, such as www.example.com.",
  },
  {
    id: 4,
    Ques: "What is a content management system (CMS)?",
    Ans: "A CMS is a software application that allows users to create, manage, and publish digital content, such as website pages, blog posts, and multimedia content.",
  },

]
export default Accordion;