'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from 'recharts'
import { zamalekStats } from '@/utils/data'

// صغيرة: ألوان خاصة بثيم الزمالك
const COLORS = {
  primary: 'text-[#E30613]',
  goldBg: 'bg-[#D4AF37]/10',
  cardBorder: 'border-[#E30613]/20',
}

export default function ZamalekStatsPage() {
  const { topScorersAllTime, topAssistPlayer, topPlayMatches, derbyRecord, topScorerSeason } = zamalekStats

  // تحضير بيانات للـ recharts
  const seasonData = topScorerSeason.map((s) => ({ season: s.season, goals: s.goals , player: s.player}))
  const topScorersChart = topScorersAllTime.map((p) => ({ name: p.player, goals: p.goals }))

  return (
    <div dir="rtl" className="min-h-screen bg-white text-gray-800 antialiased">
      {/* HEADER */}
      <header className="relative overflow-hidden">
        <div className="bg-[linear-gradient(90deg,#fff_60%,#fef0f0)]">
          <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2">أبرز أرقام نادي الزمالك عبر التاريخ</h1>
              <p className="text-sm md:text-base text-gray-600">منشور بطريقة تفاعلية — أرقام ومخططات ومقارنة للاسطورة البيضاء</p>
            </div>
            <img src="/zsc.png" className="w-20 md:w-28" alt="Zamalek logo" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT: Top scorers + assists */}
        <section className="lg:col-span-1 space-y-6">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className={`p-4 rounded-2xl border ${COLORS.cardBorder} shadow-sm`}>
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              🥇 الهدافون التاريخيون
            </h2>
            <ol className="space-y-3">
              {topScorersAllTime.map((p, i) => (
                <li key={p.player} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-[#f8f8f8] flex items-center justify-center font-semibold text-sm">{i + 1}</div>
                    <div>
                      <div className="font-medium">{p.player}</div>
                      <div className="text-xs text-gray-500">أهداف: {p.goals}</div>
                    </div>
                  </div>
                  <div className="w-28">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-2 rounded-full bg-[#E30613]" style={{ width: `${(p.goals / topScorersAllTime[0].goals) * 100}%` }} />
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className={`p-4 rounded-2xl border ${COLORS.cardBorder} shadow-sm`}>
            <h2 className="text-xl font-semibold mb-3">🎯 صناع الأهداف</h2>
            <ul className="space-y-3">
              {topAssistPlayer.map((a) => (
                <li key={a.name} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{a.name}</div>
                    <div className="text-xs text-gray-500">صناعة: {a.num}</div>
                  </div>
                  <div className="text-sm font-semibold text-[#E30613]">{a.num}</div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className={`p-4 rounded-2xl border ${COLORS.cardBorder} shadow-sm`}>
            <h2 className="text-xl font-semibold mb-3">📊 أكبر المشاركين</h2>
            <ul className="space-y-3">
              {topPlayMatches.map((p) => (
                <li key={p.name} className="flex items-center gap-3 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">{p.name[0]}</div>
                    <div>
                      <div className="font-medium">{p.name}</div>
                      <div className="text-xs text-gray-500">مباريات: {p.num}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">عرض</div>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* CENTER: Big cards + records */}
        <section className="lg:col-span-2 space-y-6">
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className={`p-6 rounded-2xl border ${COLORS.cardBorder} shadow-lg bg-gradient-to-r from-white to-[#fff5f5]`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">الارقام القياسية واللحظات</h3>
                <p className="text-sm text-gray-600">لمحات سريعة عن أبرز لحظات الزمالك في تاريخه.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full md:w-auto">
                <div className="p-3 rounded-xl bg-white shadow-inner border ${COLORS.cardBorder}">
                  <div className="text-xs text-gray-500">أسرع هدف</div>
                  <div className="font-semibold">{zamalekStats.fastestGoal.player} — {zamalekStats.fastestGoal.time}</div>
                </div>
                <div className="p-3 rounded-xl bg-white shadow-inner border ${COLORS.cardBorder}">
                  <div className="text-xs text-gray-500">أول هاتريك</div>
                  <div className="font-semibold">{zamalekStats.firstHatrick.player} — {zamalekStats.firstHatrick.year}</div>
                </div>
                <div className="p-3 rounded-xl bg-white shadow-inner border ${COLORS.cardBorder}">
                  <div className="text-xs text-gray-500">أكبر فوز</div>
                  <div className="font-semibold">{zamalekStats.highWin.team} — {zamalekStats.highWin.score}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="col-span-1 p-4 rounded-xl bg-white shadow-sm border ${COLORS.cardBorder}">
                <div className="text-xs text-gray-500">أكبر فوز في ديربي</div>
                <div className="mt-2 font-bold text-xl text-[#E30613]">{derbyRecord.largestWinVsAhly}</div>
                <div className="text-xs text-gray-500">السنون: {derbyRecord.Years.join(', ')}</div>
              </div>

              <div className="col-span-2 p-4 rounded-xl bg-white shadow-sm border ${COLORS.cardBorder}">
                <div className="text-xs text-gray-500">أبرز مواسم الهداف</div>
                <div className="w-full h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={seasonData} margin={{ top: 8, right: 12, left: -18, bottom: 8 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="season" reversed={false} />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="goals" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className={`p-4 rounded-2xl border ${COLORS.cardBorder} shadow-sm bg-white`}>
            <h3 className="text-lg font-semibold mb-3">رسم بياني — مقارنة هدافي التاريخ</h3>
            <div className="w-full h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={topScorersChart} margin={{ top: 8, right: 12, left: -18, bottom: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="goals" stroke="#E30613" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className={`p-4 rounded-2xl border ${COLORS.cardBorder} shadow-sm bg-white`}>
            <h3 className="text-lg font-semibold mb-4">تفاصيل إضافية</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 rounded-xl bg-[#fffaf0]">
                <div className="text-xs text-gray-500">أكثر هاتريك</div>
                <div className="font-semibold">{zamalekStats.mostHatrickScore.player} — {zamalekStats.mostHatrickScore.num}</div>
              </div>
              <div className="p-3 rounded-xl bg-[#fffaf0]">
                <div className="text-xs text-gray-500">أكثر سوبر هاتريك</div>
                <div className="font-semibold">{zamalekStats.mostSuperHatrickScore.player} — {zamalekStats.mostSuperHatrickScore.num}</div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} تصميم احترافي لصفحة أرقام الزمالك — مُنشأ تلقائياً
      </footer>
    </div>
  )
}
