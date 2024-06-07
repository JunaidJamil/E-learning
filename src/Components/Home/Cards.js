"use client";
import React from "react";
import { FaGlobe, FaBookOpen, FaHome } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import "./CSS/cssCard/card.css";
import { motion } from "framer-motion";

const Cards = () => {
  const Card = [
    {
      Icon: <FaGraduationCap size={70} />,
      title: "Skilled Instructor",
      Description:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam ",
    },
    {
      Icon: <FaGlobe size={70} />,
      title: "Teacher",
      Description:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    },
    {
      Icon: <FaBookOpen size={70} />,
      title: "World  Best ",
      Description:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    },
    {
      Icon: <FaHome size={70} />,
      title: "World  Best ",
      Description:
        "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    },
  ];
  return (
    <div className="container mx-auto">

    <div className="carddiv flex justify-center gap-7 flex-wrap text-center ">
      
        {Card.map((item, i) => {
          return (
            <div
              key={i}
              className="align-middle carddiv2  lg:w-[287px] md:w-[240px]  sm:w-[590px] lg:h-64 h-60 w-60 rounded-lg  maindiv text-center"
            >
              <div className="sm:w-[100%] text-center littlediv">
                <div className="flex justify-center align-middle icon my-2">
                  {" "}
                  {item.Icon}{" "}
                </div>
                <div className="card-title">
                  <h1 className="font-mono my-2 font-bold">{item.title}</h1>
                </div>
                <div className="text-center desmain">
                  <p className="font-small text-center des">
                    {item.Description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
          
    </div>
  );
};

export default Cards;
