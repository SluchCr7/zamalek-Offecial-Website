// 'use client';
// import React, { useState } from 'react';
// import { zamalekMatches } from '@/utils/data';
// import dayjs from 'dayjs';
// import 'dayjs/locale/ar';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';

// dayjs.locale('ar');

// const matchTypeColors = {
//   Home: 'bg-white text-red-700 border-2 border-red-700 shadow-sm',
//   Away: 'bg-gray-800 text-white border-2 border-gray-600 shadow-sm',
//   'Egyptian Cup': 'bg-yellow-300 text-red-800 border-2 border-yellow-500 shadow-sm',
//   'CAF Champions League': 'bg-emerald-600 text-white border-2 border-emerald-800 shadow-sm',
// };

// export default function MatchesCalendar() {
//   const [currentMonth, setCurrentMonth] = useState(dayjs());

//   const startDay = currentMonth.startOf('month').startOf('week');
//   const endDay = currentMonth.endOf('month').endOf('week');

//   const days = [];
//   let day = startDay;

//   while (day.isBefore(endDay)) {
//     days.push(day);
//     day = day.add(1, 'day');
//   }

//   const getMatchForDate = (date) =>
//     zamalekMatches.filter((match) => dayjs(match.date).isSame(date, 'day'));

//   const isToday = (date) => dayjs().isSame(date, 'day');

//   return (
//     <div className="p-4 sm:p-6 w-full max-w-7xl mx-auto rounded-lg shadow-lg bg-gradient-to-b from-white via-[#fff5f5] to-[#fef0f0]">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <button
//           onClick={() => setCurrentMonth(currentMonth.subtract(1, 'month'))}
//           className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
//         >
//           ◀
//         </button>
//         <h2 className="text-2xl font-extrabold text-white bg-red-600 px-4 py-2 rounded shadow">
//           {currentMonth.format('MMMM YYYY')}
//         </h2>
//         <button
//           onClick={() => setCurrentMonth(currentMonth.add(1, 'month'))}
//           className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
//         >
//           ▶
//         </button>
//       </div>

//       {/* Days Header */}
//       <div className="grid grid-cols-4 md:grid-cols-7 text-center font-semibold bg-red-600 text-white rounded-t-lg overflow-hidden">
//         {['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].map((d) => (
//           <div key={d} className="p-2">
//             {d}
//           </div>
//         ))}
//       </div>

//       {/* Calendar Grid */}
//       <div className="grid grid-cols-4 md:grid-cols-7 gap-1 bg-[#fdf4f4] p-1 rounded-b-lg">
//         <AnimatePresence mode="popLayout">
//           {days.map((day, idx) => {
//             const matches = getMatchForDate(day);
//             const hasMatch = matches.length > 0;

//             return (
//               <motion.div
//                 key={idx}
//                 layout
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.2 }}
//                 className={`h-28 sm:h-32 flex flex-col rounded-lg p-1
//                   ${!day.isSame(currentMonth, 'month') ? 'bg-gray-100 text-gray-400' : 'bg-white'}
//                   ${hasMatch ? 'hover:shadow-lg hover:scale-[1.02] cursor-pointer transition-transform' : ''}`}
//               >
//                 {/* التاريخ */}
//                 <div
//                   className={`text-right font-bold mb-1 ${
//                     isToday(day)
//                       ? 'bg-red-600 text-white rounded-full w-7 h-7 flex items-center justify-center mx-auto'
//                       : 'text-red-600'
//                   }`}
//                 >
//                   {day.format('D')}
//                 </div>

