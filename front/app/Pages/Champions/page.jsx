// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";
// import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Legend } from "recharts";
// import { zamalekTitles } from "@/utils/data";
// import TitleSection from "@/Components/TitleSection";

// // ألوان للتوزيع
// const COLORS = ["#dc2626", "#f59e0b", "#2563eb"];


// export default function ZamalekTitlesPage() {
//   const [selected, setSelected] = useState(null);
//   const [tab, setTab] = useState("all");

//   // فلترة حسب التبويب
//   const filtered =
//     tab === "all"
//       ? zamalekTitles
//       : zamalekTitles.filter((t) => t.category === tab);

//   // sort descending by num
//   const items = [...filtered].sort((a, b) => b.num - a.num);

//   // data for PieChart
//   const chartData = [
//     { name: "محلية", value: zamalekTitles.filter((t) => t.category === "local").reduce((s, x) => s + x.num, 0) },
//     { name: "قارية", value: zamalekTitles.filter((t) => t.category === "continental").reduce((s, x) => s + x.num, 0) },
//     { name: "إقليمية", value: zamalekTitles.filter((t) => t.category === "regional").reduce((s, x) => s + x.num, 0) },
//   ];

//   return (
//     <section dir="rtl" className="w-full min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="relative w-full h-[50vh] bg-gradient-to-r from-red-700 to-red-500 flex items-center justify-center text-center text-white">
//         <div className="absolute inset-0">
//           <Image
//             src="/zamalek-stadium.jpg"
//             alt="ملعب الزمالك"
//             fill
//             className="object-cover opacity-30"
//           />
//         </div>
//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.7 }}
//           className="relative z-10 max-w-2xl px-6"
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
//             إنجازات نادي الزمالك
//           </h1>
//           <p className="text-lg md:text-xl text-white/90">
//             اكثر من 110 سنة في انجازات و بطولات 
//           </p>
//         </motion.div>
//       </div>

//       <div className="max-w-7xl mx-auto py-16 px-6 md:px-12">
//         {/* Tabs */}
//         <div className="flex gap-4 justify-center mb-10">
//           {[
//             { key: "all", label: "الكل" },
//             { key: "local", label: "محلية" },
//             { key: "continental", label: "قارية" },
//             { key: "regional", label: "إقليمية" },
//           ].map((t) => (
//             <button
//               key={t.key}
//               onClick={() => setTab(t.key)}
//               className={`px-4 py-2 rounded-full font-semibold ${
//                 tab === t.key
//                   ? "bg-red-600 text-white"
//                   : "bg-white text-gray-700 border"
//               }`}
//             >
//               {t.label}
//             </button>
//           ))}
//         </div>

//         {/* Grid */}
//         <motion.div
//           initial="hidden"
//           animate="show"
//           variants={{
//             hidden: {},
//             show: {
//               transition: { staggerChildren: 0.1 },
//             },
//           }}
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
//         >
//           {items.map((t) => (
//             <motion.button
//               key={t.Title}
//               onClick={() => setSelected(t)}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.99 }}
//               className="relative group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 text-left p-6 flex flex-col items-start"
//             >
//               <div className="w-full flex justify-center items-center mb-4">
//                 <div className="relative w-28 h-28 md:w-32 md:h-32 transition-transform group-hover:scale-105">
//                   <Image
//                     src={t.img}
//                     alt={t.Title}
//                     fill
//                     sizes="120px"
//                     style={{ objectFit: "contain" }}
//                   />
//                 </div>
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                 {t.Title}
//               </h3>
//               <div className="mt-auto flex items-center justify-between w-full">
//                 <div className="flex items-center gap-3">
//                   <div className="bg-red-50 text-red-700 px-3 py-1 rounded-full font-bold text-xl">
//                     <CountUp end={t.num} duration={1.5} />
//                   </div>
//                   <span className="text-sm text-gray-500">مرة</span>
//                 </div>
//                 <svg
//                   className="w-6 h-6 text-gray-400 group-hover:text-red-600 transition-colors"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </div>
//             </motion.button>
//           ))}
//         </motion.div>
//         {/* Section: إجمالي البطولات */}
//         <div className="mt-12">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="relative bg-gradient-to-r from-red-600 to-red-500 rounded-3xl shadow-lg overflow-hidden px-6 py-10 text-center text-white"
//           >
//             {/* شريط زخرفي علوي */}
//             <div className="absolute top-0 left-0 w-full h-2 bg-white/20"></div>

