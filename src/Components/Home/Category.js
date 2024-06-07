import React from "react";
import "./CSS/csscat/Cat.css";
import Image from "next/image";
import cat1 from "/public/assets/cat-1.jpg";
import cat2 from "/public/assets/cat-2.jpg";
import cat3 from "/public/assets/cat-3.jpg";
import cat4 from "/public/assets/cat-4.jpg";
import Link from "next/link";
export const Category = () => {
  return (
    <>

    <div className="mt-20">
    <div className=" flex justify-center">
      <h1 className="text-[40px] mt-10 text-center font-bold title">Courses Categories</h1>
    </div>

      <div className="w-full">
        <div className=" mt-10  mx-auto w-full">
          <div className=" mains px-2 py-2  sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px]  2xl:max-w-[1232px]   ">
  
       {/* Start of Image Section */}
            <div className="flex mt-5 flex-col md:w-full md:flex-row justify-center gap-3   ">
              <div className="  h-full w-full">

                 <div className="h-full relative ">
                  <div className="parent">
                <Image src={cat1} alt="Main" className=" w-full childs" />
                  </div>
                <div className="bg-white w-40 absolute text-center end-1 bottom-1 ">
                 <h1 className=" ">Web Development</h1>
                 <p className=" text-cyan-400">Course 469</p>
                </div>
                 
                   </div>
                <div className="flex gap-3 flex-col   lg:flex-row   mt-3">
                  <div className="parent h-full relative">
                    <Image
                      src={cat2}
                      alt="2nd"
                      className="w-full childs md:h-[220px] lg:h-full"
                    />
                   <div className="bg-white w-40 absolute text-center end-1 bottom-1 ">
                 <h1 className=" ">Web Development</h1>
                 <p className=" text-cyan-400">Course 469</p>
                </div>

                  </div>
                  <div className="parent h-full relative">
                    <Image
                      src={cat3}
                      alt="3nd"
                      className="w-full childs sm:h-[320px] md:h-[220px] lg:h-full"
                      />
                     <div className="bg-white w-40 absolute text-center end-1 bottom-1 ">
                 <h1 className=" ">Web Development</h1>
                 <p className=" text-cyan-400">Course 469</p>
                </div>
                  </div>
                </div>
              </div>

              <div className="  flex ">
                <div className="parent w-full relative h-full">
                  <Image src={cat4} alt="4th" className="h-full w-full childs " />
                  <div className="bg-white w-40 absolute text-center end-1 bottom-1 ">
                 <h1 className=" ">Web Development</h1>
                 <p className=" text-cyan-400">Course 469</p>
                </div>

                </div>




              </div>
                      </div>
            </div>
            {/* End of Images Section */}
          </div>
        </div>
      </div>
    </>
  );
};
