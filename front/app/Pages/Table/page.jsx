// 'use client';
// import React, { useState } from 'react';
// import { zamalekTable, zamalekTopGoalsLiveSeasson, zamalekAssistsLiveSeasson, cleanSheatsLiveSeasson } from '@/utils/data';
// import Image from 'next/image';
// import { Trophy, Award, ShieldCheck } from 'lucide-react';
// import { motion } from 'framer-motion';

// const containerVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.15,
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   }),
// };

// const LeagueTable = () => {
//   const [sortConfig, setSortConfig] = useState({ key: 'points', direction: 'desc' });

//   const sortedTable = [...zamalekTable].sort((a, b) => {
//     if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
//     if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
//     return 0;
//   });

//   const handleSort = (key) => {
//     setSortConfig((prev) => ({
//       key,
//       direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
//     }));
//   };

//   const statCards = [
//     {
//       title: 'هدافي الزمالك',
//       icon: <Trophy className="text-yellow-500 w-6 h-6" />,
//       data: zamalekTopGoalsLiveSeasson,
//       valueKey: 'goals',
//       valueLabel: 'هدف',
//     },
//     {
//       title: 'أكثر من صنع أهداف',
//       icon: <Award className="text-blue-500 w-6 h-6" />,
//       data: zamalekAssistsLiveSeasson,
//       valueKey: 'assets',
//       valueLabel: 'أسيست',
//     },
//     {
//       title: 'كلين شيت للحراس',
//       icon: <ShieldCheck className="text-green-500 w-6 h-6" />,
//       data: cleanSheatsLiveSeasson,
//       valueKey: 'cleanSheats',
//       valueLabel: 'كلين شيت',
//       extraKey: 'matches',
//       extraLabel: 'مباراة',
//     },
//   ];

//   return (
//     <div dir="rtl" className="w-full p-6">
//       {/* جدول الدوري */}
//       <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-4 border-red-600 pb-2">
//         الدوري المصري الممتاز
//       </h2>

//       <div className="overflow-x-auto rounded-xl shadow-lg">
//         <table className="min-w-full border border-gray-200">
//           <thead className="bg-gradient-to-r from-red-600 to-red-800 text-white uppercase text-sm sticky top-0 z-10">
//             <tr>
//               {[
//                 { label: '#', key: null },
//                 { label: 'الفريق', key: null },
//                 { label: 'لعب', key: 'played' },
//                 { label: 'فاز', key: 'won' },
//                 { label: 'تعادل', key: 'drawn' },
//                 { label: 'خسر', key: 'lost' },
//                 { label: 'له', key: 'goals_for' },
//                 { label: 'عليه', key: 'goals_against' },
//                 { label: 'الفرق', key: 'goal_difference' },
//                 { label: 'النقاط', key: 'points' },
//               ].map((col, idx) => (
//                 <th
//                   key={idx}
//                   onClick={() => col.key && handleSort(col.key)}
//                   className={`px-4 py-3 text-center cursor-pointer select-none ${
//                     col.key ? 'hover:bg-red-700' : ''
//                   }`}
//                 >
//                   {col.label}
//                   {sortConfig.key === col.key && (
//                     <span className="ml-1">{sortConfig.direction === 'asc' ? '▲' : '▼'}</span>
//                   )}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {sortedTable.map((team, index) => {
//               const isZamalek = team.team.includes('زمالك');
//               const isTop2 = index < 2;
//               const isRelegation = index >= sortedTable.length - 3;

//               return (
//                 <tr
//                   key={team.team}
//                   className={`transition-colors duration-200 hover:bg-red-50 ${
//                     isZamalek
//                       ? 'bg-yellow-50 border-l-4 border-red-600'
//                       : isTop2
//                       ? 'bg-green-50 text-green-800'
//                       : isRelegation
//                       ? 'bg-red-50 text-red-800'
//                       : index % 2 === 0
//                       ? 'bg-gray-50'
//                       : 'bg-white'
//                   }`}
//                 >
//                   <td className="px-4 py-3 font-bold text-center">{index + 1}</td>
//                   <td className="px-4 py-3 font-medium flex items-center gap-2">
//                     <Image
//                       width={24}
//                       height={24}
//                       src={`/teams/${team.Logo}`}
//                       alt={team.team}
//                       className="w-6 h-6 rounded-full border border-gray-300"
//                     />
//                     {team.team}
//                   </td>
//                   <td className="px-4 py-3 text-center">{team.played}</td>
//                   <td className="px-4 py-3 text-center">{team.won}</td>
//                   <td className="px-4 py-3 text-center">{team.drawn}</td>
//                   <td className="px-4 py-3 text-center">{team.lost}</td>
//                   <td className="px-4 py-3 text-center">{team.goals_for}</td>
//                   <td className="px-4 py-3 text-center">{team.goals_against}</td>
//                   <td className="px-4 py-3 text-center font-semibold">{team.goal_difference}</td>
//                   <td className="px-4 py-3 text-center font-bold text-red-600">
//                     {team.points}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//       <div>
//         <h3 className="text-xl font-bold text-red-700 mt-10 mb-4 border-b-2 border-red-600 pb-2">
//         إحصائيات الزمالك هذا الموسم
//         </h3>

