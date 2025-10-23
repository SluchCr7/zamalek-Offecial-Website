// 'use client'
// import Image from 'next/image'
// import { useParams } from 'next/navigation'
// import { Calendar, Globe } from 'lucide-react'

// export default function PlayerPage() {
//   const { slug } = useParams()

//   const player = {
//     number: 98,
//     name: "Oday Dabbagh",
//     position: "Centre-Forward",
//     mainPosition: "Forward",
//     birthDate: "Dec 3, 1998",
//     age: 26,
//     nationality: "Palestine",
//     marketValue: "€1.20m",
//     img: "/Players/oday.jpg",
//     matches: 15,
//     goals: 8,
//     assists: 4,
//     career: [
//       { year: "2018-2020", club: "Al-Wehdat", img: "/Clubs/wehdat.jpg" },
//       { year: "2020-2022", club: "Zamalek", img: "/Clubs/zamalek.jpg" },
//     ],
//     gallery: [
//       "/Players/oday.jpg",
//       "/Players/oday2.jpg",
//       "/Players/oday3.jpg",
//     ],
//   }

//   return (
//     <div dir="rtl" className="bg-gray-50 min-h-screen font-sans flex flex-col md:flex-row w-full">
      
//       {/* صورة اللاعب */}
//       <div className="relative bg-black w-full md:w-1/3 flex items-center justify-center p-6">
//         {/* خلفية خفيفة */}
//         <div className="absolute inset-0">
//           <Image
//             src={player.img}
//             alt={player.name}
//             fill
//             className="object-cover opacity-30"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//         </div>

//       </div>

//       {/* بيانات اللاعب */}
//       <div className="flex flex-col w-full md:w-2/3">
//         <div className="w-full p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* بطاقة معلومات */}
//           <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-red-600">
//             <h2 className="text-2xl font-bold border-b pb-2 mb-4">معلومات اللاعب</h2>
//             <ul className="space-y-2 text-gray-700">
//               <li className="flex items-center gap-2"><Calendar className="w-5 h-5"/> {player.birthDate} ({player.age} سنة)</li>
//               <li className="flex items-center gap-2"><Globe className="w-5 h-5"/> {player.nationality}</li>
//               <li>المركز الأساسي: {player.mainPosition}</li>
//               <li>القيمة السوقية: <span className="text-red-600 font-semibold">{player.marketValue}</span></li>
//             </ul>
//           </div>

//           {/* بطاقة الإحصائيات */}
//           <div className="md:col-span-2 bg-white shadow-lg rounded-2xl p-6 border-t-4 border-black">
//             <h2 className="text-2xl font-bold border-b pb-2 mb-4">إحصائيات الموسم</h2>
//             <div className="grid grid-cols-3 gap-6 text-center">
//               <div className="bg-red-50 rounded-xl p-4 hover:scale-105 transition-transform">
//                 <p className="text-4xl font-bold">{player.matches}</p>
//                 <p className="text-gray-600">مباريات</p>
//               </div>
//               <div className="bg-red-50 rounded-xl p-4 hover:scale-105 transition-transform">
//                 <p className="text-4xl font-bold">{player.goals}</p>
//                 <p className="text-gray-600">أهداف</p>
//               </div>
//               <div className="bg-red-50 rounded-xl p-4 hover:scale-105 transition-transform">
//                 <p className="text-4xl font-bold">{player.assists}</p>
//                 <p className="text-gray-600">أسيست</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* مسيرة اللاعب */}
//         <div className="w-full p-6 mt-6">
//           <h2 className="text-3xl font-bold mb-6 border-b pb-2">مسيرة اللاعب</h2>
//           <div className="flex flex-col md:flex-row gap-6">
//             {player.career.map((c, idx) => (
//               <div key={idx} className="flex-1 bg-white shadow-lg rounded-xl p-4 flex items-center gap-4 hover:shadow-2xl transition-shadow">
//                 <Image src={c.img} alt={c.club} width={60} height={60} className="rounded-full"/>
//                 <div>
//                   <p className="font-semibold">{c.club}</p>
//                   <p className="text-gray-500">{c.year}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* معرض الصور */}
//         <div className="w-full p-6 mt-6">
//           <h2 className="text-3xl font-bold mb-6 border-b pb-2">صور اللاعب</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {player.gallery.map((img, idx) => (
//               <div key={idx} className="overflow-hidden rounded-xl hover:scale-105 transition-transform shadow-lg">
//                 <Image src={img} alt={`${player.name}-${idx}`} width={300} height={300} className="object-cover w-full h-full"/>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Globe } from 'lucide-react'

