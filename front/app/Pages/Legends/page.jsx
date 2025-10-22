// 'use client'
// import React from "react";
// import { zamalekLegends } from "@/utils/data";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const LegendsPage = () => {
//   return (
//     <div dir="rtl" className="w-full bg-gradient-to-b from-white to-gray-50">
      
//       {/* ===== Header Section ===== */}
//       <header className="relative text-center py-12 px-4 bg-gradient-to-b from-red-600/10 to-transparent">
//         <div className="flex flex-col items-center gap-4">
//           {/* <Image
//             src="/zamalek-logo.png"
//             alt="Zamalek Logo"
//             width={120}
//             height={120}
//             className="drop-shadow-lg"
//           /> */}
//           <h1 className="text-4xl md:text-5xl font-extrabold text-red-700">
//             أساطير نادي الزمالك
//           </h1>
//           <p className="max-w-2xl text-gray-700 text-lg">
//             تاريخ طويل من البطولات والإنجازات، نجوم حملوا راية القلعة البيضاء وألهموا الأجيال.
//           </p>
//         </div>
//       </header>

//       {/* ===== Featured Legend (First Player) ===== */}
//       {zamalekLegends.length > 0 && (
//         <section className="relative flex flex-col md:flex-row items-center min-h-[80vh] px-6 py-12 gap-6">
//           {/* صورة اللاعب */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="relative w-full md:w-1/2 h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
//           >
//             <Image
//               src={zamalekLegends[0].img}
//               alt={zamalekLegends[0].name}
//               fill
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
//           </motion.div>

//           {/* معلومات اللاعب */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="flex flex-col gap-4 w-full md:w-1/2 text-right"
//           >
//             <h2 className="text-3xl md:text-4xl font-extrabold text-red-700">
//               {zamalekLegends[0].name}
//             </h2>
//             <p className="text-gray-700">
//               <span className="font-bold text-black">المركز:</span> {zamalekLegends[0].position}
//             </p>
//             <p className="text-gray-700">
//               <span className="font-bold text-black">الفترة:</span> {zamalekLegends[0].period}
//             </p>
//             <div className="flex flex-wrap gap-2">
//               {zamalekLegends[0].titles.map((title, tIdx) => (
//                 <span
//                   key={tIdx}
//                   className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm"
//                 >
//                   🏆 {title}
//                 </span>
//               ))}
//             </div>
//             <p className="text-gray-600 leading-relaxed">
//               {zamalekLegends[0].bio}
//             </p>
//           </motion.div>
//         </section>
//       )}

