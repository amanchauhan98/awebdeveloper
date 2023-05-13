import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Contact = () => {
    return (<>
    <div class="gradient w-auto ">
        <Login/>
        
    </div>
    </>)
}

const Login = () => {
    const [data, setData] = useState({
        email:"",
        password:""
    }); // use state
    const changeLogin = (event) => {
    const {name , value } = event.target;
    setData({...data, [name] : value})
    }

    // change signup function
    // const changeSignUp = () => {
    //   return null;
    // }

    const navigate = useNavigate()
    const loginDone = () => {
      const email = localStorage.getItem('email');
      const password = localStorage.getItem('password');
      if(email != data.email && password != data.password){
        alert("username or password is incorrect!")
        navigate('contact')
      }
      if(email == data.email && password == data.password){
        localStorage.setItem('login',true)
        navigate('/')
      }
    }
    
    
    
    return (<>
  
<div class=" bg-gray-100 flex flex-col justify-center sm:py-12 bg-transparent h-full -pb-[2rem]">
  <div class=" xs:p-0 mx-auto ">
    <h1 className='md:text-[3rem] text-[2rem] font-mono font-bold color-text py-3 text-center  px-2 underline underline-offset-4'>Login</h1>
    <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
      <div class="px-5 py-7">
        <label class="font-semibold text-sm text-gray-600 pb-1 block font-mono">E-mail</label>
        <input onChange={changeLogin} name="email" value={data.email} type="text" class="border font-mono rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
        <label  class="font-semibold text-sm text-gray-600 pb-1 block font-mono">Password</label>
        <input type="password" onChange= {changeLogin} name="password" value={data.password} class="border font-mono rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
        <button onClick={loginDone} type="button" class="transition duration-200 bg-[#111827] hover:bg-[#0d131f] focus:[#0d131f] focus:shadow-sm focus:ring-4 active:bg-white active:text-[#0d131f]  text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span class="inline-block mr-2 font-mono">Login</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </button>
      </div>
      <div class="p-5">
          <div class="grid grid-cols-3 gap-1">
              <button type="button" class="font-mono  bg-[#111827] hover:bg-[#0d131f] transition active:bg-white active:text-[#0d131f] duration-200 border border-gray-200 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">MailUp</button>
              <button type="button" class="font-mono transition bg-[#111827] hover:bg-[#0d131f] active:bg-white active:text-[#0d131f]  duration-200 border border-gray-200 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Google</button>
              <button type="button" class="font-mono transition bg-[#111827] hover:bg-[#0d131f] active:bg-white active:text-[#0d131f] duration-200 border border-gray-200 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Github</button>
          </div>
      </div>
        <div class="py-5 bg-transparent">
        <div class="grid grid-cols-2 gap-1">
          <div class="text-center sm:text-left whitespace-nowrap">
            <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-400 hover:bg-[#111827]  focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                <span class="inline-block ml-1 font-mono">Forgot Password</span>
            </button>
          </div>
          <div class="text-center sm:text-right whitespace-nowrap">
            <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-400 hover:bg-[#111827] focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-bottom	">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span class="inline-block ml-1 font-mono"><NavLink index to="/signup">SignUp</NavLink></span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="py-5 bg-transparent">
        <div class="grid grid-cols-2 gap-1">
          <div class="text-center sm:text-left whitespace-nowrap">
            <button class="transition  duration-200 mx-5 px-5 py-3 cursor-pointer font-normal text-sm rounded-lg text-white hover:bg-[#111827] hover:text-white  focus:outline-none   ring-inset">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span class="inline-block ml-1 font-mono"><NavLink to={"/"}>Back to your-app.com</NavLink></span>
            </button>
          </div>
        </div>
      </div>
  </div>
</div>
    </>)
}


export default Contact;