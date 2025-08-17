'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ZamalekKitShowcase() {
  const kits = [
    { id: 'home', name: 'القميص الأساسي', img: '/zamalekHomeNike.jpg' },
    { id: 'away', name: 'القميص الاحتياطي', img: '/zamalekAwayNike.jpg' },
    { id: 'third', name: 'القميص الثالث', img: '' },
    { id: 'GK', name: 'قميص الحارس', img: '' },
    { id: 'Training', name: 'قميص التدريب', img: '' },
  ]

  return (
    <section dir="rtl" className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 overflow-hidden px-6 py-12">

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

      {/* سلايدر أفقي */}
      <div className="mt-12 w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-6">
          {kits.map((kit, index) => (
            <motion.div
              key={kit.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] h-[420px] rounded-2xl shadow-lg overflow-hidden bg-gray-100 cursor-pointer group"
            >
              {/* صورة القميص */}
              {kit.img ? (
                <Image
                  src={kit.img}
                  alt={kit.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">لا يوجد صورة</span>
                </div>
              )}

              {/* Layer أسود مع النص */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-xl font-bold text-white mb-2">{kit.name}</h3>
                <p className="text-sm text-gray-200">
                  تصميم أنيق بخامات عالية الجودة
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="mt-4 px-5 py-2 bg-red-700 text-white rounded-xl shadow-md hover:bg-red-800 transition"
                >
                  اكتشف الآن
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* إخفاء الـ scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
