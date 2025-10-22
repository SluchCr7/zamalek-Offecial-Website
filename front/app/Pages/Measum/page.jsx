'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import { mesaumSections } from '@/utils/data'

export default function MuseumPage() {
  return (
    <div dir="rtl" className="min-h-screen flex items-center flex-col max-w-7xl mx-auto w-full px-6 py-12">

      {/* العنوان */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-700">متحف نادي الزمالك</h2>
        <p className="mt-2 text-gray-600">تاريخ ابيض موثق</p>
        <div className="mx-auto mt-4 h-1 w-28 bg-red-600 rounded"></div>
      </div>

      {/* البطاقات */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {mesaumSections.map((section, i) => (
          <motion.div
            key={section.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={section.open ? section.link : "#"}>
              <div
                className={`relative rounded-2xl overflow-hidden border-2 border-red-600 bg-white shadow-md group transition transform hover:-translate-y-2 hover:shadow-xl duration-300 ${section.open ? 'cursor-pointer' : 'pointer-events-none opacity-60'}`}
              >
                <Image 
                  src={section.img} 
                  alt={section.name} 
                  width={600} 
                  height={400} 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h2 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                    {section.name}
                    {!section.open && <Lock size={18} className="text-gray-300" />}
                  </h2>
                  <p className="text-gray-200 text-sm">{section.bio}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
