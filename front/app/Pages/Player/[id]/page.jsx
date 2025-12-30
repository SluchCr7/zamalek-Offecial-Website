'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Globe, Award, Target, Zap, Shield, Heart, Share2, Info, ChevronRight, ChevronLeft, MapPin, Activity, Trophy, Star } from 'lucide-react';
import { zamalekPlayersWithId } from '@/utils/data';

export default function PlayerProfilePage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const id = params?.id ? Number(params.id) : null;

  // Find player by slug/name from data
  // Using loose equality to safely match string/number if params.id format varies, though Number() handles it.
  const playerFromData = zamalekPlayersWithId.find(player => player.id === id);

  if (!playerFromData) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground gap-6">
        <div className="text-9xl font-black text-muted opacity-20">404</div>
        <h2 className="text-3xl font-bold">اللاعب غير موجود</h2>
        <Link href="/Pages/Players/Football" className="px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/80 transition-colors">
          عودة للقائمة
        </Link>
      </div>
    );
  }

  const stats = [
    { label: 'مباريات', value: playerFromData.matches || '24', icon: <Activity size={18} /> },
    { label: 'أهداف', value: playerFromData.goals || '12', icon: <Target size={18} /> },
    { label: 'تمريرات', value: playerFromData.assists || '8', icon: <Zap size={18} /> },
    { label: 'دقائق', value: '1,840', icon: <Shield size={18} /> },
  ];

  return (
    <div className="min-h-screen w-full bg-background text-foreground" dir="rtl">

      {/* Immersive Header: Player Spotlight */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={playerFromData.img || "/no_img.jpg"}
            alt={playerFromData.name}
            fill
            className="object-cover object-top brightness-50 contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-background/40 to-transparent" />
        </div>

        <div className="container mx-auto px-4 h-full flex items-end relative z-10 pb-24">
          <div className="w-full flex flex-col md:flex-row items-end justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center text-white text-4xl font-black font-heading shadow-2xl">
                  {playerFromData.number || '99'}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-primary font-black text-xs uppercase tracking-[0.3em]">
                    <Star size={14} fill="currentColor" />
                    <span>Elite Squad Member</span>
                  </div>
                  <h1 className="text-6xl md:text-9xl font-black font-heading leading-none italic uppercase tracking-tighter">
                    {playerFromData.name.split(' ').map((n, i) => (
                      <span key={i} className={i === 1 ? 'text-primary' : ''}>{n} </span>
                    ))}
                  </h1>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-8 text-[10px] font-black uppercase tracking-widest opacity-60">
                <div className="flex items-center gap-3"><Globe size={14} /> <span>{playerFromData.nationality}</span></div>
                <div className="flex items-center gap-3"><Calendar size={14} /> <span>{playerFromData.birthDate || '01-01-1995'}</span></div>
                <div className="flex items-center gap-3 text-primary"><span>{playerFromData.position}</span></div>
              </div>
            </motion.div>

            <div className="flex gap-4">
              <button className="h-16 px-10 bg-white/10 backdrop-blur-3xl border border-white/20 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-4 hover:bg-white hover:text-black transition-all">
                <Heart size={18} />
                <span>Fan Favorite</span>
              </button>
              <button className="h-16 w-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40 hover:-translate-y-1 transition-all">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Profile Grid */}
      <section className="container mx-auto px-4 py-32 -mt-16 relative z-20">
        <div className="grid lg:grid-cols-12 gap-16">

          {/* Left Content Column (8 Cols) */}
          <div className="lg:col-span-8 space-y-24">

            {/* Stats Overview Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-card border border-border rounded-[3rem] text-center space-y-4 group hover:border-primary transition-all shadow-2xl"
                >
                  <div className="w-12 h-12 rounded-2xl bg-muted text-foreground flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-white transition-all">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-black font-heading italic">{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-40">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Biography & Story */}
            <section className="space-y-12">
              <header className="flex items-center gap-6">
                <h3 className="text-3xl font-black font-heading tracking-tight italic">سيرة البطل</h3>
                <div className="h-px flex-1 bg-border" />
              </header>
              <div className="bg-card border border-border rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
                <Shield size={300} className="absolute -bottom-20 -left-20 text-primary/5 -rotate-12" />
                <div className="relative z-10 space-y-8">
                  <p className="text-2xl font-bold opacity-60 leading-relaxed italic border-r-4 border-primary/20 pr-10">
                    {playerFromData.bio || "لاعب سطر تاريخه بأحرف من نور في القلعة البيضاء، وحقق العديد من البطولات التي جعلت منه أسطورة خالدة في ذاكرة الجماهير الزمالكوية. يتميز بالروح القتالية العالية والولاء المطلق للشعار."}
                  </p>
                  <div className="grid md:grid-cols-2 gap-12 pt-8">
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">نقاط القوة</h4>
                      <div className="flex flex-wrap gap-2">
                        {["السرعة", "التسديد", "الذكاء التكتيكي"].map(tag => (
                          <span key={tag} className="px-5 py-2 bg-muted rounded-xl text-xs font-bold">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">المشاركة الدولية</h4>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Trophy size={18} /></div>
                        <span className="text-sm font-bold opacity-60">عضو دائم في المنتخب الوطني</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Career Journey */}
            <section className="space-y-12">
              <h3 className="text-3xl font-black font-heading tracking-tight italic px-4">المسيرة الكروية</h3>
              <div className="space-y-4">
                {[
                  { year: '2023 - الحاضر', club: 'نادي الزمالك', event: 'انتقال رسمي للفريق الأول' },
                  { year: '2020 - 2023', club: 'نادي فاركو', event: 'تألق في الدوري المصري الممتاز' },
                  { year: '2015 - 2020', club: 'أكاديمية بيبسي', event: 'البدايات والتأسيس' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center gap-8 p-10 bg-card border border-border rounded-[3rem] group hover:border-primary transition-all">
                    <div className="text-2xl font-black font-heading text-primary italic w-32 shrink-0">{item.year}</div>
                    <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <Shield size={24} />
                    </div>
                    <div className="flex-1 space-y-1 text-center md:text-right">
                      <div className="text-xl font-black font-heading">{item.club}</div>
                      <div className="text-xs font-bold opacity-40">{item.event}</div>
                    </div>
                    <ChevronLeft className="opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0" />
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Sidebar Column (4 Cols) */}
          <aside className="lg:col-span-4 space-y-12">

            {/* Fixed Info Card */}
            <div className="bg-card border border-border rounded-[4rem] p-10 shadow-2xl space-y-12">
              <header className="text-center space-y-4">
                <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                <h4 className="text-xl font-black font-heading uppercase tracking-widest">Player Profile</h4>
              </header>

              <div className="space-y-4">
                <InfoRow label="العمر" value={`${playerFromData.age || '25'} سنة`} />
                <InfoRow label="الجنسية" value={playerFromData.nationality} />
                <InfoRow label="المركز" value={playerFromData.position} />
                <InfoRow label="القدم المفضلة" value="اليمنى" />
                <InfoRow label="القيمة السوقية" value={playerFromData.marketValue || '€1.50m'} color="text-primary" />
                <InfoRow label="تاريخ الانضمام" value="Jul 1, 2023" />
              </div>

              <button className="w-full h-20 bg-primary text-white rounded-3xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-primary/40 flex items-center justify-center gap-4 hover:-translate-y-1 transition-all">
                <span>Explore Cards</span>
                <Zap size={18} />
              </button>
            </div>

            {/* Mini Gallery Preview */}
            <div className="bg-card border border-border rounded-[4rem] p-10 shadow-2xl space-y-8">
              <h4 className="text-lg font-black font-heading italic text-center">أبرز التقاطات</h4>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="relative aspect-square rounded-[2rem] overflow-hidden group cursor-pointer">
                    <Image src={playerFromData.img || "/no_img.jpg"} alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

          </aside>

        </div>
      </section>

    </div>
  );
}

function InfoRow({ label, value, color }) {
  return (
    <div className="flex items-center justify-between py-6 border-b border-border/50 last:border-0 px-4">
      <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{label}</span>
      <span className={`text-sm font-black italic ${color || 'opacity-80'}`}>{value}</span>
    </div>
  );
}
