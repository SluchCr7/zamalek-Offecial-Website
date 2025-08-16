"use client";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState, useRef, useId, useEffect, useLayoutEffect } from "react";
import Image from "next/image";

// دمج ref المحلي مع Ref القياس من الأب
const mergeRefs = (localRef, parentRef) => (el) => {
  localRef.current = el;
  if (parentRef) parentRef.current = el;
};

const Slide = ({ slide, index, current, handleSlideClick, itemRef }) => {
  const slideRef = useRef(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      const x = xRef.current;
      const y = yRef.current;
      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, title } = slide;

  // خلي الـ <li> هو العنصر الجذري (بدون wrapper div) عشان يبقى ابن مباشر لـ <ul>
  return (
    <li
      ref={mergeRefs(slideRef, itemRef)}
      className="flex-none basis-[280px] md:basis-[320px] relative text-center z-10 rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300
                 [perspective:1200px] [transform-style:preserve-3d]"
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform:
          current !== index ? "scale(0.96) rotateX(8deg)" : "scale(1) rotateX(0deg)",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        transformOrigin: "bottom",
      }}
    >
      <div
        className="relative w-full"
        style={{
          transform:
            current === index
              ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
              : "none",
        }}
      >
        <Image
          className="w-full h-auto object-contain transition-opacity duration-500"
          alt={title}
          src={src}
          width={600}
          height={400}
          onLoad={imageLoaded}
          loading="eager"
          decoding="sync"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
    </li>
  );
};

const CarouselControl = ({ type, title, handleClick }) => {
  return (
    <button
      className="w-10 h-10 flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 
                 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none 
                 hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200"
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

  // refs للقياس
  const trackRef = useRef(null);
  const firstCardRef = useRef(null);

  // مقدار الخطوة (عرض الكارت + الفجوة)
  const [step, setStep] = useState(0);

  // احسب step بدقة مع دعم تغيير المقاسات
  useLayoutEffect(() => {
    const computeStep = () => {
      if (!firstCardRef.current || !trackRef.current) return;
      const cardWidth = firstCardRef.current.offsetWidth;
      const styles = window.getComputedStyle(trackRef.current);
      const gap = parseFloat(styles.columnGap || "0") || 0;
      setStep(cardWidth + gap);
    };

    computeStep();

    // راقب تغيّر أحجام العناصر
    const ro = new ResizeObserver(computeStep);
    if (trackRef.current) ro.observe(trackRef.current);
    if (firstCardRef.current) ro.observe(firstCardRef.current);

    window.addEventListener("resize", computeStep);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", computeStep);
    };
  }, []);

  const handlePreviousClick = () => {
    setCurrent((c) => (c - 1 < 0 ? slides.length - 1 : c - 1));
  };

  const handleNextClick = () => {
    setCurrent((c) => (c + 1 === slides.length ? 0 : c + 1));
  };

  const handleSlideClick = (index) => {
    if (current !== index) setCurrent(index);
  };

  return (
    <div
      className="relative w-full max-w-5xl mx-auto flex flex-col items-center"
      aria-labelledby={`carousel-heading-${id}`}
    >
      {/* Viewport */}
      <div className="w-full overflow-hidden">
        {/* Track */}
        <ul
          ref={trackRef}
          className="flex gap-4 md:gap-6 will-change-transform transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${current * step}px)`,
          }}
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
              // مرر ref للعنصر الأول فقط للقياس
              itemRef={index === 0 ? firstCardRef : undefined}
            />
          ))}
        </ul>
      </div>

      {/* الأسهم تحت الكروت */}
      <div className="flex justify-center items-center gap-4 mt-6">
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
