'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, PlayCircle } from 'lucide-react'
import Image from 'next/image'

// فيديوهات وهمية (يمكنك استبدالها لاحقًا ببياناتك)
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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex flex-col justify-center items-center text-center">
        <Image
          src="/new.jpg"
          alt="Zamalek Background"
          fill
          priority
          className="object-cover brightness-50 absolute inset-0 -z-10"
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
        >
          🎬 فيديوهات نادي الزمالك
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-200 max-w-2xl px-6"
        >
          أهداف، لقطات، وانتصارات تُخلد التاريخ ⚽
        </motion.p>
      </div>

      {/* Videos Grid */}
      <section className="py-16 px-8 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-3xl font-semibold mb-10 text-center text-red-500">
          أحدث الفيديوهات
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl border border-gray-700 hover:border-red-600 transition-all"
              onClick={() => setSelectedVideo(video)}
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={400}
                height={250}
                className="object-cover w-full h-56 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                <PlayCircle className="text-white w-16 h-16 drop-shadow-lg" />
              </div>
              <div className="p-3 text-center bg-gradient-to-t from-black/60 absolute bottom-0 left-0 right-0">
                <p className="text-sm font-medium">{video.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal عرض الفيديو */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl"
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-10 right-0 text-white hover:text-red-500 transition"
              >
                <X size={36} />
              </button>
              <video
                src={selectedVideo.src}
                controls
                autoPlay
                className="w-full rounded-2xl shadow-lg"
              />
              <p className="mt-4 text-center text-lg font-semibold">
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
