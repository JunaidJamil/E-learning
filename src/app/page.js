"use client"

import Hero from '@/Components/Hero'
import Cards from '@/Components/Cards'
// import { Navbar } from '@/Components/Navbar'
import { Views } from '@/Components/vview/view'
import { Divider } from 'antd'
import { About } from '@/Components/About'
import { Category } from '@/Components/Category'
// import Image from 'next/image'
// import bg from '/public/assets/bg.jpg'

export default function Home() {
  return (
<>
<div>

      <Hero/> 
      
   <div>
      <Cards/>
    </div> 

   <div >
    <About/>
   </div>
  
  
   <div>
    <Category/>
   </div>



</div>



</>

  )
}
