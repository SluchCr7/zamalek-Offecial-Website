"use client"
import { motion } from "framer-motion"
import { CalendarDays, MapPin, Plane, Home, Timer } from "lucide-react"
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
        setTimeLeft("Starting soon...")
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)

      setTimeLeft(`${days > 0 ? days + "d " : ""}${hours}h ${minutes}m`)
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 60000)
    return () => clearInterval(timer)
  }, [match.date, match.status])

  const statusColors = {
    Live: "bg-[#d50000] animate-pulse text-white",
    Finished: "bg-green-600 text-white",
    Upcoming: "bg-blue-600 text-white",
  }

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-[0_4px_25px_#00000020] p-6 w-full relative overflow-hidden border border-gray-200"
    >
      {/* شريط علوي */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#d50000] via-[#b80000] to-[#d50000]" />

      {/* البطولة والتاريخ */}
      <div className="flex items-center justify-between mb-4 mt-2">
        <h3 className="text-base font-bold text-gray-800">{match.competition}</h3>
        <div className="flex items-center text-xs text-gray-500 gap-1">
          <CalendarDays size={14} /> {match.date}
        </div>
      </div>

      {/* الفرق */}
      <div className="flex items-center justify-between">
        {/* الزمالك */}
        <div className="flex flex-col items-center w-1/3">
          <Image src="/teams/zamalek.png" alt="Zamalek Logo" width={55} height={55} />
        </div>

        {/* النتيجة */}
        <div className="flex flex-col items-center">
          <p className="text-3xl font-extrabold text-gray-800 tracking-wide">
            {match.result || "- : -"}
          </p>
          <span
            className={`mt-1 px-3 py-0.5 rounded-full text-xs font-semibold ${statusColors[match.status]}`}
          >
            {match.status}
          </span>
          {match.status === "Upcoming" && (
            <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
              <Timer size={12} /> {timeLeft}
            </div>
          )}
        </div>

        {/* الفريق المنافس */}
        <div className="flex flex-col items-center gap-2 w-1/3">
          <img
            src={`/teams/${match.opponentLogo}`}
            alt={`${match.opponent} Logo`}
            className="w-14 h-14 object-contain"
          />
        </div>
      </div>

      {/* تفاصيل إضافية */}
      <div className="flex items-center justify-between text-xs text-gray-500 mt-5 pt-3 border-t">
        <div className="flex items-center gap-1">
          <MapPin size={12} /> {match.city || "Cairo"}
        </div>
        <div className="flex items-center gap-2">
          {match.matchType === "Home" && (
            <span className="flex items-center gap-1 text-green-600 font-medium">
              <Home size={14} /> Home
            </span>
          )}
          {match.matchType === "Away" && (
            <span className="flex items-center gap-1 text-blue-600 font-medium">
              <Plane size={14} /> Away
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          ⚖️ {match.referee || "Referee TBD"}
        </div>
      </div>
    </motion.div>
  )
}
