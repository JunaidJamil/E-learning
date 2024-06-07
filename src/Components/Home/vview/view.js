
import { Carousel, Typography, Button } from "@material-tailwind/react";
import React from "react";
 import Image from "next/image";
 import carousel1 from '/public/assets/carousel-1.jpg'
 import carousel2 from '/public/assets/carousel-2.jpg'
 import "./View.css"
export default function Views() {
  return (


    <Carousel className="rounded ">
    
      <div className="relative h-full w-full">
        <Image
          src={carousel1}
          alt="image 2"
          className="h-[95vh] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-color">
          <div className="w-3/4 pl-12  md:pl-20 lg:pl-32">
          <Typography
              variant="lead"
              color="white"
              className="mb-2 opacity-80"
            >
              Best Online Courses 
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl typography"
            >
             The Best Online Learning Platform
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src={carousel2}
          alt="image 3"
          className="h-[95vh]  w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-color">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Get Educated Online From Your Home
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}