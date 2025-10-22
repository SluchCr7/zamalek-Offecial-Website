'use client'
import { useState } from "react"
import { motion } from "framer-motion"
import { zamalekMatches } from "@/utils/data"
import Match from "./Match"
import { ChevronLeft, ChevronRight } from "lucide-react"
import TitleSection from "./TitleSection"

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
    <section className="relative bg-gradient-to-b from-white to-gray-100 py-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-8">
        {/* عنوان القسم */}
        <TitleSection title="مباريات الزمالك" subtitle="جدول مباريات الزمالك القادمه والسابقه" />

        {/* السلايدر */}
        <div className="relative flex items-center justify-center h-[500px] overflow-hidden select-none">
          {zamalekMatches.map((match, index) => {
            const offset = index - current

            return (
              <motion.div
                key={index}
                className="absolute flex justify-center items-center"
                animate={{
                  scale: offset === 0 ? 1.05 : 0.85,
                  opacity: offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.5 : 0,
                  x: offset * 360,
                  zIndex: offset === 0 ? 20 : 10,
                  filter: offset === 0 ? "brightness(1)" : "brightness(0.8)"
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="w-[340px] sm:w-[380px] lg:w-[400px]">
                  <Match match={match} />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* أزرار التنقل خارج الكروت */}
        <div className="absolute top-1/2 -translate-y-1/2 left-10 z-30">
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center
                       rounded-full bg-white/90 hover:bg-[#d50000] hover:text-white
                       shadow-lg border border-gray-200 transition-colors duration-300"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </motion.button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-10 z-30">
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center
                       rounded-full bg-white/90 hover:bg-[#d50000] hover:text-white
                       shadow-lg border border-gray-200 transition-colors duration-300"
          >
            <ChevronRight size={28} strokeWidth={2.5} />
          </motion.button>
        </div>

        {/* نقاط التصفح */}
        <div className="flex justify-center gap-2 mt-8">
          {zamalekMatches.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-[#d50000] scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
