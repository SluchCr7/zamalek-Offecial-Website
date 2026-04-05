'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft, Star, Loader2 } from 'lucide-react'
import useSWR from 'swr'
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data);

const FirstTeam = () => {
  const { data: players, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_BACK_URL}/api/players`, fetcher);
  const [randomPlayers, setRandomPlayers] = useState([])

  useEffect(() => {
    if (players && players.length > 0) {
      const shuffled = [...players].sort(() => 0.5 - Math.random())
      setRandomPlayers(shuffled.slice(0, 3))
    }
  }, [players])

  if (error) return <div className="py-24 text-center text-red-500 font-bold">Failed to load players</div>;

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-primary/5 select-none pointer-events-none uppercase">
        ROYALS
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16" dir="rtl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm mb-4"
          >
            <Star size={16} fill="currentColor" />
            <span>نجوم القلعة البيضاء</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tighter">الفريق <span className="text-primary italic">الأول</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[500px]">
          {isLoading ? (
            <div className="col-span-full flex items-center justify-center">
              <Loader2 className="w-12 h-12 text-primary animate-spin" />
            </div>
          ) : (
            randomPlayers.map((player, index) => (
              <motion.div
                key={player.id || player.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[500px] rounded-3xl overflow-hidden bg-muted border border-border"
              >
                <div className="absolute -right-4 -top-8 text-[12rem] font-black text-black/5 group-hover:text-primary/10 transition-colors duration-500 italic select-none">
                  {player.number ?? '00'}
                </div>

                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={player.photo}
                      alt={player.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-start translate-y-4 group-hover:translate-y-0 transition-transform duration-500" dir="rtl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-8 h-[2px] bg-primary" />
                    <span className="text-primary font-black text-sm uppercase">{player.position}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4 leading-none">{player.name}</h3>

                  <div className="grid grid-cols-2 gap-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                      <div className="text-[10px] text-white/50 font-bold uppercase">الرقم</div>
                      <div className="text-lg font-black text-white">#{player.number ?? '--'}</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
                      <div className="text-[10px] text-white/50 font-bold uppercase">الجنسية</div>
                      <div className="text-lg font-black text-white">{player.nationality}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/Pages/Players/Football"
            className="inline-flex items-center gap-4 bg-primary hover:bg-primary-hover text-white font-black px-10 py-5 rounded-full shadow-2xl shadow-primary/30 transition-all hover:scale-105 group"
          >
            <span>عرض قائمة الفريق بالكامل</span>
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FirstTeam
