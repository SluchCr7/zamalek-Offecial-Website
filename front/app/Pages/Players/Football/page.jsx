'use client'
import React, { useState } from 'react'
import { zamalekPlayers  , zamalekCoachingStaff} from '@/utils/data'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const positions = ["All", "Goalkeeper", "Defender", "Midfielder", "Forward" , "Staff"]

const Page = () => {
  const [position, setPosition] = useState("All")

  const filteredPlayers = position === "All" 
    ? zamalekPlayers 
    : zamalekPlayers.filter(player => player.mainPosition === position)
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-white px-6 py-10">
      
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-700">لاعبي فريق كرة القدم</h2>
        <p className="mt-2 text-gray-700 font-medium">أبطال القلعة البيضاء</p>
        <div className="mx-auto mt-3 h-1 w-28 bg-red-700 rounded"></div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {positions.map((pos, idx) => (
          <motion.button
            key={idx}
            whileTap={{ scale: 0.95 }}
            onClick={() => setPosition(pos)}
            className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 border
              ${position === pos 
                ? "bg-red-700 text-white border-red-700 shadow-lg scale-105" 
                : "bg-white text-red-700 border-red-300 hover:bg-red-100"}`}
          >
            {pos}
          </motion.button>
        ))}
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {
          position === "Staff" ? 
            zamalekCoachingStaff.map((coach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                {/* Player Image */}
                <div className="relative w-full h-[380px]">
                  <Image 
                    // src={coach.img}
                    src={'/no_img.jpg'}
                    alt={coach.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info Overlay
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out flex flex-col justify-end p-5 text-white">
                  <h3 className="text-2xl font-bold">{coach.name}</h3>
                  <p className="text-sm mt-1">Role <span className="font-semibold">{coach.role}</span></p>
                </div> */}

                {/* Player Name (always visible) */}
                <div className="p-4 text-center">
                  <h4 className="font-bold text-lg text-red-700">{coach.name}</h4>
                  <p className="text-sm text-gray-600">{coach.role}</p>
                </div>
              </motion.div>
            ))
          :
          filteredPlayers.map((player, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              {/* Player Image */}
              <Link href={`/Pages/Players/Football/${encodeURIComponent(player.name)}`}  className="relative w-full h-[380px]">
                <Image 
                  // src={player.img}
                  src={'/no_img.jpg'}
                  alt={'Player'}
                  width={500}
                  height={500}
                  className="object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                />
              </Link>

              {/* Info Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out flex flex-col justify-end p-5 text-white">
                <h3 className="text-2xl font-bold">{player.name}</h3>
                <p className="text-sm mt-1">رقم القميص: <span className="font-semibold">{player.number ?? 'N/A'}</span></p>
                <p className="text-sm">المركز: <span className="font-semibold">{player.position}</span></p>
                <p className="text-sm">القيمة السوقية: <span className="font-semibold">{player.marketValue ?? 'N/A'}</span></p>
                <p className="text-sm">الجنسية: <span className="font-semibold">{player.nationality}</span></p>
              </div>

              {/* Player Name (always visible) */}
              <div className="p-4 text-center">
                <h4 className="font-bold text-lg text-red-700">{player.name}</h4>
                <p className="text-sm text-gray-600">{player.position}</p>
              </div>
            </motion.div>
          ))
        }
      </div>

      {filteredPlayers.length  === 0 && position !== "Staff" && (
        <p className="text-center text-gray-500 mt-10">لا يوجد لاعبين في هذا المركز.</p>
      )}
    </div>
  )
}

export default Page
