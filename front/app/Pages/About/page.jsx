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

import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'

// افتراض بيانات الأساطير وصور الأرشيف
// يجب عليك استبدال هذه البيانات بالمسارات الصحيحة لملفاتك
// مثال: import { zamalekHistory, zamalekLegends } from '@/utils/data'
const zamalekHistory = [
  { year: '1911', title: 'تأسيس النادي', description: 'تأسس نادي قاسم يوسف دار الندوة، النواة الأولى للزمالك، على يد البلجيكي ميرزباخ.', img: '/images/history/1911.jpg' },
  { year: '1921', title: 'كأس السلطان حسين', description: 'أول بطولة كبرى للنادي تحت اسم المختلط، بفوزه على فريق شيروودز الإنجليزي.', img: '/images/history/1921.jpg' },
  { year: '1944', title: 'تغيير الاسم إلى فاروق', description: 'تغيير اسم النادي إلى نادي فاروق تخليداً لملك مصر آنذاك.', img: '/images/history/1944.jpg' },
  { year: '1960', title: 'أول بطولة دوري', description: 'فوز النادي بأول لقب في تاريخه للدوري المصري الممتاز.', img: '/images/history/1960.jpg' },
  { year: '1984', title: 'أول بطولة إفريقية', description: 'الزمالك يتوج بطلاً لدوري أبطال إفريقيا للمرة الأولى في تاريخه.', img: '/images/history/1984.jpg' },
  { year: '2011', title: 'مئوية النادي', description: 'احتفالات ضخمة بمناسبة مرور 100 عام على تأسيس القلعة البيضاء.', img: '/images/history/2011.jpg' },
  // ... يمكنك إضافة المزيد من الأحداث
]
const zamalekLegends = [
  { name: 'حلمي زامورا', role: 'الرئيس الذهبي', img: '/images/legends/zamora.jpg' },
  { name: 'حسن شحاتة', role: 'نجم الجيل الذهبي', img: '/images/legends/shehata.jpg' },
  { name: 'عبد الحليم علي', role: 'الهداف التاريخي', img: '/images/legends/abdelhalim.jpg' },
  { name: 'محمود الونش', role: 'صخرة الدفاع', img: '/images/legends/alwench.jpg' },
]

// --------------------------------------------------------------------------------
// مكونات مساعدة
// --------------------------------------------------------------------------------

/**
 * مكون عداد الإحصائيات مع حركة Framer Motion
 * (يجب استبداله بمكون عداد حقيقي إذا توفرت مكتبة 'react-countup' أو تنفيذ معقد)
 */
function StatCard({ title, value, icon, initialValue = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.8 })
  
  // في بيئة الإنتاج، استخدم مكتبة Count-up أو تأثير رياضي
  const displayValue = isInView ? value : initialValue

  return (
    <div ref={ref} className="bg-white border border-red-200 rounded-xl shadow-lg p-6 flex flex-col items-start transition hover:shadow-xl hover:scale-[1.02]">
      <div className="flex items-center gap-2">
        {/* أيقونة افتراضية */}
        <div className="text-xl text-yellow-500">{icon || '🏆'}</div> 
        <div className="text-sm text-red-700 font-medium">{title}</div>
      </div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="mt-3 text-4xl font-extrabold text-red-900"
      >
        {displayValue}
      </motion.div>
      <div className="mt-3 text-xs text-gray-500">سجل حافل من الإنجازات</div>
    </div>
  )
}

/**
 * مكون عنصر الخط الزمني
 */
