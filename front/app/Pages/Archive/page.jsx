'use client'
import { useState } from 'react'
import Image from 'next/image'
import { zamalekTshirts } from '@/utils/data'

export default function HistoryTShirts() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const filteredTshirts =
    filter === 'All'
      ? zamalekTshirts
      : zamalekTshirts.filter(t => t.Provider.toLowerCase() === filter.toLowerCase())

  return (
    <div className="bg-[#f7f7f7] min-h-screen pb-20">
      {/* Banner */}
      <div className="relative h-[300px] flex items-center justify-center bg-gradient-to-r from-red-600 to-white shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
          متحف قمصان الزمالك
        </h1>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 mt-8 flex flex-wrap gap-3 justify-center">
        {['All', ...new Set(zamalekTshirts.map(t => t.Provider))].map(provider => (
          <button
            key={provider}
            onClick={() => setFilter(provider)}
            className={`px-4 py-2 rounded-full border transition ${
              filter === provider
                ? 'bg-red-600 text-white border-red-600'
                : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {provider}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <div className="relative border-l-4 border-red-600 pl-8">
          {filteredTshirts.map((tshirt, idx) => (
            <div
              key={idx}
              className="mb-12 relative group"
            >
              <span className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-red-600 border-4 border-white"></span>
              <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center transition hover:scale-[1.02] hover:shadow-2xl">
                <div className="w-[150px] h-[150px] relative cursor-pointer">
                  <Image
                    src={tshirt.img.replace('../public', '')}
                    alt={tshirt.sesson}
                    fill
                    className="object-contain rounded-lg"
                    onClick={() => setSelected(tshirt)}
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{tshirt.sesson}</h2>
                  <p className="text-gray-500">المصنع: {tshirt.Provider}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    هذا القميص شهد إنجازات وبطولات الزمالك في هذا الموسم.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="relative w-[90%] md:w-[50%] h-[80%]">
            <Image
              src={selected.img.replace('../public', '')}
              alt={selected.sesson}
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full shadow hover:bg-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
