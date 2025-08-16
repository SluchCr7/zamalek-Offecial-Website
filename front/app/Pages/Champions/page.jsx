"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { zamalekTitles } from "@/utils/data";
import TitleSection from "@/Components/TitleSection";

// ألوان للتوزيع
const COLORS = ["#dc2626", "#f59e0b", "#2563eb"];

export default function ZamalekTitlesPage() {
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState("all");

  // فلترة حسب التبويب
  const filtered =
    tab === "all"
      ? zamalekTitles
      : zamalekTitles.filter((t) => t.category === tab);

  // sort descending by num
  const items = [...filtered].sort((a, b) => b.num - a.num);

  // data for PieChart
  const chartData = [
    { name: "محلية", value: zamalekTitles.filter((t) => t.category === "local").reduce((s, x) => s + x.num, 0) },
    { name: "قارية", value: zamalekTitles.filter((t) => t.category === "continental").reduce((s, x) => s + x.num, 0) },
    { name: "إقليمية", value: zamalekTitles.filter((t) => t.category === "regional").reduce((s, x) => s + x.num, 0) },
  ];

  return (
    <section className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] bg-gradient-to-r from-red-700 to-red-500 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/zamalek-stadium.jpg"
            alt="ملعب الزمالك"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-2xl px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            إنجازات نادي الزمالك
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            أكثر من 80 بطولة محلية وقارية وإقليمية عبر تاريخ حافل بالإنجازات
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-6 md:px-12">
        {/* Tabs */}
        <div className="flex gap-4 justify-center mb-10">
          {[
            { key: "all", label: "الكل" },
            { key: "local", label: "محلية" },
            { key: "continental", label: "قارية" },
            { key: "regional", label: "إقليمية" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-4 py-2 rounded-full font-semibold ${
                tab === t.key
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {items.map((t) => (
            <motion.button
              key={t.Title}
              onClick={() => setSelected(t)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="relative group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 text-left p-6 flex flex-col items-start"
            >
              <div className="w-full flex justify-center items-center mb-4">
                <div className="relative w-28 h-28 md:w-32 md:h-32 transition-transform group-hover:scale-105">
                  <Image
                    src={t.img}
                    alt={t.Title}
                    fill
                    sizes="120px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {t.Title}
              </h3>
              <div className="mt-auto flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <div className="bg-red-50 text-red-700 px-3 py-1 rounded-full font-bold text-xl">
                    <CountUp end={t.num} duration={1.5} />
                  </div>
                  <span className="text-sm text-gray-500">مرة</span>
                </div>
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-red-600 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* إحصائية Pie */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-6">توزيع البطولات</h3>
          <div className="w-full h-80">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  dataKey="value"
                  label
                >
                  {chartData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSelected(null)}
          />
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-6 md:p-10"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              aria-label="إغلاق"
            >
              ✕
            </button>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-36 h-36 relative flex-shrink-0">
                <Image
                  src={selected.img}
                  alt={selected.Title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-extrabold text-gray-900">
                  {selected.Title}
                </h3>
                <p className="mt-2 text-gray-600">
                  عدد المرات:{" "}
                  <span className="font-bold text-red-600">{selected.num}</span>
                </p>
                <div className="grid grid-cols-3 md:grid-cols-6 w-full gap-3 mt-3">
                  {selected.years.map((year, index) => (
                    <p
                      key={index}
                      className="text-white p-2 rounded-xl bg-red-400 text-center"
                    >
                      {year}
                    </p>
                  ))}
                </div>
                <div className="mt-4 text-gray-700 leading-relaxed">
                  <p>
                    هنا يمكنك إضافة نبذة تاريخية عن البطولة وأهم لحظات التتويج
                    وصور المباريات الشهيرة.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
