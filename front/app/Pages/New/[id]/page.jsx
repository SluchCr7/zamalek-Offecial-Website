'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { newsList } from '@/utils/data'
import { Calendar, User } from 'lucide-react'

const NewsPage = ({ params }) => {
  const id = params.id
  const [newSelected, setNewSelected] = useState(null)

  useEffect(() => {
    const selected = newsList.find((n) => n.id === Number(id))
    setNewSelected(selected)
  }, [id])

  if (!newSelected) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-red-600 font-bold text-xl">
        جاري تحميل الخبر...
      </div>
    )
  }

  // أخبار جانبية (آخر الأخبار باستثناء الحالي)
  const relatedNews = newsList.filter((n) => n.id !== id).slice(0, 4)

  return (
    <div className="w-full max-w-7xl mx-auto min-h-screen px-4 py-10 flex flex-col md:flex-row gap-10">
      
      {/* المحتوى الرئيسي */}
      <div className="flex-1">
        
        {/* صورة الخبر */}
        <div className="w-full max-h-56 relative rounded-lg overflow-hidden shadow-md border border-gray-200">
          <Image
            src={newSelected.image}
            alt={newSelected.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* عنوان الخبر */}
        <h1 className="mt-6 text-3xl md:text-4xl font-bold text-red-700 leading-snug">
          {newSelected.title}
        </h1>

        {/* معلومات إضافية */}
        <div className="flex items-center gap-6 mt-4 text-gray-500 text-sm">
          <span className="flex items-center gap-1">
            <Calendar size={16} /> {newSelected.date || 'غير محدد'}
          </span>
          <span className="flex items-center gap-1">
            <User size={16} /> {newSelected.author || 'إدارة الأخبار'}
          </span>
        </div>

        {/* نص الخبر */}
        <div className="mt-6 text-lg leading-loose text-gray-800 whitespace-pre-line">
          {newSelected.content || 'lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id quo tempora neque, esse quod repudiandae ipsum ab expedita itaque distinctio veritatis dolorum eius pariatur adipisci eligendi minima sint nisi?'}
        </div>
      </div>

      {/* الشريط الجانبي */}
      <aside className="w-full md:w-80 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-6">
        <h2 className="text-xl font-bold text-red-700 mb-4">أحدث الأخبار</h2>
        <div className="space-y-5">
          {relatedNews.map((news) => (
            <Link key={news.id} href={`/Pages/New/${news.id}`} className="group block">
              <div className="flex gap-4 items-center">
                <div className="w-20 h-16 relative rounded overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 group-hover:text-red-700 transition-colors line-clamp-2">
                    {news.title}
                  </p>
                  <span className="text-xs text-gray-500">{news.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  )
}

export default NewsPage
