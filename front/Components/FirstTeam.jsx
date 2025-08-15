'use client'
import React, { useState, useEffect } from 'react'
import { placeholderImage, zamalekPlayers } from '@/utils/data'
import Image from 'next/image'
import TitleSection from './TitleSection'
import Link from 'next/link'

const FirstTeam = () => {
  const [randomPlayers, setRandomPlayers] = useState([])

  const getRandomPlayers = () => {
    const shuffled = [...zamalekPlayers].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 3)
  }

  useEffect(() => {
    setRandomPlayers(getRandomPlayers())
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <TitleSection title="لاعبي فريق الكره بالنادي" subtitle="احنا الملوك احنا الزمالك" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {randomPlayers.map(player => (
          <div
            key={player.name}
            className="group relative rounded-xl overflow-hidden"
          >
            {/* Player Image */}
            <Image
              // src={player.img || placeholderImage}
              src={'/no_img.jpg'}
              alt={player.name}
              width={400}
              height={600}
              className="w-full h-[450px] object-cover object-top"
            />

            {/* Info Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out flex flex-col justify-end p-5 text-white">
              <h3 className="text-2xl font-bold">{player.name}</h3>
              <p className="text-sm mt-1">Number: <span className="font-semibold">{player.number ?? 'N/A'}</span></p>
              <p className="text-sm">Position: <span className="font-semibold">{player.position}</span></p>
              <p className="text-sm">Market Value: <span className="font-semibold">{player.marketValue ?? 'N/A'}</span></p>
              <p className="text-sm">Nationality: <span className="font-semibold">{player.nationality}</span></p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-10 text-center">
        <Link
          href="/Pages/Players/Football"
          className="inline-block bg-red-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-red-800 hover:scale-105 transition-all duration-300"
          aria-label="View all first team players"
        >
          
          View All First Team Players
        </Link>
      </div>
    </section>
  )
}

export default FirstTeam
