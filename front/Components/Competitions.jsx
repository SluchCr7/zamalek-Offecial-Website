'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { zamalekTitles } from '@/utils/data'
import TitleSection from './TitleSection'

export default function ZamalekAchievements() {
  const [selected, setSelected] = useState(null)

  // sort descending by num for display
  const items = [...zamalekTitles].sort((a, b) => b.num - a.num).slice(0, 3)

  return (
    <section className="w-full min-h-screen bg-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <TitleSection title="إنجازات نادي الزمالك" subtitle="ألقاب وبطولات عبر التاريخ" />
        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {items.map((t, idx) => (
            <motion.button
              key={t.Title}
              onClick={() => setSelected(t)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="relative group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 text-left p-6 flex flex-col items-start"
              aria-label={`عرض تفاصيل ${t.Title}`}
            >
              {/* Trophy image */}
              <div className="w-full flex justify-center items-center mb-4">
                <div className="relative w-28 h-28 md:w-32 md:h-32 transition-transform group-hover:scale-105">
                  <Image src={t.img} alt={t.Title} fill sizes="(max-width: 768px) 28vw, 120px" style={{ objectFit: 'contain' }} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{t.Title}</h3>

              {/* Count / badge */}
              <div className="mt-auto flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <div className="bg-red-50 text-red-700 px-3 py-1 rounded-full font-bold text-xl">
                    <CountUp end={t.num} duration={1.5} />
                  </div>
                  <span className="text-sm text-gray-500">مرة / مرات</span>
                </div>

                {/* subtle chevron */}
                <svg className="w-6 h-6 text-gray-400 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Hover overlay shimmer */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-50 opacity-40 mix-blend-multiply"></div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Modal for details */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-black/60" onClick={() => setSelected(null)} />

            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-6 md:p-10"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                aria-label="إغلاق"
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-36 h-36 relative flex-shrink-0">
                  <Image src={selected.img} alt={selected.Title} fill style={{ objectFit: 'contain' }} />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-extrabold text-gray-900">{selected.Title}</h3>
                  <p className="mt-2 text-gray-600">عدد المرات: <span className="font-bold text-red-600">{selected.num}</span></p>
                  <div className='grid grid-cols-3 md:grid-cols-6 w-full gap-3'>
                    {
                      selected.years.map((year, index) => (
                        <p key={index} className="text-white p-2 rounded-xl bg-red-400 text-center">{year}</p>
                      ))
                    }
                  </div>
                  <div className="mt-4 text-gray-700">
                    {/* Placeholder for more historical info. You can replace this with real content or props. */}
                    <p>هنا يمكنك إضافة نبذة تاريخية عن البطولة، أهم لحظات الفوز، أعوام التتويج أو صور لمباريات التتويج.</p>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a href="#" onClick={(e)=>e.preventDefault()} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-red-600 text-red-600 font-semibold">سجل الأعوام</a>
                    <button onClick={() => setSelected(null)} className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold">إغلاق</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