//       {/* ===== Legends Grid ===== */}
//       <section className="px-6 py-12">
//         <h3 className="text-2xl font-bold text-red-700 mb-6 text-center">
//           باقي الأساطير
//         </h3>
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {zamalekLegends.slice(1).map((person, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
//             >
//               <div className="relative w-full h-[300px]">
//                 <Image
//                   src={person.img}
//                   alt={person.name}
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//               </div>
//               <div className="p-4 text-right">
//                 <h4 className="text-xl font-bold text-red-700">{person.name}</h4>
//                 <p className="text-sm text-gray-600 mb-2">{person.position}</p>
//                 <div className="flex flex-wrap gap-1">
//                   {person.titles.slice(0, 2).map((title, tIdx) => (
//                     <span
//                       key={tIdx}
//                       className="bg-red-50 text-red-700 px-2 py-0.5 rounded-full text-xs"
//                     >
//                       🏆 {title}
//                     </span>
//                   ))}
//                   {person.titles.length > 2 && (
//                     <span className="text-xs text-gray-500">+{person.titles.length - 2} بطولات</span>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ===== Footer Call-to-Action ===== */}
//       <footer className="text-center py-8 bg-gradient-to-t from-gray-100 to-transparent">
//         <p className="text-gray-700">
//           اكتشف المزيد عن تاريخ وبطولات نادي الزمالك عبر موقعنا الرسمي.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default LegendsPage;

'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { zamalekLegends } from '@/utils/data'

export default function LegendsPageEnhanced() {
  const [selected, setSelected] = useState(null)

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-6">
      {/* Header */}
      <header className="max-w-6xl mx-auto text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-700">أساطير نادي الزمالك</h1>
        <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto">تاريخ طويل من النجوم والبطولات — تعرف على أبرز نجوم القلعة البيضاء بتفاصيل وشهادات وأرقام.</p>
      </header>

      {/* Featured (first legend full-height) */}
      {zamalekLegends.length > 0 && (
        <section className="max-w-6xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[680px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image src={zamalekLegends[0].img} alt={zamalekLegends[0].name} fill className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

            <div className="absolute inset-y-0 left-0 flex items-center pr-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-l-3xl p-6 w-[420px] text-right">
                <h2 className="text-3xl font-extrabold text-red-700">{zamalekLegends[0].name}</h2>
                <p className="mt-2 text-gray-700"><span className="font-semibold">المركز:</span> {zamalekLegends[0].position}</p>
                <p className="text-gray-700"><span className="font-semibold">الفترة:</span> {zamalekLegends[0].period}</p>
                <p className="mt-3 text-sm text-gray-600 line-clamp-4">{zamalekLegends[0].bio}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {zamalekLegends[0].titles?.slice(0, 4).map((t, i) => (
                    <span key={i} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">🏆 {t}</span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <button onClick={() => setSelected(zamalekLegends[0])} className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold shadow">عرض التفاصيل</button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Grid of Legends (full-height images) */}
      <section className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-red-700 mb-6 text-right">باقي الأساطير</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {zamalekLegends.slice(1).map((p, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer"
              onClick={() => setSelected(p)}
            >
              <div className="w-full h-[520px] relative">
                <Image src={p.img} alt={p.name} fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                  <div className="bg-white/95 rounded-xl p-3 text-right w-full">
                    <h4 className="text-xl font-bold text-red-700">{p.name}</h4>
                    <p className="text-sm text-gray-700">{p.position} • {p.period}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.titles?.slice(0, 3).map((t, i) => (
                        <span key={i} className="bg-red-50 text-red-700 px-2 py-0.5 rounded-full text-xs">🏆 {t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="max-w-6xl mx-auto text-center py-10 mt-12">
        <p className="text-gray-700">اكتشف المزيد من الذكريات والملفات الخاصة بكل أسطورة — واحفظ الصفحة لمشاركتها لاحقًا.</p>
      </footer>

      {/* Modal Card (Center) */}
      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/50" onClick={() => setSelected(null)} />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="relative max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              {/* Left: Image (according to RTL this will visually be on left) */}
              <div className="relative md:w-1/2 w-full h-[420px] md:h-auto">
                <Image src={selected.img} alt={selected.name} fill className="object-cover object-top" />
              </div>

              {/* Right: Details */}
              <div className="md:w-1/2 w-full p-6 md:p-10 text-right flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold text-red-700">{selected.name}</h2>
                    <p className="text-sm text-gray-600 mt-1">{selected.position} • {selected.period}</p>
                  </div>
                  <button onClick={() => setSelected(null)} className="rounded-full p-2 border hover:bg-gray-50">✕</button>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-sm text-gray-700"><span className="font-semibold text-black">تاريخ الميلاد:</span> {selected.birthdate || 'غير معروف'}</div>
                  <div className="text-sm text-gray-700"><span className="font-semibold text-black">عدد المباريات:</span> {selected.stats?.matches ?? '-'}</div>
                  <div className="text-sm text-gray-700"><span className="font-semibold text-black">الأهداف:</span> {selected.stats?.goals ?? '-'}</div>
                  <div className="text-sm text-gray-700"><span className="font-semibold text-black">الأسهم:</span> {selected.stats?.assists ?? '-'}</div>
                </div>

                <div className="mt-2 text-gray-700 leading-relaxed">{selected.bio}</div>

                {/* Timeline */}
                {selected.moments && selected.moments.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-800 mb-2">أبرز المحطات</h4>
                    <ul className="flex flex-col gap-2 text-sm text-gray-700">
                      {selected.moments.map((m, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-red-600 mt-2" />
                          <div>
                            <div className="font-semibold">{m.year}</div>
                            <div className="text-gray-600">{m.event}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Gallery */}
                {selected.gallery && selected.gallery.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-800 mb-2">معرض الصور</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {selected.gallery.slice(0, 6).map((g, i) => (
                        <div key={i} className="relative w-full h-20 rounded overflow-hidden">
                          <Image src={g} alt={`gallery-${i}`} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Titles */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {selected.titles?.map((t, i) => (
                    <span key={i} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">🏆 {t}</span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <div className="text-sm text-gray-600">شارك السيرة عبر:</div>
                  <div className="flex items-center gap-3">
                    <button className="px-3 py-2 border rounded">رابط</button>
                    <button className="px-3 py-2 border rounded">طباعة</button>
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
