import React from "react";
import team1 from "/public/assets/team-1.jpg";
import team2 from "/public/assets/team-2.jpg";
import team3 from "/public/assets/team-3.jpg";
import team4 from "/public/assets/team-4.jpg";
import Link from 'next/link'
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";
import "../../Components/Home/CSS/CssExpert/Exper.css"

const Experts = () => {
 
  const Detail = [
    { id: 1, pic1: team1, Name: "John Doe", Design: "Web Developer" },
    { id: 2, pic1: team2, Name: "King", Design: "App Developer" },
    { id: 3, pic1: team3, Name: "Jenfier", Design: "Flutter Developer" },
    { id: 4, pic1: team4, Name: "Sing is king", Design: "Backend Developer" },
  ];

  return (
    <>
         <div className="mt-6 h-full">
          <div className=" flex justify-center">

        <h2 className="text-[40px] text-center title">Expert Instructors</h2>
          </div>
        <div className="mt-24 maindiv3 flex gap-8 sm:mx-3 flex-wrap justify-center">
          {Detail.map((item, i) => (
            
            <Link href={`/Experts/${item.id}`} key={i}>
              <div className="sm:w-[480px] w-auto  2xl:w-[278px] xl:w-[525px] lg:flex-col-2 lg:w-[430px] md:w-[320px]">
                <div className="w-full parent bg-cyan-50">
                  <div className="parent">
                    <Image
                      className="lg:h-full w-full child md:h-38 object-cover object-center"
                      src={item.pic1}
                      alt="expert"
                    />
                  </div>
                  <div className="h-[96px] flex justify-center items-center">
                    <div>
                      <div className="w-full flex justify-center relative bottom-5">
                        <div className="flex w-28 h-10 items-center justify-center gap-2 bg-cyan-50">
                          <FaFacebook size={24} color="#06BBCC" />
                          <FaTwitterSquare size={24} color="#06BBCC" />
                          <FaInstagramSquare size={24} color="#06BBCC" />
                        </div>
                      </div>
                      <div className="relative bottom-4">
                        <h2 className="w-full font-bold text-2xl text-center">
                          {item.Name}
                        </h2>
                        <p className="text-md">{item.Design}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            
          ))}
        </div>
      </div>

   
    </>
  );
};
export default Experts;