//                 {/* المباراة (تملأ الخلية) */}
//                 {matches.map((match, i) => (
//                   <div
//                     key={i}
//                     className={`flex flex-col items-center justify-center flex-1 w-full rounded-md text-xs p-2 text-center shadow-sm
//                       ${matchTypeColors[match.matchType] || matchTypeColors[match.competition]}`}
//                   >
//                     <div className="flex items-center justify-center gap-2">
//                       <Image
//                         src="/teams/zamalek.png"
//                         alt="Zamalek"
//                         width={28}
//                         height={28}
//                         className="rounded-full w-7 h-7"
//                       />
//                       <span className="text-sm font-bold">VS</span>
//                       <Image
//                         src={`/teams/${match.opponentLogo}`}
//                         alt={match.opponent}
//                         width={28}
//                         height={28}
//                         className="rounded-full w-7 h-7"
//                       />
//                     </div>
//                     {match.status === 'Finished' ? (
//                       <div className="mt-1 bg-white text-gray-800 font-semibold rounded px-2 py-0.5 text-xs shadow">
//                         {match.result}
//                       </div>
//                     ) : (
//                       <div className="mt-1 font-semibold">{match.time}</div>
//                     )}
//                   </div>
//                 ))}
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </div>

//       {/* Legend */}
//       <div className="flex flex-wrap gap-4 mt-6 justify-center bg-white shadow-md rounded-lg p-3">
//         <LegendItem color="bg-white border-2 border-red-600" text="🏠 Home" />
//         <LegendItem color="bg-gray-800 text-white border-2 border-gray-600" text="✈️ Away" />
//         <LegendItem color="bg-yellow-300 border-2 border-yellow-500" text="🏆 كأس مصر" />
//         <LegendItem color="bg-emerald-600 text-white border-2 border-emerald-800" text="🌍 دوري الأبطال" />
//       </div>
//     </div>
//   );
// }

// function LegendItem({ color, text }) {
//   return (
//     <div className="flex items-center gap-2">
//       <span className={`w-4 h-4 inline-block ${color} rounded`}></span>
//       <span className="text-sm font-medium">{text}</span>
//     </div>
//   );
// }

'use client'
import React, { useMemo, useState } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/ar'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { zamalekMatches } from '@/utils/data'

// ضبط لغة dayjs للعربية
dayjs.locale('ar')

const COLORS = {
  primary: '#E30613', // لون الزمالك الأحمر
  neutralBg: 'bg-[#f7f5f5]',
  cardShadow: 'shadow-[0_6px_20px_rgba(0,0,0,0.08)]',
}

const matchTypeColors = {
  Home: 'bg-white text-red-700 border-2 border-red-700',
  Away: 'bg-gray-800 text-white border-2 border-gray-600',
  'Egyptian Cup': 'bg-yellow-300 text-red-800 border-2 border-yellow-500',
  'CAF Champions League': 'bg-emerald-600 text-white border-2 border-emerald-800',
}

