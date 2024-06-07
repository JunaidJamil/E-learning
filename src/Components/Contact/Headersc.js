import React from 'react'
import "./CssHeaders/Headersc.css"

const Headersc = () => {
  return (
    <div>
        <div className="bg ">
        <div className="flex justify-center items-center border-2  h-[30vh]">
          <div>
            <h2 className="   font-sans font-extrabold text-6xl text-white ">
             Contact Us
            </h2>
            <ul className="text-xl text-white cursor-pointer flex gap-6 justify-center">
              <li>Home</li>
              <li>Contacts</li>
              <li>Pages</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headersc
