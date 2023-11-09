import React from 'react'
 import "./cssabout/About.css"
import { FaArrowRightLong } from 'react-icons/fa6'
import Image from 'next/image'
import aboutpic from "/public/assets/about.jpg"
export const About = () => {
  return (
    <>
   <section className="text-gray-600 body-font   overflow-hidden">
  <div className=" px-5 py-24 mx-auto ">
    <div className=" mx-auto flex flex-wrap content-center justify-center">
      
      {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/> */}
     
      <Image
      src={aboutpic}
      className="lg:w-1/2 hei  w-auto object-cover object-center rounded"
      width={500}
      height={500}
      alt="Picture of the author"
    />
     
      <div className="lg:w-1/2 w-full border-2 container  lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-lg title-font tracking-widest section-title">About Us</h2>
        <h1 className="text-black-400 text-4xl title-font font-lagre font-bold mb-1  ">Welcome to eLEARNING</h1>

        <p className="leading-relaxed w-full">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
        <p className='my-5'>
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
          </p>
   <div className='flex justify-around lists flex-wrap'>

      <div className='flex justify-around align-center gap-4'>
        <div  className=' arrow'>
      <FaArrowRightLong color='06BBCC' size={20}/>
      <FaArrowRightLong color='06BBCC' size={20}/>
      <FaArrowRightLong color='06BBCC' size={20}/>
        </div>
        <div>
          <ul>
            <li>
            Skilled Instructors
            </li>
            <li>
            International Certificate
            </li>
            <li>
            Online Classes
            </li>
          </ul>
        </div>
        
      </div>
    
      <div className='flex justify-around align-center gap-4'>
        <div className=" align center py-2">
      <FaArrowRightLong color='06BBCC' size={20} />
      <FaArrowRightLong color='06BBCC' size={30} className='arow'/>
      <FaArrowRightLong color='06BBCC' size={30} className='arow'/>
        </div>
        <div>
          <ul>
            <li>
            Online Classes
            </li>
            <li>
            Skilled Instructors
            </li>
            <li>
            International Certificate
            </li>
          </ul>
        </div>
        
      </div>
   </div>


   <button class="flex  text-center w-90 text-white buttons border-0 py-3 px-10 focus:outline-none hover:bg-indigo-600 rounded">Read More</button>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
