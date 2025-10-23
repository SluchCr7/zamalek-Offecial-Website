'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, PlayCircle, Search, Film } from 'lucide-react'
import Image from 'next/image'

// بيانات وهمية للفيديوهات
// تم إضافة تصنيف (category) لتمكين شرائط التمرير الأفقية
const allVideos = [
  { id: 1, title: 'ملخص مباراة الزمالك و الأهلي 🔥', thumbnail: '/videos/video1.mp4', src: '/videos/video1.mp4', category: 'ملخصات', isFeatured: true },
  { id: 2, title: 'تدريبات الفريق قبل اللقاء القادم 💪', thumbnail: '/new.jpg', src: '/videos/video1.mp4', category: 'تدريبات' },
  { id: 3, title: 'أهداف الزمالك في البطولة العربية ⚽', thumbnail: '/videos/video1.mp4', src: '/videos/video1.mp4', category: 'ملخصات' },
  { id: 4, title: 'اللقطات الأجمل من تاريخ القلعة البيضاء 🏛️', thumbnail: '/new.jpg', src: '/videos/video1.mp4', category: 'أرشيف' },
  { id: 5, title: 'هدف شيكابالا التاريخي', thumbnail: '/videos/video1.mp4', src: '/videos/video1.mp4', category: 'أرشيف' },
  { id: 6, title: 'تصريحات المدير الفني الجديدة', thumbnail: '/new.jpg', src: '/videos/video1.mp4', category: 'لقاءات' },
]

// ألوان الزمالك (Dark Mode Palette)
const ZAMALEK_COLORS = {
  primary: '#E30613', // الأحمر الأساسي
  accent: '#D4AF37', // الذهبي
  background: '#1a1a1a', // خلفية داكنة احترافية
  textLight: '#f0f0f0',
}

// مكون كارت الفيديو المحسن
const VideoCard = ({ video, onClick, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-red-500 shadow-xl hover:shadow-[0_0_20px_#E3061350] transition-all duration-500 transform hover:-translate-y-1"
    onClick={() => onClick(video)}
  >
    <div className="relative w-full h-52">
      <Image
        src={video.thumbnail}
        alt={video.title}
        width={500}
        height={300}
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
      />
      {/* Dark Overlay for premium look */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
        <PlayCircle className="text-white w-14 h-14 opacity-80 group-hover:opacity-100 group-hover:text-red-500 transition-all duration-500 drop-shadow-xl" />
      </div>
    </div>
    <div className="p-3">
      <p className="text-sm font-semibold text-white truncate">{video.title}</p>
      <span className="text-xs text-gray-400 mt-1 inline-block border border-gray-700 px-2 rounded-full">{video.category}</span>
    </div>
  </motion.div>
)

// مكون شريط التمرير الأفقي
const HorizontalVideoShelf = ({ title, videos, onVideoClick }) => (
  <div className="mt-8">
    <h3 className="text-2xl font-bold text-white mb-4 border-r-4 border-red-600 pr-3 flex items-center gap-2">
        <Film className="w-6 h-6 text-red-500" /> {title}
    </h3>
    <div className="flex overflow-x-auto space-x-6 pb-4 custom-scrollbar">
      {videos.map((video, index) => (
        <div key={video.id} className="min-w-[280px] max-w-[280px]">
          <VideoCard video={video} onClick={onVideoClick} index={index} />
        </div>
      ))}
      <div className="min-w-[150px] flex items-center justify-center">
        <button className="text-red-500 hover:text-red-400 font-semibold transition-colors">
          عرض المزيد
        </button>
      </div>
    </div>
  </div>
)

const VideosPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  
  // تجهيز البيانات
  const featuredVideo = allVideos.find(v => v.isFeatured) || allVideos[0];
  const categories = [...new Set(allVideos.map(v => v.category))];
  
  const shelfVideos = categories.map(cat => ({
    title: cat,
    videos: allVideos.filter(v => v.category === cat),
  }));

  // إغلاق المودال عند الضغط على الخلفية
  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedVideo(null);
    }
  }

  return (
    <div dir="rtl" className={`min-h-screen w-full overflow-hidden font-[Cairo] text-${ZAMALEK_COLORS.textLight}`} style={{ backgroundColor: ZAMALEK_COLORS.background }}>
      
      {/* HERO SECTION (Dark Mode) */}
      <div className="relative h-[55vh] flex flex-col justify-center items-center text-center overflow-hidden border-b-4 border-red-500/50">
        <Image
          src="/new.jpg"
          alt="Zamalek Background"
          fill
          priority
          className="object-cover absolute inset-0 -z-10 opacity-30"
        />
        <div className="absolute inset-0 bg-black/70 -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 p-4"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-[0_0_15px_#E3061380]">
            الـسينما <span className="text-red-500">البيضاء</span>
          </h1>
          <p className="mt-4 text-gray-300 text-lg md:text-xl">
            نادي الزمالك: أرشيف الأهداف، واللقاءات الحصرية، ولحظات المجد الخالدة
          </p>
          <div className="mt-6 w-32 h-1 bg-gradient-to-r from-red-500 via-white to-red-500 rounded-full mx-auto shadow-lg"></div>
        </motion.div>
      </div>

      {/* MAIN CONTENT */}
      <main className="py-16 w-full px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Featured Video Section */}
        <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-8 text-red-500 tracking-wide">
              الفيديو المميز لهذا الأسبوع 🌟
            </h2>
            <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-[0_0_30px_#E3061340] cursor-pointer" onClick={() => setSelectedVideo(featuredVideo)}>
                <Image
                    src={featuredVideo.thumbnail}
                    alt={featuredVideo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/50 hover:bg-black/30 transition-all duration-500 flex flex-col items-center justify-center p-8">
                    <PlayCircle className="text-white w-24 h-24 drop-shadow-xl opacity-90 hover:opacity-100 transition-opacity" />
                    <h3 className="text-3xl font-extrabold text-white mt-4 text-shadow-lg">{featuredVideo.title}</h3>
                    <p className="text-lg text-gray-300 mt-2">{featuredVideo.category}</p>
                </div>
            </div>
        </section>

        {/* Video Shelves (Horizontal Categories) */}
        <section className="space-y-12">
            {shelfVideos.map((shelf, index) => (
                <HorizontalVideoShelf
                    key={index}
                    title={shelf.title}
                    videos={shelf.videos}
                    onVideoClick={setSelectedVideo}
                />
            ))}
        </section>

      </main>

      {/* MODAL (Improved) */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal} // Allows closing by clicking background
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl bg-gray-900 rounded-xl p-3 shadow-[0_0_35px_#E3061380] border-2 border-red-700 flex flex-col items-center"
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-10 left-3 text-red-400 hover:text-red-500 transition p-2 bg-gray-900 rounded-full"
              >
                <X size={32} />
              </button>

              <div className="w-full aspect-video flex justify-center items-center overflow-hidden">
                <video
                  src={selectedVideo.src}
                  controls
                  autoPlay
                  className="w-full h-full rounded-lg border-2 border-red-500/50 shadow-2xl"
                />
              </div>

              <p className="mt-4 text-center text-2xl font-bold text-white">
                {selectedVideo.title}
              </p>
              <span className="text-sm text-gray-500">{selectedVideo.category}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  )
}

export default VideosPage