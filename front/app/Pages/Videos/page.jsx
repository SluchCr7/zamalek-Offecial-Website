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
    thumbnail: '/new.jpg',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 2,
    title: 'تدريبات الفريق قبل اللقاء القادم 💪',
    thumbnail: '/new.jpg',
    src: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    id: 3,
    title: 'أهداف الزمالك في البطولة العربية ⚽',
    thumbnail: '/new.jpg',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 4,
    title: 'اللقطات الأجمل من تاريخ القلعة البيضاء 🏛️',
    thumbnail: '/new.jpg',
    src: 'https://www.w3schools.com/html/movie.mp4',
  },
]

const VideosPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b0b] to-[#1a1a1a] text-white overflow-hidden font-[Cairo]">
      {/* HERO SECTION */}
      <div className="relative h-[65vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <Image
          src="/new.jpg"
          alt="Zamalek Background"
          fill
          priority
          className="object-cover brightness-[0.35] absolute inset-0 -z-10"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-[0_0_25px_#ff0000aa]">
            🎬 فيديوهات <span className="text-[#e50914]">الزمالك</span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg md:text-xl">
            لحظات المجد — أهداف، لقطات، وانتصارات خالدة ⚽
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-white via-[#e50914] to-white rounded-full mx-auto"></div>
        </motion.div>
      </div>

      {/* VIDEOS GRID */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#141414] to-[#0b0b0b]">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 text-[#e50914] tracking-wide">
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
              className="relative group cursor-pointer overflow-hidden rounded-2xl border border-[#2a2a2a] hover:border-[#e50914] bg-gradient-to-br from-[#141414] to-[#1f1f1f] shadow-[0_0_25px_#00000080]"
              onClick={() => setSelectedVideo(video)}
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={400}
                height={250}
                className="object-cover w-full h-56 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500">
                <PlayCircle className="text-[#e50914] w-16 h-16 drop-shadow-[0_0_15px_#e50914]" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-center">
                <p className="text-sm md:text-base font-medium">{video.title}</p>
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
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl bg-[#111]/80 rounded-2xl p-4 shadow-[0_0_40px_#e5091460]"
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-10 right-0 text-gray-300 hover:text-[#e50914] transition"
              >
                <X size={36} />
              </button>
              <video
                src={selectedVideo.src}
                controls
                autoPlay
                className="w-full rounded-xl shadow-lg border border-[#e5091450]"
              />
              <p className="mt-4 text-center text-xl font-semibold text-white">
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
