'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, PlayCircle } from 'lucide-react'
import Image from 'next/image'

// بيانات وهمية للفيديوهات
const videos = [
  {
    id: 1,
    title: 'ملخص مباراة الزمالك و الأهلي 🔥',
    thumbnail: '/videos/video1.mp4',
    src: '/videos/video1.mp4',
  },
  {
    id: 2,
    title: 'تدريبات الفريق قبل اللقاء القادم 💪',
    thumbnail: '/videos/video1.mp4',
    src: '/videos/video1.mp4',
  },
  {
    id: 3,
    title: 'أهداف الزمالك في البطولة العربية ⚽',
    thumbnail: '/new.jpg',
    src: '/videos/video3.mp4',
  },
  {
    id: 4,
    title: 'اللقطات الأجمل من تاريخ القلعة البيضاء 🏛️',
    thumbnail: '/new.jpg',
    src: '/videos/video3.mp4',
  },
]

const VideosPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <div className="min-h-screen bg-white w-full text-black overflow-hidden font-[Cairo]">
      {/* HERO SECTION */}
      <div className="relative h-[65vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <Image
          src="/new.jpg"
          alt="Zamalek Background"
          fill
          priority
          className="object-cover brightness-[0.3] absolute inset-0 -z-10"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-black drop-shadow-[0_0_10px_#ff000030]">
            🎬 فيديوهات <span className="text-[#d50000]">الزمالك</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg md:text-xl">
            لحظات المجد — أهداف، لقطات، وانتصارات خالدة ⚽
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-black via-[#d50000] to-black rounded-full mx-auto"></div>
        </motion.div>
      </div>

      {/* VIDEOS GRID */}
      <section className="py-20 px-6 md:px-12 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#d50000] tracking-wide">
          أحدث الفيديوهات 🔥
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl border border-gray-300 hover:border-[#d50000] bg-gradient-to-br from-white to-gray-50 shadow-[0_0_15px_#00000020]"
              onClick={() => setSelectedVideo(video)}
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={400}
                height={250}
                className="object-cover w-full h-56 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500">
                <PlayCircle className="text-[#d50000] w-16 h-16 drop-shadow-[0_0_10px_#d50000]" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 to-transparent p-3 text-center">
                <p className="text-sm md:text-base font-semibold text-black">
                  {video.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl p-4 shadow-[0_0_25px_#d5000060] flex flex-col items-center"
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-10 right-0 text-gray-300 hover:text-[#d50000] transition"
              >
                <X size={36} />
              </button>

              <div className="w-full max-h-[80vh] flex justify-center items-center overflow-hidden">
                <video
                  src={selectedVideo.src}
                  controls
                  autoPlay
                  className="w-full h-full max-h-[80vh] rounded-xl border border-[#d50000]/50 shadow-[0_0_15px_#00000030]"
                />
              </div>

              <p className="mt-4 text-center text-xl font-bold text-[#d50000]">
                {selectedVideo.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default VideosPage
