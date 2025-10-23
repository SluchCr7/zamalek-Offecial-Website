'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import TitleSection from './TitleSection'

export default function ZamalekKitShowcase() {
  const kits = [
    {
      id: 'home',
      name: 'القميص الأساسي',
      img: '/zamalekHomeNike.jpg',
      desc: 'القميص الرسمي لموسم 2025 بخامات عالية الجودة وتصميم كلاسيكي أبيض بخطين أحمر.',
      fabric: 'Dry-FIT Premium',
      year: '2025',
      price: '1199 جنيه'
    },
    {
      id: 'away',
      name: 'القميص الاحتياطي',
      img: '/zamalekAwayNike.jpg',
      desc: 'النسخة الاحتياطية باللون الأسود الجذاب وشعار الزمالك الذهبي.',
      fabric: 'AeroSwift Performance',
      year: '2025',
      price: '1099 جنيه'
    },
    {
      id: 'third',
      name: 'القميص الثالث',
      img: '/zamalekThird.jpg',
      desc: 'تصميم خاص مستوحى من تاريخ النادي العريق، مزيج من الأناقة والجرأة.',
      fabric: 'Breathable Mesh',
      year: '2025',
      price: '999 جنيه'
    },
    {
      id: 'GK',
      name: 'قميص الحارس',
      img: '/zamalekGK.jpg',
      desc: 'قميص الحارس الرسمي بتقنية Dri-FIT لراحة مثالية أثناء المباريات.',
      fabric: 'Flex Dry Pro',
      year: '2025',
      price: '899 جنيه'
    },
  ]

  const [selected, setSelected] = useState(null)

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  }

  return (
    <section dir="rtl" className="relative w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden py-20 px-6">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>

      <TitleSection
        title="ارتدِ الفخر"
        subtitle="استكشف أطقم الزمالك الرسمية لموسم 2025 — تصميم يجمع بين التاريخ والأناقة، بخامات عالمية الجودة."
      />

      {/* السلايدر */}
      <motion.div
        className="mt-16 flex gap-8 overflow-x-auto pb-6 scrollbar-hide"
        drag="x"
        dragConstraints={{ left: -500, right: 0 }}
      >
        {kits.map((kit, i) => (
          <motion.div
            key={kit.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(kit)}
            className="relative min-w-[320px] lg:min-w-[360px] h-[480px] bg-gradient-to-tr from-gray-100 to-white border border-gray-200/60 rounded-3xl shadow-xl cursor-pointer group overflow-hidden"
          >
            <Image
              src={kit.img}
              alt={kit.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              placeholder="blur"
              blurDataURL="/blur-placeholder.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold">{kit.name}</h3>
              <p className="text-sm text-gray-200 mt-1 line-clamp-2">{kit.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* المودال */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-lg w-full"
            >
              <button
                className="absolute top-4 left-4 text-gray-600 hover:text-red-700"
                onClick={() => setSelected(null)}
              >
                <X size={26} />
              </button>

              <div className="relative w-full h-80">
                <Image
                  src={selected.img}
                  alt={selected.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selected.name}</h2>
                <p className="text-gray-600 mb-4">{selected.desc}</p>

                <div className="flex justify-center gap-6 text-sm text-gray-700 mb-4">
                  <span>🧵 {selected.fabric}</span>
                  <span>📅 {selected.year}</span>
                  <span>💰 {selected.price}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.07 }}
                  className="px-8 py-3 bg-gradient-to-r from-red-700 to-red-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition"
                >
                  اشترِ الآن
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
