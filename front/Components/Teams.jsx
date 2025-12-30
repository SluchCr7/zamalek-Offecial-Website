'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Trophy, ChevronRight, Activity, ArrowUpRight, Dumbbell, Target } from 'lucide-react';
import { CiBasketball } from "react-icons/ci";
import { FaVolleyballBall } from "react-icons/fa";

const teams = [
  {
    id: 1,
    title: "كرة القدم",
    subtitle: "الفريق الأول (رجال)",
    img: "/squads/foot-min.png",
    category: "The Royals",
    link: "/Pages/Players/Football",
    icon: Dumbbell, // Placeholder for Football ball if needed, or stick to generic
    color: "from-red-600 to-red-900"
  },
  {
    id: 3,
    title: "كرة السلة",
    subtitle: "ملوك الصالات",
    img: "/squads/basket-min.png",
    category: "Basketball",
    link: "/Pages/Players/Basketball",
    icon: CiBasketball,
    color: "from-orange-500 to-orange-700"
  },
  {
    id: 4,
    title: "الكرة الطائرة",
    subtitle: "أسياد الشبكة",
    img: "/squads/volly-min.png",
    category: "Volleyball",
    link: "/Pages/Players/Volleyball",
    icon: FaVolleyballBall,
    color: "from-blue-500 to-blue-700"
  },
  {
    id: 6,
    title: "كرة اليد",
    subtitle: "كوماندوز اليد",
    img: "/squads/hand-min.png",
    category: "Handball",
    link: "/Pages/Players/Handball",
    icon: Target,
    color: "from-purple-500 to-purple-800"
  },
  {
    id: 2,
    title: "سيدات القدم",
    subtitle: "فريق السيدات",
    img: "/squads/football-min.png",
    category: "Women's Team",
    link: "/Pages/Players/Women",
    icon: Users,
    color: "from-pink-500 to-pink-700"
  },
  {
    id: 5,
    title: "سيدات الطائرة",
    subtitle: "فتيات الذهب",
    img: "/squads/vollyzsc.png",
    category: "Women's Team",
    link: "/Pages/Players/Women",
    icon: FaVolleyballBall,
    color: "from-yellow-500 to-yellow-700"
  },
  {
    id: 7,
    title: "سيدات اليد",
    subtitle: "بطلات الصالات",
    img: "/squads/handball-min.png",
    category: "Women's Team",
    link: "/Pages/Players/Women",
    icon: Target,
    color: "from-teal-500 to-teal-700"
  },
];

export default function TeamsSlider() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-32 relative overflow-hidden bg-background" dir="rtl">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4 max-w-2xl"
          >
            <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.2em] text-xs">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              <span>Sports Sector</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black font-heading tracking-tighter italic leading-[0.9]">
              FIGHT FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">GLORY</span>
            </h2>
            <p className="text-lg opacity-60 font-bold max-w-xl border-r-4 border-primary/20 pr-6">
              استكشف فرق النادي الملكي العريقة. أبطال يسطرون التاريخ في كل لعبة، وجمهور لا يقبل إلا بالذهب.
            </p>
          </motion.div>

          {/* Decorative Stats */}
          <div className="hidden lg:flex items-center gap-12 opacity-40">
            <div className="text-center">
              <div className="text-4xl font-black font-heading">7+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold">Teams</div>
            </div>
            <div className="w-px h-12 bg-foreground/20" />
            <div className="text-center">
              <div className="text-4xl font-black font-heading">100+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold">Champions</div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[800px] md:h-[600px]">
          {teams.map((team, index) => (
            <TeamCard
              key={team.id}
              team={team}
              index={index}
              isHovered={hovered === team.id}
              setHovered={setHovered}
              className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function TeamCard({ team, index, isHovered, setHovered, className }) {
  const Icon = team.icon;

  return (
    <Link
      href={team.link}
      className={`relative group overflow-hidden rounded-[2rem] border border-border/50 bg-card transition-all duration-700 ${className}`}
      onMouseEnter={() => setHovered(team.id)}
      onMouseLeave={() => setHovered(null)}
    >
      {/* Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={team.img}
          alt={team.title}
          fill
          className={`object-cover transition-transform duration-1000 will-change-transform ${isHovered ? 'scale-110 grayscale-0' : 'scale-100 grayscale'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${team.color} opacity-40 mix-blend-multiply transition-opacity duration-500 ${isHovered ? 'opacity-60' : 'opacity-40'}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Content Layer */}
      <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
        <div className={`space-y-4 transition-all duration-500 transform ${isHovered ? 'translate-y-0' : 'translate-y-4'}`}>
          {/* Badge */}
          <div className="flex items-center justify-between">
            <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              <Icon size={12} />
              <span>{team.category}</span>
            </div>
            <div className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transition-all duration-500 ${isHovered ? 'rotate-[-45deg] bg-primary' : 'rotate-0'}`}>
              <ArrowUpRight size={18} />
            </div>
          </div>

          {/* Titles */}
          <div>
            <h3 className="text-3xl font-black font-heading text-white italic tracking-tight leading-none mb-1">
              {team.title}
            </h3>
            <p className={`text-sm text-white/60 font-bold transition-all duration-500 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {team.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Hover Overlay Effect (Glass) */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-white/5 to-transparent" />
    </Link>
  );
}
