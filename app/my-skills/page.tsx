"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";


const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
     <div className="flex flex-col gap-10 px-4 md:gap-20 max-w-[90%] md:max-w-[80%] text-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[10px] md:text-[40px]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-red-100 font-bold text-lg md:text-xl lg:text-2xl">
              Rodeada de tecnología, busco capturar su esencia con pasión y curiosidad.
     
              <h2 className="text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 font-black text-sm sm:text-lg lg:text-xl xl:text-2xl">
  Este es mi Stack Tecnológico
</h2>
         
        
            
            </span>
          <Image
          src="/mamen.png"
          alt="Mamen"
          height={100} 
          width={100

          } 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[15] rounded-lg"
        />
          </h1>
          
        </div>
        
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page;