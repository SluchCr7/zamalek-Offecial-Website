'use client';
import React, { useState } from 'react';
import { zamalekMatches } from '@/utils/data';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

dayjs.locale('ar');

const matchTypeColors = {
  Home: 'bg-white text-red-700 border-2 border-red-700 shadow-sm',
  Away: 'bg-gray-800 text-white border-2 border-gray-600 shadow-sm',
  'Egyptian Cup': 'bg-yellow-300 text-red-800 border-2 border-yellow-500 shadow-sm',
  'CAF Champions League': 'bg-emerald-600 text-white border-2 border-emerald-800 shadow-sm',
};

export default function MatchesCalendar() {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const startDay = currentMonth.startOf('month').startOf('week');
  const endDay = currentMonth.endOf('month').endOf('week');

  const days = [];
  let day = startDay;

  while (day.isBefore(endDay)) {
    days.push(day);
    day = day.add(1, 'day');
  }

  const getMatchForDate = (date) =>
    zamalekMatches.filter((match) => dayjs(match.date).isSame(date, 'day'));

  const isToday = (date) => dayjs().isSame(date, 'day');

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto rounded-lg shadow-lg bg-gradient-to-b from-white via-[#fff5f5] to-[#fef0f0]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setCurrentMonth(currentMonth.subtract(1, 'month'))}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          ◀
        </button>
        <h2 className="text-2xl font-extrabold text-white bg-red-600 px-4 py-2 rounded shadow">
          {currentMonth.format('MMMM YYYY')}
        </h2>
        <button
          onClick={() => setCurrentMonth(currentMonth.add(1, 'month'))}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          ▶
        </button>
      </div>

      {/* Days Header */}
      <div className="grid grid-cols-4 md:grid-cols-7 text-center font-semibold bg-red-600 text-white rounded-t-lg overflow-hidden">
        {['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].map((d) => (
          <div key={d} className="p-2">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-4 md:grid-cols-7 gap-1 bg-[#fdf4f4] p-1 rounded-b-lg">
        <AnimatePresence mode="popLayout">
          {days.map((day, idx) => {
            const matches = getMatchForDate(day);
            const hasMatch = matches.length > 0;

            return (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`h-28 sm:h-32 flex flex-col rounded-lg p-1
                  ${!day.isSame(currentMonth, 'month') ? 'bg-gray-100 text-gray-400' : 'bg-white'}
                  ${hasMatch ? 'hover:shadow-lg hover:scale-[1.02] cursor-pointer transition-transform' : ''}`}
              >
                {/* التاريخ */}
                <div
                  className={`text-right font-bold mb-1 ${
                    isToday(day)
                      ? 'bg-red-600 text-white rounded-full w-7 h-7 flex items-center justify-center mx-auto'
                      : 'text-red-600'
                  }`}
                >
                  {day.format('D')}
                </div>

                {/* المباراة (تملأ الخلية) */}
                {matches.map((match, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center flex-1 w-full rounded-md text-xs p-2 text-center shadow-sm
                      ${matchTypeColors[match.matchType] || matchTypeColors[match.competition]}`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Image
                        src="/teams/zamalek.png"
                        alt="Zamalek"
                        width={28}
                        height={28}
                        className="rounded-full w-7 h-7"
                      />
                      <span className="text-sm font-bold">VS</span>
                      <Image
                        src={`/teams/${match.opponentLogo}`}
                        alt={match.opponent}
                        width={28}
                        height={28}
                        className="rounded-full w-7 h-7"
                      />
                    </div>
                    {match.status === 'Finished' ? (
                      <div className="mt-1 bg-white text-gray-800 font-semibold rounded px-2 py-0.5 text-xs shadow">
                        {match.result}
                      </div>
                    ) : (
                      <div className="mt-1 font-semibold">{match.time}</div>
                    )}
                  </div>
                ))}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-6 justify-center bg-white shadow-md rounded-lg p-3">
        <LegendItem color="bg-white border-2 border-red-600" text="🏠 Home" />
        <LegendItem color="bg-gray-800 text-white border-2 border-gray-600" text="✈️ Away" />
        <LegendItem color="bg-yellow-300 border-2 border-yellow-500" text="🏆 كأس مصر" />
        <LegendItem color="bg-emerald-600 text-white border-2 border-emerald-800" text="🌍 دوري الأبطال" />
      </div>
    </div>
  );
}

function LegendItem({ color, text }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-4 h-4 inline-block ${color} rounded`}></span>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
