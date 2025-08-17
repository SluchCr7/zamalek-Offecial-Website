
'use client'
import React from 'react'
import { newsList } from '@/utils/data'

const News = () => {
  const latestNews = {
    title: "الزمالك يتعاقد مع شيكو بينزا",
    description: "أعلن نادي الزمالك اليوم عن تعاقده الرسمي مع المهاجم الدولي شيكو بينزا لتعزيز صفوف الفريق في الموسم القادم.",
    image: ""
  }

  return (
    <div className="w-full flex flex-col gap-16" dir="rtl">
      
      {/* الخبر الرئيسي */}
      <div className="relative flex flex-col md:flex-row rounded-xl shadow-2xl overflow-hidden max-w-7xl mx-auto w-[90%] md:w-full">
        
        {/* الصورة */}
        <div className="md:w-1/2 w-full relative group">
          <img
            src={latestNews.image || '/new.jpg'}
            alt={latestNews.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* النص */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center gap-4">
          <h1 className="text-red-700 font-bold text-lg tracking-wider uppercase">آخر الأخبار</h1>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">{latestNews.title}</h2>
          <p className="text-gray-700 text-lg leading-relaxed">{latestNews.description}</p>
          <button className="mt-4 w-max bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition">
            اقرأ المزيد
          </button>
        </div>
      </div>

      {/* الأخبار الثانوية */}
      <div className="max-w-7xl mx-auto w-[90%] md:w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {newsList.map((news) => (
          <div
            key={news.id}
            className="bg-white  rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all w-[90%] mx-auto md:w-full duration-300 group"
          >
            <div className="relative w-full max-h-56 overflow-hidden">
              <img
                src={news.image || '/new.jpg'}
                alt={news.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              {/* Gradient Overlay على الصورة */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-lg font-bold text-red-600 group-hover:text-red-700 transition">{news.title}</h3>
              <div className="w-12 h-1 bg-red-600 rounded-full"></div>
              {news.date && <p className="text-gray-500 text-sm">{news.date}</p>}
            </div>
          </div>
        )).slice(0 , 3)}
      </div>

    </div>
  )
}

export default News
