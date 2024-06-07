import React from 'react'
import { Navbar } from '../Home/Navbar'
import Footer from '../Home/Footer'
// import Image from 'next/image'
// import bg from "../../../public/assets/carousel-1.jpg"
import "./CssHeaders/Header.css"


const Header = () => {
  return (
    <>
    <div className='bg '>
    <div className='flex justify-center items-center border-2  h-[30vh]'>

<div>
<h2 className='   font-sans font-extrabold text-6xl text-white '>About Us</h2>
 <ul className='text-xl text-white cursor-pointer flex gap-6 justify-center'>
<li>
  Home
</li>
<li>
About
</li>
<li>
Pages
</li>
 </ul>
 
</div>

    </div>

    </div>
      </>
  )
}

export default Header
