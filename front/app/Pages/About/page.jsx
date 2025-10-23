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
//     <div dir='rtl' className="bg-white text-red-900">
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

//       <main className="min-h-screen">
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

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion'
import { zamalekHistory } from '@/utils/data'

// ZamalekHistoryPro.jsx
// إعادة تصميم احترافية لصفحة تاريخ نادي الزمالك
// يعتمد على Tailwind CSS + Framer Motion + Next/Image
// ملاحظات: تأكد من وجود zamalekHistory في utils/data ووجود الصور المشار إليها

export default function ZamalekHistoryPro() {
  const [selected, setSelected] = useState(null)
  const [progress, setProgress] = useState(0)

  // Parallax header transform
  const { scrollY } = useViewportScroll()
  const yParallax = useTransform(scrollY, [0, 600], [0, -60])

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

  // Group history by decade for timeline grouping
  const grouped = zamalekHistory.reduce((acc, it) => {
    const yearNum = parseInt(it.year.toString().slice(0, 4)) || 0
    const decade = Math.floor(yearNum / 10) * 10
    acc[decade] = acc[decade] || []
    acc[decade].push(it)
    return acc
  }, {})

  const decades = Object.keys(grouped).map((d) => ({ decade: `${d}s`, items: grouped[d] })).sort((a, b) => parseInt(a.decade) - parseInt(b.decade))

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 text-gray-800">
      {/* TOP PROGRESS */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-red-700 via-yellow-400 to-red-600 shadow-sm"
          style={{ width: `${progress}%`, transition: 'width 120ms linear' }}
        />
      </div>

      {/* HERO */}
      <header className="relative h-[56vh] md:h-[52vh] lg:h-[48vh] overflow-hidden">
        <motion.div style={{ y: yParallax }} className="absolute inset-0">
          <Image src={zamalekHistory[0]?.img || '/zamalek-stadium.jpg'} alt="Zamalek archive" fill className="object-cover brightness-75" />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block bg-red-700 text-white px-3 py-1 rounded-full font-semibold">أرشيف وتاريخ</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-tight">رحلة الزمالك — محطات، صور، وأساطير</h1>
            <p className="mt-4 text-white/80">استعرض أهم اللحظات في تاريخ القلعة البيضاء، من بدايات النادي إلى المئوية وما بعدها. تصفح الخط الزمني، شاهد لحظات مختارة، واطّلع على الأرشيف.</p>

            <div className="mt-6 flex gap-3">
              <a href="#timeline" className="bg-white/90 text-red-700 px-5 py-3 rounded-lg font-semibold shadow hover:scale-105 transition">الخط الزمني</a>
              <a href="#moments" className="bg-red-600 text-white px-5 py-3 rounded-lg font-semibold shadow hover:scale-105 transition">اللحظات المختارة</a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* MAIN */}
      <main className="container mx-auto px-6 md:px-12 pb-20 -mt-12">

        {/* SUMMARY STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <StatCard title="ألقاب الدوري" value="14" colorClass="from-red-50 to-white" />
          <StatCard title="كأس مصر" value="29" colorClass="from-red-50 to-white" />
          <StatCard title="ألقاب إفريقية" value="5" colorClass="from-white to-red-50" />
          <StatCard title="كؤوس سوبر" value="5" colorClass="from-white to-red-50" />
        </section>

        {/* TIMELINE (grouped by decade) */}
        <section id="timeline" className="mb-12">
          <h2 className="text-3xl font-bold text-red-700 mb-6">الخط الزمني للقلعة البيضاء</h2>

          <div className="space-y-10">
            {decades.map((dec, idx) => (
              <motion.div key={dec.decade} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.06 }} className="bg-white rounded-2xl shadow-lg border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-red-700 font-bold text-lg">{dec.decade}</div>
                    <div>
                      <h3 className="text-xl font-semibold">حقبة {dec.decade}</h3>
                      <p className="text-sm text-gray-500">محطات ومناسبات بارزة في هذه الفترة</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {dec.items.map((it, i) => (
                    <motion.article key={i} whileHover={{ y: -6 }} className="rounded-xl overflow-hidden border bg-gray-50">
                      <div className="relative w-full h-44">
                        <Image src={it.img} alt={it.title} fill className="object-cover" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-red-800">{it.title}</h4>
                          <div className="text-sm text-gray-500">{it.year}</div>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{it.description}</p>
                        <div className="mt-4 flex justify-end">
                          <button onClick={() => setSelected(it)} className="px-3 py-1 rounded-md bg-red-600 text-white text-sm">عرض التفاصيل</button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MOMENTS (featured) */}
        <section id="moments" className="mb-12">
          <h2 className="text-3xl font-bold text-red-700 mb-6">لحظات لا تُنسى</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {zamalekHistory.slice(0, 6).map((m, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl border shadow overflow-hidden">
                <div className="relative w-full h-56 bg-red-50 flex items-center justify-center">
                  <Image src={m.img} alt={m.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-red-800">{m.title}</h3>
                    <div className="text-sm text-gray-500">{m.year}</div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">{m.description}</p>
                  <div className="mt-4 flex justify-end">
                    <button onClick={() => setSelected(m)} className="px-3 py-1 rounded-md bg-white border text-red-700">التفاصيل</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* GALLERY PREVIEW */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-red-700 mb-6">أرشيف الصور</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {zamalekHistory.slice(0, 12).map((g, i) => (
              <motion.button key={i} whileHover={{ scale: 1.03 }} onClick={() => setSelected(g)} className="group overflow-hidden rounded-lg shadow border border-red-100 bg-white">
                <div className="relative w-full h-40">
                  <Image src={g.img} alt={g.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-3 text-left">
                  <div className="font-semibold text-red-800">{g.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{g.year}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-8 bg-white/60 border-t">
        <div className="container mx-auto px-6 text-center text-sm text-gray-600">أرشيف نادي الزمالك — تصميم احترافي لصفحة التاريخ</div>
      </footer>

      {/* DETAILS MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/50" onClick={() => setSelected(null)} />

            <motion.div initial={{ y: 20, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 10, scale: 0.98 }} transition={{ duration: 0.18 }} className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image src={selected.img} alt={selected.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-red-700">{selected.title}</h3>
                  <div className="text-sm text-gray-500 mt-1 mb-3">سنة/فترة: <span className="font-semibold text-gray-700">{selected.year}</span></div>
                  <p className="text-gray-700 leading-relaxed">{selected.description}</p>

                  <div className="mt-6 flex gap-3 justify-end">
                    <button onClick={() => setSelected(null)} className="px-4 py-2 rounded-md bg-red-700 text-white">إغلاق</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function StatCard({ title, value, colorClass = 'from-white to-white' }) {
  return (
    <div className={`rounded-2xl p-5 border shadow bg-gradient-to-b ${colorClass}`}>
      <div className="text-sm text-red-700 font-semibold">{title}</div>
      <div className="mt-3 text-3xl font-bold text-red-800">{value}</div>
      <div className="mt-2 text-xs text-gray-500">مسجلة عبر التاريخ</div>
    </div>
  )
}
