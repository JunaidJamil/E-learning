import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "./CSS/CssFooter/Footer.css";
import Link from "next/link";
import Image from "next/image";
import pic1 from "../../../public/assets/course-1.jpg";
import pic2 from "../../../public/assets/course-2.jpg";
import pic3 from "../../../public/assets/course-3.jpg";

const Footer = () => {
  return (
    <>
      <div className="w-full mt-24">
        <div className=" mt-10 bg-[#181d38]   mx-auto w-full">
          <div className=" mains px-2 py-2  sm:max-w-[550px] md:max-w-[700px] lg:max-w-[1030px] xl:max-w-[1100px]  2xl:max-w-[1220px]     ">
            <div className="text-white mt-10 flex item-center gap-5 sm:justify-center lg:justify-center  flex-wrap">
              <div className="2xl:w-1/4 lg:w-1/5 md:w-1/2 sm:w-full ">
                <h1 className=" text-2xl">Quick Links</h1>
                <ul className="mt-5 text-[15px]">
                  <li className="py-[2px]">
                    <Link href="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="py-[2px]">
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li className="py-[2px]">
                    <Link href="/privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="py-[2px]">
                    <Link href="/terms-and-conditions">
                      Terms and Condition
                    </Link>
                  </li>
                  <li className="py-[2px]">
                    <Link href="/faqs-help">
                      FAQs & Help
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=" w-full 2xl:w-1/4 lg:w-1/5 md:w-[45%] sm:w-full ">
                <h1 className=" text-2xl">Contact us</h1>
                <ul className="mt-5 text-[15px]">
                  <li className="flex items-center py-[2px] gap-4">
                    <IoLocationSharp size={20} />
                    <Link href="https://www.google.com/maps">
                    123 Street, New York, USA
                    </Link>
                  </li>
                  <li className="flex items-center py-[2px] gap-4">
                    <FaPhoneAlt size={20} />
                    <Link href="tel:+12-345-678920">
                    +12-345-678920
                    </Link>
                  </li>
                  <li className="flex items-center py-[2px] gap-4">
                    <MdEmail size={20} />
                    <Link href="mailTo:info@example.com">
                    info@example.com
                    </Link>
                  </li>
                </ul>
                <div className="mt-5   flex gap-3 items-center">
                  <Link
                    href="https://www.twitter.com/"
                    className=" flex justify-center maindivs  items-center border-[1px] rounded-full h-8 w-8 text-[#5F5F5F]"
                  >
                    <FaTwitter size={20} className="icons" />
                  </Link>

                  <Link
                    href="https://www.youtube.com/"
                    className=" flex justify-center maindivs  items-center border-[1px] rounded-full h-8 w-8 text-[#5F5F5F]"
                  >
                    <FaYoutube size={20} className="icons" />
                  </Link>

                  <Link
                    href="https://www.facebook.com/"
                    className="flex justify-center maindivs  items-center border-[1px] rounded-full h-8 w-8 text-[#5F5F5F]"
                  >
                    <FaFacebookF size={20} className="icons" />
                  </Link>

                  <Link
                    href="https://pk.linkedin.com/"
                    className="flex justify-center maindivs  items-center border-[1px] rounded-full h-8 w-8 text-[#5F5F5F]"
                  >
                    <FaLinkedin size={20} className="icons" />
                  </Link>
                </div>
              </div>

              <div className=" w-full 2xl:w-1/4 sm:w-full md:w-1/2 lg:w-1/4 ">
                <h1 className="text-2xl">Gallery</h1>
                <div className="mt-9 2xl:w-full grid justify-center gap-1 grid-cols-3 ">
                  <div className="  lg:w-[70px] md:w-[110px]  2xl:w-[90px]">
                    <Image
                      src={pic1}
                      width={190}
                      height={100}
                      className="border-2  w-full"
                    />
                  </div>
                  <div className=" lg:w-[70px] md:w-[110px]  2xl:w-[90px]">
                    <Image
                      src={pic2}
                      width={190}
                      height={100}
                      className="border-2  w-full "
                    />
                  </div>
                  <div className=" lg:w-[70px] md:w-[110px]  2xl:w-[90px]">
                    <Image
                      src={pic3}
                      width={190}
                      height={100}
                      alt=""
                      className="border-2 md:w-[110px] w-full"
                    />
                  </div>

                  <div className=" lg:w-[70px] md:w-[110px]  2xl:w-[90px]">
                    <Image
                      src={pic2}
                      width={190}
                      height={100}
                      alt=""
                      className="border-2  w-full"
                    />
                  </div>
                  <div className=" lg:w-[70px] md:w-[110px]  2xl:w-[90px]">
                    <Image
                      src={pic1}
                      width={190}
                      height={100}
                      alt=""
                      className="border-2  w-full "
                    />
                  </div>
                  <div className=" lg:w-[70px] md:w-[110px]  2xl:w-[90px]">
                    <Image
                      src={pic3}
                      width={190}
                      height={100}
                      alt=""
                      className="border-2  w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="  w-full  2xl:w-1/5 md:w-[45%] sm:w-full lg:w-1/4  ">
                <h1 className=" text-2xl">News Letter</h1>
                <p className=" mt-8">
                  Dolor amet sit justo amet elitr clita ipsum elitr est.
                </p>
                <div className="mt-5 border-2 flex gap-2 justify-around items-center bg-white h-16">
                  <input
                    className=" text-black w-full"
                    placeholder="Your email"
                  />
                  <button
                    color="white"
                    className="bg-cyan-400 rounded-md  w-16 h-14"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t-[1px] border-gray-600 mb-10 mt-9 pt-4 flex lg:justify-between sm:justify-center flex-wrap  text-white">
              <div>
                <p className="text-white md:w-[400px] lg:w-auto">
                  {" "}
                  ©{" "}
                  <span className="border-b-[1px] cursor-pointer">
                    Your Site Name
                  </span>
                  , All Right Reserved. Designed By{" "}
                  <span className="border-b-[1px] cursor-pointer">
                    HTML Codex
                  </span>{" "}
                </p>
                <p className="mt-5 sm:text-center md:text-left">
                  Distributed By{" "}
                  <span className="border-b-[1px] cursor-pointer">
                    ThemeWagon
                  </span>{" "}
                </p>
              </div>

              <ul className="flex justify-center gap-7 md:ml-7 lg:-ml-7 sm:mt-5 lg:-mt-1 ">
                <li>Home</li>
                <li>Cookies</li>
                <li>Help</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

{
  /* <div className="w-full">
        <div className=" mt-10 bg-[#181d38]  mx-auto w-full">
          <div className="  mains px-2 py-2 border-2  sm:max-w-[650px] md:max-w-[760px] lg:max-w-[1280px] xl:max-w-[1100px]  2xl:max-w-[1332px]     ">
            <div className="text-white mt-10  border-2 flex item center lg:justify-center sm:justify-start gap-16 flex-wrap">
              <div className="xl:w-auto  lg:w-[142px] sm:w-[300px] border-2">
                <h1 className=" text-2xl">Quick Links</h1>
                <ul className="mt-5">
                  <li className="py-1">About Us</li>
                  <li className="py-1">Contact Us</li>
                  <li className="py-1">Privacy Policy</li>
                  <li className="py-1">Terms and Condition</li>
                  <li className="py-1">FAQs & Help</li>
                </ul>
              </div>
              <div className="xl:w-auto lg:w-[180px] md:w-[300px] border-2">
                <h1 className=" text-2xl">Contact us</h1>
                <ul className="mt-5">
                  <li className="flex items-center py-1 gap-4">
                    <IoLocationSharp size={20} />
                    123 Street, New York, USA
                  </li>
                  <li className="flex items-center py-1 gap-4">
                    <FaPhoneAlt size={20} />
                    +12-345-678920
                  </li>
                  <li className="flex items-center py-1 gap-4">
                    <MdEmail size={20} />
                    info@example.com
                  </li>
                </ul>
                <div className="mt-5 flex gap-3 items-center">
                  
                  <Link
                    href=""
                    className=" flex justify-center maindivs  items-center border-2 rounded-full h-8 w-8 text-[#5F5F5F]"
                  >
                    <FaTwitter size={20} className="icons" />
                  </Link>

                  <Link
                    href=""
                    className=" flex justify-center maindivs  items-center border-2 rounded-full h-8 w-8 text-[#5F5F5F]"
                  >
                    <FaYoutube size={20} className="icons" />
                  </Link>

                  <Link
                    href=""
                    className="flex justify-center maindivs  items-center border-2 rounded-full h-8 w-8 text-[#5F5F5F]"
                  >
                    <FaFacebookF size={20} className="icons" />
                  </Link>

                  <Link 
                  href=""
                   className="flex justify-center maindivs  items-center border-2 rounded-full h-8 w-8 text-[#5F5F5F]">
                    <FaLinkedin size={20} className="icons" />
                  </Link>

                </div>
              </div>

              <div className=" border-2">
              <h1 className=" text-2xl">Gallery</h1>
                  <div className="gap-2 mt-5 lg:w-[235px] md:w-[300px] 2xl:w-[320px] border-2 flex-wrap flex ">
                    <Image
                     src={pic1}
                     width={100}
                     height={100}
                     className="border-2 md:w- lg:w-[70px]  2xl:w-[100px] "
                    />
                        <Image
                     src={pic2}
                     width={100}
                     height={100}
                     className="border-2 lg:w-[70px]  2xl:w-[100px] "
                    />
                        <Image
                     src={pic3}
                     width={100}
                     height={100}
                     className="border-2 lg:w-[70px]  2xl:w-[100px] "
                    />
                     <Image
                     src={pic2}
                     width={100}
                     height={100}
                     className="border-2 lg:w-[70px]  2xl:w-[100px] "
                    />
                     <Image
                     src={pic1}
                     width={100}
                     height={100}
                     className="border-2 lg:w-[70px]  2xl:w-[100px] "
                    />
                     <Image
                     src={pic3}
                     width={100}
                     height={100}
                     className="border-2 lg:w-[70px] 2xl:w-[100px] "
                    />
                     
                  </div>



              </div>
              <div className="border-2 md:w-[300px] lg:w-[210px] 2xl:w-auto">
              <h1 className=" text-2xl">News Letter</h1>
                 <p className="2xl:w-64 mt-5">
                 Dolor amet sit justo amet elitr clita ipsum elitr est.
                 </p>
                  <div className=" border-2 flex gap-2 justify-around items-center bg-white h-16">
                    <input className=" text-black w-full" placeholder="Your email" />
                    <button color="white" className="bg-cyan-400 rounded-md  2xl:w-16 h-14">
                          Sign Up
                         </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
