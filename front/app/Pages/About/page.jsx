// 'use client'

// import React, { useEffect, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { zamalekHistory } from '@/utils/data'
// import Image from 'next/image'

// export default function ZamalekHistoryPage() {
//   const [selected, setSelected] = useState(null)
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     const onScroll = () => {
//       const total = document.documentElement.scrollHeight - window.innerHeight
//       const scrolled = window.scrollY
//       setProgress(total > 0 ? Math.min(100, Math.round((scrolled / total) * 100)) : 0)
//     }
//     onScroll()
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   const highlights = [
//     zamalekHistory[0],
//     zamalekHistory.find((x) => x.title.includes('كأس السلطان')) || zamalekHistory[1],
//     zamalekHistory.find((x) => x.title.includes('أول بطولة دوري')) || zamalekHistory[6],
//     zamalekHistory.find((x) => x.title.includes('أول بطولة إفريقية')) || zamalekHistory[9],
//     zamalekHistory.find((x) => x.title.includes('مئوية')) || zamalekHistory[14]
//   ].filter(Boolean)

//   return (
//     <div dir='rtl' className="bg-white text-red-900 w-full">
//       {/* Progress bar */}
//       <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
//         <div
//           className="h-full bg-gradient-to-r from-red-700 via-yellow-400 to-red-600"
//           style={{
//             width: `${progress}%`,
//             transition: 'width 150ms linear'
//           }}
//         />
//       </div>

//       <main className="min-h-screen w-full">
//         {/* HERO */}
//         <section className="relative h-[60vh] flex items-center bg-gradient-to-b from-red-50 to-white">
//           <div className="container mx-auto px-6 relative z-10">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="space-y-4"
//               >
//                 <h1 className="text-4xl md:text-5xl font-extrabold text-red-700">
//                   تاريخ نادي الزمالك
//                 </h1>
//                 <p className="text-gray-700 max-w-xl">
//                   أكبر قلعة رياضية في مصر — رحلة أكثر من قرن من الفخر والإنجازات.
//                   استكشف المحطات، الأساطير، وصور الأرشيف.
//                 </p>

//                 <div className="flex gap-3 mt-4">
//                   <a
//                     href="#timeline"
//                     className="bg-red-700 hover:bg-red-800 text-white px-5 py-3 rounded-lg shadow-lg transition"
//                   >
//                     شاهد المحطات
//                   </a>
//                   <a
//                     href="#gallery"
//                     className="bg-yellow-400 hover:bg-yellow-500 text-red-900 px-5 py-3 rounded-lg shadow-lg transition"
//                   >
//                     الأرشيف
//                   </a>
//                 </div>
//               </motion.div>

//               {/* Highlights */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.98 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//                 className="bg-white border border-red-200 rounded-xl p-4 shadow-lg"
//               >
//                 <div className="text-sm text-red-800 font-semibold">
//                   أبرز المحطات
//                 </div>
//                 <div className="mt-3 grid grid-cols-2 gap-3">
//                   {highlights.map((h, idx) => (
//                     <div
//                       key={idx}
//                       className="bg-red-50 rounded-lg overflow-hidden flex items-stretch border border-red-100"
//                     >
//                       <div className="w-1/3 bg-gradient-to-br from-red-700 to-red-500 flex items-center justify-center">
//                         <span className="text-white text-xs font-semibold">
//                           IMG
//                         </span>
//                       </div>
//                       <div className="p-3 flex-1">
//                         <div className="text-sm font-semibold text-red-900">
//                           {h.title}
//                         </div>
//                         <div className="text-xs text-gray-600 mt-1">
//                           {h.year}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* STATS */}
//         <section className="container mx-auto px-6 py-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             <StatCard title="ألقاب الدوري" value="14" />
//             <StatCard title="كأس مصر" value="29" />
//             <StatCard title="ألقاب إفريقية" value="5" />
//             <StatCard title="كؤوس سوبر" value="5" />
//           </div>
//         </section>

//         {/* TIMELINE */}
//         <section id="timeline" className="container mx-auto px-6 py-8">
//           <h2 className="text-3xl font-bold text-red-700 mb-6">الخط الزمني</h2>

//           <div className="relative">
//             <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-700 to-yellow-400/40 opacity-40" />

//             <div className="space-y-10">
//               {zamalekHistory.map((item, i) => {
//                 const left = i % 2 === 0
//                 return (
//                   <motion.article
//                     key={i}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, amount: 0.2 }}
//                     transition={{ duration: 0.5, delay: i * 0.05 }}
//                     className={`md:flex md:items-center md:gap-6 ${left ? 'md:flex-row' : 'md:flex-row-reverse'}`}
//                   >
//                     <div className="md:w-1/2">
//                       <div className="bg-white rounded-xl shadow overflow-hidden border border-red-100">
//                         <Image
//                           src={item.img}
//                           alt={item.title}
//                           width={500}
//                           height={500}
//                           className="w-full h-64 object-cover"
//                         />
//                         <div className="p-5">
//                           <h3 className="text-2xl font-bold text-red-700">{item.title}</h3>
//                           <p className="text-sm text-gray-700 mt-2 line-clamp-4">{item.description}</p>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="md:w-1/2 flex items-center justify-center md:px-6">
//                       <div className="flex flex-col items-center text-center">
//                         <div className="bg-red-700 text-white font-bold px-4 py-2 rounded-full shadow">
//                           {item.year}
//                         </div>
//                       </div>
//                     </div>
//                   </motion.article>
//                 )
//               })}
//             </div>
//           </div>
//         </section>

//         {/* MOMENTS */}
//         <section className="container mx-auto px-6 py-8">
//           <h2 className="text-3xl font-bold text-red-700 mb-6">لحظات لا تُنسى</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[0, 1, 2].map((i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -6 }}
//                 className="bg-white rounded-xl overflow-hidden shadow border border-red-100"
//               >
//                 <div className="w-full h-48 bg-red-50 flex items-center justify-center">
//                   فيديو/صورة افتراضية
//                 </div>
//                 <div className="p-4">
//                   <div className="font-semibold text-red-900">لحظة رقم {i + 1}</div>
//                   <div className="text-sm text-gray-600 mt-2">ملخص قصير عن اللحظة وسبب تميزها.</div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* GALLERY */}
//         {/* <section id="gallery" className="container mx-auto px-6 py-8">
//           <h2 className="text-3xl font-bold text-red-700 mb-6">أرشيف الصور</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {zamalekHistory.map((g, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ scale: 1.03 }}
//                 className="group relative overflow-hidden rounded-lg cursor-pointer bg-white border border-red-100"
//                 onClick={() => setSelected(g)}
//               >
//                 <Image src={g.img} alt={g.title} width={500} height={500} className="w-full h-48 object-cover" />
//                 <div className="p-3">
//                   <div className="font-semibold text-red-900">{g.title}</div>
//                   <div className="text-xs text-gray-600">{g.year}</div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section> */}

//         {/* MODAL */}
//         <AnimatePresence>
//           {selected && (
//             <motion.div
//               className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <motion.div
//                 initial={{ scale: 0.95 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0.95 }}
//                 className="bg-white rounded-xl w-full max-w-3xl overflow-hidden shadow-lg border border-red-200"
//               >
//                 <div className="flex justify-between items-center p-4 border-b border-red-100">
//                   <h3 className="text-xl font-bold text-red-700">{selected.title}</h3>
//                   <button className="text-gray-500" onClick={() => setSelected(null)}>✕</button>
//                 </div>

//                 <div className="p-4">
//                   <div className="w-full h-64 bg-red-50 flex items-center justify-center rounded-md">
//                     صورة تفصيلية افتراضية
//                   </div>
//                   <p className="mt-4 text-gray-700">{selected.description}</p>
//                   <p className="mt-3 text-sm text-gray-500">سنة/فترة: {selected.year}</p>
//                 </div>

//                 <div className="p-4 border-t border-red-100 text-right">
//                   <button onClick={() => setSelected(null)} className="px-4 py-2 bg-red-700 text-white rounded">إغلاق</button>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <footer className="mt-12 bg-red-50 py-6">
//           <div className="container mx-auto px-6 text-center text-sm text-red-800">
//             تصميم واجهة صفحة التاريخ — نموذج احترافي بثيم الزمالك
//           </div>
//         </footer>
//       </main>
//     </div>
//   )
// }

// function StatCard({ title, value }) {
//   return (
//     <div className="bg-red-50 border border-red-200 rounded-xl shadow p-6 flex flex-col items-start">
//       <div className="text-sm text-red-700 font-medium">{title}</div>
//       <div className="mt-2 text-3xl font-bold text-red-800">{value}</div>
//       <div className="mt-3 text-xs text-gray-500">تحديث مستمر</div>
//     </div>
//   )
// }


'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { zamalekHistory } from '@/utils/data'

// NOTE: This is a single-file, production-ready UI component meant to be dropped into a Next.js + Tailwind project.
// It focuses on UX polish: hero with media, animated stats, scroll-linked timeline, masonry gallery, and accessible modals.

export default function ZamalekHistoryPagePro() {
  const [selected, setSelected] = useState(null)
  const [yearFilter, setYearFilter] = useState('all')
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start end', 'end start'] })
  const stickyScale = useTransform(scrollYProgress, [0, 1], [1, 0.96])

  // derived highlights (safe guard if data missing)
  const highlights = (
    zamalekHistory || []
  ).slice(0, 6)

  // stats (could be fetched or computed)
  const stats = [
    { title: 'ألقاب الدوري', value: 14 },
    { title: 'كأس مصر', value: 29 },
    { title: 'ألقاب إفريقية', value: 5 },
    { title: 'كؤوس سوبر', value: 5 }
  ]

  // filtering gallery by year (very simple)
  const gallery = zamalekHistory.filter((g) => (yearFilter === 'all' ? true : String(g.year).startsWith(String(yearFilter))))

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-white via-red-50 to-white text-red-900">
      <TopProgress />

      <main>
        <section ref={heroRef} className="relative h-screen overflow-hidden">
          <Hero highlights={highlights} stickyScale={stickyScale} />
        </section>

        <section className="container mx-auto px-6 -mt-24 z-40 relative">
          <div className="backdrop-blur-md bg-white/70 border border-white/30 rounded-2xl p-6 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h2 className="text-3xl md:text-4xl font-extrabold text-red-700">رحلة الزمالك — لمحة سريعة</h2>
                <p className="mt-2 text-gray-700 max-w-2xl">تصفح التاريخ، شاهد الصور، وتعمّق في لحظات لا تُنسى. النسخة الاحترافية تحتوي على تباينات بصرية، تفاعل سلس، ومكونات مهيأة للعرض الرسمي.</p>
              </div>

              <div className="flex gap-3 items-center justify-end">
                <a href="#timeline" className="px-4 py-2 rounded-lg bg-red-700 hover:bg-red-800 text-white shadow">مشاهدة المحطات</a>
                <a href="#gallery" className="px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-red-900 shadow">الأرشيف</a>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s) => (
                <Stat key={s.title} {...s} />
              ))}
            </div>
          </div>
        </section>

        <section id="timeline" className="container mx-auto px-6 py-12">
          <h3 className="text-3xl font-bold text-red-700 mb-6">الخط الزمني التفاعلي</h3>
          <InteractiveTimeline items={zamalekHistory} onSelect={setSelected} />
        </section>

        <section className="container mx-auto px-6 py-12">
          <h3 className="text-3xl font-bold text-red-700 mb-6">لحظات لا تُنسى</h3>
          <MomentsCarousel items={zamalekHistory.slice(0, 6)} onSelect={setSelected} />
        </section>

        <section id="gallery" className="container mx-auto px-6 py-12">
          <h3 className="text-3xl font-bold text-red-700 mb-4">أرشيف الصور</h3>

          <div className="flex gap-3 items-center mb-6">
            <select className="px-3 py-2 rounded-md border" value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
              <option value="all">كل السنوات</option>
              <option value="19">قبل 2000</option>
              <option value="20">2000 - 2009</option>
              <option value="2010">2010+</option>
            </select>
            <div className="text-sm text-gray-600">عرض {gallery.length} صورة</div>
          </div>

          <GalleryMasonry items={gallery} onOpen={setSelected} />
        </section>

        <footer className="mt-12 bg-red-50 py-8">
          <div className="container mx-auto px-6 text-center text-sm text-red-800">تصميم احترافي — نموذج صفحة التاريخ لِـ نادي الزمالك</div>
        </footer>
      </main>

      <AnimatePresence>
        {selected && <Lightbox item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  )
}

