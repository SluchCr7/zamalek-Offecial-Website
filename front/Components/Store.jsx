'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ZamalekKitShowcase() {
  const kits = [
    { id: 'home', name: 'القميص الأساسي', img: '/zamalekHomeNike.jpg' },
    { id: 'away', name: 'القميص الاحتياطي', img: '/zamalekAwayNike.jpg' },
    // { id: 'third', name: 'القميص الثالث', img: '/zamalekThirdNike.jpg' },
  ]

  return (
    <section dir='rtl' className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 overflow-hidden px-6 py-12">
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

      {/* شبكة الكروت */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl w-full">
        {kits.map((kit, index) => (
          <motion.div
            key={kit.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 cursor-pointer"
          >
            <div className="relative w-full">
              <Image
                src={kit.img}
                alt={kit.name}
                width={500}
                height={500}
                className="object-cover h-auto w-full"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-gray-900">{kit.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
