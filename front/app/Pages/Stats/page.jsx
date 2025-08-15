// 'use client'
// import React from 'react'
// import { motion } from 'framer-motion'
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   LabelList,
// } from 'recharts'
// import { zamalekStats } from '@/utils/data'

// // ألوان الزمالك
// const COLORS = {
//   red: '#E30613',
//   gold: '#D4AF37',
//   cardBorder: 'border-[#E30613]/20',
// }

// export default function ZamalekStatsPage() {
//   const { topScorersAllTime, topAssistPlayer, topPlayMatches, derbyRecord, topScorerSeason } = zamalekStats

//   // بيانات الرسوم البيانية
//   const seasonData = topScorerSeason.map((s) => ({ season: s.season, goals: s.goals , player: s.player}))
//   const topScorersChart = topScorersAllTime.map((p) => ({ name: p.player, goals: p.goals }))

//   // أنيميشن للكروت
//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     show: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.15, duration: 0.5 }
//     })
//   }

//   return (
//     <div dir="rtl" className="min-h-screen bg-white relative overflow-hidden">
//       {/* خلفية بخطوط حمراء خفيفة */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-[10%] left-0 w-full h-1 bg-[#E30613]/10 rotate-[-3deg]" />
//         <div className="absolute top-[30%] left-0 w-full h-1 bg-[#E30613]/10 rotate-[3deg]" />
//       </div>

//       {/* الهيدر */}
//       <header className="bg-gradient-to-r from-white via-[#fff5f5] to-white shadow-sm relative z-10">
//         <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center gap-6">
//           <div className="flex-1 text-center md:text-right">
//             <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
//               أرقام نادي الزمالك عبر التاريخ
//             </h1>
//             <p className="text-sm md:text-base text-gray-600 mt-2">
//               إحصائيات تفاعلية ورسوم بيانية لأهم لحظات الأسطورة البيضاء
//             </p>
//           </div>
//           <div className="p-2 bg-white rounded-full shadow-lg border border-red-100">
//             <img src="/zsc.png" className="w-20 md:w-24" alt="Zamalek logo" />
//           </div>
//         </div>
//       </header>

//       {/* المحتوى */}
//       <main className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
//         {/* اليسار */}
//         <section className="space-y-6">
//           {/* الهدافون التاريخيون */}
//           <motion.div
//             custom={0}
//             initial="hidden"
//             animate="show"
//             variants={cardVariants}
//             className={`p-4 rounded-xl border ${COLORS.cardBorder} shadow hover:shadow-lg transition bg-white`}
//           >
//             <h2 className="text-lg font-semibold mb-3">🥇 الهدافون التاريخيون</h2>
//             <ol className="space-y-3">
//               {topScorersAllTime.map((p, i) => (
//                 <li key={p.player} className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center text-sm font-bold">{i + 1}</div>
//                     <div>
//                       <div className="font-medium">{p.player}</div>
//                       <div className="text-xs text-gray-500">أهداف: {p.goals}</div>
//                     </div>
//                   </div>
//                   <div className="w-24">
//                     <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                       <div className="h-2 bg-[#E30613]" style={{ width: `${(p.goals / topScorersAllTime[0].goals) * 100}%` }} />
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ol>
//           </motion.div>

//           {/* صناع الأهداف */}
//           <motion.div
//             custom={1}
//             initial="hidden"
//             animate="show"
//             variants={cardVariants}
//             className={`p-4 rounded-xl border ${COLORS.cardBorder} shadow hover:shadow-lg transition bg-white`}
//           >
//             <h2 className="text-lg font-semibold mb-3">🎯 صناع الأهداف</h2>
//             <ul className="space-y-3">
//               {topAssistPlayer.map((a) => (
//                 <li key={a.name} className="flex justify-between">
//                   <span>{a.name}</span>
//                   <span className="text-[#E30613] font-semibold">{a.num}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* أكثر المشاركين */}
//           <motion.div
//             custom={2}
//             initial="hidden"
//             animate="show"
//             variants={cardVariants}
//             className={`p-4 rounded-xl border ${COLORS.cardBorder} shadow hover:shadow-lg transition bg-white`}
//           >
//             <h2 className="text-lg font-semibold mb-3">📊 أكثر المشاركين</h2>
//             <ul className="space-y-3">
//               {topPlayMatches.map((p) => (
//                 <li key={p.name} className="flex justify-between">
//                   <span>{p.name}</span>
//                   <span className="text-gray-500 text-sm">مباريات: {p.num}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         </section>

//         {/* اليمين - الرسوم البيانية */}
//         <section className="lg:col-span-2 space-y-6">
          
//           {/* بار شارت */}
//           <motion.div
//             custom={3}
//             initial="hidden"
//             animate="show"
//             variants={cardVariants}
//             className={`p-4 rounded-xl border ${COLORS.cardBorder} shadow hover:shadow-lg transition bg-white`}
//           >
//             <h3 className="font-semibold mb-3">📅 أبرز مواسم الهداف</h3>
//             <div className="w-full h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={seasonData}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                   <XAxis dataKey="player" />
//                   <YAxis />
//                   <Tooltip />
//                   <Bar dataKey="goals" fill={COLORS.red} radius={[6, 6, 0, 0]}>
//                     <LabelList dataKey="goals" position="top" fill="#333" fontSize={12} />
//                   </Bar>
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </motion.div>

