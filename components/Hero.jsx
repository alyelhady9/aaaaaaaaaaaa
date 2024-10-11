import React from 'react'
import { FaArrowRight, FaBookOpen } from "react-icons/fa";
export const Hero = () => {
  return (
  
    // <section className="w-full text-gray-900 ">
    //     <div className="flex flex-col justify-center items-center w-full pt-16">
    //         <h1 className="text-2xl font-bold">We invest in the world’s potential</h1>

    //         <p className="">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
    //         <div className="">
    //             <a href="#" className=" bg-blue-700 hover:bg-blue-800">
    //             Get started
    //             <FaArrowRight />

    //             </a>
    //             <a href="#" className="">
    //             Learn more
    //             </a>  
    //         </div>
    //     </div>
    // </section>
    <section className=" dark:bg-gray-900 bg-blend-multiply dark:text-white bg-gray-100 text-gray-900">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-18 lg:py-36">


        <FaBookOpen className='text-8xl m-auto bg-orange-400 text-white py-3 px-4 mb-5 rounded-3xl
        dark:bg-transparent dark:border-orange-400 border-2
        ' />
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
      <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
          Get started
          <FaArrowRight className="ml-2 -mr-1" />
        </a>
        <a href="#" className="inline-flex justify-center dark:hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center dark:text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
          Learn more
        </a>  
      </div>
    </div>
  </section>
  
  )
}
