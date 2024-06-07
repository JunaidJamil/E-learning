import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import pic1 from "/public/assets/testimonial-1.jpg";
import pic2 from "/public/assets/testimonial-2.jpg";
import pic3 from "/public/assets/testimonial-3.jpg";
import pic4 from "/public/assets/testimonial-4.jpg";
import "./CSS/cssStudent/Student.css";

const Studentsay = () => {
  const data = [
    {
      name: `John Morgan`,
      img: pic1,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Ellie Anderson`,
      img: pic2,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Nia Adebayo`,
      img: pic3,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Rigo Louie`,
      img: pic4,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="mt-20 h-full">
      <div className=" flex justify-center">
        <h2 className="text-[40px] text-center title">Our Student say</h2>
</div>
        <div className="container change md:w-[690px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1200px] mx-auto">
          <div className="mt-20 w-full slider-container">
            <Slider {...settings}>
              {data.map((d) => (
                <div
                  key={d.name}
                  className="bg-cyan-50 w-full h-[450px] text-black rounded-xl"
                >
                  <div className="h-56 bg-white-500 flex justify-center items-center rounded-t-xl">
                    <Image
                      src={d.img}
                      width={100}
                      height={100}
                      alt=""
                      className="rounded-full"
                    />
                  </div>

                  <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <p className="text-xl font-semibold">{d.name}</p>
                    <p className="text-center">{d.review}</p>
                    <button className="read-btn bg-cyan-500 text-white text-lg px-6 py-1 rounded-xl">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studentsay;
