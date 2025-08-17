'use client'
import { useState } from "react"
import { motion } from "framer-motion"
import { zamalekMatches } from "@/utils/data"
import Match from "./Match"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
    <section className="bg-gray-50 py-10">
      <div className="relative max-w-7xl mx-auto">
        
        {/* السلايدر */}
        <div className="relative flex items-center justify-center h-[420px] overflow-hidden">
          {zamalekMatches.map((match, index) => {
            const offset = index - current

            return (
              <motion.div
                key={index}
                className="absolute"
                animate={{
                  scale: offset === 0 ? 1 : 0.8,
                  opacity: offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.5 : 0,
                  x: offset * 300,
                  zIndex: offset === 0 ? 10 : 5,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-72">
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
          className="absolute top-1/2 left-4 -translate-y-1/2 
                     w-12 h-12 flex items-center justify-center
                     rounded-full backdrop-blur-md bg-white/40 
                     shadow-lg border border-white/20
                     hover:bg-red-600 hover:text-white
                     transition-colors duration-300"
        >
          <ChevronLeft size={28} strokeWidth={2.5} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 
                     w-12 h-12 flex items-center justify-center
                     rounded-full backdrop-blur-md bg-white/40 
                     shadow-lg border border-white/20
                     hover:bg-red-600 hover:text-white
                     transition-colors duration-300"
        >
          <ChevronRight size={28} strokeWidth={2.5} />
        </motion.button>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {zamalekMatches.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-red-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
