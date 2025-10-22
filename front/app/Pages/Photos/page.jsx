'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const historicImages = [
  '/new.jpg', '/new.jpg', '/new.jpg', '/new.jpg', '/new.jpg'
]

const currentImages = [
  '/new.jpg', '/new.jpg', '/new.jpg', '/new.jpg', '/new.jpg'
]

const Page = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex flex-col justify-center items-center text-center">
        <Image
          src="/new.jpg"
          alt="Zamalek Background"
          fill
          priority
          className="object-cover brightness-50 absolute inset-0 -z-10"
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
        >
          مكتبة صور نادي الزمالك
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-200 max-w-2xl px-6"
        >
          من الماضي إلى الحاضر... الزمالك دائمًا في القمة ❤️
        </motion.p>
      </div>

      {/* Historic Images */}
      <section className="py-16 px-8 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-3xl font-semibold mb-10 text-center text-yellow-400">
          📜 لقطات من التاريخ
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {historicImages.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="overflow-hidden rounded-2xl border border-gray-700"
            >
              <Image
                src={src}
                alt="Historic Zamalek"
                width={400}
                height={400}
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="relative py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl font-light italic text-gray-300"
        >
          "التاريخ يُكتب بالأبيض... والمستقبل بالأحمر ❤️"
        </motion.h3>
      </div>

      {/* Current Images */}
      <section className="py-16 px-8 bg-gradient-to-b from-white to-gray-100 text-black">
        <h2 className="text-3xl font-semibold mb-10 text-center text-red-600">
          ⚽ صور من الحاضر والملاعب
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={src}
                alt="Current Zamalek"
                width={400}
                height={400}
                className="object-cover hover:scale-110 transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Page
