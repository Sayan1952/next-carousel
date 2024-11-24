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
    if (index === currentIndex) return "translate-y-[-15%] z-10"; // Center slide higher
    if (index === (currentIndex - 1 + coaches.length) % coaches.length)
      return "translate-x-[-140%] z-0"; // Left slide
    if (index === (currentIndex + 1) % coaches.length)
      return "translate-x-[140%] z-0"; // Right slide
    return "hidden"; // Hide all other slides
  };

  return (
    <div className="relative flex items-center justify-center w-full px-28 h-[900px] overflow-hidden bg-slate-300 ">
      {/* Previous Button */}
      <button
        className="absolute left-[94px] top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-slate-300 text-[#4524FF] w-24 h-24 border-[7px] border-l-slate-300 border-t-slate-300 -rotate-45 rounded-full border-[#AFFD07] hover:bg-gray-300 z-20 flex items-center justify-center text-2xl"
        onClick={prevSlide}
      >
        <FontAwesomeIcon icon={faAngleLeft} size="2x" className="transform rotate-45"/>
      </button>

      {/* Slides */}
      <div className="relative flex items-center justify-center w-full h-full">
        {coaches.map((coach, index) => (
          <div
            key={coach.id}
            className={`absolute w-[400px] h-[650px] transform transition-all duration-500 ease-in-out ${getSlideClass(
              index
            )}`}
          >
            <div className="flex flex-col items-center justify-between gap-20">
              {/* Image */}
              <div className="w-[400px] h-[600px] overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={coach.imageUrl}
                  alt={coach.name}
                  fill
                  className="object-cover scale-105 border-[6.5px] border-[#AFFD07] rounded-3xl"
                />
              </div>
              {/* Coach Name */}
              <div className="text-center text-xl font-bold text-[#4524FF]">
                {coach.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        className="absolute right-[94px] top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[#AFFD07] bg-slate-300 text-[#4524FF] border-[7px] w-24 h-24 rounded-full  border-r-slate-300 border-b-slate-300 -rotate-45 hover:bg-gray-300 z-20 flex items-center justify-center text-2xl"
        onClick={nextSlide}
      >
        <FontAwesomeIcon icon={faAngleRight} size="2x" className="transform rotate-45"/>
      </button>
    </div>
  );
};

export default Carousel;

