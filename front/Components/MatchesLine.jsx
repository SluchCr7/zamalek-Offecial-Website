'use client'
import { useState } from "react"
import { motion } from "framer-motion"
import { zamalekMatches } from "@/utils/data"
import Match from "./Match"

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
    <section className="bg-gray-50 py-10">
      <div className="relative max-w-5xl mx-auto">
        
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
                  opacity: Math.abs(offset) > 2 ? 0 : 0.5,
                  x: offset * 300, // كل كارت يتحرك بمقدار ثابت
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
        <div className="flex justify-between px-6 absolute inset-0 items-center">
          <button
            onClick={prevSlide}
            className="bg-white shadow-md rounded-full p-2 hover:bg-gray-200"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="bg-white shadow-md rounded-full p-2 hover:bg-gray-200"
          >
            ▶
          </button>
        </div>

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
