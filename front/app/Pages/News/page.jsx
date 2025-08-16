'use client'
import React from 'react'
import Image from 'next/image'
import { newsList } from '@/utils/data'
import Link from 'next/link'

export default function NewsPage() {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto px-4 py-10 bg-gray-50">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-700">أخبار القلعة البيضاء</h2>
        <p className="mt-3 text-gray-600 text-lg">تابع أحدث الأخبار المتعلقة بنادي الزمالك</p>
        <div className="mx-auto mt-4 h-1 w-28 bg-red-600 rounded"></div>
      </div>

      {/* Hero News */}
      {newsList[0] && (
        <Link href={`/Pages/New/${newsList[0].id}`} className="mb-10 relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl">
          <Image src={newsList[0].image} alt={newsList[0].title} fill className="object-cover hover:scale-105 transition-transform duration-500"/>
          <div className="absolute inset-0 bg-black bg-opacity-40 p-8 flex flex-col justify-end">
            <h3 className="text-4xl md:text-5xl font-bold text-white">{newsList[0].title}</h3>
            <p className="text-gray-200 mt-4 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda id quo tempora neque, esse quod repudiandae ipsum ab expedita itaque distinctio veritatis dolorum eius pariatur adipisci eligendi minima sint nisi?</p>
          </div>
        </Link>
      )}

      {/* Two Columns */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {newsList.slice(1, 3).map((news, idx) => (
          <Link href={`/Pages/New/${news.id}`} key={idx} className="relative w-full h-[260px] rounded-2xl overflow-hidden shadow-lg">
            <Image src={news.image} alt={news.title} fill className="object-cover hover:scale-105 transition-transform duration-500"/>
            <div className="absolute inset-0 bg-black bg-opacity-30 p-4 flex items-end">
              <h4 className="text-white text-2xl font-semibold">{news.title}</h4>
            </div>
          </Link>
        ))}
      </div>

      {/* Grid News */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsList.slice(3, 8).map((news, idx) => (
            <Link href={`/Pages/New/${news.id}`} key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4">
                <div className="relative w-full max-h-56 mb-4">
                    <Image src={news.image} alt={news.title} fill className="object-cover rounded-xl"/>
                </div>
                <h5 className="font-bold text-gray-900">{news.title}</h5>
                {/* <p className="text-gray-600 text-sm mt-2 line-clamp-3">{news.summary}</p> */}
            </Link>
        ))}
      </div>
    </div>
  )
}
