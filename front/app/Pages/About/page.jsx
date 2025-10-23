'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { zamalekHistory } from '@/utils/data'
import Image from 'next/image'

export default function ZamalekHistoryPage() {
  const [selected, setSelected] = useState(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      setProgress(total > 0 ? Math.min(100, Math.round((scrolled / total) * 100)) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const highlights = [
    zamalekHistory[0],
    zamalekHistory.find((x) => x.title.includes('كأس السلطان')) || zamalekHistory[1],
    zamalekHistory.find((x) => x.title.includes('أول بطولة دوري')) || zamalekHistory[6],
    zamalekHistory.find((x) => x.title.includes('أول بطولة إفريقية')) || zamalekHistory[9],
    zamalekHistory.find((x) => x.title.includes('مئوية')) || zamalekHistory[14]
  ].filter(Boolean)

  return (
    <div dir='rtl' className="bg-white text-red-900">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-red-700 via-yellow-400 to-red-600"
          style={{
            width: `${progress}%`,
            transition: 'width 150ms linear'
          }}
        />
      </div>

      <main className="min-h-screen">
        {/* HERO */}
        <section className="relative h-[60vh] flex items-center bg-gradient-to-b from-red-50 to-white">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h1 className="text-4xl md:text-5xl font-extrabold text-red-700">
                  تاريخ نادي الزمالك
                </h1>
                <p className="text-gray-700 max-w-xl">
                  أكبر قلعة رياضية في مصر — رحلة أكثر من قرن من الفخر والإنجازات.
                  استكشف المحطات، الأساطير، وصور الأرشيف.
                </p>

                <div className="flex gap-3 mt-4">
                  <a
                    href="#timeline"
                    className="bg-red-700 hover:bg-red-800 text-white px-5 py-3 rounded-lg shadow-lg transition"
                  >
                    شاهد المحطات
                  </a>
                  <a
                    href="#gallery"
                    className="bg-yellow-400 hover:bg-yellow-500 text-red-900 px-5 py-3 rounded-lg shadow-lg transition"
                  >
                    الأرشيف
                  </a>
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-red-200 rounded-xl p-4 shadow-lg"
              >
                <div className="text-sm text-red-800 font-semibold">
                  أبرز المحطات
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="bg-red-50 rounded-lg overflow-hidden flex items-stretch border border-red-100"
                    >
                      <div className="w-1/3 bg-gradient-to-br from-red-700 to-red-500 flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          IMG
                        </span>
                      </div>
                      <div className="p-3 flex-1">
                        <div className="text-sm font-semibold text-red-900">
                          {h.title}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {h.year}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard title="ألقاب الدوري" value="14" />
            <StatCard title="كأس مصر" value="29" />
            <StatCard title="ألقاب إفريقية" value="5" />
            <StatCard title="كؤوس سوبر" value="5" />
          </div>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="container mx-auto px-6 py-8">
          <h2 className="text-3xl font-bold text-red-700 mb-6">الخط الزمني</h2>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-700 to-yellow-400/40 opacity-40" />

            <div className="space-y-10">
              {zamalekHistory.map((item, i) => {
                const left = i % 2 === 0
                return (
                  <motion.article
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className={`md:flex md:items-center md:gap-6 ${left ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="md:w-1/2">
                      <div className="bg-white rounded-xl shadow overflow-hidden border border-red-100">
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={500}
                          height={500}
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-5">
                          <h3 className="text-2xl font-bold text-red-700">{item.title}</h3>
                          <p className="text-sm text-gray-700 mt-2 line-clamp-4">{item.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-1/2 flex items-center justify-center md:px-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-red-700 text-white font-bold px-4 py-2 rounded-full shadow">
                          {item.year}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        {/* MOMENTS */}
        <section className="container mx-auto px-6 py-8">
          <h2 className="text-3xl font-bold text-red-700 mb-6">لحظات لا تُنسى</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white rounded-xl overflow-hidden shadow border border-red-100"
              >
                <div className="w-full h-48 bg-red-50 flex items-center justify-center">
                  فيديو/صورة افتراضية
                </div>
                <div className="p-4">
                  <div className="font-semibold text-red-900">لحظة رقم {i + 1}</div>
                  <div className="text-sm text-gray-600 mt-2">ملخص قصير عن اللحظة وسبب تميزها.</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        {/* <section id="gallery" className="container mx-auto px-6 py-8">
          <h2 className="text-3xl font-bold text-red-700 mb-6">أرشيف الصور</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {zamalekHistory.map((g, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer bg-white border border-red-100"
                onClick={() => setSelected(g)}
              >
                <Image src={g.img} alt={g.title} width={500} height={500} className="w-full h-48 object-cover" />
                <div className="p-3">
                  <div className="font-semibold text-red-900">{g.title}</div>
                  <div className="text-xs text-gray-600">{g.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* MODAL */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="bg-white rounded-xl w-full max-w-3xl overflow-hidden shadow-lg border border-red-200"
              >
                <div className="flex justify-between items-center p-4 border-b border-red-100">
                  <h3 className="text-xl font-bold text-red-700">{selected.title}</h3>
                  <button className="text-gray-500" onClick={() => setSelected(null)}>✕</button>
                </div>

                <div className="p-4">
                  <div className="w-full h-64 bg-red-50 flex items-center justify-center rounded-md">
                    صورة تفصيلية افتراضية
                  </div>
                  <p className="mt-4 text-gray-700">{selected.description}</p>
                  <p className="mt-3 text-sm text-gray-500">سنة/فترة: {selected.year}</p>
                </div>

                <div className="p-4 border-t border-red-100 text-right">
                  <button onClick={() => setSelected(null)} className="px-4 py-2 bg-red-700 text-white rounded">إغلاق</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-12 bg-red-50 py-6">
          <div className="container mx-auto px-6 text-center text-sm text-red-800">
            تصميم واجهة صفحة التاريخ — نموذج احترافي بثيم الزمالك
          </div>
        </footer>
      </main>
    </div>
  )
}

function StatCard({ title, value }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl shadow p-6 flex flex-col items-start">
      <div className="text-sm text-red-700 font-medium">{title}</div>
      <div className="mt-2 text-3xl font-bold text-red-800">{value}</div>
      <div className="mt-3 text-xs text-gray-500">تحديث مستمر</div>
    </div>
  )
}

