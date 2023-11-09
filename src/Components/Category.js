import React from 'react'
import "./csscat/Cat.css"
import Image from 'next/image'
import cat1 from '/public/assets/cat-1.jpg'
import cat2 from '/public/assets/cat-2.jpg'
import cat3 from '/public/assets/cat-3.jpg'
import cat4 from '/public/assets/cat-4.jpg'
import Link from 'next/link'
export const Category = () => {
  return (
   <>
   <div>
     <h6 className='cat'><span className='span'> Categories </span></h6>
     <h1 className=' text-4xl text-center font-mono underline'>Course Categories</h1>

<div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full md:w-1/2 p-1 md:p-2  zoom">
        <Image
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center child"
          src={cat1} />
                  <div
  className="bg-black-900 text-center titles  py-2 px-3"
  style={{ margin: 1 }}
>
  <h5 className="m-0">Graphic Design</h5>
  <small className="text-blue-600">49 Courses</small>
</div>
      </div>
      <div className="w-full md:w-1/2 p-1 md:p-2 zoom">
        <Image
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center child"
          src={cat2} />
         <div
  className="bg-black-900 text-center titles  py-2 px-3"
  style={{ margin: 1 }}
>
  <h5 className="m-0">Graphic Design</h5>
  <small className="text-blue-600">49 Courses</small>
</div>
      </div>
      <div className="w-full md:w-1/2 p-1 md:p-2 zoom">
        <Image
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center child"
          src={cat3} />
          <div
  className="bg-black-900 text-center titles  py-2 px-3"
  style={{ margin: 1 }}
>
  <h5 className="m-0">Graphic Design</h5>
  <small className="text-blue-600">49 Courses</small>
</div>
      </div>
    </div>
    <div className="w-full md:w-1/2 flex-wrap zoom">
      <div class="w-full p-1 md:p-2">
        <Image
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center child"
          src={cat4} />
                  <div
  className="bg-black-900 text-center titles  py-2 px-3"
  style={{ margin: 1 }}
>
  <h5 className="m-0">Graphic Design</h5>
  <small className="text-blue-600">49 Courses</small>
</div>
      </div>
  
    </div>
  </div>
</div>

   </div>




   </>


  )
}
