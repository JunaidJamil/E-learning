import React from "react";
import Map from "./Map";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const FormMap = () => {
  return (
    <div className="container mx-auto">
      <h1 className=" text-[40px] mt-10 text-center font-bold">
        Contact For Any Query
      </h1>

      <div className="w-full mt-10">
        <div className=" mt-10 mx-auto w-full">
          <div className=" mains px-2 py-2 conatiner">
            <div className=" mt-10 flex item-center gap-5 sm:justify-center lg:justify-center  flex-wrap">
              <div className="get-in ">
                <h2 className=" text-lg font-bold">Get in Touch</h2>
                <p>
                  The contact form is currently inactive. Get a functional and
                  working contact form with Ajax & PHP in a few minutes. Just
                  copy and paste the files, add a little code and you're done.
                  Download Now.
                </p>
                <ul>
                  <li>
                    <div className="contact-icon">
                    <FaLocationDot />
                    </div>
                    <div>
                    <h3>Office</h3>
                    <p>123 Street, New York, USA</p>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                    <FaPhone />
                    </div>
                    <div>
                    <h3>Mobile</h3>
                    <p>+012 345 67890</p>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                    <MdEmail />
                    </div>
                    <div>
                    <h3>Email</h3>
                    <p>info@example.com</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <Map />
              </div>
              <div className="">
                <form class="form">
                  <div class="flex gap-6">
                    <label>
                      <input
                        required=""
                        placeholder="Your Name"
                        type="text"
                        class="input"
                      />
                   
                    </label>

                  
                    <label>
                    <input
                      required=""
                      placeholder="Your Email"
                      type="email"
                      class="input"
                    />
                   
                  </label>
                  </div>

                  <label>
                    <input
                      required=""
                      placeholder="Subject"
                      type="text"
                      class="input"
                    />
                   
                  </label>


                  <label>
                    <textarea
                      required=""
                      rows="3"
                      placeholder="Message"
                      class="input01"
                    ></textarea>
                    
                  </label>

                  <button class="fancy" href="#">
                    <span class="top-key"></span>
                    <span class="text">submit</span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormMap;
