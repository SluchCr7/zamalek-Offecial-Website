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
  LabelList,
} from 'recharts'
import { zamalekStats } from '@/utils/data'

// ألوان الزمالك
const COLORS = {
  red: '#E30613',
  gold: '#D4AF37',
  cardBorder: 'border-[#E30613]/20',
}

export default function ZamalekStatsPage() {
  const { topScorersAllTime, topAssistPlayer, topPlayMatches, derbyRecord, topScorerSeason } = zamalekStats

  // بيانات الرسوم البيانية
  const seasonData = topScorerSeason.map((s) => ({ season: s.season, goals: s.goals , player: s.player}))
  const topScorersChart = topScorersAllTime.map((p) => ({ name: p.player, goals: p.goals }))

  // أنيميشن للكروت
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 }
    })
  }

  return (
    <div dir="rtl" className="min-h-screen bg-white relative overflow-hidden">
      {/* خلفية بخطوط حمراء خفيفة */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-0 w-full h-1 bg-[#E30613]/10 rotate-[-3deg]" />
        <div className="absolute top-[30%] left-0 w-full h-1 bg-[#E30613]/10 rotate-[3deg]" />
      </div>

      {/* الهيدر */}
      <header className="bg-gradient-to-r from-white via-[#fff5f5] to-white shadow-sm relative z-10">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 text-center md:text-right">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              أرقام نادي الزمالك عبر التاريخ
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              إحصائيات تفاعلية ورسوم بيانية لأهم لحظات الأسطورة البيضاء
            </p>
          </div>
          <div className="p-2 bg-white rounded-full shadow-lg border border-red-100">
            <img src="/zsc.png" className="w-20 md:w-24" alt="Zamalek logo" />
          </div>
        </div>
      </header>

      {/* المحتوى */}
      <main className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* اليسار */}
        <section className="space-y-6">
          {/* الهدافون التاريخيون */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={cardVariants}
            className={`p-4 rounded-xl border ${COLORS.cardBorder} shadow hover:shadow-lg transition bg-white`}
          >
            <h2 className="text-lg font-semibold mb-3">🥇 الهدافون التاريخيون</h2>
            <ol className="space-y-3">
              {topScorersAllTime.map((p, i) => (
                <li key={p.player} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center text-sm font-bold">{i + 1}</div>
                    <div>
                      <div className="font-medium">{p.player}</div>
                      <div className="text-xs text-gray-500">أهداف: {p.goals}</div>
                    </div>
                  </div>
                  <div className="w-24">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-2 bg-[#E30613]" style={{ width: `${(p.goals / topScorersAllTime[0].goals) * 100}%` }} />
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* صناع الأهداف */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="show"
            variants={cardVariants}
            className={`p-4 rounded-xl border ${COLORS.cardBorder} shadow hover:shadow-lg transition bg-white`}
          >
            <h2 className="text-lg font-semibold mb-3">🎯 صناع الأهداف</h2>
            <ul className="space-y-3">
              {topAssistPlayer.map((a) => (
                <li key={a.name} className="flex justify-between">
                  <span>{a.name}</span>
                  <span className="text-[#E30613] font-semibold">{a.num}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* أكثر المشاركين */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="show"
            variants={cardVariants}
            className={`p-4 rounded-xl border ${COLORS.cardBorder} shadow hover:shadow-lg transition bg-white`}
          >
            <h2 className="text-lg font-semibold mb-3">📊 أكثر المشاركين</h2>
            <ul className="space-y-3">
              {topPlayMatches.map((p) => (
                <li key={p.name} className="flex justify-between">
                  <span>{p.name}</span>
                  <span className="text-gray-500 text-sm">مباريات: {p.num}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* اليمين - الرسوم البيانية */}
        <section className="lg:col-span-2 space-y-6">
          
          {/* بار شارت */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={cardVariants}
            className={`p-4 rounded-xl border ${COLORS.cardBorder} shadow hover:shadow-lg transition bg-white`}
          >
            <h3 className="font-semibold mb-3">📅 أبرز مواسم الهداف</h3>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={seasonData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="player" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="goals" fill={COLORS.red} radius={[6, 6, 0, 0]}>
                    <LabelList dataKey="goals" position="top" fill="#333" fontSize={12} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* لاين شارت */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={cardVariants}
            className={`p-4 rounded-xl border ${COLORS.cardBorder} shadow hover:shadow-lg transition bg-white`}
          >
            <h3 className="font-semibold mb-3">🏆 مقارنة هدافي التاريخ</h3>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={topScorersChart}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="goals" stroke={COLORS.red} strokeWidth={3} dot={{ r: 6, stroke: COLORS.gold, strokeWidth: 2 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </section>
      </main>

      {/* الفوتر */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} إحصائيات الزمالك — تصميم احترافي
      </footer>
    </div>
  )
}
