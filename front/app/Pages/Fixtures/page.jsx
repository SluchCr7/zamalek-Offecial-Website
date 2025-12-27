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

'use client';

import React, { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar as CalendarIcon,
  MapPin,
  Trophy,
  Clock,
  ChevronRight,
  ChevronLeft,
  X,
  Tv
} from 'lucide-react';
import { zamalekMatches } from '@/utils/data';
import TitleSection from '@/Components/TitleSection';

dayjs.locale('ar');

const matchTypeColors = {
  Home: 'border-primary bg-primary/5 text-primary',
  Away: 'border-foreground bg-foreground/5 text-foreground',
  'Egyptian Cup': 'border-yellow-500 bg-yellow-500/5 text-yellow-600',
  'CAF Champions League': 'border-emerald-500 bg-emerald-500/5 text-emerald-600',
};

export default function FixturesPage() {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [selectedMatch, setSelectedMatch] = useState(null);

  const startDay = currentMonth.startOf('month').startOf('week');
  const endDay = currentMonth.endOf('month').endOf('week');

  const days = [];
  let day = startDay;
  while (day.isBefore(endDay) || day.isSame(endDay, 'day')) {
    days.push(day);
    day = day.add(1, 'day');
  }

  const getMatchesForDate = (d) => {
    return zamalekMatches.filter((m) => dayjs(m.date).isSame(d, 'day'));
  };

  const isToday = (d) => dayjs().isSame(d, 'day');

  return (
    <div className="min-h-screen bg-background text-foreground pb-24" dir="rtl">
      {/* Header Section */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 border-b border-border overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <TitleSection
            title="جدول المباريات"
            subtitle="مواعيد ونتائج كافة مواجهات مدرسة الفن والهندسة في جميع المسابقات"
          />

          <div className="flex items-center justify-center gap-6 mt-12 bg-card/50 backdrop-blur-xl border border-border p-2 rounded-2xl w-fit mx-auto shadow-2xl">
            <button
              onClick={() => setCurrentMonth(prev => prev.subtract(1, 'month'))}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-muted hover:bg-primary hover:text-white transition-all"
            >
              <ChevronRight size={20} />
            </button>
            <div className="text-xl font-black font-heading px-8 min-w-[200px] text-center">
              {currentMonth.format('MMMM YYYY')}
            </div>
            <button
              onClick={() => setCurrentMonth(prev => prev.add(1, 'month'))}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-muted hover:bg-primary hover:text-white transition-all"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Calendar Grid */}
      <section className="container mx-auto px-4 md:px-8 py-16">
        <div className="bg-card/30 backdrop-blur-md rounded-[3rem] border border-border shadow-2xl overflow-hidden">

          {/* Days Header */}
          <div className="grid grid-cols-7 border-b border-border bg-muted/30">
            {['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].map((d) => (
              <div key={d} className="p-6 text-center text-xs font-black uppercase tracking-widest opacity-40">
                {d}
              </div>
            ))}
          </div>

          {/* Grid Cells */}
          <div className="grid grid-cols-7">
            {days.map((d, idx) => {
              const matches = getMatchesForDate(d);
              const inMonth = d.isSame(currentMonth, 'month');
              const cellIsToday = isToday(d);

              return (
                <div
                  key={idx}
                  className={`min-h-[160px] p-4 border-l border-b border-border relative group transition-colors ${!inMonth ? 'bg-muted/5 opacity-30 shadow-inner' : 'hover:bg-primary/[0.02]'
                    } ${idx % 7 === 6 ? 'border-l-0' : ''}`}
                >
                  <div className={`text-sm font-black mb-4 flex items-center justify-center w-8 h-8 rounded-full transition-all ${cellIsToday ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'opacity-40'
                    }`}>
                    {d.format('D')}
                  </div>

                  <div className="space-y-2">
                    {matches.map((m, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedMatch(m)}
                        className={`w-full p-2.5 rounded-xl border text-[10px] font-bold text-center transition-all shadow-sm ${matchTypeColors[m.matchType] || 'border-border bg-muted'
                          }`}
                      >
                        <div className="flex items-center justify-center gap-1.5 mb-1 opacity-60">
                          <Trophy size={10} />
                          {m.competition}
                        </div>
                        <div className="flex items-center justify-center gap-1">
                          <span className="truncate">{m.opponent}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend Panel */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 bg-card rounded-[2rem] border border-border p-8 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">مباراة في ملعبنا</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-foreground" />
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">مباراة خارج أرضنا</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">كأس مصر</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">البطولات الإفريقية</span>
          </div>
        </div>
      </section>

      {/* Match Details Modal */}
      <AnimatePresence>
        {selectedMatch && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMatch(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              layoutId={`match-modal-${selectedMatch.id}`}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl bg-card rounded-[3rem] border border-border shadow-[0_32px_128px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Modal Background Decor */}
              <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

              <button
                onClick={() => setSelectedMatch(null)}
                className="absolute top-8 left-8 w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary hover:text-white transition-all z-10"
              >
                <X size={24} />
              </button>

              <div className="relative p-8 md:p-16">

                {/* Competition Badge */}
                <div className="flex flex-col items-center mb-12">
                  <div className="px-6 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-4">
                    {selectedMatch.competition}
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest opacity-40">
                    <CalendarIcon size={14} />
                    <span>{dayjs(selectedMatch.date).format('dddd, D MMMM YYYY')}</span>
                  </div>
                </div>

                {/* Score / Teams Grid */}
                <div className="grid grid-cols-3 items-center gap-8 mb-16">

                  {/* Team 1 (Zamalek) */}
                  <div className="flex flex-col items-center gap-6">
                    <div className="relative w-24 h-24 md:w-40 md:h-40 p-4 rounded-full bg-white shadow-2xl">
                      <Image src="/teams/zamalek.png" alt="Zamalek" fill className="object-contain p-4" />
                    </div>
                    <h3 className="text-xl md:text-3xl font-black font-heading text-center">الزمالك</h3>
                  </div>

                  {/* VS Card */}
                  <div className="flex flex-col items-center">
                    {selectedMatch.status === 'Finished' ? (
                      <div className="flex items-center gap-4">
                        <span className="text-5xl md:text-8xl font-black font-heading tracking-tighter">
                          {selectedMatch.result.split('-')[0]}
                        </span>
                        <span className="text-2xl font-black opacity-20">-</span>
                        <span className="text-5xl md:text-8xl font-black font-heading tracking-tighter">
                          {selectedMatch.result.split('-')[1]}
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <div className="text-xs font-black uppercase tracking-[0.3em] opacity-40 mb-6">قادمة</div>
                        <div className="text-5xl md:text-7xl font-black font-heading tracking-tighter text-primary">
                          {dayjs(selectedMatch.date).format('HH:mm')}
                        </div>
                      </div>
                    )}

                    {selectedMatch.status === 'Live' && (
                      <div className="mt-4 flex items-center gap-2 bg-red-600 px-4 py-1.5 rounded-full text-white text-[10px] font-black animate-pulse">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        مباشر الآن
                      </div>
                    )}
                  </div>

                  {/* Team 2 (Opponent) */}
                  <div className="flex flex-col items-center gap-6">
                    <div className="relative w-24 h-24 md:w-40 md:h-40 p-4 rounded-full bg-white shadow-2xl">
                      <Image src={`/teams/${selectedMatch.opponentLogo}`} alt={selectedMatch.opponent} fill className="object-contain p-4" />
                    </div>
                    <h3 className="text-xl md:text-3xl font-black font-heading text-center">{selectedMatch.opponent}</h3>
                  </div>

                </div>

                {/* Match Info Grid */}
                <div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-border">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30">
                    <MapPin size={24} className="text-primary" />
                    <div>
                      <div className="text-[10px] font-black uppercase opacity-40">الملعب</div>
                      <div className="font-bold">{selectedMatch.venue || "ستاد القاهرة الدولي"}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30">
                    <Clock size={24} className="text-primary" />
                    <div>
                      <div className="text-[10px] font-black uppercase opacity-40">التوقيت</div>
                      <div className="font-bold text-sm">بتوقيت القاهرة</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30">
                    <Tv size={24} className="text-primary" />
                    <div>
                      <div className="text-[10px] font-black uppercase opacity-40">القنوات الناقلة</div>
                      <div className="font-bold">أون تايم سبورتس</div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
