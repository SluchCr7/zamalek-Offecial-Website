'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Trophy, ArrowLeft, Play, Calendar } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-screen min-h-[700px] flex items-center overflow-hidden bg-black">
      {/* Background with subtle animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/naserHead.jpg"
          alt="Zamalek Hero"
          fill
          className="object-cover opacity-60 grayscale-[0.2]"
          priority
        />
        {/* Dynamic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </motion.div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mr-auto text-right" dir="rtl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary mb-6"
          >
            <Trophy size={16} />
            <span className="text-sm font-bold tracking-wider uppercase">نادي القرن الحقيقي</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-6 font-heading"
          >
            مدرسة الفن <br />
            <span className="text-primary italic">والهندسة</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-white/70 max-w-2xl mb-10 leading-relaxed font-body"
          >
            تاريخ عريق من المجد والبطولات، نبض قلب الملايين. الزمالك ليس مجرد نادٍ، بل هو أسلوب حياة وهوية تتوارثها الأجيال.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 justify-start direction-rtl"
          >
            <Link
              href="/Pages/Fixtures"
              className="group flex items-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-primary/20"
            >
              <span>المباراة القادمة</span>
              <Calendar size={20} className="group-hover:-translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/Pages/Store"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 px-8 py-4 rounded-full font-bold transition-all"
            >
              <span>تسوق الآن</span>
              <Play size={18} fill="white" />
            </Link>
          </motion.div>

          {/* Stats / Quick Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="my-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8 max-w-lg mr-auto"
          >
            <div>
              <div className="text-3xl font-black text-white font-heading">1911</div>
              <div className="text-sm text-white/50 uppercase font-bold">تأسيس</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white font-heading">14</div>
              <div className="text-sm text-white/50 uppercase font-bold">دوري مصري</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white font-heading">5</div>
              <div className="text-sm text-white/50 uppercase font-bold">أبطال أفريقيا</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 bottom-0 top-0 w-1/4 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 text-[30rem] font-black text-white/[0.03] rotate-90 select-none leading-none">
          ZAMALEK
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
