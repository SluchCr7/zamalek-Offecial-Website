"use client";

import React from "react";
import { motion } from "framer-motion";
import { zamalekTable, zamalekAfrica } from "@/utils/data";
import Image from "next/image";
import { ListFilter, Trophy, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Table = () => {
  const topFive = [...zamalekTable]
    .sort((a, b) => b.points - a.points)
    .slice(0, 5);

  const TableComponent = ({ title, data, subtitle }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex-1 min-w-[320px]"
    >
      <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-2xl shadow-black/5">
        {/* Table Header */}
        <div className="p-6 border-b border-border bg-muted/50" dir="rtl">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-black font-heading tracking-tight">{title}</h3>
            <Trophy size={18} className="text-primary" />
          </div>
          <p className="text-[10px] font-bold opacity-50 uppercase tracking-widest">{subtitle}</p>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-right" dir="rtl">
            <thead className="bg-muted text-[10px] font-black uppercase tracking-widest opacity-60">
              <tr>
                <th className="px-6 py-4">ترتيب</th>
                <th className="px-4 py-4">الفريق</th>
                <th className="px-4 py-4 text-center">لعب</th>
                <th className="px-4 py-4 text-center">له</th>
                <th className="px-6 py-4 text-center">نقاط</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {data.map((team, index) => {
                const isZamalek = team.team.toLowerCase().includes("zamalek");
                return (
                  <tr
                    key={team.team}
                    className={`group transition-colors hover:bg-primary/5 ${isZamalek ? 'bg-primary/[0.03]' : ''}`}
                  >
                    <td className="px-6 py-4">
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-black ${isZamalek ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                        }`}>
                        {index + 1}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8 rounded-full bg-white p-1 border border-border">
                          <Image
                            src={`/teams/${team.Logo}`}
                            alt={team.team}
                            fill
                            className="object-contain p-0.5"
                          />
                        </div>
                        <span className={`text-sm font-bold ${isZamalek ? 'text-primary' : ''}`}>
                          {team.team === "Zamalek" ? "نادي الزمالك" : team.team}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center text-sm font-bold opacity-60">18</td>
                    <td className="px-4 py-4 text-center text-sm font-bold opacity-60">{team.goals_for}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`text-sm font-black ${isZamalek ? 'text-primary' : ''}`}>
                        {team.points}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <Link
          href="/Pages/Table"
          className="block p-4 text-center text-[11px] font-black uppercase tracking-widest bg-muted/30 hover:bg-primary hover:text-white transition-all border-t border-border"
        >
          عرض الجدول الكامل
        </Link>
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16" dir="rtl">
          <div className="flex items-center gap-2 text-primary mb-4">
            <ListFilter size={18} />
            <span className="text-sm font-black uppercase tracking-widest">إحصائيات ومراكز</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter">جدول <span className="text-primary italic">الترتيب</span></h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          <TableComponent
            title="الدوري المصري الممتاز"
            subtitle="Egyptian Premier League"
            data={topFive}
          />
          <TableComponent
            title="دوري أبطال أفريقيا"
            subtitle="CAF Champions League"
            data={zamalekAfrica}
          />
        </div>
      </div>
    </section>
  );
};

export default Table;
