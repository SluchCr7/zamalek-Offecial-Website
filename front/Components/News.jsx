'use client';

import React from 'react';
import { newsList } from '@/utils/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, ArrowRight, Share2, Newspaper } from 'lucide-react';
import Link from 'next/link';

const News = () => {
  const latestNews = {
    title: "الزمالك يواصل استعداداته لمواجهة الإسماعيلي في الدوري",
    description: "خاض الفريق الأول لكرة القدم بنادي الزمالك تدريباته الجماعية اليوم على ملعب النادي بميت عقبة، ضمن الاستعدادات لمواجهة الإسماعيلي المقبلة في مسابقة الدوري المصري الممتاز.",
    image: "/new.jpg",
    category: "أخبار الفريق",
    date: "27 ديسمبر 2025"
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16" dir="rtl">
          <div className="flex items-center gap-2 text-primary mb-4">
            <Newspaper size={18} />
            <span className="text-sm font-black uppercase tracking-widest">التغطية الحصرية</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter">أخبار <span className="text-primary italic">القلعة البيضاء</span></h2>
        </div>

        {/* Featured News */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative grid grid-cols-1 lg:grid-cols-2 rounded-[2.5rem] overflow-hidden bg-card border border-border shadow-2xl shadow-black/5 mb-12"
          dir="rtl"
        >
          {/* Image Side */}
          <div className="relative aspect-video lg:aspect-auto group overflow-hidden">
            <Image
              src={latestNews.image}
              alt={latestNews.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

            {/* Category Tag */}
            <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-tighter">
              {latestNews.category}
            </div>
          </div>

          {/* Content Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center items-start">
            <div className="flex items-center gap-2 text-primary font-black text-xs mb-4 uppercase tracking-[0.2em]">آخر خبر</div>
            <h3 className="text-3xl md:text-4xl font-black font-heading mb-6 tracking-tight leading-tight group-hover:text-primary transition-colors">
              {latestNews.title}
            </h3>
            <p className="text-lg font-bold opacity-60 leading-relaxed mb-8">
              {latestNews.description}
            </p>

            <div className="flex items-center justify-between w-full mt-auto pt-8 border-t border-border">
              <div className="flex items-center gap-3 opacity-60">
                <Calendar size={16} className="text-primary" />
                <span className="text-xs font-black">{latestNews.date}</span>
              </div>

              <Link
                href="/Pages/News/Featured"
                className="flex items-center gap-2 text-sm font-black text-primary hover:gap-4 transition-all"
              >
                اقرأ الخبر كاملاً
                <ArrowLeft size={18} />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" dir="rtl">
          {newsList.slice(0, 3).map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-[2rem] border border-border overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/new.jpg"
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-[2px] bg-primary" />
                  <span className="text-[10px] font-black uppercase tracking-tighter text-primary">الزمالك</span>
                </div>
                <h4 className="text-xl font-black font-heading mb-6 line-clamp-2 min-h-[3.5rem] leading-tight group-hover:text-primary transition-colors">
                  {news.title}
                </h4>

                <div className="flex items-center justify-between opacity-40 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span className="text-[10px] font-bold">{news.date || "اليوم"}</span>
                  </div>
                  <button className="p-2 rounded-full hover:bg-muted transition-colors">
                    <Share2 size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Action */}
        <div className="mt-16 text-center">
          <Link
            href="/Pages/News"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border font-black text-sm hover:bg-primary hover:text-white hover:border-primary transition-all group"
          >
            <span>عرض كافة الأخبار</span>
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default News;
