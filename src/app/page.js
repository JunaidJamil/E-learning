"use client";

import Cards from "@/Components/Home/Cards";
import { Abouts } from "@/Components/Home/Abouts";
import { Category } from "@/Components/Home/Category";
import Service from "@/Components/Home/Service";
import Hero from "@/Components/Home/Hero";
import Studentsay from "@/Components/Home/Studentsay";
import Experts from "./Experts/page";

export default function Home() {
  return (
    <>
      <div>

        <Hero />

        <div className="mt-[170px]">
          <Cards />
        </div>

        <div>
          <Abouts />
        </div>

        <div>
          <Category />
        </div>

        <div className="mt-20 ">
          <Service />
        </div>

        <div>
          <Experts />
        </div>

        <div>
          <Studentsay />
        </div>
      <div>{/* <Footer/> */}</div>
      </div>
    </>
  );
}
