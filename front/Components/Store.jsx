'use client'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function ZamalekKitShowcase() {
  const kits = [
    { id: 'home', name: 'القميص الأساسي', img: '/zamalekHomeNike.jpg' },
    { id: 'away', name: 'القميص الاحتياطي', img: '/zamalekAwayNike.jpg' },
    // { id: 'third', name: 'القميص الثالث', img: '/zamalekThirdNike.jpg' },
  ]

  const [currentKit, setCurrentKit] = useState(kits[0])

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 overflow-hidden px-4 py-12">
      {/* خطوط الزمالك بالخلفية */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[8px] bg-red-600 transform rotate-[-2deg]" />
        <div className="absolute top-10 left-0 w-full h-[8px] bg-red-600 transform rotate-[2deg]" />
      </div>

      {/* العنوان */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center"
      >
        ارتدِ الفخر
        <br />
        <span className="text-red-700">القميص الرسمي لنادي الزمالك</span>
      </motion.h1>

      {/* الوصف */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-gray-600 text-center max-w-lg"
      >
        اكتشف أحدث أطقم النادي بتصميم أنيق وخامات عالية الجودة، 
        وكن جزءًا من روح الزمالك أينما كنت.
      </motion.p>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 mt-10 max-w-6xl w-full">
        {/* أزرار الاختيار */}
        <div className="flex flex-row md:flex-col gap-4">
          {kits.map((kit) => (
            <motion.button
              key={kit.id}
              onClick={() => setCurrentKit(kit)}
              whileHover={{ scale: 1.1 }}
              className={`w-20 h-20 rounded-full border-2 overflow-hidden flex items-center justify-center shadow-md transition ${
                currentKit.id === kit.id
                  ? 'border-red-700 shadow-lg'
                  : 'border-gray-300 hover:border-red-400'
              }`}
            >
              <Image
                src={kit.img}
                alt={kit.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </motion.button>
          ))}
        </div>

        {/* صورة التيشيرت */}
        <div className="relative h-[450px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentKit.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Image
                src={currentKit.img}
                alt={currentKit.name}
                width={400}
                height={500}
                priority
                className="drop-shadow-2xl rounded-xl border border-gray-200"
              />
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block text-center mt-4 text-lg font-bold text-gray-800"
              >
                {currentKit.name}
              </motion.span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
