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
        <div className="flex items-center justify-center overflow-hidden">
          {zamalekMatches.map((match, index) => {
            // حساب الفرق بين الكارت الحالي والكارت اللي بنعرضه
            let offset = index - current
            if (offset < 0) offset += zamalekMatches.length

            return (
              <motion.div
                key={index}
                className="absolute flex justify-center items-center"
                initial={false}
                animate={{
                  scale: offset === 0 ? 1 : 0.8,
                  opacity: offset === 0 ? 1 : 0.5,
                  x: offset * 320 - (offset > 0 ? 160 : 0), // تباعد الكروت
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
        <div className="flex justify-center gap-2 mt-64">
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
