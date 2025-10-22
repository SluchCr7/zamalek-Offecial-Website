'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import TitleSection from './TitleSection'

export default function ZamalekKitShowcase() {
  const kits = [
    {
      id: 'home',
      name: 'القميص الأساسي',
      img: '/zamalekHomeNike.jpg',
      desc: 'القميص الرسمي لموسم 2025 بخامات عالية الجودة وتصميم كلاسيكي أبيض بخطين أحمر.',
    },
    {
      id: 'away',
      name: 'القميص الاحتياطي',
      img: '/zamalekAwayNike.jpg',
      desc: 'النسخة الاحتياطية باللون الأسود الجذاب وشعار الزمالك الذهبي، بتوقيع Nike.',
    },
    {
      id: 'third',
      name: 'القميص الثالث',
      img: '/zamalekThird.jpg',
      desc: 'تصميم خاص مستوحى من تاريخ النادي العريق، مزيج من الأناقة والجرأة.',
    },
    {
      id: 'GK',
      name: 'قميص الحارس',
      img: '/zamalekGK.jpg',
      desc: 'قميص الحارس الرسمي بتقنية Dri-FIT لراحة مثالية أثناء المباريات.',
    },
  ]

  const [selectedKit, setSelectedKit] = useState(null)

  return (
    <section
      dir="rtl"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-50 overflow-hidden px-6 py-16"
    >
      {/* خلفية زخرفية شفافة */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>
      <TitleSection title="ارتدِ الفخر" subtitle="القميص الرسمي لنادي الزمالك" />
      

      {/* الوصف */}
      {/* <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-2 text-gray-600 text-center max-w-2xl leading-relaxed"
      >
        اكتشف أحدث أطقم النادي لموسم 2025 بتصميم متميز وخامات عالمية الجودة.  
        انضم إلى روح الفانلة البيضاء.
      </motion.p> */}

      {/* السلايدر */}
      <div className="mt-14 w-full overflow-x-auto scrollbar-hide relative">
        <div className="flex gap-8 justify-center">
          {kits.map((kit, index) => (
            <motion.div
              key={kit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05, rotateY: 4 }}
              className="relative min-w-[300px] sm:min-w-[340px] lg:min-w-[380px] h-[460px] rounded-3xl shadow-xl overflow-hidden bg-gray-100 cursor-pointer group transform-gpu"
              onClick={() => setSelectedKit(kit)}
            >
              {/* صورة القميص */}
              {kit.img ? (
                <Image
                  src={kit.img}
                  alt={kit.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">لا يوجد صورة</span>
                </div>
              )}

              {/* Overlay Reveal Animation */}
              <motion.div
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                whileHover={{ clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-4"
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-white mb-2"
                >
                  {kit.name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm text-gray-200 mb-4 max-w-xs"
                >
                  {kit.desc}
                </motion.p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="mt-2 px-6 py-2 bg-red-700 text-white font-semibold rounded-xl shadow-lg hover:bg-red-800 transition"
                >
                  اكتشف الآن
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal عرض التفاصيل */}
      <AnimatePresence>
        {selectedKit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedKit(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 left-4 text-gray-600 hover:text-red-700"
                onClick={() => setSelectedKit(null)}
              >
                <X size={24} />
              </button>

              <div className="relative w-full h-80">
                <Image
                  src={selectedKit.img}
                  alt={selectedKit.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedKit.name}
                </h2>
                <p className="text-gray-600 mb-4">{selectedKit.desc}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-red-700 text-white rounded-xl font-semibold shadow-md hover:bg-red-800"
                >
                  اشترِ الآن
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
