'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight, ArrowLeft } from 'lucide-react';
import { Carousel } from './ui/carousel';

export default function TeamsSlider() {
  const slideDataTeams = [
    { title: "فريق كرة القدم (رجال)", src: "/squads/foot-min.png", category: "الأول", open: true },
    { title: "فريق كرة القدم (سيدات)", src: "/squads/football-min.png", category: "سيدات", open: false },
    { title: "فريق كرة السلة", src: "/squads/basket-min.png", category: "صالات", open: false },
    { title: "فريق الكرة الطائرة (رجال)", src: "/squads/volly-min.png", category: "صالات", open: false },
    { title: "فريق الكرة الطائرة (سيدات)", src: "/squads/vollyzsc.png", category: "سيدات", open: false },
    { title: "فريق كرة اليد (رجال)", src: "/squads/hand-min.png", category: "صالات", open: false },
    { title: "فريق كرة اليد (سيدات)", src: "/squads/handball-min.png", category: "سيدات", open: false },
  ];

  return (
    <section id="teams" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6" dir="rtl">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] mb-4"
            >
              <Users size={14} />
              <span>قطاع النشاط الرياضي</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tighter leading-none mb-4">
              فرق <span className="text-primary italic">الملكي</span>
            </h2>
            <p className="text-sm md:text-lg font-bold opacity-60 leading-relaxed">
              تعرف على أبطال القلعة البيضاء في مختلف اللعبات. تاريخ مرصع بالذهب وإنجازات لا تتوقف في كافة الميادين.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-border" />
            <span className="text-[10px] font-black uppercase tracking-widest opacity-40">اسحب للاستكشاف</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative -mx-4 md:mx-0">
          <Carousel slides={slideDataTeams} />
        </div>

      </div>
    </section>
  );
}
