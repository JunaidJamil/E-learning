import React from 'react';
import "./CSS/cssabout/About.css";
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import aboutpic from "/public/assets/about.jpg";

export const Abouts = () => {
  return (
    <>
    <div className=''>

      <div className='grid gap-9  maindiv2 mx-auto  justify-center lg:justify-center py-[55px] mt-24 lg:grid-cols-2 '>
        <div className='w-auto  grid lg:justify-end md:justify-center'>
          <Image
            src={aboutpic}
            width={500}
            height={200}
            className="object-cover object-center h-[430px] w-[100%] lg:w-[593px] sm:w-[690px] img rounded"
            alt="Picture of the author"
            />
        </div>
        <div className='sm:w-[100%] md:w-[690px] lg:w-[460px] xl:w-[540px] 2xl:w-[590px]'>
          <div className=''>
            <h2 className="text-lg title-font tracking-widest section-title">About Us</h2>
            <h1 className="text-black-400 text-4xl title-font font-large font-bold mb-1">Welcome to eLEARNING</h1>
            <p className="leading-relaxed pt-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            <p className='my-5 '>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          </div>
          <div className='grid md:grid-cols-2'>
            <ul className="lg:mr-8">
              <li className='flex items-center gap-2 pt-2'><FaArrowRightLong color='06BBCC' size={20}/> Skilled Instructors</li>
              <li className='flex items-center gap-2 pt-2' ><FaArrowRightLong color='06BBCC' size={20}/> International Certificate</li>
              <li className='flex items-center gap-2 pt-2'><FaArrowRightLong color='06BBCC' size={20}/> Online Classes</li>
            </ul>
            <ul className="mb- md:mb-0">
              <li className='flex items-center gap-2 pt-2'><FaArrowRightLong color='06BBCC' size={20}/> International Certificate</li>
              <li className='flex items-center gap-2 pt-2'><FaArrowRightLong color='06BBCC' size={20}/> Skilled Instructors</li>
              <li className='flex items-center gap-2 pt-2'> <FaArrowRightLong color='06BBCC' size={20}/>Online Classes</li>
            </ul>
          </div>
          <button className='mt-6 bg-cyan-300 text-black h-[48px] w-[150px] border-black'>Read More</button>
        </div>
      </div>
            </div>
    </>
  );
};