//             {/* الرقم الكبير */}
//             <motion.div
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="mx-auto w-32 h-32 flex items-center justify-center rounded-full bg-white text-red-600 font-extrabold text-5xl shadow-xl border-4 border-red-200"
//             >
//               <CountUp end={80} duration={2} />
//             </motion.div>

//             {/* النص */}
//             <h3 className="mt-6 text-2xl font-bold">إجمالي البطولات</h3>
//             <p className="mt-2 text-white/90 max-w-xl mx-auto leading-relaxed">
//               فاز نادي الزمالك عبر تاريخه العريق بـ <span className="font-semibold">80 بطولة</span> 
//               بين محلية وقارية وإقليمية، ليبقى أحد أكثر الأندية فوزاً بالبطولات في الوطن العربي.
//             </p>

//             {/* خط زخرفي سفلي */}
//             <div className="absolute bottom-0 left-0 w-full h-2 bg-white/20"></div>
//           </motion.div>
//         </div>
//         <ResponsiveContainer>
//         <PieChart>
//             <Pie
//             data={chartData}
//             cx="50%"
//             cy="50%"
//             innerRadius={70}
//             outerRadius={120}
//             paddingAngle={5}
//             dataKey="value"
//             label={({ name, percent }) =>
//                 `${name} ${(percent * 100).toFixed(0)}%`
//             }
//             labelLine={false}
//             >
//             {chartData.map((_, i) => (
//                 <Cell key={i} fill={COLORS[i % COLORS.length]} />
//             ))}
//             </Pie>

//             {/* Tooltip تفاعلي */}
//             <Tooltip
//             formatter={(value, name) => [`${value} بطولة`, `${name}`]}
//             />

//             {/* Legend */}
//             <Legend
//             verticalAlign="bottom"
//             align="center"
//             wrapperStyle={{ fontSize: "14px", marginTop: "20px" }}
//             />
//         </PieChart>
//         </ResponsiveContainer>

//       </div>

//       {/* Modal */}
//       {selected && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
//           <div
//             className="absolute inset-0 bg-black/60"
//             onClick={() => setSelected(null)}
//           />
//           <motion.div
//             initial={{ y: 40, opacity: 0, scale: 0.98 }}
//             animate={{ y: 0, opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.25 }}
//             className="relative z-10 max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-6 md:p-10"
//           >
//             <button
//               onClick={() => setSelected(null)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
//               aria-label="إغلاق"
//             >
//               ✕
//             </button>
//             <div className="flex flex-col md:flex-row items-center gap-6">
//               <div className="w-36 h-36 relative flex-shrink-0">
//                 <Image
//                   src={selected.img}
//                   alt={selected.Title}
//                   fill
//                   style={{ objectFit: "contain" }}
//                 />
//               </div>
//               <div className="flex-1">
//                 <h3 className="text-2xl font-extrabold text-gray-900">
//                   {selected.Title}
//                 </h3>
//                 <p className="mt-2 text-gray-600">
//                   عدد المرات:{" "}
//                   <span className="font-bold text-red-600">{selected.num}</span>
//                 </p>
//                 <div className="grid grid-cols-3 md:grid-cols-6 w-full gap-3 mt-3">
//                   {selected.years.map((year, index) => (
//                     <p
//                       key={index}
//                       className="text-white p-2 rounded-xl bg-red-400 text-center"
//                     >
//                       {year}
//                     </p>
//                   ))}
//                 </div>
//                 <div className="mt-4 text-gray-700 leading-relaxed">
//                   <p>
//                     هنا يمكنك إضافة نبذة تاريخية عن البطولة وأهم لحظات التتويج
//                     وصور المباريات الشهيرة.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </section>
//   );
// }

"use client";

