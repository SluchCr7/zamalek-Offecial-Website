// "use client";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import Image from "next/image";
// import { useState, useRef, useId, useEffect } from "react";
// import { motion } from "framer-motion";

// const Slide = ({ slide, index, current, handleSlideClick }) => {
//   const slideRef = useRef(null);
//   const xRef = useRef(0);
//   const yRef = useRef(0);
//   const frameRef = useRef();

//   useEffect(() => {
//     const animate = () => {
//       if (!slideRef.current) return;
//       const x = xRef.current;
//       const y = yRef.current;
//       slideRef.current.style.setProperty("--x", `${x}px`);
//       slideRef.current.style.setProperty("--y", `${y}px`);
//       frameRef.current = requestAnimationFrame(animate);
//     };
//     frameRef.current = requestAnimationFrame(animate);
//     return () => {
//       if (frameRef.current) cancelAnimationFrame(frameRef.current);
//     };
//   }, []);

//   const handleMouseMove = (event) => {
//     const el = slideRef.current;
//     if (!el) return;
//     const r = el.getBoundingClientRect();
//     xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
//     yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
//   };

//   const handleMouseLeave = () => {
//     xRef.current = 0;
//     yRef.current = 0;
//   };

//   const { name, img } = slide;

//   return (
//     <motion.li
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{
//         opacity: current === index ? 1 : 0.6,
//         scale: current === index ? 1 : 0.95,
//       }}
//       transition={{ duration: 0.4 }}
//       onClick={() => handleSlideClick(index)}
//       className="relative w-[250px] h-[320px] mx-4 cursor-pointer"
//     >
//       <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
//         <div className="relative w-full h-48 bg-gray-100">
//           <Image
//             width={500}
//             height={500}
//             src={img}
//             alt={name}
//             className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
//           />
//         </div>
//         <div className="p-4 text-center">
//           <h3 className="text-lg font-bold text-gray-900">{name}</h3>
//           <button className="mt-4 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow hover:opacity-90 transition">
//             View Squad
//           </button>
//         </div>
//       </div>
//     </motion.li>
//   );
// };

// const CarouselControl = ({ type, title, handleClick }) => {
//   return (
//     <button
//       className={`w-10 h-10 flex items-center justify-center mx-2 bg-neutral-200 dark:bg-neutral-800 rounded-full hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200`}
//       title={title}
//       onClick={handleClick}
//     >
//       {type === "previous" ? (
//         <FaArrowLeft className="text-neutral-600 dark:text-neutral-200" />
//       ) : (
//         <FaArrowRight className="text-neutral-600 dark:text-neutral-200" />
//       )}
//     </button>
//   );
// };

// export function Carousel({ slides }) {
//   const [current, setCurrent] = useState(0);

//   const handlePreviousClick = () => {
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const handleNextClick = () => {
//     setCurrent((prev) => (prev + 1) % slides.length);
//   };

//   const handleSlideClick = (index) => {
//     if (current !== index) setCurrent(index);
//   };

//   const id = useId();

//   return (
//     <div
//       className="relative w-[70vmin] h-[70vmin] mx-auto"
//       aria-labelledby={`carousel-heading-${id}`}
//     >
//       <ul
//         className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
//         style={{
//           transform: `translateX(-${current * (100 / slides.length)}%)`,
//         }}
//       >
//         {slides.map((slide, index) => (
//           <Slide
//             key={index}
//             slide={slide}
//             index={index}
//             current={current}
//             handleSlideClick={handleSlideClick}
//           />
//         ))}
//       </ul>
//       <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
//         <CarouselControl
//           type="previous"
//           title="Go to previous slide"
//           handleClick={handlePreviousClick}
//         />
//         <CarouselControl
//           type="next"
//           title="Go to next slide"
//           handleClick={handleNextClick}
//         />
//       </div>
//     </div>
//   );
// }

"use client";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { useState, useId } from "react";
import { motion } from "framer-motion";

const Slide = ({ slide }) => {
  const { name, img } = slide;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className="relative w-full h-48 bg-gray-100">
        <Image
          width={500}
          height={500}
          src={img}
          alt={name}
          className="w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-4 text-center flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <button className="mt-auto px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow hover:opacity-90 transition">
          View Squad
        </button>
      </div>
    </motion.div>
  );
};

const CarouselControl = ({ type, title, handleClick }) => {
  return (
    <button
      className="w-10 h-10 flex items-center justify-center mx-2 bg-neutral-200 dark:bg-neutral-800 rounded-full hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200"
      title={title}
      onClick={handleClick}
    >
      {type === "previous" ? (
        <FaArrowLeft className="text-neutral-600 dark:text-neutral-200" />
      ) : (
        <FaArrowRight className="text-neutral-600 dark:text-neutral-200" />
      )}
    </button>
  );
};

export function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const id = useId();

  const itemsPerView = 3; // عدد العناصر في الصف (على الديسكتوب)
  const maxIndex = Math.ceil(slides.length / itemsPerView) - 1;

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <div
      className="relative w-full max-w-7xl mx-auto overflow-hidden"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${(slides.length / itemsPerView) * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <li
            key={index}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4"
          >
            <Slide slide={slide} />
          </li>
        ))}
      </ul>
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
