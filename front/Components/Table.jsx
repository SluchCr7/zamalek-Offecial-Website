"use client";
import React from "react";
import { motion } from "framer-motion";
import { zamalekTable, zamalekAfrica } from "@/utils/data";

const Table = () => {
  const topFive = [...zamalekTable]
    .sort((a, b) => b.points - a.points)
    .slice(0, 5);

  const TableComponent = ({ title, data }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full md:w-1/2 p-4"
    >
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-all duration-300">
        <h2 className="text-2xl font-bold text-red-600 mb-5 border-b-4 border-red-600 pb-2 text-center uppercase tracking-wide">
          {title}
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm font-medium text-gray-800">
            <thead>
              <tr className="bg-gradient-to-r from-red-600 to-red-500 text-white text-sm uppercase">
                <th className="px-4 py-3 text-left rounded-tl-xl">#</th>
                <th className="px-4 py-3 text-left">Team</th>
                <th className="px-3 py-3 text-center">Pts</th>
                <th className="px-3 py-3 text-center">GF</th>
                <th className="px-3 py-3 text-center">GA</th>
                <th className="px-3 py-3 text-center rounded-tr-xl">GD</th>
              </tr>
            </thead>
            <tbody>
              {data.map((team, index) => {
                const isZamalek =
                  team.team.toLowerCase().includes("zamalek");
                return (
                  <motion.tr
                    key={team.team}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className={`border-b last:border-none transition-all ${
                      isZamalek
                        ? "bg-gradient-to-r from-white to-red-50 font-semibold"
                        : index % 2 === 0
                        ? "bg-gray-50"
                        : "bg-white"
                    } hover:bg-red-50`}
                  >
                    <td className="px-4 py-3 font-bold text-gray-700">
                      <div
                        className={`w-6 h-6 flex items-center justify-center rounded-full text-xs ${
                          index === 0
                            ? "bg-red-600 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {index + 1}
                      </div>
                    </td>
                    <td className="px-4 py-3 flex items-center gap-2">
                      <img
                        src={`/teams/${team.Logo}`}
                        alt={team.team}
                        className="w-7 h-7 rounded-full border border-gray-200"
                      />
                      {team.team}
                    </td>
                    <td className="px-3 py-3 text-center font-bold text-red-600">
                      {team.points}
                    </td>
                    <td className="px-3 py-3 text-center">{team.goals_for}</td>
                    <td className="px-3 py-3 text-center">{team.goals_against}</td>
                    <td className="px-3 py-3 text-center">
                      {team.goals_for - team.goals_against}
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4">
        <TableComponent title="Egyptian Premier League - Top 5" data={topFive} />
        <TableComponent title="CAF Champions League - Group A" data={zamalekAfrica} />
      </div>
    </section>
  );
};

export default Table;
