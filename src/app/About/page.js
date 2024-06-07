
import Header from '@/Components/About/Header'
import { Abouts } from '@/Components/Home/Abouts'
import Cards from '@/Components/Home/Cards'

import Footer from '@/Components/Home/Footer'
import { Navbar } from '@/Components/Home/Navbar'
import React from 'react'
import Experts from '../Experts/page'

const About = () => {
  return (
    <div>
 
  <div>
   <Header/>
  </div>
  <div className='mt-16'>
  <Cards/>
  </div>
  <div>
 <Abouts/>
  </div>
  <div>
 <Experts/>
  </div>

    </div>
  )
}

export default About