//           {/* لاين شارت */}
//           <motion.div
//             custom={4}
//             initial="hidden"
//             animate="show"
//             variants={cardVariants}
//             className={`p-4 rounded-xl border ${COLORS.cardBorder} shadow hover:shadow-lg transition bg-white`}
//           >
//             <h3 className="font-semibold mb-3">🏆 مقارنة هدافي التاريخ</h3>
//             <div className="w-full h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={topScorersChart}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Line type="monotone" dataKey="goals" stroke={COLORS.red} strokeWidth={3} dot={{ r: 6, stroke: COLORS.gold, strokeWidth: 2 }} />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </motion.div>
//         </section>
//       </main>

//       {/* الفوتر */}
//       <footer className="py-6 text-center text-gray-500 text-sm border-t">
//         © {new Date().getFullYear()} إحصائيات الزمالك — تصميم احترافي
//       </footer>
//     </div>
//   )
// }


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
  const {
    topScorersAllTime,
    topAssistPlayer,
    topPlayMatches,
    derbyRecord,
    topScorerSeason,
    fastestGoal,
    firstHatrick,
    mostHatrickScore,
    mostSuperHatrickScore,
    highWin,
    mostYoungPlayersScore,
    mostCountriesPlayInZamalek,
    mostMatchesattendance,
  } = zamalekStats

  // بيانات الرسوم البيانية
  const seasonData = topScorerSeason.map((s) => ({ season: s.season, goals: s.goals, player: s.player }))
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

        {/* ---------------- بقية الإحصائيات ---------------- */}
        <section className="lg:col-span-3 space-y-8 mt-10">

          {/* أرقام خاصة */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="show"
            variants={cardVariants}
            className={`p-4 rounded-xl border ${COLORS.cardBorder} shadow hover:shadow-lg transition bg-white`}
          >
            <h2 className="text-lg font-semibold mb-4">⚡ أرقام خاصة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-3 border rounded-lg text-center bg-gray-50">
                <p className="text-sm text-gray-500">أسرع هدف</p>
                <p className="text-xl font-bold text-[#E30613]">{fastestGoal.time}</p>
                <p className="text-xs text-gray-600">{fastestGoal.player} - {fastestGoal.year}</p>
              </div>
              <div className="p-3 border rounded-lg text-center bg-gray-50">
                <p className="text-sm text-gray-500">أول هاتريك</p>
                <p className="text-lg font-bold">{firstHatrick.player}</p>
                <p className="text-xs text-gray-600">{firstHatrick.year}</p>
              </div>
              <div className="p-3 border rounded-lg text-center bg-gray-50">
                <p className="text-sm text-gray-500">أكثر من سجل هاتريك</p>
                <p className="text-lg font-bold">{mostHatrickScore.player}</p>
                <p className="text-xs text-gray-600">{mostHatrickScore.num} مرات</p>
              </div>
              <div className="p-3 border rounded-lg text-center bg-gray-50">
                <p className="text-sm text-gray-500">أكبر فوز</p>
                <p className="text-lg font-bold">{highWin.score}</p>
                <p className="text-xs text-gray-600">ضد {highWin.team}</p>
              </div>
            </div>
          </motion.div>

          {/* أصغر هدافين */}
          <motion.div
            custom={6}
            initial="hidden"
            animate="show"
            variants={cardVariants}
            className={`p-4 rounded-xl border ${COLORS.cardBorder} shadow hover:shadow-lg transition bg-white`}
          >
            <h2 className="text-lg font-semibold mb-4">🌟 أصغر هدافين في تاريخ النادي</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {mostYoungPlayersScore.map((p) => (
                <div key={p.name} className="flex items-center gap-3 border p-3 rounded-lg bg-gray-50">
                  <img src={p.img || "/default-player.png"} alt={p.name} className="w-12 h-12 rounded-full object-cover border" />
                  <div>
                    <p className="font-bold">{p.name}</p>
                    <p className="text-xs text-gray-500">{p.age} و {p.months}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* أكثر الدول التي لعب منها محترفون */}
          <motion.div
            custom={7}
            initial="hidden"
            animate="show"
            variants={cardVariants}
            className={`p-4 rounded-xl border ${COLORS.cardBorder} shadow hover:shadow-lg transition bg-white`}
          >
            <h2 className="text-lg font-semibold mb-4">🌍 أكثر الدول التي لعب منها محترفون</h2>
            <div className="w-full h-72">
              <ResponsiveContainer>
                <BarChart data={mostCountriesPlayInZamalek}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="country" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="num" fill={COLORS.red}>
                    <LabelList dataKey="num" position="top" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* أكبر حضور جماهيري */}
          <motion.div
            custom={8}
            initial="hidden"
            animate="show"
            variants={cardVariants}
            className={`p-4 rounded-xl border ${COLORS.cardBorder} shadow hover:shadow-lg transition bg-white`}
          >
            <h2 className="text-lg font-semibold mb-4">👥 أكبر حضور جماهيري</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-right border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2">المباراة</th>
                    <th className="p-2">الحضور</th>
                    <th className="p-2">السنة</th>
                  </tr>
                </thead>
                <tbody>
                  {mostMatchesattendance.map((m, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="p-2">{m.against}</td>
                      <td className="p-2">{m.num}</td>
                      <td className="p-2">{m.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* مواجهات القمة */}
          <motion.div
            custom={9}
            initial="hidden"
            animate="show"
            variants={cardVariants}
            className={`p-4 rounded-xl border ${COLORS.cardBorder} shadow hover:shadow-lg transition bg-white`}
          >
            <h2 className="text-lg font-semibold mb-4">🔥 مواجهات القمة</h2>
            <p className="text-gray-700">
              أكبر فوز على الأهلي:
              <span className="font-bold text-[#E30613]"> {derbyRecord.largestWinVsAhly}</span>
              في أعوام {derbyRecord.Years.join(" و ")}
            </p>
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