// PlayerPagePro.jsx
// نسخة احترافية لصفحة لاعب بنمط مواقع الأندية
// ملاحظات:
// - يحتاج Tailwind CSS في المشروع
// - يعتمد على framer-motion و lucide-react
// - الصور يجب أن تكون موجودة في المسارات المشار إليها أو تعدلها حسب مشروعك

export default function PlayerPagePro() {
  const { slug } = useParams() || { slug: 'oday-dabbagh' }

  // --------------------
  // بيانات تجريبية (استبدل ببيانات حقيقية من API لاحقاً)
  // --------------------
  const player = {
    number: 98,
    name: 'Oday Dabbagh',
    position: 'Centre-Forward',
    mainPosition: 'Forward',
    birthDate: 'Dec 3, 1998',
    age: 26,
    nationality: 'Palestine',
    marketValue: '€1.20m',
    img: '/Players/oday.jpg',
    matches: 15,
    goals: 8,
    assists: 4,
    career: [
      { year: '2018 — 2020', club: 'Al-Wehdat', img: '/Clubs/wehdat.jpg' },
      { year: '2020 — 2022', club: 'Zamalek', img: '/Clubs/zamalek.jpg' },
      { year: '2022 — الآن', club: 'Current Club', img: '/Clubs/current.jpg' },
    ],
    gallery: ['/Players/oday.jpg', '/Players/oday2.jpg', '/Players/oday3.jpg'],
    bio: `مهاجم سريع وقوي في منطقة الجزاء، يتميز بحس تهديفي عالي وقدرة على إنشاء الفرص. مر بفرق إقليمية وقارية واكتسب خبرة في المباريات الكبيرة.`,
  }

  // --------------------
  // Local UI state
  // --------------------
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [showContact, setShowContact] = useState(false)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setLightboxIndex(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Simple lightbox controls
  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const nextImg = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % player.gallery.length))
  const prevImg = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + player.gallery.length) % player.gallery.length))

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 text-gray-800 font-sans">

      {/* HERO */}
      <header className="relative h-[56vh] md:h-[48vh] lg:h-[44vh] overflow-hidden">
        <Image src={player.img} alt={player.name} fill className="object-cover brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex items-end">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full bg-white/90 backdrop-blur-md rounded-t-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl -mb-16 border"
          >
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
              <div className="flex items-center gap-4">
                <div className="w-36 h-36 relative rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                  <Image src={player.img} alt={player.name} fill sizes="144px" className="object-cover" />
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-extrabold">{player.name}</span>
                    <span className="px-3 py-1 rounded-full bg-red-600 text-white font-bold">#{player.number}</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{player.position} — {player.mainPosition}</div>

                  <div className="mt-3 flex flex-wrap gap-3 items-center">
                    <div className="text-sm px-3 py-1 rounded-lg bg-gray-100">{player.nationality}</div>
                    <div className="text-sm px-3 py-1 rounded-lg bg-gray-100">العمر: {player.age}</div>
                    <div className="text-sm px-3 py-1 rounded-lg bg-gray-100">القيمة السوقية: <span className="font-semibold text-red-600">{player.marketValue}</span></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-0 md:mr-auto flex items-center gap-3">
                <button className="px-4 py-2 rounded-md bg-red-600 text-white font-semibold shadow">تابع الآن</button>
                <button onClick={() => setShowContact((s) => !s)} className="px-4 py-2 rounded-md border">معلومات التواصل</button>
              </div>
            </div>

            {/* optional contact quick info */}
            <AnimatePresence>
              {showContact && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-4 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-white border">📧 example@mail.com</div>
                    <div className="p-3 rounded-lg bg-white border">📞 +20 100 000 0000</div>
                    <div className="p-3 rounded-lg bg-white border">🌐 agent-profile.example</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </header>

      {/* MAIN */}
      <main className="container mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT: main details + bio + gallery */}
          <div className="lg:col-span-2 space-y-6">
            {/* BIO */}
            <section className="bg-white rounded-2xl shadow p-6 border">
              <h2 className="text-2xl font-bold mb-3">نبذة عن اللاعب</h2>
              <p className="text-gray-600 leading-relaxed">{player.bio}</p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="text-center p-4 rounded-lg bg-red-50">
                  <div className="text-2xl font-bold text-red-600">{player.matches}</div>
                  <div className="text-sm text-gray-600">مباريات</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-red-50">
                  <div className="text-2xl font-bold text-red-600">{player.goals}</div>
                  <div className="text-sm text-gray-600">أهداف</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-red-50">
                  <div className="text-2xl font-bold text-red-600">{player.assists}</div>
                  <div className="text-sm text-gray-600">أسيست</div>
                </div>
              </div>
            </section>

            {/* CAREER TIMELINE (horizontal on large screens, vertical on mobile) */}
            <section className="bg-white rounded-2xl shadow p-6 border">
              <h3 className="text-xl font-bold mb-4">مسيرة اللاعب</h3>

              <div className="overflow-x-auto">
                <div className="flex gap-6 items-start py-2 min-w-[720px]">
                  {player.career.map((c, i) => (
                    <motion.div key={i} whileHover={{ y: -6 }} className="bg-gray-50 rounded-2xl p-4 w-64 flex-shrink-0 border">
                      <div className="w-full h-28 relative rounded-xl overflow-hidden mb-3">
                        <Image src={c.img} alt={c.club} fill sizes="256px" className="object-cover" />
                      </div>
                      <div className="font-semibold">{c.club}</div>
                      <div className="text-sm text-gray-500 mt-1">{c.year}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* GALLERY */}
            <section className="bg-white rounded-2xl shadow p-6 border">
              <h3 className="text-xl font-bold mb-4">معرض الصور</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {player.gallery.map((src, i) => (
                  <motion.button key={i} onClick={() => openLightbox(i)} whileHover={{ scale: 1.03 }} className="overflow-hidden rounded-xl shadow-lg bg-white border">
                    <div className="relative w-full h-44">
                      <Image src={src} alt={`${player.name}-${i}`} fill className="object-cover" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT: compact info card */}
          <aside className="space-y-6">
            <div className="bg-white rounded-2xl shadow p-6 border">
              <h4 className="text-lg font-bold mb-3">معلومات سريعة</h4>
              <ul className="text-sm text-gray-600 space-y-3">
                <li className="flex items-center gap-2"><Calendar className="w-4 h-4 text-gray-400"/> {player.birthDate} ({player.age} سنة)</li>
                <li className="flex items-center gap-2"><Globe className="w-4 h-4 text-gray-400"/> {player.nationality}</li>
                <li>المركز: <span className="font-semibold">{player.mainPosition}</span></li>
                <li>القيمة السوقية: <span className="font-semibold text-red-600">{player.marketValue}</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow p-4 border">
              <h5 className="font-bold mb-3">سيرة قصيرة</h5>
              <p className="text-sm text-gray-600">معلومات إضافية مختصرة يمكن وضعها هنا مثل الحالة الصحية، رقم القميص في المنتخب، أو ملاحظات المدرب.</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-4 border">
              <h5 className="font-bold mb-2">روابط سريعة</h5>
              <div className="flex flex-col gap-2">
                <a className="text-sm text-red-600 font-semibold">ملف النادي</a>
                <a className="text-sm text-red-600 font-semibold">ملف اللاعب</a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-black/70" onClick={closeLightbox}></div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative z-10 max-w-4xl w-full shadow-2xl">
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="relative w-full h-[60vh]">
                  <Image src={player.gallery[lightboxIndex]} alt={`light-${lightboxIndex}`} fill className="object-contain bg-black" />
                </div>

                <div className="flex items-center justify-between p-3 border-t">
                  <div className="flex items-center gap-2">
                    <button onClick={prevImg} className="px-3 py-2 rounded-md border">السابق</button>
                    <button onClick={nextImg} className="px-3 py-2 rounded-md border">التالي</button>
                  </div>
                  <button onClick={closeLightbox} className="px-3 py-2 rounded-md">إغلاق</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}