function TimelineItem({ item, i }) {
  const left = i % 2 === 0
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const variants = {
    hidden: { opacity: 0, x: left ? 30 : -30 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.7, delay: i * 0.05 }}
      className={`relative md:flex md:items-stretch md:gap-12 ${left ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* البطاقة التفصيلية */}
      <div className="md:w-1/2">
        <motion.div
          whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(127, 29, 29, 0.4)" }} // Shadow-xl on hover
          className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-red-200 transition-all duration-300"
        >
          <Image
            src={item.img}
            alt={item.title}
            width={700}
            height={400}
            className="w-full h-72 object-cover transition-transform duration-500 hover:scale-[1.03]"
            quality={80}
          />
          <div className="p-5">
            <h3 className="text-2xl font-bold text-red-800">{item.title}</h3>
            <p className="text-sm text-gray-700 mt-2 line-clamp-4">{item.description}</p>
            <button className="mt-4 text-red-600 hover:text-red-800 font-semibold transition">
              اكتشف المزيد →
            </button>
          </div>
        </motion.div>
      </div>

      {/* النقطة المركزية والتاريخ */}
      <div className="md:w-1/2 flex items-center justify-center md:px-6">
        <div className="absolute hidden md:block left-1/2 -translate-x-1/2 z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: i * 0.05 }}
            className={`
              w-6 h-6 rounded-full border-4 border-white shadow-xl
              transition-all duration-300 ease-in-out
              ${i % 2 === 0 ? 'bg-yellow-400' : 'bg-red-700'}
            `}
          />
        </div>

        {/* عرض السنة بجانب الحدث - تم إعادته إلى جانب الحدث للحفاظ على التركيز */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 + i * 0.05 }}
            className={`flex flex-col items-center text-center ${left ? 'md:items-start' : 'md:items-end'}`}
        >
            <div className="bg-red-700 text-white font-extrabold px-6 py-2 rounded-full shadow-2xl text-lg mt-4 md:mt-0">
                {item.year}
            </div>
        </motion.div>
      </div>
    </motion.article>
  )
}

/**
 * مكون عنصر معرض الصور
 */
function GalleryItem({ item, setSelected }) {
    return (
        <motion.div
            layoutId={item.title}
            whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(127, 29, 29, 0.2)" }}
            className="group relative overflow-hidden rounded-xl cursor-pointer bg-white border border-red-100 shadow-md transition"
            onClick={() => setSelected(item)}
        >
            <Image 
                src={item.img} 
                alt={item.title} 
                width={500} 
                height={500} 
                className="w-full h-48 object-cover filter grayscale group-hover:filter-none transition-all duration-500 ease-in-out" 
                quality={60}
            />
            <div className="p-3">
                <div className="font-semibold text-red-900 line-clamp-1">{item.title}</div>
                <div className="text-xs text-gray-600 mt-1">{item.year}</div>
            </div>
        </motion.div>
    )
}

/**
 * مكون بطاقة الأسطورة
 */
function LegendCard({ legend }) {
    return (
        <motion.div
            whileHover={{ y: -8, boxShadow: "0 10px 20px rgba(253, 224, 71, 0.4)" }}
            className="bg-red-900 rounded-xl overflow-hidden shadow-xl border-t-4 border-yellow-400 text-center transition"
        >
            <div className="relative h-64 w-full">
                <Image
                    src={legend.img}
                    alt={legend.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900 to-transparent"></div>
            </div>
            <div className="p-4 -mt-16 relative">
                <div className="text-2xl font-bold text-yellow-400">{legend.name}</div>
                <div className="text-sm text-gray-200 mt-1">{legend.role}</div>
                <button className="mt-3 text-yellow-400 text-sm hover:underline">مشاهدة الإنجازات</button>
            </div>
        </motion.div>
    )
}


// --------------------------------------------------------------------------------
// الصفحة الرئيسية
// --------------------------------------------------------------------------------

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

  // طريقة أكثر موثوقية لتحديد النقاط البارزة بناءً على محتوى أو معرف فريد
  const highlights = [
    zamalekHistory[0],
    zamalekHistory.find((x) => x.title.includes('كأس السلطان')) || zamalekHistory[1],
    zamalekHistory.find((x) => x.title.includes('أول بطولة دوري')) || zamalekHistory[3],
    zamalekHistory.find((x) => x.title.includes('أول بطولة إفريقية')) || zamalekHistory[4],
    zamalekHistory.find((x) => x.title.includes('مئوية')) || zamalekHistory[5]
  ].filter(Boolean)

  return (
    <div dir='rtl' className="bg-gray-50 text-red-900 min-h-screen">
      
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-red-700 via-yellow-400 to-red-600 shadow-lg"
          style={{
            width: `${progress}%`,
            transition: 'width 150ms linear'
          }}
        />
      </div>

      <main>
        {/* HERO */}
        <section className="relative h-[70vh] flex items-center bg-gradient-to-b from-red-100 to-white overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            {/* خلفية شعار باهتة */}
            <div className="w-full h-full bg-[url('/images/zamalek_logo_light.svg')] bg-contain bg-center bg-no-repeat"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-5"
              >
                <h1 className="text-5xl md:text-6xl font-extrabold text-red-800 leading-tight">
                  <span className='text-yellow-500'>تاريخ</span> نادي الزمالك العظيم
                </h1>
                <p className="text-gray-700 max-w-xl text-lg">
                  أكبر قلعة رياضية في مصر — رحلة أكثر من قرن من الفخر والإنجازات.
                  استكشف المحطات، الأساطير، وصور الأرشيف النادرة.
                </p>

                <div className="flex gap-4 mt-6">
                  <a
                    href="#timeline"
                    className="bg-red-700 hover:bg-red-800 text-white px-7 py-3 rounded-full shadow-lg transition transform hover:scale-105 font-bold text-lg"
                  >
                    شاهد المحطات الرئيسية
                  </a>
                  <a
                    href="#gallery"
                    className="bg-yellow-400 hover:bg-yellow-500 text-red-900 px-7 py-3 rounded-full shadow-lg transition transform hover:scale-105 font-bold text-lg"
                  >
                    الأرشيف المرئي
                  </a>
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="bg-white border-4 border-yellow-400/50 rounded-2xl p-6 shadow-2xl mt-8 lg:mt-0"
              >
                <div className="text-lg text-red-800 font-extrabold border-b pb-2 mb-4">
                  أبرز المحطات التاريخية 🚀
                </div>
                <div className="mt-3 grid grid-cols-2 gap-4">
                  {highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="bg-red-50 hover:bg-red-100 rounded-lg overflow-hidden flex items-center border border-red-100 transition shadow-sm"
                    >
                      <div className="w-1/4 h-full bg-gradient-to-br from-red-700 to-red-500 flex items-center justify-center">
                        <span className="text-white text-xs font-black rotate-[-10deg]">
                          {h.year}
                        </span>
                      </div>
                      <div className="p-3 flex-1">
                        <div className="text-sm font-bold text-red-900 line-clamp-2">
                          {h.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
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
        <section className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard title="ألقاب الدوري" value="14" icon="⭐" />
            <StatCard title="كأس مصر" value="29" icon="🏆" />
            <StatCard title="ألقاب إفريقية" value="5" icon="🌍" />
            <StatCard title="كؤوس سوبر" value="5" icon="⚡" />
          </div>
        </section>

        {/* -------------------------------------------------------------------------------- */}
        {/* TIMELINE - الخط الزمني المحسن */}
        {/* -------------------------------------------------------------------------------- */}
        <section id="timeline" className="container mx-auto px-6 py-16">
          <h2 className="text-4xl font-extrabold text-red-700 mb-12 text-center">الخط الزمني لتاريخ الزمالك</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            منذ التأسيس عام 1911، نستعرض معكم أهم المحطات التي صنعت مجد القلعة البيضاء.
          </p>

          <div className="relative">
            {/* الخط الفاصل */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-700 via-yellow-400 to-gray-200" />

            <div className="space-y-24">
              {zamalekHistory.map((item, i) => (
                <TimelineItem key={i} item={item} i={i} />
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------------------------- */}
        {/* GALLERY - أرشيف الصور المحسن (تم تفعيله) */}
        {/* -------------------------------------------------------------------------------- */}
        <section id="gallery" className="container mx-auto px-6 py-16">
          <h2 className="text-4xl font-extrabold text-red-700 mb-12 text-center">أرشيف الصور النادرة 📸</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {zamalekHistory.map((g, idx) => ( // استخدام بيانات التاريخ كأرشيف مؤقت
              <GalleryItem key={idx} item={g} setSelected={setSelected} />
            ))}
          </div>
        </section>

        {/* -------------------------------------------------------------------------------- */}
        {/* MODAL - نافذة عرض التفاصيل (لم تتغير) */}
        {/* -------------------------------------------------------------------------------- */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                layoutId={selected.title} // لاستخدام الـ Layout Transition
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-white rounded-xl w-full max-w-4xl overflow-hidden shadow-2xl border-4 border-yellow-400/80"
                onClick={(e) => e.stopPropagation()} // لمنع إغلاق النافذة عند الضغط بداخلها
              >
                <div className="flex justify-between items-center p-4 border-b border-red-100 bg-red-50">
                  <h3 className="text-2xl font-bold text-red-700">{selected.title}</h3>
                  <button className="text-gray-500 hover:text-red-700 transition text-2xl" onClick={() => setSelected(null)}>✕</button>
                </div>

                <div className="p-6 max-h-[70vh] overflow-y-auto">
                  <Image
                    src={selected.img}
                    alt={selected.title}
                    width={800}
                    height={500}
                    className="w-full h-80 object-cover rounded-lg shadow-inner mb-4"
                  />
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">{selected.description}</p>
                  <p className="mt-3 text-sm text-gray-500 font-semibold">سنة/فترة: {selected.year}</p>
                </div>

                <div className="p-4 border-t border-red-100 text-left">
                  <button onClick={() => setSelected(null)} className="px-6 py-2 bg-red-700 hover:bg-red-800 text-white rounded-full transition shadow-md">إغلاق</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-12 bg-red-900 py-8">
          <div className="container mx-auto px-6 text-center text-sm text-yellow-400">
            صفحة تاريخ الزمالك - تصميم احترافي 2024 ©
          </div>
        </footer>
      </main>
    </div>
  )
}