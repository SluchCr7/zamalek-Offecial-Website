"use client"

import { motion } from "framer-motion"
import { CalendarDays, MapPin, Plane, Home, Timer, Trophy } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Match({ match }) {
  const [timeLeft, setTimeLeft] = useState("")

  useEffect(() => {
    if (match.status !== "Upcoming") return

    const updateCountdown = () => {
      const matchDate = new Date(match.date)
      const now = new Date()
      const diff = matchDate - now

      if (diff <= 0) {
        setTimeLeft("قريباً...")
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)

      setTimeLeft(`${days > 0 ? days + "ي " : ""}${hours}س ${minutes}د`)
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 60000)
    return () => clearInterval(timer)
  }, [match.date, match.status])

  const statusColors = {
    Live: "bg-primary animate-pulse text-white shadow-lg shadow-primary/40",
    Finished: "bg-secondary text-secondary-foreground border border-border",
    Upcoming: "bg-muted text-muted-foreground border border-border",
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-card rounded-3xl p-6 w-full relative overflow-hidden border border-border group transition-all duration-300 hover:shadow-2xl hover:shadow-black/10"
    >
      {/* Competition & Date */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Trophy size={16} />
          </div>
          <span className="text-sm font-black uppercase tracking-tight opacity-70">{match.competition}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-bold opacity-50">
          <CalendarDays size={14} />
          <span>{match.date}</span>
        </div>
      </div>

      {/* Teams & Score */}
      <div className="flex items-center justify-between mb-8">
        {/* Home Team */}
        <div className="flex flex-col items-center flex-1 gap-3">
          <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform group-hover:scale-110 duration-500">
            <Image src="/teams/zamalek.png" alt="Zamalek" fill className="object-contain" />
          </div>
          <span className="text-sm font-black text-center leading-none">الزمالك</span>
        </div>

        {/* Score/Status */}
        <div className="flex flex-col items-center px-4">
          <div className="text-3xl md:text-4xl font-black tracking-tighter mb-2 font-heading">
            {match.status === "Upcoming" ? "VS" : match.result}
          </div>
          <div className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${statusColors[match.status]}`}>
            {match.status === "Live" ? "مباشر" : match.status === "Finished" ? "انتهت" : "قريباً"}
          </div>
          {match.status === "Upcoming" && (
            <div className="flex items-center gap-1.5 text-[11px] font-bold opacity-60 mt-2">
              <Timer size={12} />
              <span>{timeLeft}</span>
            </div>
          )}
        </div>

        {/* Away Team */}
        <div className="flex flex-col items-center flex-1 gap-3">
          <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform group-hover:scale-110 duration-500">
            <Image
              src={`/teams/${match.opponentLogo}`}
              alt={match.opponent}
              fill
              className="object-contain"
            />
          </div>
          <span className="text-sm font-black text-center leading-none">{match.opponent}</span>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
        <div className="flex items-center gap-1.5 opacity-60">
          <MapPin size={12} className="text-primary" />
          <span className="text-[10px] font-bold">{match.city || "القاهرة"}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {match.matchType === "Home" ? (
              <div className="flex items-center gap-1 text-primary">
                <Home size={12} />
                <span className="text-[10px] font-black uppercase">أرضنا</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 opacity-60">
                <Plane size={12} />
                <span className="text-[10px] font-black uppercase">خارج</span>
              </div>
            )}
          </div>
          <div className="w-1 h-1 rounded-full bg-border" />
          <span className="text-[10px] font-bold opacity-60">{match.referee || "طاقم تحكيم"}</span>
        </div>
      </div>
    </motion.div>
  )
}
