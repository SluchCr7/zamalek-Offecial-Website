'use client'
import React from "react";
import { zamalekLegends } from "@/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";

const LegendsPage = () => {
  return (
    <div dir="rtl" className="w-full bg-gradient-to-b from-white to-gray-50">
      
      {/* ===== Header Section ===== */}
      <header className="relative text-center py-12 px-4 bg-gradient-to-b from-red-600/10 to-transparent">
        <div className="flex flex-col items-center gap-4">
          {/* <Image
            src="/zamalek-logo.png"
            alt="Zamalek Logo"
            width={120}
            height={120}
            className="drop-shadow-lg"
          /> */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-700">
            أساطير نادي الزمالك
          </h1>
          <p className="max-w-2xl text-gray-700 text-lg">
            تاريخ طويل من البطولات والإنجازات، نجوم حملوا راية القلعة البيضاء وألهموا الأجيال.
          </p>
        </div>
      </header>

      {/* ===== Featured Legend (First Player) ===== */}
      {zamalekLegends.length > 0 && (
        <section className="relative flex flex-col md:flex-row items-center min-h-[80vh] px-6 py-12 gap-6">
          {/* صورة اللاعب */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full md:w-1/2 h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image
              src={zamalekLegends[0].img}
              alt={zamalekLegends[0].name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </motion.div>

          {/* معلومات اللاعب */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 w-full md:w-1/2 text-right"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-red-700">
              {zamalekLegends[0].name}
            </h2>
            <p className="text-gray-700">
              <span className="font-bold text-black">المركز:</span> {zamalekLegends[0].position}
            </p>
            <p className="text-gray-700">
              <span className="font-bold text-black">الفترة:</span> {zamalekLegends[0].period}
            </p>
            <div className="flex flex-wrap gap-2">
              {zamalekLegends[0].titles.map((title, tIdx) => (
                <span
                  key={tIdx}
                  className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm"
                >
                  🏆 {title}
                </span>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed">
              {zamalekLegends[0].bio}
            </p>
          </motion.div>
        </section>
      )}

      {/* ===== Legends Grid ===== */}
      <section className="px-6 py-12">
        <h3 className="text-2xl font-bold text-red-700 mb-6 text-center">
          باقي الأساطير
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {zamalekLegends.slice(1).map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative w-full h-[300px]">
                <Image
                  src={person.img}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-4 text-right">
                <h4 className="text-xl font-bold text-red-700">{person.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{person.position}</p>
                <div className="flex flex-wrap gap-1">
                  {person.titles.slice(0, 2).map((title, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-red-50 text-red-700 px-2 py-0.5 rounded-full text-xs"
                    >
                      🏆 {title}
                    </span>
                  ))}
                  {person.titles.length > 2 && (
                    <span className="text-xs text-gray-500">+{person.titles.length - 2} بطولات</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Footer Call-to-Action ===== */}
      <footer className="text-center py-8 bg-gradient-to-t from-gray-100 to-transparent">
        <p className="text-gray-700">
          اكتشف المزيد عن تاريخ وبطولات نادي الزمالك عبر موقعنا الرسمي.
        </p>
      </footer>
    </div>
  );
};

export default LegendsPage;
