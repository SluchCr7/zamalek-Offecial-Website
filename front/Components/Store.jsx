'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function ZamalekKitSlider() {
  const kits = [
    { id: 'home', name: 'القميص الأساسي', img: '/zamalekHomeNike.jpg' },
    { id: 'away', name: 'القميص الاحتياطي', img: '/zamalekAwayNike.jpg' },
    { id: 'third', name: 'القميص الثالث', img: '' },
    { id: 'GK', name: 'قميص الحارس', img: '' },
    { id: 'Training', name: 'قميص التدريب', img: '' },
  ]

  const [current, setCurrent] = useState(0)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % kits.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + kits.length) % kits.length)

  return (
    <section dir='rtl' className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-gray-50 overflow-hidden px-6 py-12">

      {/* السلايدر */}
      <div className="relative w-full max-w-4xl">
        {kits.map((kit, index) => (
          <motion.div
            key={kit.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={index === current ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className={`absolute top-0 left-0 w-full ${index === current ? "z-10" : "z-0"} flex justify-center`}
          >
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 w-full max-w-lg group">
              {/* صورة القميص */}
              <div className="relative w-full">
                {kit.img ? (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <Image
                      src={kit.img}
                      alt={kit.name}
                      width={600}
                      height={600}
                      className="object-cover h-[400px] w-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </motion.div>
                ) : (
                  <div className="h-[400px] bg-gray-200 flex items-center justify-center text-gray-500">
                    لا يوجد صورة
                  </div>
                )}
              </div>

              {/* التفاصيل */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 text-center">
                <h3 className="text-2xl font-bold text-white">{kit.name}</h3>
                {/* CTA يظهر عند hover */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 px-5 py-2 bg-red-700 text-white rounded-xl shadow-lg hover:bg-red-800 hidden group-hover:inline-block"
                >
                  اكتشف الآن
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}

        {/* أزرار التحكم */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
        >
          <FaArrowRight className="text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
        >
          <FaArrowLeft className="text-gray-700" />
        </button>
      </div>
    </section>
  )
}
