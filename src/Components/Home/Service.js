import React from "react";
import Image from "next/image";
import course1 from "/public/assets/course-1.jpg";
import course2 from "/public/assets/course-2.jpg";
import course3 from "/public/assets/course-3.jpg";
import { FcBusinessman } from "react-icons/fc";
import { MdOutlineWatchLater } from "react-icons/md";
import "./CSS/CssService/Service.css";

const Service = () => {
  const Services = [
    {
      cr: course1,
      name: "John",
      Hour: "3.5HR",
      Student: "20 student",
      Price: "$149.00",
      Description: "Web Design & Development Course for Beginners",
    },
    {
      cr: course2,
      name: "lELA",
      Hour: "3.5HR",
      Student: "30 student",
      Price: "$149.00",
      Description: "Web Design & Development Course for Beginners",
    },
    {
      cr: course3,
      name: "kING",
      Hour: "3.5HR",
      Student: "35 student",
      Price: "$149.00",
      Description: "Web Design & Development Course for Beginners", // Add a comma here
    },
  ];

  return (
    <div className=" mt-16">
     <div className=" flex justify-center">
        <h1 className=" text-[40px] mt-16 text-center title">Popular Courses</h1>
        </div>
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap justify-center  -m-4">
            {Services.map((item) => {
              return (
                <div
                  className="p-4  sm:w-[660px] 2xl:w-[415px] xl:w-[545px] lg:flex-col-2 lg:w-[474px] md:w-[350px]"
                  key={item.name}
                >
                  <div className="h-full  bg-cyan-50/40 parent cursor-pointer  border-black border-opacity-60 rounded-lg overflow-hidden">
                    <div className=" parent border-black">
                      <Image
                        className="lg:h-[270px]  md:h-38 w-full childs object-cover object-center"
                        src={item.cr}
                        alt="blog"
                      />
                    </div>
                    <div className=" flex justify-center  relative start-0 bottom-10  ">
                      <p className=" rounded-l-lg cursor-pointer bg-cyan-400 text-white w-24 text-center border-r-2">
                        Read More
                      </p>
                      <p className="rounded-r-lg cursor-pointer bg-cyan-400 text-white w-24 text-center">
                        Join now
                      </p>
                    </div>

                    <div className=" px-3 mt-5 ">
                      <h1 className="title-font text-3xl text-center font-bold text-gray-900 mb-3">
                        {item.Price}
                      </h1>

                      <div className="flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-cyan-300 me-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-cyan-300 me-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-cyan-300 me-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-cyan-300 me-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                          (4.95)
                        </p>
                      </div>

                      <p className="leading-relaxed text-xl text-center mb-3">
                        {item.Description}
                      </p>
                      <div className="flex     ">
                        <p className="border-r-2 border-t-2 w-1/2 h-9 flex items-center text-black justify-center gap-2 border-gray-400">
                          <FcBusinessman color="#06BBCC" className="mb-1" />{" "}
                          {item.name}
                        </p>
                        <p className="border-r-2 border-t-2 w-1/2 h-9 flex items-center text-black justify-center gap-2 border-gray-400">
                          <MdOutlineWatchLater
                            color="#06BBCC"
                            className="mb-[1px]"
                          />{" "}
                          {item.Hour}
                        </p>
                        <p className=" border-t-2 w-1/2 h-9 flex items-center justify-center text-black border-gray-400">
                          {item.Student}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
   
    </div>
  );
};

export default Service;
