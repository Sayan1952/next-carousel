
"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface Coach {
  id: number;
  name: string;
  imageUrl: string;
}

const coaches: Coach[] = [
  { id: 1, name: "Coach Glenda", imageUrl: "/glenda.png" },
  { id: 2, name: "Coach Michael", imageUrl: "/michael.png" },
  { id: 3, name: "Coach Afia", imageUrl: "/afia.png" },
  { id: 4, name: "Coach Tony", imageUrl: "/michael.png" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === coaches.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? coaches.length - 1 : prevIndex - 1
    );
  };

  const getSlideClass = (index: number) => {
    if (index === currentIndex) return "translate-y-[-15%] z-10";
    if (index === (currentIndex - 1 + coaches.length) % coaches.length)
      return "translate-x-[-140%] z-0";
    if (index === (currentIndex + 1) % coaches.length)
      return "translate-x-[140%] z-0";
    return "hidden";
  };

  return (
    <div className="relative flex items-center justify-center w-full px-4 sm:px-16 lg:px-28 h-screen md:h-[80vh] lg:h-[900px] overflow-hidden bg-slate-300">
      {/* Previous Button */}
      <button
        className="absolute left-[3%] sm:left-12 lg:left-[7.4%] top-1/2 transform -translate-y-1/2 bg-slate-300 text-[#4524FF] w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-[4px] sm:border-[5px] lg:border-[7px] border-l-slate-300 border-t-slate-300 -rotate-45 rounded-full border-[#AFFD07] hover:bg-gray-300 z-20 flex items-center justify-center"
        onClick={prevSlide}
      >
        <FontAwesomeIcon icon={faAngleLeft} size="2x" className="transform rotate-45" />
      </button>

      {/* Slides */}
      <div className="relative flex items-center justify-center w-full h-full mt-10">
        {coaches.map((coach, index) => (
          <div
            key={coach.id}
            className={`absolute w-[85%] h-[60%] sm:w-[350px] sm:h-[500px] lg:w-[400px] lg:h-[600px] transform transition-all duration-500 ease-in-out ${getSlideClass(
              index
            )}`}
          >
            <div className="flex flex-col items-center justify-between gap-[35rem] lg:gap-[38rem]">
              {/* Image */}
              <div className="w-[100%] h-[60%] overflow-hidden rounded-3xl sm:rounded-3xl shadow-lg mt-5">
                <Image
                  src={coach.imageUrl}
                  alt={coach.name}
                  fill
                  className="object-cover scale-105 border-[4px] lg:border-[6px] border-[#AFFD07] rounded-2xl sm:rounded-3xl"
                />
              </div>
              {/* Coach Name */}
              <div className="text-center text-base lg:text-xl font-bold text-[#4524FF]">
                {coach.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        className="absolute right-[3%] sm:right-12 lg:right-[7.4%] top-1/2 transform -translate-y-1/2 bg-slate-300 text-[#4524FF] w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-[4px] sm:border-[5px] lg:border-[7px] border-r-slate-300 border-b-slate-300 -rotate-45 rounded-full border-[#AFFD07] hover:bg-gray-300 z-20 flex items-center justify-center"
        onClick={nextSlide}
      >
        <FontAwesomeIcon icon={faAngleRight} size="2x" className="transform rotate-45" />
      </button>
    </div>
  );
};

export default Carousel;
