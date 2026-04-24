'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowLeft, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
  const yText = useTransform(scrollY, [0, 400], [0, -100]);

  return (
    <section className="relative w-full h-[100vh] min-h-[850px] bg-background text-foreground overflow-hidden flex items-center" dir="rtl">

      {/* Background Texture & Noise */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background/80 to-background z-0" />

      {/* Main Container - Asymmetrical Grid */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between mx-auto">

        {/* Right Section (Text & CTA) */}
        <motion.div
          style={{ opacity: opacityText, y: yText }}
          className="w-full lg:w-[55%] h-full flex flex-col justify-center px-6 md:px-16 pt-32 lg:pt-0 relative z-20"
        >
          {/* Zamalek Two Lines as Structural Decor */}
          <div className="absolute top-0 right-0 h-full w-4 flex flex-col gap-[3px] opacity-20 pointer-events-none">
            <div className="h-full w-[2px] bg-primary/80 shadow-[0_0_15px_rgba(227,27,35,0.8)]" />
            <div className="h-full w-[2px] bg-primary/80 shadow-[0_0_15px_rgba(227,27,35,0.8)]" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.2em] mb-6">
              <ShieldAlert size={20} className="drop-shadow-[0_0_10px_rgba(227,27,35,0.8)]" />
              <span>نادي القرن الحقيقي</span>
              <div className="h-px w-24 bg-gradient-to-l from-primary to-transparent" />
            </div>

            <h1 className="text-6xl md:text-[6rem] lg:text-[7rem] font-black leading-[0.9] tracking-tighter mb-8 group">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/60 drop-shadow-lg">
                مدرسة الفن
              </span>
              <span className="block italic text-primary drop-shadow-[0_0_40px_rgba(227,27,35,0.4)] relative inline-block">
                والهندسة
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
                  className="absolute -bottom-2 right-0 h-2 bg-gradient-to-l from-primary to-transparent"
                />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/50 font-bold max-w-xl mb-12 leading-loose border-r-4 border-primary pl-6 py-2 bg-gradient-to-l from-foreground/5 to-transparent backdrop-blur-sm">
              أكثر من مجرد نادي رياضي، هو شغف يتوارثه الملايين وهوية تصنع المجد. الزمالك ليس فقط بطولات، بل هو فن اللعب وروح الفرسان البيضاء.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="/Pages/Fixtures"
                className="group relative flex items-center justify-center gap-4 bg-primary text-white w-full sm:w-auto px-10 py-5 rounded-none skew-x-[-10deg] font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_15px_40px_-10px_rgba(227,27,35,0.6)] overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out skew-x-[10deg]" />
                <span className="skew-x-[10deg] relative z-10 flex items-center gap-3">
                  اكتشف المباريات
                  <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
                </span>
              </Link>

              <Link
                href="/Pages/Store"
                className="group relative flex items-center justify-center gap-4 bg-transparent text-foreground w-full sm:w-auto px-10 py-5 rounded-none skew-x-[-10deg] font-bold text-lg border border-foreground/20 backdrop-blur-md transition-all hover:bg-foreground/10 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-foreground/5 -translate-x-[200%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out skew-x-[10deg]" />
                <span className="skew-x-[10deg] relative z-10 flex items-center gap-3">
                  <Play size={16} fill="white" />
                  المتجر الرسمي
                </span>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Left Section (Abstract Clipped Image & Stats) */}
        <div className="w-full lg:w-[45%] h-[50vh] lg:h-full relative mt-16 lg:mt-0">

          {/* Main Image Masked */}
          <motion.div
            initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full bg-primary overflow-hidden shadow-[-20px_0_50px_rgba(0,0,0,0.8)]"
          >
            <motion.div style={{ y: yImage }} className="w-full h-[120%] -top-[10%] relative filter grayscale-[0.0] contrast-125 saturate-150">
              <video
                src="/zamalek.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover opacity-80 w-full h-full pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-transparent to-background/90 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 pointer-events-none" />
            </motion.div>
          </motion.div>

          {/* Floating Glassmorphism Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute left-4 lg:-left-16 bottom-[10%] lg:bottom-1/4 flex flex-col gap-4 z-30"
          >
            {[
              { title: "سنة التأسيس", value: "1911", desc: "تاريـخ عـريـق" },
              { title: "أبطال أفريقيا", value: "5", desc: "دوري الأبطـال" }
            ].map((stat, i) => (
              <div key={i} className="bg-background/80 backdrop-blur-2xl border border-foreground/10 p-5 w-48 md:w-56 shadow-[0_10px_30px_rgba(0,0,0,0.5)] skew-x-[-10deg] hover:scale-105 hover:-translate-y-2 transition-transform duration-500 cursor-default">
                <div className="skew-x-[10deg]">
                  <h4 className="text-primary text-[10px] uppercase font-black tracking-widest mb-1">{stat.title}</h4>
                  <div className="text-4xl font-black font-heading text-foreground">{stat.value}</div>
                  <div className="text-xs text-foreground/40 font-bold">{stat.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