export default function MatchesCalendarEnhanced() {
  const [currentMonth, setCurrentMonth] = useState(dayjs())
  const [selectedMatch, setSelectedMatch] = useState(null)
  const [filterCompetition, setFilterCompetition] = useState('All')
  const [filterType, setFilterType] = useState('All')

  const startDay = currentMonth.startOf('month').startOf('week')
  const endDay = currentMonth.endOf('month').endOf('week')

  // بناء مصفوفة الأيام التي ستظهر في الشبكة
  const days = []
  let day = startDay
  while (day.isBefore(endDay) || day.isSame(endDay, 'day')) {
    days.push(day)
    day = day.add(1, 'day')
  }

  // فرز وتصفية المباريات بناء على الشهر والفلتر
  const matchesInMonth = useMemo(() => {
    return zamalekMatches.filter((m) => dayjs(m.date).isSame(currentMonth, 'month'))
  }, [currentMonth])

  const competitions = useMemo(() => {
    const set = new Set(matchesInMonth.map((m) => m.competition))
    return ['All', ...Array.from(set)]
  }, [matchesInMonth])

  const getMatchesForDate = (d) => {
    return zamalekMatches
      .filter((m) => dayjs(m.date).isSame(d, 'day'))
      .filter((m) => (filterCompetition === 'All' ? true : m.competition === filterCompetition))
      .filter((m) => (filterType === 'All' ? true : (m.matchType || m.type) === filterType))
  }

  const isToday = (d) => dayjs().isSame(d, 'day')

  // إحصائيات الشهر
  const stats = useMemo(() => {
    const data = { total: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 }
    matchesInMonth.forEach((m) => {
      data.total += 1
      if (m.status === 'Finished' && m.result) {
        const [a, b] = m.result.split('-').map((s) => parseInt(s.trim()))
        // افتراض أن النتيجة في صيغة ZamalekGoals - OpponentGoals
        if (!isNaN(a) && !isNaN(b)) {
          data.goalsFor += a
          data.goalsAgainst += b
          if (a > b) data.wins += 1
          else if (a === b) data.draws += 1
          else data.losses += 1
        }
      }
    })
    return data
  }, [matchesInMonth])

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto rounded-lg bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2" style={{ borderColor: COLORS.primary }}>
            <Image src="/teams/zamalek.png" alt="Zamalek" fill sizes="48px" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold" style={{ color: COLORS.primary }}>تقويم مباريات الزمالك</h1>
            <p className="text-sm text-gray-500">عرض شهري منظم ومتكامل للمباريات</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentMonth((m) => m.subtract(1, 'month'))}
            className="px-3 py-1 rounded border hover:bg-gray-50 transition"
          >
            ◀
          </button>

          <div className="px-4 py-2 rounded font-semibold" style={{ background: COLORS.primary, color: '#fff' }}>
            {currentMonth.format('MMMM YYYY')}
          </div>

          <button
            onClick={() => setCurrentMonth((m) => m.add(1, 'month'))}
            className="px-3 py-1 rounded border hover:bg-gray-50 transition"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium">البطولة</label>
          <select
            value={filterCompetition}
            onChange={(e) => setFilterCompetition(e.target.value)}
            className="px-3 py-2 border rounded"
          >
            {competitions.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <label className="text-sm font-medium">نوع المباراة</label>
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="px-3 py-2 border rounded">
            <option value="All">All</option>
            <option value="Home">Home</option>
            <option value="Away">Away</option>
          </select>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-sm text-gray-600">مجموع مباريات الشهر: <span className="font-semibold">{stats.total}</span></div>
          <div className="text-sm text-gray-600">أهداف: <span className="font-semibold">{stats.goalsFor} - {stats.goalsAgainst}</span></div>
        </div>
      </div>

      {/* Days Header */}
      <div className="grid grid-cols-7 text-center font-semibold bg-red-600 text-white rounded-t-lg overflow-hidden">
        {['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].map((d) => (
          <div key={d} className="p-2">{d}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className={`grid grid-cols-7 gap-2 ${COLORS.neutralBg} p-2 rounded-b-lg`}>
        <AnimatePresence mode="popLayout">
          {days.map((d, idx) => {
            const matches = getMatchesForDate(d)
            const hasMatch = matches.length > 0

            return (
              <motion.div
                key={d.toString()}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className={`min-h-[92px] flex flex-col p-2 rounded-md ${COLORS.cardShadow} ${!d.isSame(currentMonth, 'month') ? 'opacity-50' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className={`text-sm font-bold ${isToday(d) ? 'text-white bg-red-600 rounded-full w-7 h-7 flex items-center justify-center' : 'text-red-600'}`}>
                    {d.format('D')}
                  </div>
                  <div className="text-xs text-gray-500">{d.format('MMM')}</div>
                </div>

                <div className="mt-2 flex-1 flex flex-col gap-1 overflow-hidden">
                  {hasMatch ? (
                    matches.slice(0, 2).map((m, i) => (
                      <motion.button
                        key={i}
                        onClick={() => setSelectedMatch(m)}
                        whileHover={{ scale: 1.02 }}
                        className={`flex items-center justify-between w-full p-2 rounded-md text-xs ${matchTypeColors[m.matchType] || 'bg-white'} ${m.status === 'Finished' ? 'opacity-95' : ''}`}
                      >
                        <div className="flex items-center gap-2">
                          <div className="relative w-6 h-6 rounded-full overflow-hidden">
                            <Image src={`/teams/${m.opponentLogo}`} alt={m.opponent} fill sizes="24px" />
                          </div>
                          <div className="font-semibold">{m.opponent}</div>
                        </div>

                        <div className="text-center">
                          <div className="text-[11px]">{m.competition}</div>
                          {m.status === 'Finished' ? (
                            <div className="font-bold mt-1 text-sm bg-white rounded px-2 py-0.5">{m.result}</div>
                          ) : (
                            <div className="font-semibold mt-1">{dayjs(m.date).format('HH:mm')}</div>
                          )}
                        </div>
                      </motion.button>
                    ))
                  ) : (
                    <div className="text-xs text-gray-400">—</div>
                  )}

                  {/* تظهر شارة + إذا كانت هناك مباريات أكثر */}
                  {matches.length > 2 && (
                    <div className="text-xs text-right text-gray-600">+{matches.length - 2} مباراة</div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Legend & Stats */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6 bg-white p-4 rounded-md border">
        <div className="flex items-center gap-6">
          <LegendItem color="bg-white border-2 border-red-600" text="🏠 Home" />
          <LegendItem color="bg-gray-800 text-white border-2 border-gray-600" text="✈️ Away" />
          <LegendItem color="bg-yellow-300 border-2 border-yellow-500" text="🏆 كأس مصر" />
          <LegendItem color="bg-emerald-600 text-white border-2 border-emerald-800" text="🌍 دوري الأبطال" />
        </div>

        <div className="flex items-center gap-6">
          <div className="text-sm">فوز: <span className="font-semibold">{stats.wins}</span></div>
          <div className="text-sm">تعادل: <span className="font-semibold">{stats.draws}</span></div>
          <div className="text-sm">خسارة: <span className="font-semibold">{stats.losses}</span></div>
        </div>
      </div>

      {/* Match Modal */}
      <AnimatePresence>
        {selectedMatch && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.96, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 10 }}
              transition={{ duration: 0.18 }}
              className="max-w-xl w-full bg-white rounded-lg p-4 shadow-lg border"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border" style={{ borderColor: COLORS.primary }}>
                    <Image src="/teams/zamalek.png" alt="Zamalek" fill sizes="56px" />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">Zamalek</div>
                    <div className="text-sm text-gray-500">{dayjs(selectedMatch.date).format('dddd, D MMMM YYYY')}</div>
                  </div>
                </div>

                <button onClick={() => setSelectedMatch(null)} className="px-3 py-1 rounded border">إغلاق</button>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 text-center">
                  <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border" style={{ borderColor: COLORS.primary }}>
                    <Image src={`/teams/${selectedMatch.opponentLogo}`} alt={selectedMatch.opponent} fill sizes="80px" />
                  </div>
                  <div className="font-bold mt-2">{selectedMatch.opponent}</div>
                </div>

                <div className="flex-1 text-center">
                  <div className="text-sm text-gray-500">{selectedMatch.competition}</div>
                  <div className="text-2xl font-extrabold mt-2" style={{ color: COLORS.primary }}>
                    {selectedMatch.status === 'Finished' ? selectedMatch.result : dayjs(selectedMatch.date).format('HH:mm')}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{selectedMatch.venue || 'ملعب غير معروف'}</div>
                </div>

                <div className="flex-1 text-center">
                  <div className="text-xs text-gray-500">نوع</div>
                  <div className="font-semibold mt-1">{selectedMatch.matchType || selectedMatch.type || '—'}</div>
                  <div className="text-xs text-gray-500 mt-3">الحالة</div>
                  <div className="font-semibold mt-1">{selectedMatch.status}</div>
                </div>
              </div>

              {selectedMatch.notes && (
                <div className="mt-4 text-sm text-gray-700">ملاحظات: {selectedMatch.notes}</div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function LegendItem({ color, text }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-4 h-4 inline-block ${color} rounded`}></span>
      <span className="text-sm font-medium">{text}</span>
    </div>
  )
}
