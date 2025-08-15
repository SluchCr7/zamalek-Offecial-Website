'use client'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function ZamalekKitShowcase() {
  const kits = [
    { id: 'home', name: 'الأساسي', img: '/zamalekHomeNike.jpg' },
    { id: 'away', name: 'الاحتياطي', img: '/zamalekAwayNike.jpg' },
    { id: 'third', name: 'الثالث', img: '/zamalekThirdNike.jpg' },
  ]

  const [currentKit, setCurrentKit] = useState(kits[0])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* عنوان */}
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

      {/* صورة التيشيرت */}
      <div className="relative mt-10 h-[450px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentKit.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <Image
              src={currentKit.img}
              alt={currentKit.name}
              width={400}
              height={500}
              priority
              className="drop-shadow-2xl rounded-xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* أزرار الاختيار */}
      <div className="flex gap-4 mt-6">
        {kits.map((kit) => (
          <button
            key={kit.id}
            onClick={() => setCurrentKit(kit)}
            className={`w-16 h-16 rounded-full border-2 overflow-hidden flex items-center justify-center transition ${
              currentKit.id === kit.id
                ? 'border-red-700 scale-105'
                : 'border-gray-300 hover:border-red-400'
            }`}
          >
            <Image
              src={kit.img}
              alt={kit.name}
              width={60}
              height={60}
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* زر الشراء */}
      <motion.a
        href="/store"
        whileHover={{ scale: 1.05 }}
        className="mt-8 px-6 py-3 bg-red-700 text-white rounded-full text-lg font-bold shadow-lg hover:bg-red-800 transition"
      >
        🛒 احصل عليه الآن
      </motion.a>

    </section>
  )
}
