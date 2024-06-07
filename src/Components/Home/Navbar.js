"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBook } from "react-icons/fa6";
import { FaArrowRightLong } from 'react-icons/fa6'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancel } from "react-icons/md";
import "./CSS/Navcss/Nav.css"
export const Navbar = () => {

  const [isclick , setisclick] = useState(false)

  const togglenavbar =()=>{
    setisclick(!isclick)
  }
  

  return (
    <>


<header className="text-gray-600  shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]  bg-white sticky top-0 z-10 h-20  " >
      <div className='  flex justify-between items-center h-full'>

       <div className='md:w-52 md:ml-[45px] w-1/2 '>
       <span className=" flex items-center sm:text-3xl gap-3 logo font-bold text-cyan-500">
        <FaBook size={30} color='06BBCC' className='sm:w-10'/> eLEARNING</span>
       </div>
       <div className='hidden lg:block w-1/2'>
          <ul className='nav-list flex justify-end gap-10 items-center'>
            <li className='text-lg'><Link href='/'>Home</Link></li>
             <li className='text-lg'><Link href='/about'>About</Link></li>
             <li className='text-lg'><Link href='/course'>Course</Link></li>
             <li className='text-lg'><Link href='/Contact'>Contact</Link></li>
             <li className='h-20 w-[190px] flex justify-center items-center bg-cyan-400 lg:text-lg font-bold text-xl gap-2 cursor-pointer'> Join Now <FaArrowRightLong color='white' size={20}/></li>
          </ul>
       </div>
       <div className='lg:hidden flex items-center'>

       <button className='inline-flex items-center p-2 rounded text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={togglenavbar}>
    {isclick ? (
        <MdCancel size={30} color='black' />
    ) : (
        <RxHamburgerMenu size={30} />
    )}
</button>

       </div>

      </div>
       {
          isclick && (
            <div className='lg:hidden text-gray-600 body-font bg-white '>
             <div className='transition-div w-full pt-2 px-2 pb-3 space-y-1 sm:px-3'>
              <ul className='w-full gap-2 flex flex-1 flex-col items-center justify-center' >
              <li className='text-lg'><Link href='/'>Home</Link></li>
             <li className='text-lg'><Link href='/about'>About</Link></li>
             <li className='text-lg'><Link href='/course'>Course</Link></li>
             <li className='text-lg'><Link href='/Contact'>Contact</Link></li>
             {/* <li className='h-20 w-[190px] flex justify-center items-center bg-cyan-400 font-bold text-xl gap-2'> Join Now <FaArrowRightLong color='white' size={20}/></li> */}
          </ul>
              </div>

            </div>
          ) 
        }
</header>



    </>
  )
}
