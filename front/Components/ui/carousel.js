"use client";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const SlideCard = ({ slide }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col"
    >
      <div className="relative w-full h-48 bg-gray-100">
        <Image
          fill
          src={slide.img}
          alt={slide.name}
          className="object-contain p-4"
        />
      </div>
      <div className="p-4 text-center flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900">{slide.name}</h3>
        <button className="mt-auto px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow hover:opacity-90 transition">
          View Squad
        </button>
      </div>
    </motion.div>
  );
};


export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  const itemsPerView = {
    base: 1,
    sm: 2,
    lg: 3,
    xl: 4,
  };

  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return itemsPerView.xl;
      if (window.innerWidth >= 1024) return itemsPerView.lg;
      if (window.innerWidth >= 640) return itemsPerView.sm;
    }
    return itemsPerView.base;
  };

  const totalPages = Math.ceil(slides.length / getItemsPerView());

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Slides */}
      <motion.ul
        ref={containerRef}
        className="flex gap-6 transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${(slides.length / getItemsPerView()) * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <li
            key={index}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
          >
            <SlideCard slide={slide} />
          </li>
        ))}
      </motion.ul>

      {/* Controls */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={handlePrev}
          className="w-10 h-10 flex items-center justify-center bg-white shadow-lg rounded-full hover:scale-105 transition"
        >
          <FaArrowLeft className="text-red-600" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={handleNext}
          className="w-10 h-10 flex items-center justify-center bg-white shadow-lg rounded-full hover:scale-105 transition"
        >
          <FaArrowRight className="text-red-600" />
        </button>
      </div>
    </div>
  );
}
