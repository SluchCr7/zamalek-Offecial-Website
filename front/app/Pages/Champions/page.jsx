"use client";
import { useState } from "react";
import { zamalekTitles } from "@/data/zamalekTitles"; // مكان ملف الداتا عندك
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = ["الكل", "محلية", "قارية", "إقليمية"];
const COLORS = ["#E30613", "#1E40AF", "#FACC15"]; // احمر - أزرق - اصفر

export default function ZamalekTrophiesPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [selectedTitle, setSelectedTitle] = useState(null);

  // فلترة حسب التاب
  const filteredTitles =
    activeCategory === "الكل"
      ? zamalekTitles
      : zamalekTitles.filter((t) => t.category === activeCategory);

  // حساب الاحصائيات
  const stats = zamalekTitles.reduce(
    (acc, t) => {
      acc.total += t.num;
      if (t.category === "محلية") acc.local += t.num;
      if (t.category === "قارية") acc.african += t.num;
      if (t.category === "إقليمية") acc.regional += t.num;
      return acc;
    },
    { total: 0, local: 0, african: 0, regional: 0 }
  );

  const pieData = [
    { name: "محلية", value: stats.local },
    { name: "قارية", value: stats.african },
    { name: "إقليمية", value: stats.regional },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 dark:bg-Black-100 py-10 px-4 md:px-8">
      {/* Hero */}
      <section className="text-center mb-10">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-red-600 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🏆 بطولات نادي الزمالك
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-300">
          كل الإنجازات والبطولات المحلية والقارية والإقليمية في تاريخ النادي
        </p>
      </section>

      {/* Counters */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-12">
        <Counter label="إجمالي" value={stats.total} />
        <Counter label="محلية" value={stats.local} />
        <Counter label="قارية" value={stats.african} />
        <Counter label="إقليمية" value={stats.regional} />
      </section>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-2xl font-semibold transition ${
              activeCategory === cat
                ? "bg-red-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Titles Grid */}
      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTitles.map((trophy) => (
          <motion.div
            key={trophy.Title}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 cursor-pointer flex flex-col items-center text-center"
            onClick={() => setSelectedTitle(trophy)}
          >
            <Image src={trophy.img} alt={trophy.Title} width={80} height={80} />
            <h3 className="mt-4 text-lg font-bold text-gray-800 dark:text-white">
              {trophy.Title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">عدد البطولات: {trophy.num}</p>
          </motion.div>
        ))}
      </section>

      {/* Pie Chart */}
      <section className="mt-16 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow">
        <h2 className="text-center text-xl font-bold mb-4 text-gray-800 dark:text-white">
          توزيع البطولات
        </h2>
        <div className="w-full h-72">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Modal */}
      {selectedTitle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg w-96 max-h-[80vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-4 text-red-600">{selectedTitle.Title}</h3>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              عدد البطولات: {selectedTitle.num}
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              {selectedTitle.years.map((year, i) => (
                <li key={i}>{year}</li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedTitle(null)}
              className="mt-4 w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Counter({ label, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4"
    >
      <p className="text-2xl font-bold text-red-600">{value}</p>
      <p className="text-gray-600 dark:text-gray-300">{label}</p>
    </motion.div>
  );
}
