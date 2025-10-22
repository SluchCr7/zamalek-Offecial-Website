'use client'
import { useState } from "react"
import { motion } from "framer-motion"
import { zamalekMatches } from "@/utils/data"
import Match from "./Match"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function MatchesSlider() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % zamalekMatches.length)
  }

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? zamalekMatches.length - 1 : prev - 1
    )
  }

  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-50 py-16">
      <div className="relative max-w-6xl mx-auto px-4">
        
        {/* السلايدر */}
        <div className="relative flex items-center justify-center h-[520px] overflow-hidden">
          {zamalekMatches.map((match, index) => {
            const offset = index - current

            return (
              <motion.div
                key={index}
                className="absolute"
                animate={{
                  scale: offset === 0 ? 1 : 0.8,
                  opacity: offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.5 : 0,
                  x: offset * 380,
                  zIndex: offset === 0 ? 20 : 10,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="w-[420px]">
                  <Match match={match} />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* أزرار التنقل */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevSlide}
          className="absolute top-1/2 left-6 -translate-y-1/2 
                     w-14 h-14 flex items-center justify-center
                     rounded-full backdrop-blur-md bg-white/60 
                     shadow-xl border border-white/20
                     hover:bg-red-600 hover:text-white
                     transition-all duration-300"
        >
          <ChevronLeft size={30} strokeWidth={2.4} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          className="absolute top-1/2 right-6 -translate-y-1/2 
                     w-14 h-14 flex items-center justify-center
                     rounded-full backdrop-blur-md bg-white/60 
                     shadow-xl border border-white/20
                     hover:bg-red-600 hover:text-white
                     transition-all duration-300"
        >
          <ChevronRight size={30} strokeWidth={2.4} />
        </motion.button>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {zamalekMatches.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-red-600 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
