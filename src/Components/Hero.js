import React from 'react'
import Image from 'next/image'
import bg from "/public/assets/bg.jpg"
import { Navbar } from './Navbar'
import { Views } from './vview/view'

export default function Hero() {
  return (
    <div className=' relative min-h-screen'>
   
{/*        
       <Image
       className=' lg:w-{580px} xl:w-{620px} h-auto absolute -z-10'
       alt="Mountains"
       src={bg}
       placeholder="blur"
       quality={100}
       style={{
         objectFit: 'cover',
       }}
     /> */}
     <Navbar/>
    <Views/>
    </div>

    
  )
}