//         <div className="grid gap-6 md:grid-cols-3">
//           {statCards.map((stat, i) => (
//             <motion.div
//               key={i}
//               className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-start"
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               custom={i}
//             >
//               {/* عنوان القسم */}
//               <div className="flex items-center gap-2 mb-4">
//                 {stat.icon}
//                 <h4 className="text-lg font-semibold text-gray-800">{stat.title}</h4>
//               </div>

//               {/* قائمة اللاعبين */}
//               <div className="w-full space-y-3">
//                 {stat.data.map((player, index) => (
//                   <motion.div
//                     key={player.id}
//                     className="flex items-center gap-3 p-3 border rounded-lg hover:shadow-md transition bg-gray-50"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate="visible"
//                     custom={index * 0.1}
//                   >
//                     {/* الترتيب */}
//                     <div className="w-8 h-8 flex items-center justify-center bg-red-600 text-white font-bold rounded-full">
//                       {index + 1}
//                     </div>

//                     {/* صورة اللاعب */}
//                     <Image
//                       src={player.img}
//                       alt={player.name}
//                       width={50}
//                       height={50}
//                       className="w-12 h-12 rounded-full border"
//                     />

//                     {/* بيانات اللاعب */}
//                     <div className="flex-1">
//                       <p className="font-medium">{player.name}</p>
//                       <p className="text-sm text-gray-600">
//                         {player[stat.valueKey]} {stat.valueLabel}
//                         {stat.extraKey && ` | ${player[stat.extraKey]} ${stat.extraLabel}`}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeagueTable;

'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, ShieldCheck, ChevronUp, ChevronDown, Sliders } from 'lucide-react';
import {
  zamalekTable,
  zamalekTopGoalsLiveSeasson,
  zamalekAssistsLiveSeasson,
  cleanSheatsLiveSeasson,
} from '@/utils/data';

// ==================================================
// LeagueTableAdvanced.jsx
// تصميم احترافي لصفحة جدول وإحصائيات نادي الزمالك
// يعتمد على Tailwind CSS + Framer Motion + Next/Image
// ملاحظات: استبدل مسارات الصور واللوجو حسب مشروعك
// ==================================================

const ICONS = {
  goals: <Trophy className="w-5 h-5 text-yellow-400" />,
  assists: <Award className="w-5 h-5 text-blue-500" />,
  cleans: <ShieldCheck className="w-5 h-5 text-green-400" />,
};

const containerVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, ease: 'easeOut' },
  }),
};

function useSorted(data, config) {
  return useMemo(() => {
    const copy = [...data];
    if (!config.key) return copy;
    copy.sort((a, b) => {
      const aV = a[config.key] ?? 0;
      const bV = b[config.key] ?? 0;
      if (aV < bV) return config.direction === 'asc' ? -1 : 1;
      if (aV > bV) return config.direction === 'asc' ? 1 : -1;
      return 0;
    });
    return copy;
  }, [data, config]);
}

