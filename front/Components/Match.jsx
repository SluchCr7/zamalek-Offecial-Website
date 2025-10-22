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
      const diff = matchDate.getTime() - now.getTime()

      if (diff <= 0) {
        setTimeLeft("Starting soon...")
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)

      setTimeLeft(
        `${days > 0 ? days + "d " : ""}${hours}h ${minutes}m`
      )
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 60000)
    return () => clearInterval(timer)
  }, [match.date, match.status])

  const statusColors = {
    Live: "bg-red-600 animate-pulse text-white",
    Finished: "bg-green-600 text-white",
    Upcoming: "bg-blue-600 text-white",
  }

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.04 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl shadow-xl p-6 w-full relative overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
    >
      {/* خط علوي */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 via-gray-200 to-red-600" />

      {/* البطولة + التاريخ */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-800 tracking-wide">
          {match.competition}
        </h3>
        <div className="flex items-center text-sm text-gray-500 gap-1.5">
          <CalendarDays size={16} /> {match.date}
        </div>
      </div>

      {/* الفرق */}
      <div className="flex items-center justify-between">
        {/* الزمالك */}
        <div className="flex flex-col items-center w-1/3">
          <Image
            src="/teams/zamalek.png"
            alt="Zamalek Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

        {/* النتيجة */}
        <div className="flex flex-col items-center gap-1">
          <p className="text-3xl font-bold text-gray-900">
            {match.result || "- : -"}
          </p>
          <span
            className={`mt-1 px-4 py-0.5 rounded-full text-sm font-semibold ${statusColors[match.status]}`}
          >
            {match.status}
          </span>
          {match.status === "Upcoming" && (
            <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
              <Timer size={14} /> {timeLeft}
            </div>
          )}
        </div>

        {/* الخصم */}
        <div className="flex flex-col items-center gap-2 w-1/3">
          <img
            src={`/teams/${match.opponentLogo}`}
            alt={`${match.opponent} Logo`}
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>

      {/* تفاصيل إضافية */}
      <div className="flex items-center justify-between text-sm text-gray-500 mt-5 pt-3 border-t border-gray-200">
        <div className="flex items-center gap-1.5">
          <MapPin size={14} /> {match.city || "Cairo"}
        </div>
        <div className="flex items-center gap-2">
          {match.matchType === "Home" && (
            <span className="flex items-center gap-1 text-green-600 font-medium">
              <Home size={16} /> Home
            </span>
          )}
          {match.matchType === "Away" && (
            <span className="flex items-center gap-1 text-blue-600 font-medium">
              <Plane size={16} /> Away
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">⚖️ {match.referee || "TBD"}</div>
      </div>
    </motion.div>
  )
}
