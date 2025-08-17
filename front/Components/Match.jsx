"use client"
import { motion } from "framer-motion"
import { CalendarDays, MapPin, Plane, Home, Timer } from "lucide-react"
import { useEffect, useState } from "react"

export default function Match({ match }) {
  const [timeLeft, setTimeLeft] = useState("")

  // ⏳ حساب الوقت المتبقي (للـ Upcoming فقط)
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
    const timer = setInterval(updateCountdown, 60000) // يحدث كل دقيقة
    return () => clearInterval(timer)
  }, [match.date, match.status])

  // 🎨 ألوان وحالات الحالة (status)
  const statusColors = {
    Live: "bg-red-600 animate-pulse text-white",
    Finished: "bg-green-600 text-white",
    Upcoming: "bg-blue-600 text-white",
  }

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg p-5 w-full relative overflow-hidden border border-gray-200"
    >
      {/* شريط أعلى للبطولة */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-gray-300 to-red-600" />

      {/* عنوان البطولة + التاريخ */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-700">{match.competition}</h3>
        <div className="flex items-center text-xs text-gray-500 gap-1">
          <CalendarDays size={14} /> {match.date}
        </div>
      </div>

      {/* الفرق */}
      <div className="flex items-center justify-between">
        {/* الزمالك */}
        <div className="flex flex-col items-center w-1/3">
          <Image
            src="/teams/zamalek.png"
            alt="Zamalek Logo" width={50}
            height={50}
          />
        </div>

        {/* النتيجة */}
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-gray-800 tracking-wide">
            {match.score || "- : -"}
          </p>
          <span
            className={`mt-1 px-3 py-0.5 rounded-full text-xs font-semibold ${statusColors[match.status]}`}
          >
            {match.status}
          </span>
          {match.status === "Upcoming" && (
            <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
              <Timer size={12} /> {timeLeft}
            </div>
          )}
        </div>

        {/* فريق 2 */}
        <div className="flex flex-col items-center gap-2 w-1/3">
          <img
            src={`/teams/${match.opponentLogo}`}
            alt={`${match.opponent} Logo`}
            className="w-14 h-14 object-contain"
          />
          {/* <p className="text-sm font-medium">{match.team2.name}</p> */}
        </div>
      </div>

      {/* تفاصيل إضافية أسفل البطاقة */}
      <div className="flex items-center justify-between text-xs text-gray-500 mt-4 pt-3 border-t">
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
