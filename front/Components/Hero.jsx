// 'use client'
// import React from 'react'

// const FullScreenVideo = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black">
//       {/* خلفية مشوشة لتغطية المساحات الفارغة */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover "
//         src="/zamalek.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />
//       {/* blur-lg scale-110 */}
//       {/* الفيديو الرئيسي بدون قص
//       <video
//         className="absolute top-0 left-0 w-full h-full object-contain z-10"
//         src="/zamalek.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       /> */}

//       {/* طبقة التعتيم */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-20" />

//       {/* المحتوى */}
//       {/* <div className="relative z-30 flex flex-col items-center justify-center h-full text-center text-white px-4">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           نادي الزمالك الرياضي
//         </h1>
//         <p className="text-lg md:text-2xl max-w-2xl mb-6">
//           تاريخ من البطولات والإنجازات العريقة
//         </p>
//         <div className="flex gap-4">
//           <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition">
//             آخر الأخبار
//           </button>
//           <button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold transition">
//             اشترك معنا
//           </button>
//         </div>
//       </div> */}
//     </div>
//   )
// }

// export default FullScreenVideo

'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroNews = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      
      {/* الخلفية: صورة الخبر */}
      <Image
        src="/naserHead.jpg" // صورة الخبر
        alt="خبر حصري الزمالك"
        className="object-cover w-full h-full"
        priority
        width={1920}
        height={1080}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />

      {/* المحتوى النصي */}
      <div className="absolute inset-0 flex flex-col justify-end items-start p-6 md:p-12 text-white">
        
        {/* فئة الخبر */}
        <motion.span
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-red-600 px-3 py-1 rounded-full text-sm uppercase font-semibold mb-2"
        >
          خبر حصري
        </motion.span>

        {/* العنوان */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight mb-4 text-left md:text-center"
        >
          الزمالك يتعاقد مع شيكو بينزا لتعزيز صفوف الفريق
        </motion.h1>

        {/* الوصف */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-200 text-lg md:text-xl max-w-2xl text-left md:text-center mb-6"
        >
          أعلن نادي الزمالك اليوم عن التعاقد الرسمي مع المهاجم الدولي شيكو بينزا، لتعزيز خط الهجوم قبل الموسم القادم.
        </motion.p>

        {/* زر CTA
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 flex-wrap justify-start md:justify-center"
        >
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold transition">
            اقرأ الخبر
          </button>
          <button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full font-semibold transition">
            اشترك معنا
          </button>
        </motion.div> */}
      </div>
    </section>
  )
}

export default HeroNews