import React, { useMemo, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useViewportScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { zamalekTitles } from "@/utils/data";
import TitleSection from "@/Components/TitleSection";

// =====================================================
// ZamalekTitlesAdvanced.jsx
// نسخة محسّنة من صفحة بطولات الزمالك
// ملاحظة: تأكد من توفر بيانات zamalekTitles في utils/data
// واستخدم Tailwind CSS و Framer Motion و Recharts و react-countup
// =====================================================

const COLORS = ["#dc2626", "#f59e0b", "#2563eb"];

// Helper: حساب ملخصات
function summarizeByCategory(items) {
  const local = items.filter((i) => i.category === "local").reduce((s, x) => s + x.num, 0);
  const continental = items.filter((i) => i.category === "continental").reduce((s, x) => s + x.num, 0);
  const regional = items.filter((i) => i.category === "regional").reduce((s, x) => s + x.num, 0);
  return { local, continental, regional };
}

// Helper: بيانات الرسم الزمني (سنوات -> عدد بطولات في كل عقد)
function buildTimelineData(items) {
  const years = items.flatMap((t) => t.years || []);
  const counts = {};
  years.forEach((y) => {
    const decade = Math.floor(y / 10) * 10;
    counts[decade] = (counts[decade] || 0) + 1;
  });
  return Object.keys(counts)
    .map((d) => ({ decade: `${d}s`, value: counts[d] }))
    .sort((a, b) => parseInt(a.decade) - parseInt(b.decade));
}

export default function ZamalekTitlesAdvanced() {
  const [tab, setTab] = useState("all");
  const [selected, setSelected] = useState(null);

  // Parallax for hero
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 400], [0, -40]);

  const filtered = useMemo(() => {
    if (tab === "all") return zamalekTitles;
    return zamalekTitles.filter((t) => t.category === tab);
  }, [tab]);

  const items = useMemo(() => [...filtered].sort((a, b) => b.num - a.num), [filtered]);

  const summary = useMemo(() => summarizeByCategory(zamalekTitles), []);
  const total = useMemo(() => Object.values(summary).reduce((s, x) => s + x, 0), [summary]);
  const chartData = [
    { name: "محلية", value: summary.local },
    { name: "قارية", value: summary.continental },
    { name: "إقليمية", value: summary.regional },
  ];

  const timelineData = useMemo(() => buildTimelineData(zamalekTitles), []);

  // For accessibility: focus trap basics in modal
  const closeModal = () => setSelected(null);
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") closeModal();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section dir="rtl" className="w-full min-h-screen bg-white">
      {/* HERO */}
      <div className="relative w-full h-[48vh] overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <Image src="/zamalek-stadium.jpg" alt="ملعب الزمالك" fill className="object-cover opacity-30" />
        </motion.div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">إنجازات نادي الزمالك</h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl">تاريخ حافل بالتتويجات — استعرض إحصائيات وأبرز البطولات عبر العقود.</p>

          <div className="mt-6 inline-flex items-center gap-3 bg-white rounded-full shadow px-3 py-2 border">
            <div className="px-3 text-sm text-gray-500">التصنيف:</div>
            {[{key:'all', label:'الكل'},{key:'local', label:'محلية'},{key:'continental', label:'قارية'},{key:'regional', label:'إقليمية'}].map(t => (
              <button key={t.key} onClick={() => setTab(t.key)} className={`px-3 py-1 rounded-full text-sm font-semibold ${tab===t.key? 'bg-red-600 text-white':'text-gray-700'}`}>
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* TITLES GRID */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border p-4 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">سجل البطولات</h2>
                <div className="text-sm text-gray-500">عرض {items.length} نتائج</div>
              </div>

              <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.06 }}}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((t, idx) => (
                  <motion.button
                    key={t.Title}
                    onClick={() => setSelected(t)}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.995 }}
                    className="group bg-white rounded-xl border hover:shadow-md p-4 flex flex-col h-full text-left"
                    aria-label={`فتح تفاصيل ${t.Title}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 relative flex-shrink-0">
                        <Image src={t.img} alt={t.Title} fill sizes="64px" className="object-contain" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900">{t.Title}</h3>
                          <div className="text-sm font-bold text-red-600">{t.num}</div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{t.short || ''}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm text-gray-500">أول تتويج: {t.years?.[0] ?? '-'}</div>
                      <div className="text-xs text-gray-400">{t.category === 'local' ? 'محلية' : t.category === 'continental' ? 'قارية' : 'إقليمية'}</div>
                    </div>

                    <div className="mt-3">
                      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div style={{ width: `${Math.min(100, (t.num / (items[0]?.num || 1)) * 100)}%` }} className="h-2 rounded-full bg-red-600" />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* TIMELINE */}
            <div className="mt-6 bg-white rounded-2xl shadow-lg border p-6">
              <h3 className="text-lg font-bold mb-3">خط زمني للبطولات</h3>
              <p className="text-sm text-gray-500 mb-4">توزيع البطولات حسب العقودُ — اضغط على أي عقد لعرض البطولات ذات الصلة.</p>

              <div className="space-y-4">
                {timelineData.length ? (
                  timelineData.map((d, i) => (
                    <motion.div key={d.decade} whileHover={{ scale: 1.02 }} className="flex items-center gap-4">
                      <div className="w-12 flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center font-bold text-red-600">{d.value}</div>
                        <div className="mt-2 text-xs text-gray-500">{d.decade}</div>
                      </div>
                      <div className="flex-1 bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-semibold">{d.decade}</div>
                          <div className="text-sm text-gray-400">{d.value} بطولات</div>
                        </div>

                        <div className="mt-2 text-sm text-gray-600">
                          {/* show small list of examples years inside this decade (up to 6) */}
                          {zamalekTitles
                            .flatMap((t) => t.years || [])
                            .filter((y) => Math.floor(y / 10) * 10 === parseInt(d.decade))
                            .slice(0, 6)
                            .map((y, idx) => (
                              <span key={idx} className="inline-block text-xs px-2 py-1 mr-2 mb-2 rounded-md bg-white border text-gray-700">{y}</span>
                            ))}
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-sm text-gray-500">لا توجد بيانات زمنية كافية.</div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: STATISTICS */}
          <aside className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border p-4">
              <h4 className="text-lg font-bold mb-3">إجمالي البطولات</h4>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="text-4xl font-extrabold text-red-600"><CountUp end={total} duration={1.8} /></div>
                  <div className="text-sm text-gray-500">عدد البطولات عبر التاريخ</div>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-sm text-gray-500">محلية</div>
                      <div className="font-bold text-gray-900">{summary.local}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">قارية</div>
                      <div className="font-bold text-gray-900">{summary.continental}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">إقليمية</div>
                      <div className="font-bold text-gray-900">{summary.regional}</div>
                    </div>
                  </div>
                </div>

                <div className="w-48 h-36">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={chartData} dataKey="value" innerRadius={34} outerRadius={56} cy="50%">
                        {chartData.map((entry, i) => (
                          <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(v) => `${v} بطولة`} />
                      <Legend verticalAlign="bottom" align="center" />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border p-4">
              <h4 className="font-bold mb-3">إحصاءات إضافية</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>— أقدم لقب: {Math.min(...zamalekTitles.flatMap(t => t.years || [9999]))}</li>
                <li>— الموسم الأكثر تتويجًا: {getMostSuccessfulSeason(zamalekTitles)}</li>
                <li>— متوسط عدد البطولات لكل عقد: {((total / (timelineData.length || 1))).toFixed(1)}</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border p-4">
              <h4 className="font-bold mb-3">مفاتيح</h4>
              <div className="flex flex-col gap-2 text-sm text-gray-600">
                <div className="flex items-center gap-2"><span className="w-3 h-3 bg-red-600 inline-block rounded-sm"/> بطولة محلية</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 bg-yellow-500 inline-block rounded-sm"/> بطولة قارية</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 bg-blue-600 inline-block rounded-sm"/> بطولة إقليمية</div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-black/50" onClick={closeModal} />
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="relative z-10 max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <button onClick={closeModal} className="absolute top-4 left-4 text-gray-500 hover:text-gray-800">✕</button>

              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-36 h-36 relative flex-shrink-0 rounded-xl bg-gray-50 p-4">
                  <Image src={selected.img} alt={selected.Title} fill sizes="144px" className="object-contain" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-extrabold">{selected.Title}</h3>
                  <p className="mt-2 text-gray-600">عدد مرات الفوز: <span className="font-bold text-red-600">{selected.num}</span></p>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {selected.years && selected.years.map((y, i) => (
                      <div key={i} className="text-center px-2 py-1 rounded-md bg-red-50 border">{y}</div>
                    ))}
                  </div>

                  <div className="mt-4 text-gray-700 leading-relaxed">
                    <p>{selected.description || 'نبذة تاريخية عن البطولة — يمكنك إضافة تفاصيل أكثر هنا مثل أهم المباريات واللحظات الحاسمة.'}</p>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <button onClick={() => { /* placeholder for linking to list page */ }} className="px-4 py-2 rounded-md bg-red-600 text-white font-semibold">عرض تفاصيل أكثر</button>
                    <button onClick={closeModal} className="px-4 py-2 rounded-md border">إغلاق</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ----------------------
// Small utils used above
// ----------------------
function getMostSuccessfulSeason(items) {
  // heuristic: season represented as a single year in years array that repeats most
  const yearCounts = {};
  items.flatMap(t => t.years || []).forEach(y => { yearCounts[y] = (yearCounts[y] || 0) + 1; });
  const sorted = Object.entries(yearCounts).sort((a,b) => b[1]-a[1]);
  return sorted[0] ? `${sorted[0][0]} (${sorted[0][1]} بطولات)` : 'غير متوفر';
}
