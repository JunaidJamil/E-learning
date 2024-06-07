import Headers from "@/Components/Course/Headers";
import { Category } from "@/Components/Home/Category";
import Footer from "@/Components/Home/Footer";
import { Navbar } from "@/Components/Home/Navbar";
import Service from "@/Components/Home/Service";
// import Studentsay from "@/Components/Home/Studentsay";
import React from "react";

const Course = () => {
  return (
    <>
 
      <div>
        <Headers />
      </div>
      <div>
        <Category />
      </div>
      <div>
        <Service/>
      </div>
        <div>
       {/* <Studentsay/> */}
        </div>
     
    </>
  );
};

export default Course;
