'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { zamalekMatches } from "@/utils/data"
import Match from "./Match"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"
import Link from 'next/link'

export default function MatchesSlider() {
  const [current, setCurrent] = useState(1)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % zamalekMatches.length)
  }

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? zamalekMatches.length - 1 : prev - 1
    )
  }

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12" dir="rtl">
          <div>
            <div className="flex items-center gap-2 text-primary mb-2">
              <div className="w-10 h-[2px] bg-primary" />
              <span className="text-sm font-black uppercase tracking-[0.2em]">جدول المباريات</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-heading">مباريات <span className="text-primary italic">الملكي</span></h2>
          </div>

          <Link
            href="/Pages/Fixtures"
            className="hidden md:flex items-center gap-2 text-sm font-black hover:text-primary transition-colors group"
          >
            عرض كافة المباريات
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Slider Area */}
        <div className="relative flex items-center justify-center h-[550px] overflow-hidden select-none">
          <div className="absolute inset-0 flex items-center justify-center">
            {zamalekMatches.map((match, index) => {
              const offset = index - current
              const isActive = offset === 0
              const isPrev = offset === -1 || (current === 0 && index === zamalekMatches.length - 1)
              const isNext = offset === 1 || (current === zamalekMatches.length - 1 && index === 0)

              let xPos = offset * 420
              if (current === 0 && index === zamalekMatches.length - 1) xPos = -420
              if (current === zamalekMatches.length - 1 && index === 0) xPos = 420

              return (
                <motion.div
                  key={index}
                  className="absolute flex justify-center items-center px-4"
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.8,
                    opacity: isActive ? 1 : (isPrev || isNext) ? 0.4 : 0,
                    x: xPos,
                    zIndex: isActive ? 30 : 20,
                    filter: isActive ? "blur(0px)" : "blur(2px)"
                  }}
                  transition={{ type: "spring", damping: 20, stiffness: 100 }}
                >
                  <div className="w-[320px] sm:w-[400px] lg:w-[450px]">
                    <Match match={match} />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-4 md:px-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-foreground shadow-2xl pointer-events-auto hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-foreground shadow-2xl pointer-events-auto hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {zamalekMatches.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === current ? "w-12 bg-primary" : "w-1.5 bg-border hover:bg-primary/50"
                }`}
            />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link
            href="/Pages/Fixtures"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-muted font-bold text-sm"
          >
            عرض كافة المباريات
            <ChevronLeft size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
