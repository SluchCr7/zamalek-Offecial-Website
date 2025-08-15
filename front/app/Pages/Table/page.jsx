'use client';
import React, { useState } from 'react';
import { zamalekTable, zamalekTopGoalsLiveSeasson, zamalekAssistsLiveSeasson, cleanSheatsLiveSeasson } from '@/utils/data';
import Image from 'next/image';
import { Trophy, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const LeagueTable = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'points', direction: 'desc' });

  const sortedTable = [...zamalekTable].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const statCards = [
    {
      title: 'هدافي الزمالك',
      icon: <Trophy className="text-yellow-500 w-6 h-6" />,
      data: zamalekTopGoalsLiveSeasson,
      valueKey: 'goals',
      valueLabel: 'هدف',
    },
    {
      title: 'أكثر من صنع أهداف',
      icon: <Award className="text-blue-500 w-6 h-6" />,
      data: zamalekAssistsLiveSeasson,
      valueKey: 'assets',
      valueLabel: 'أسيست',
    },
    {
      title: 'كلين شيت للحراس',
      icon: <ShieldCheck className="text-green-500 w-6 h-6" />,
      data: cleanSheatsLiveSeasson,
      valueKey: 'cleanSheats',
      valueLabel: 'كلين شيت',
      extraKey: 'matches',
      extraLabel: 'مباراة',
    },
  ];

  return (
    <div dir="rtl" className="w-full p-6">
      {/* جدول الدوري */}
      <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b-4 border-red-600 pb-2">
        الدوري المصري الممتاز
      </h2>

      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gradient-to-r from-red-600 to-red-800 text-white uppercase text-sm sticky top-0 z-10">
            <tr>
              {[
                { label: '#', key: null },
                { label: 'الفريق', key: null },
                { label: 'لعب', key: 'played' },
                { label: 'فاز', key: 'won' },
                { label: 'تعادل', key: 'drawn' },
                { label: 'خسر', key: 'lost' },
                { label: 'له', key: 'goals_for' },
                { label: 'عليه', key: 'goals_against' },
                { label: 'الفرق', key: 'goal_difference' },
                { label: 'النقاط', key: 'points' },
              ].map((col, idx) => (
                <th
                  key={idx}
                  onClick={() => col.key && handleSort(col.key)}
                  className={`px-4 py-3 text-center cursor-pointer select-none ${
                    col.key ? 'hover:bg-red-700' : ''
                  }`}
                >
                  {col.label}
                  {sortConfig.key === col.key && (
                    <span className="ml-1">{sortConfig.direction === 'asc' ? '▲' : '▼'}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedTable.map((team, index) => {
              const isZamalek = team.team.includes('زمالك');
              const isTop2 = index < 2;
              const isRelegation = index >= sortedTable.length - 3;

              return (
                <tr
                  key={team.team}
                  className={`transition-colors duration-200 hover:bg-red-50 ${
                    isZamalek
                      ? 'bg-yellow-50 border-l-4 border-red-600'
                      : isTop2
                      ? 'bg-green-50 text-green-800'
                      : isRelegation
                      ? 'bg-red-50 text-red-800'
                      : index % 2 === 0
                      ? 'bg-gray-50'
                      : 'bg-white'
                  }`}
                >
                  <td className="px-4 py-3 font-bold text-center">{index + 1}</td>
                  <td className="px-4 py-3 font-medium flex items-center gap-2">
                    <Image
                      width={24}
                      height={24}
                      src={`/teams/${team.Logo}`}
                      alt={team.team}
                      className="w-6 h-6 rounded-full border border-gray-300"
                    />
                    {team.team}
                  </td>
                  <td className="px-4 py-3 text-center">{team.played}</td>
                  <td className="px-4 py-3 text-center">{team.won}</td>
                  <td className="px-4 py-3 text-center">{team.drawn}</td>
                  <td className="px-4 py-3 text-center">{team.lost}</td>
                  <td className="px-4 py-3 text-center">{team.goals_for}</td>
                  <td className="px-4 py-3 text-center">{team.goals_against}</td>
                  <td className="px-4 py-3 text-center font-semibold">{team.goal_difference}</td>
                  <td className="px-4 py-3 text-center font-bold text-red-600">
                    {team.points}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <h3 className="text-xl font-bold text-red-700 mt-10 mb-4 border-b-2 border-red-600 pb-2">
        إحصائيات الزمالك هذا الموسم
        </h3>

        <div className="grid gap-6 md:grid-cols-3">
          {statCards.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-start"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              {/* عنوان القسم */}
              <div className="flex items-center gap-2 mb-4">
                {stat.icon}
                <h4 className="text-lg font-semibold text-gray-800">{stat.title}</h4>
              </div>

              {/* قائمة اللاعبين */}
              <div className="w-full space-y-3">
                {stat.data.map((player, index) => (
                  <motion.div
                    key={player.id}
                    className="flex items-center gap-3 p-3 border rounded-lg hover:shadow-md transition bg-gray-50"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index * 0.1}
                  >
                    {/* الترتيب */}
                    <div className="w-8 h-8 flex items-center justify-center bg-red-600 text-white font-bold rounded-full">
                      {index + 1}
                    </div>

                    {/* صورة اللاعب */}
                    <Image
                      src={player.img}
                      alt={player.name}
                      width={50}
                      height={50}
                      className="w-12 h-12 rounded-full border"
                    />

                    {/* بيانات اللاعب */}
                    <div className="flex-1">
                      <p className="font-medium">{player.name}</p>
                      <p className="text-sm text-gray-600">
                        {player[stat.valueKey]} {stat.valueLabel}
                        {stat.extraKey && ` | ${player[stat.extraKey]} ${stat.extraLabel}`}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeagueTable;
