import React, { useState, useEffect, useRef, createRef } from 'react'
import { ArrowUpIcon, MapPinIcon, MapIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { HiX, HiMenuAlt1} from "react-icons/hi";






const Nav = () => {
   
const [nav, setNav] = useState(false)

useEffect(() => {
  AOS.init({duration: 3000});
}, [])

  return (
    <div className='absolute w-screen p-5 nav text-4xl flex'> 
        <div className="flex relative p-5">
          <MapIcon className='w-8 h-8 mt-2  mx-3 icon text-yellow-500 z-50' />
          <a href="/" className="z-50"><h1 className="text-yellow-500 text-4xl font-bold uppercase z-50">Travel</h1></a>
        </div>
        <div className={` flex duration-1000 w-[700px]  items-center`} onClick={ () => setNav(!nav)}> 
            {nav ? <HiX className='z-50  w-10 h-10 text-yellow-500 justify-center' /> : <HiMenuAlt1 className='z-50 text-yellow-500 flex justify-start w-10 h-10 ' />}
             
          </div>
          <div>
             <nav className=''>
              <ul className={`${nav ? ['menu '].join('') : ''} hidden`}>
                <li className='xl:text-7xl text-2xl animate-in slide-in-from-left font-bold uppercase hover:text-yellow-500 duration-500'><a href="/">Home</a></li>
                <li  className='xl:text-7xl text-2xl animate-in slide-in-from-right font-bold uppercase hover:text-yellow-500 duration-500'><a href="/Gallery">Gallery</a></li>
              </ul>
             </nav>
          </div>
    </div>
  )
}

export default Nav