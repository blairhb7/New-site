import React, { useState } from 'react'
import { ArrowUpIcon, MapPinIcon, MapIcon } from '@heroicons/react/24/solid'


const Banner = () => {
   const [toggle, setToggle] = useState(false)

   // This Landing page is coded with a full screen mobile friendly background Video along with a response full screen nav

  return (
    <section className="h-screen w-screen xl:flex ">
      <div className="realtive">
        <video src="/video.mp4" className='LandingVid absolute' autoPlay loop muted playsInline ></video>
      </div>
      <div className=" font-bold xl:flex flex  w-screen h-screen ">
        <div className="flex flex-col justify-center overflow-hidden xl:justify-end pb-32">
         <h1 className="xl:px-6 pl-6 text-white uppercase animate-in slide-in-from-left duration-2000 z-10 xl:h-[320px] xl:text-[250px] sm:text-9xl text-8xl overflow-hidden xl:pt-14 ">Travel</h1>
          <div className="flex animate-in pl-2 slide-in-from-left duration-2000 flex-col ">
              <p className="flex font-normal text-white xl:text-xl px-12">Discover your next adventure! Travel the world and experiece a Trip you won't forget!</p>
              <hr className='border-white  h-4 mx-12 px-4 ' />
              <a href='Gallery' className=' text-white h-full mx-12 xl:text-lg p-2 bg-yellow-500 rounded-md w-40 xl:w-[200px]'>Explore Locations</a>
          </div>
        </div>
      </div>
      <div className={`${toggle ? "h-screen text-white " : " h-20  text-white x" } xl:block hidden   bg-gray-400 backdrop-blur-lg bg-opacity-30 backdrop-opacity-90 duration-1000 overflow-hidden w-full xl:w-[450px] relative uppercase  cursor-pointer `} > 
      <ArrowUpIcon className={`h-8 w-8 visable bg-yellow-500 text-gray-500 rounded-full z-20 absolute  my-5 ml-2 cursor-pointer  duration-300  ${!toggle && 'rotate-180'}`} onClick={() => setToggle(!toggle)}/>
       <div className="flex ">
        <h2  className={`pl-12 w-80 text-xl py-6 `}>Featured Destinations </h2>
        <MapPinIcon className={`bg-white rounded w-8 h-8 my-5 mr-4 text-yellow-500 duration-500  ${toggle && 'rotate-[360deg]'}`} />       </div>
        <div className="flex flex-col h-screen  overflow-hidden">
          <a href="/post/japan"><div className={`${!toggle && 'hidden'} h-32 2xl:h-40  animate-in slide-in-from-right flex  duration-5000 w-full opacity-60 hover:opacity-100 hover:duration-200 hover:scale-105 Japan items-end ease-in`}>
            <MapIcon className={`w-7 h-7 my-4 ml-4 text-yellow-500 flex items-end`} />
            <h1 className={`${!toggle && 'hidden'}  animate-in slide-in-from-right  duration-5000 w-full relative p-4 text-2xl flex items-end`}> Japan</h1>
          </div></a>
          <a href="/post/hawaii"><div className={`${!toggle && 'hidden'} h-32 2xl:h-40 animate-in slide-in-from-right flex  duration-4000 w-full opacity640 hover:opacity-100 hover:duration-200  hover:scale-105 Hawaii items-end ease-in`}>
            <MapIcon className={`w-7 h-7 my-4 ml-4 text-yellow-500 flex items-end`} />
            <h1 className={`${!toggle && 'hidden'}  animate-in slide-in-from-right  duration-4000 w-full  p-4 text-2xl flex items-end`}> Hawaii</h1>
          </div></a>
          <a href="/post/paris"><div className={`${!toggle && 'hidden'} h-32 2xl:h-40 animate-in slide-in-from-right flex  duration-3000 w-full opacity-60 hover:opacity-100 hover:duration-200 ease-in-out hover:scale-105 Paris items-end`}>
            <MapIcon className={`w-7 h-7 my-4 ml-4 text-yellow-500 flex items-end`} />
            <h1 className={`${!toggle && 'hidden'}  animate-in slide-in-from-right  duration-3000 w-full  p-4 text-2xl flex items-end`}> Paris</h1>
          </div></a>
          <a href="/post/norway"><div className={`${!toggle && 'hidden'} h-32  2xl:h-40 animate-in slide-in-from-right flex  duration-2000 w-full opacity-60 hover:opacity-100 hover:duration-200 ease-in-out hover:scale-105 Norway items-end`}>
            <MapIcon className={`w-7 h-7 my-4 ml-4 text-yellow-500 flex items-end`} />
            <h1 className={`${!toggle && 'hidden'}  animate-in slide-in-from-right  duration-2000 w-full  p-4 text-2xl flex items-end`}> Norway</h1>
          </div></a>
          <div className={`${!toggle && 'hidden'} h-20   flex duration-1000 w-full`}>
            <h1 className={`${!toggle && 'hidden'}  animate-in slide-in-from-bottom  duration-5000 w-full hover:text-blue-500 hover:duration-200 p-4  flex items-center justify-center text-3xl 2xl:text-4xl text-center font-bold`}><a href='Gallery'> Discover More </a></h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner