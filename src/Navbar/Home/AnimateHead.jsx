import React, { useState } from "react";
const AnimateHead = () => {
    return <>
    <div class="gradient w-auto ">
        <AwebDevHead/>
    </div>
    </>
}
const AwebDevHead = ()=> {
   // use usestate here

    return<>
    <div className="text-center px-auto py-[10rem] overflow-hidden relative mt-[2rem]">
        <h1 className="text-[3.5rem] selection:bg-[#111827] text-gray-500 tracking-tighter font-medium font-mono md:text-[6rem] selection:text-white hover:animate-ping">A-Web Developer</h1>
        <p className="text-lg selection:bg-[#111827] font-mono text-white tracking-[0.5rem] underline underline-offset-8 md:text-[1.5rem] md:underline-offset-[1rem]">FINDS ALL SOLUTIONS</p>
        <p className="text-sm  font-mono text-gray-300 tracking-[0.2rem] pt-[4rem] px-[2rem] selection:bg-[#111827]  md:text-lg md:px-[3rem]">Here your all problems has solution with us. You are just one step away from us and also getting your problems solution. You just need to contact us on our contact us page and we will contact you ASAP and solve your problem with in minutes.</p>
    </div>
    </>
}

export default AnimateHead;