function TopProgress() {
  // small progress line at the top of the page
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  return (
    <motion.div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
      <motion.div style={{ width }} className="h-full bg-gradient-to-r from-red-700 via-yellow-400 to-red-600 shadow-sm" />
    </motion.div>
  )
}

function Hero({ highlights, stickyScale }) {
  return (
    <div className="relative h-full flex items-center">
      {/* Background hero image/video layer */}
      <div className="absolute inset-0 -z-10">
        {/* Replace with video or dynamic media if available */}
        <div className="w-full h-full relative">
          <Image src="/zamalek-stadium-hero.jpg" alt="استاد الزمالك" fill className="object-cover brightness-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80" />
        </div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div style={{ scale: stickyScale }} className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-red-800">تاريخ نادي الزمالك</h1>
              <p className="mt-3 text-gray-700">منذ التأسيس حتى المئوية — أرشيف، قصص، وأبطال.</p>
              <div className="mt-4 flex gap-3">
                <a href="#timeline" className="px-5 py-3 rounded-lg bg-red-700 text-white font-semibold shadow">استكشف المحطات</a>
                <a href="#gallery" className="px-5 py-3 rounded-lg bg-transparent border border-red-200 text-red-700">شاهد الأرشيف</a>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {highlights.map((h, i) => (
                  <div key={i} className="p-3 bg-white rounded-lg shadow-inner border border-white/30">
                    <div className="text-xs text-gray-500">{h.year}</div>
                    <div className="font-semibold text-red-800">{h.title}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <div className="w-full h-64 rounded-xl overflow-hidden border border-white/20 shadow-lg">
                <Image src="/zamalek-archive-sample.jpg" alt="أرشيف الزمالك" width={800} height={600} className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function Stat({ title, value }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let raf
    let start = 0
    const duration = 1000
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.round(progress * value))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [value])

  return (
    <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex flex-col">
      <div className="text-sm text-red-700 font-medium">{title}</div>
      <div className="mt-2 text-2xl md:text-3xl font-bold text-red-800">{count}</div>
      <div className="mt-2 text-xs text-gray-500">تحديث مستمر</div>
    </div>
  )
}

function InteractiveTimeline({ items = [], onSelect = () => {} }) {
  // simplified horizontal timeline with sticky center highlight
  return (
    <div className="relative">
      <div className="hidden md:block absolute inset-x-0 top-12 h-1 flex justify-center pointer-events-none">
        <div className="w-1/2 h-full bg-gradient-to-r from-red-700 to-yellow-400/40 opacity-50 rounded-full" />
      </div>

      <div className="space-y-8 md:space-y-0 md:flex md:flex-col md:items-center">
        {items.map((it, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6 }}
            className="md:flex md:items-center md:gap-6"
          >
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl shadow overflow-hidden border border-red-100">
                <div className="relative w-full h-56">
                  <Image src={it.img} alt={it.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="text-xl font-bold text-red-700">{it.title}</h4>
                  <p className="text-sm text-gray-700 mt-2 line-clamp-3">{it.description}</p>
                  <div className="mt-3 flex justify-between items-center">
                    <div className="text-xs text-gray-500">{it.year}</div>
                    <button onClick={() => onSelect(it)} className="px-3 py-1 rounded bg-red-700 text-white text-sm">تفاصيل</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex items-center justify-center md:px-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-red-700 text-white font-bold px-4 py-2 rounded-full shadow">{it.year}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function MomentsCarousel({ items = [], onSelect = () => {} }) {
  return (
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory py-2">
      {items.map((m, i) => (
        <div key={i} className="snap-start w-80 md:w-96 flex-shrink-0">
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-xl overflow-hidden shadow border border-red-100">
            <div className="w-full h-48 bg-red-50 flex items-center justify-center">{/* Replace with video thumbnail */}
              <Image src={m.img} alt={m.title} width={600} height={360} className="object-cover w-full h-full" />
            </div>
            <div className="p-4">
              <div className="font-semibold text-red-900">{m.title}</div>
              <div className="text-sm text-gray-600 mt-2 line-clamp-2">{m.description}</div>
              <div className="mt-3 flex justify-end">
                <button onClick={() => onSelect(m)} className="px-3 py-1 text-sm bg-red-700 text-white rounded">مشاهدة</button>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

function GalleryMasonry({ items = [], onOpen = () => {} }) {
  // CSS columns masonry
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {items.map((g, i) => (
        <motion.div key={i} whileHover={{ scale: 1.01 }} className="mb-4 break-inside-avoid cursor-pointer" onClick={() => onOpen(g)}>
          <div className="relative w-full overflow-hidden rounded-lg border border-red-100 shadow-sm">
            <Image src={g.img} alt={g.title} width={800} height={600} className="w-full h-auto object-cover" />
            <div className="p-3">
              <div className="font-semibold text-red-900">{g.title}</div>
              <div className="text-xs text-gray-500">{g.year}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function Lightbox({ item, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div initial={{ scale: 0.96 }} animate={{ scale: 1 }} exit={{ scale: 0.96 }} className="w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-lg border border-red-100">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-bold text-red-700">{item.title}</h3>
          <button aria-label="close" onClick={onClose} className="text-gray-600">✕</button>
        </div>

        <div className="p-4">
          <div className="w-full h-64 bg-red-50 rounded-md overflow-hidden relative">
            <Image src={item.img} alt={item.title} fill className="object-cover" />
          </div>

          <p className="mt-4 text-gray-700">{item.description}</p>
          <div className="mt-2 text-sm text-gray-500">سنة/فترة: {item.year}</div>
        </div>

        <div className="p-4 border-t text-right">
          <button onClick={onClose} className="px-4 py-2 bg-red-700 text-white rounded">إغلاق</button>
        </div>
      </motion.div>
    </motion.div>
  )
}