export default function LeagueTableAdvanced() {
  const [sortConfig, setSortConfig] = useState({ key: 'points', direction: 'desc' });
  const [view, setView] = useState('table'); // 'table' | 'cards'

  const sorted = useSorted(zamalekTable, sortConfig);
  const topPoints = sorted?.[0]?.points ?? 1;

  const statCards = [
    { id: 'goals', title: 'هدافي الزمالك', data: zamalekTopGoalsLiveSeasson, icon: ICONS.goals, valueKey: 'goals', valueLabel: 'هدف' },
    { id: 'assists', title: 'أكثر من صنع أهداف', data: zamalekAssistsLiveSeasson, icon: ICONS.assists, valueKey: 'assets', valueLabel: 'أسيست' },
    { id: 'cleans', title: 'كلين شيت للحراس', data: cleanSheatsLiveSeasson, icon: ICONS.cleans, valueKey: 'cleanSheats', valueLabel: 'كلين شيت', extraKey: 'matches', extraLabel: 'مباراة' },
  ];

  function handleSort(key) {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  }

  return (
    <div dir="rtl" className="w-full p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 relative rounded-full overflow-hidden shadow-md">
              <Image src={'/league-logo.png'} alt="league" fill sizes="48px" className="object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-blue-900">الدوري المصري الممتاز</h1>
              <p className="text-sm text-gray-500">تحديث البيانات آنيًا — عرض مُحسّن لجميع الأجهزة</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur p-2 rounded-xl shadow-sm border border-gray-100">
            <button
              onClick={() => setView('table')}
              className={`px-3 py-1 rounded-lg text-sm font-medium ${view === 'table' ? 'bg-red-600 text-white' : 'text-gray-700'}`}
            >
              جدول
            </button>
            <button
              onClick={() => setView('cards')}
              className={`px-3 py-1 rounded-lg text-sm font-medium ${view === 'cards' ? 'bg-red-600 text-white' : 'text-gray-700'}`}
            >
              بطاقات
            </button>
          </div>

          <button className="p-2 rounded-lg bg-white shadow-sm border hover:shadow-md" title="خيارات"> 
            <Sliders className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Table or Cards */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <h2 className="text-lg font-bold text-gray-800">ترتيب الدوري</h2>
              <p className="text-sm text-gray-500">آخر تحديث: الآن</p>
            </div>

            <div className="p-4">
              {view === 'table' ? (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[720px] table-fixed">
                    <thead className="text-xs text-gray-600 uppercase bg-gradient-to-r from-red-600 to-red-800 text-white rounded-tl-lg">
                      <tr>
                        <th className="p-3">#</th>
                        <th className="p-3 text-left">الفريق</th>
                        <th className="p-3 cursor-pointer" onClick={() => handleSort('played')}>لعب {sortConfig.key === 'played' && (sortConfig.direction === 'asc' ? <ChevronUp className="inline w-3 h-3"/> : <ChevronDown className="inline w-3 h-3"/>)}</th>
                        <th className="p-3 cursor-pointer" onClick={() => handleSort('won')}>فاز {sortConfig.key === 'won' && (sortConfig.direction === 'asc' ? <ChevronUp className="inline w-3 h-3"/> : <ChevronDown className="inline w-3 h-3"/>)}</th>
                        <th className="p-3 cursor-pointer" onClick={() => handleSort('drawn')}>تعادل</th>
                        <th className="p-3 cursor-pointer" onClick={() => handleSort('lost')}>خسر</th>
                        <th className="p-3">له</th>
                        <th className="p-3">عليه</th>
                        <th className="p-3 cursor-pointer" onClick={() => handleSort('goal_difference')}>الفرق {sortConfig.key === 'goal_difference' && (sortConfig.direction === 'asc' ? <ChevronUp className="inline w-3 h-3"/> : <ChevronDown className="inline w-3 h-3"/>)}</th>
                        <th className="p-3 cursor-pointer text-center" onClick={() => handleSort('points')}>النقاط {sortConfig.key === 'points' && (sortConfig.direction === 'asc' ? <ChevronUp className="inline w-3 h-3"/> : <ChevronDown className="inline w-3 h-3"/>)}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <AnimatePresence>
                        {sorted.map((team, idx) => {
                          const isZ = team.team.includes('زمالك');
                          const isTop = idx < 2;
                          const isReleg = idx >= sorted.length - 3;
                          const rowClass = isZ ? 'bg-white/70 border-l-4 border-red-600' : isTop ? 'bg-green-50' : isReleg ? 'bg-red-50' : idx % 2 === 0 ? 'bg-gray-50' : 'bg-white';

                          return (
                            <motion.tr
                              key={team.team}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.18, delay: idx * 0.03 }}
                              className={`${rowClass} hover:shadow-md transition-all`}
                            >
                              <td className="p-3 font-semibold">{idx + 1}</td>
                              <td className="p-3 flex items-center gap-3">
                                <div className="w-8 h-8 relative rounded-full overflow-hidden border">
                                  <Image src={`/teams/${team.Logo}`} alt={team.team} fill sizes="32px" className="object-cover" />
                                </div>
                                <div>
                                  <div className="font-medium">{team.team}</div>
                                  <div className="text-xs text-gray-400">{team.city ?? ''}</div>
                                </div>
                              </td>
                              <td className="p-3">{team.played}</td>
                              <td className="p-3">{team.won}</td>
                              <td className="p-3">{team.drawn}</td>
                              <td className="p-3">{team.lost}</td>
                              <td className="p-3">{team.goals_for}</td>
                              <td className="p-3">{team.goals_against}</td>
                              <td className="p-3 font-semibold">{team.goal_difference}</td>
                              <td className="p-3 text-center font-bold text-red-600">{team.points}</td>
                            </motion.tr>
                          );
                        })}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>
              ) : (
                // card view for mobile/alternative
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sorted.map((team, idx) => (
                    <motion.div
                      key={team.team}
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      custom={idx}
                      className={`p-3 rounded-xl border bg-white shadow-sm flex items-center justify-between`}
                    > 
                    {/* px-4 py-3 font-medium flex items-center gap-2 */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 relative rounded-full overflow-hidden border">
                          <Image
                            width={24}
                            height={24}
                            src={`/teams/${team.Logo}`}
                            alt={team.team}
                            className="w-6 h-6 rounded-full border border-gray-300"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{team.team}</div>
                          <div className="text-xs text-gray-400">{team.played} مباراة</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-red-600">{team.points}</div>
                        <div className="text-xs text-gray-500">نقاط</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Stats cards */}
        <aside className="space-y-4">
          <div className="bg-gradient-to-br from-white/40 to-white/10 backdrop-blur rounded-2xl p-4 shadow-md border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">إحصائيات الزمالك هذا الموسم</h3>
            <p className="text-sm text-gray-500 mb-3">أبرز اللاعبين والقياسات السريعة</p>
            <div className="grid grid-cols-1 gap-3">
              {statCards.map((card) => (
                <motion.div key={card.id} whileHover={{ scale: 1.02 }} className="bg-white/60 backdrop-blur p-3 rounded-lg border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-md bg-white/30">{card.icon}</div>
                      <div>
                        <div className="font-semibold">{card.title}</div>
                        <div className="text-xs text-gray-400">أحدث الإحصائيات</div>
                      </div>
                    </div>
                    <button className="text-xs px-2 py-1 rounded-md bg-red-600 text-white">عرض الكل</button>
                  </div>

                  <div className="space-y-2">
                    {card.data.slice(0, 4).map((p, i) => (
                      <div key={p.id} className="flex items-center gap-3 p-2 rounded-md bg-white/80">
                        <div className="w-10 h-10 relative rounded-full overflow-hidden">
                          <Image src={p.img} alt={p.name} fill sizes="40px" className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <div className="font-medium">{p.name}</div>
                            <div className="text-sm font-bold">{p[card.valueKey]} {card.valueLabel}</div>
                          </div>
                          {card.extraKey && (
                            <div className="text-xs text-gray-500">{p[card.extraKey]} {card.extraLabel}</div>
                          )}
                          <div className="w-full mt-2 bg-gray-200 rounded-full h-1">
                            <div style={{ width: `${Math.min(100, (p[card.valueKey] / (card.valueKey === 'goals' ? (statCards[0].data[0]?.goals || 1) : topPoints)) * 100)}%` }} className="h-1 rounded-full bg-red-600" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur rounded-2xl p-4 shadow-sm border border-gray-100">
            <h4 className="font-bold mb-2">روضات سريعة</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>🔴 إبراز الزمالك في الجدول مع حد أحمر.</li>
              <li>📊 مؤشرات بصرية لنسب النقاط مقابل المتصدر.</li>
              <li>⚡ انتقالات سلسة بالـ framer-motion.</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Small footer / legend */}
      <div className="mt-6 flex flex-wrap gap-3 items-center text-sm text-gray-500">
        <div className="flex items-center gap-2"><span className="w-3 h-3 bg-green-200 rounded-sm inline-block"/> مركز مؤهل</div>
        <div className="flex items-center gap-2"><span className="w-3 h-3 bg-red-200 rounded-sm inline-block"/> منطقة هبوط</div>
        <div className="flex items-center gap-2"><span className="w-3 h-3 bg-yellow-100 rounded-sm inline-block"/> الزمالك</div>
      </div>
    </div>
  );
}
