'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Tv,
    Youtube,
    Play,
    Users,
    Calendar,
    Radio,
    ExternalLink,
    Info,
    Clock,
    Heart,
    ChevronLeft,
    ChevronRight,
    ShieldCheck,
    Signal
} from 'lucide-react'
import { zamalekTV } from '@/utils/data'

export default function ZamalekTVPage() {
    const [activeVideo, setActiveVideo] = useState(zamalekTV.videos[0]);
    const [selectedStaff, setSelectedStaff] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div dir="rtl" className="min-h-screen bg-slate-50 dark:bg-[#080808] text-foreground transition-colors duration-500 overflow-hidden w-full">

            {/* TV Static / Signal Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[180px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-red-600/5 rounded-full blur-[150px]" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] dark:opacity-[0.05]" />
            </div>

            <main className="relative z-10">

                {/* HERO SECTION: Ultra-Premium Broadcast Look */}
                <section className="relative h-[85vh] flex items-center justify-center overflow-hidden border-b border-border bg-black">
                    <div className="absolute inset-0 z-0 scale-105">
                        <Image
                            src="/TV/studio_bg.jpg"
                            alt="Zamalek TV Studio"
                            fill
                            className="object-cover opacity-50 grayscale-[0.2] transition-transform duration-[20s] animate-subtle-zoom"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-12">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-primary border-4 border-white/10 shadow-[0_0_50px_rgba(227,27,35,0.6)]"
                        >
                            <span className="relative flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-white shadow-[0_0_10px_white]"></span>
                            </span>
                            <span className="text-white font-black tracking-[0.3em] text-sm uppercase">ON AIR LIVE</span>
                        </motion.div>

                        <div className="space-y-6">
                            <motion.h1
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-7xl md:text-[10rem] font-black text-white mb-6 tracking-tighter leading-none italic"
                            >
                                قناة <span className="text-primary italic drop-shadow-[0_0_30px_rgba(227,27,35,0.5)]">الزمالك</span>
                            </motion.h1>

                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl md:text-4xl text-white/60 max-w-4xl mx-auto font-black italic tracking-tight"
                            >
                                {zamalekTV.details.slogan} <span className="mx-4 text-primary opacity-50">/</span> التردد {zamalekTV.details.frequency}
                            </motion.p>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255,255,255,0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-14 py-6 rounded-[2.5rem] bg-white text-black font-black flex items-center gap-4 shadow-2xl transition-all group overflow-hidden relative"
                            >
                                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                                <Play className="w-6 h-6 fill-current group-hover:scale-125 transition-transform" />
                                <span className="text-xl">دخول البث الإلكتروني</span>
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-14 py-6 rounded-[2.5rem] bg-white/5 backdrop-blur-2xl border-2 border-white/10 text-white font-black flex items-center gap-4 transition-all"
                            >
                                <Radio className="w-6 h-6" />
                                <span className="text-xl">مواعيد البرامج</span>
                            </motion.button>
                        </div>
                    </div>

                    {/* Pro News Ticker */}
                    <div className="absolute bottom-0 left-0 w-full bg-[#E31B23] py-5 overflow-hidden border-t border-white/20 shadow-[0_-10px_50px_rgba(227,27,35,0.3)]">
                        <div className="flex whitespace-nowrap animate-scroll items-center gap-20 text-white font-black text-xs uppercase tracking-[0.2em] italic">
                            {[...Array(10)].map((_, i) => (
                                <React.Fragment key={i}>
                                    <span className="flex items-center gap-4"><Tv size={18} /> Nilesat 11449 Horizontal</span>
                                    <span className="flex items-center gap-4 opacity-40"><Signal size={18} /> Symbol Rate 27500</span>
                                    <span className="flex items-center gap-4"><ShieldCheck size={18} /> صـوت القـلعة البيـضـاء</span>
                                    <span className="flex items-center gap-4 opacity-40"><Heart size={18} /> فـن وهـنـدسة دائـمـة</span>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION: Channel Info & History - Refined Colors */}
                <section className="py-40 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div className="inline-flex items-center gap-3 text-primary font-black mb-6 text-xs tracking-[0.4em] uppercase py-2 px-6 bg-primary/5 rounded-full border border-primary/10">
                                <Info className="w-4 h-4" />
                                CHANNEL PROFILE
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter italic">
                                منبر القلعة <br /> <span className="text-primary italic">والشاشة الرسمية</span>
                            </h2>
                            <p className="text-2xl text-muted-foreground leading-relaxed italic font-medium opacity-80">
                                {zamalekTV.details.description}
                            </p>

                            <div className="grid grid-cols-2 gap-12 py-12 border-y border-border">
                                <div className="space-y-2">
                                    <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Launch Date</h4>
                                    <p className="text-3xl font-black italic">{zamalekTV.details.launchDate}</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Network Group</h4>
                                    <p className="text-3xl font-black italic">United Media</p>
                                </div>
                            </div>

                            <div className="pt-8">
                                <Link href="https://www.youtube.com/@ZamalekSC" target="_blank">
                                    <button className="flex items-center gap-4 text-2xl font-black hover:text-primary transition-all group italic">
                                        <Youtube className="w-12 h-12 text-[#FF0000] drop-shadow-[0_0_15px_rgba(255,0,0,0.3)] group-hover:scale-110 transition-transform" />
                                        زيارة الأرشيف الرقمي على يوتيوب
                                    </button>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-video rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-[12px] border-white dark:border-[#121212] transition-transform hover:scale-[1.02] duration-700"
                        >
                            <Image
                                src="/TV/channel_preview.jpg"
                                alt="Channel Preview"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-primary/10 backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-all duration-500">
                                <div className="w-28 h-28 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_50px_rgba(227,27,35,0.6)] animate-pulse">
                                    <Play size={48} fill="currentColor" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* SECTION: Video Gallery - Dark Mode Optimized */}
                <section className="py-40 bg-zinc-100 dark:bg-[#0c0c0c] relative overflow-hidden border-y border-border">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                            <div className="space-y-4">
                                <h2 className="text-6xl font-black italic tracking-tighter flex items-center gap-6">
                                    <Youtube size={64} className="text-[#FF0000]" />
                                    أحدث المقتطفات
                                </h2>
                                <p className="text-2xl text-muted-foreground font-medium italic opacity-60">تغطية حصرية وبرامج يومية بأعلى جودة</p>
                            </div>
                            <Link href={"/Pages/Videos"} className="px-12 py-5 rounded-2xl bg-white dark:bg-white/5 border border-border font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl">
                                مشاهدة الأرشيف الكامل
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                            {/* Featured Player - Pro Frame */}
                            <div className="lg:col-span-2 space-y-10 group">
                                <div className="relative aspect-video rounded-[3.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.2)] bg-black border border-white/10 transition-transform duration-700 group-hover:scale-[1.01]">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=0&modestbranding=1&rel=0`}
                                        title={activeVideo.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-12 rounded-[3.5rem] bg-white dark:bg-[#121212] border border-border shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full blur-2xl" />
                                    <h3 className="text-4xl font-black mb-6 italic tracking-tight relative z-10">{activeVideo.title}</h3>
                                    <div className="flex items-center gap-10 text-muted-foreground font-bold italic relative z-10">
                                        <span className="flex items-center gap-3"><Clock size={20} className="text-primary" /> ديسمبر 2025</span>
                                        <span className="flex items-center gap-3"><Play size={20} className="text-primary" /> +1.5M Viewers</span>
                                    </div>
                                </div>
                            </div>

                            {/* Playlist - Clean Design */}
                            <div className="space-y-8">
                                <h4 className="text-xs font-black uppercase tracking-[0.5em] text-primary opacity-60 px-4">Up Next / Playlist</h4>
                                <div className="space-y-4 max-h-[700px] overflow-y-auto pr-4 custom-scrollbar">
                                    {zamalekTV.videos.map((vid) => (
                                        <div
                                            key={vid.id}
                                            onClick={() => setActiveVideo(vid)}
                                            className={`p-6 rounded-3xl cursor-pointer transition-all duration-500 border ${activeVideo.id === vid.id ? 'bg-primary/10 border-primary shadow-2xl shadow-primary/10' : 'bg-white dark:bg-white/5 border-transparent hover:border-primary/40'}`}
                                        >
                                            <div className="flex gap-6">
                                                <div className="relative w-32 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
                                                    <Image
                                                        src={`https://img.youtube.com/vi/${vid.id}/mqdefault.jpg`}
                                                        alt={vid.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                    <div className={`absolute inset-0 bg-primary/20 transition-opacity duration-500 ${activeVideo.id === vid.id ? 'opacity-100' : 'opacity-0'}`} />
                                                </div>
                                                <div className="flex flex-col justify-center gap-2">
                                                    <h5 className={`font-black text-sm line-clamp-2 leading-tight italic ${activeVideo.id === vid.id ? 'text-primary' : ''}`}>{vid.title}</h5>
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Original Content</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION: Staff / Media Stars - Pro Look */}
                <section className="py-40 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24 space-y-6">
                        <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter">صنّاع <span className="text-primary italic">المحتوى</span></h2>
                        <p className="text-2xl text-muted-foreground max-w-2xl mx-auto font-medium opacity-60 italic">نخبة من الإعلاميين والنجوم يقودون السفينة الإعلامية لنادي القرن الإفريقي.</p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
                    >
                        {zamalekTV.staff.map((member, idx) => (
                            <motion.div
                                key={member.name}
                                variants={itemVariants}
                                whileHover={{ y: -15 }}
                                onClick={() => setSelectedStaff(member)}
                                className="group relative h-[500px] rounded-[4rem] overflow-hidden cursor-pointer shadow-3xl bg-zinc-900 border border-white/10"
                            >
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    fill
                                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity" />

                                <div className="absolute inset-0 p-10 flex flex-col justify-end transform transition-all duration-500 group-hover:translate-y-[-10px]">
                                    <div className="space-y-4">
                                        <div className="inline-block px-4 py-1 rounded-full bg-primary text-white text-[9px] font-black uppercase tracking-[0.3em]">{member.role}</div>
                                        <h3 className="text-3xl font-black text-white italic tracking-tight">{member.name}</h3>
                                        <div className="h-1.5 w-0 bg-primary group-hover:w-full transition-all duration-700 rounded-full" />
                                    </div>
                                </div>
                                <div className="absolute inset-4 border border-white/0 group-hover:border-white/10 rounded-[3rem] pointer-events-none transition-all duration-700" />
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* SECTION: Weekly Programs - Luxury Styling */}
                <section className="py-40 bg-zinc-50 dark:bg-black/40 border-y border-border relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]" />
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="flex items-center gap-6 mb-24">
                            <div className="w-20 h-20 rounded-3xl bg-primary text-white flex items-center justify-center shadow-2xl shadow-primary/30">
                                <Calendar className="w-10 h-10" />
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter">شبكة <span className="text-primary italic">البرامج</span> الأسبوعية</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {zamalekTV.programs.map((program, idx) => (
                                <motion.div
                                    key={program.title}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{ y: -10 }}
                                    className="p-12 rounded-[4rem] bg-white dark:bg-[#121212] border border-border shadow-3xl hover:border-primary/40 transition-all flex flex-col sm:flex-row gap-10 items-start md:items-center relative overflow-hidden group"
                                >
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="w-24 h-24 rounded-[2.5rem] bg-muted dark:bg-[#1a1a1a] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner flex-shrink-0">
                                        <Clock size={40} />
                                    </div>
                                    <div className="space-y-4 relative z-10">
                                        <div className="inline-block px-5 py-2 rounded-2xl bg-primary/10 text-primary text-xs font-black italic">{program.time}</div>
                                        <h3 className="text-3xl font-black italic tracking-tight">{program.title}</h3>
                                        <p className="text-xl text-muted-foreground leading-relaxed italic opacity-60 font-medium">
                                            "{program.description}"
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CALL TO ACTION - Pro Branding */}
                <section className="py-40 px-6 flex justify-center">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-6xl w-full p-20 md:p-32 rounded-[6rem] bg-foreground text-background text-center relative overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.3)]"
                    >
                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05]" />
                        <div className="absolute top-[-30%] left-[-20%] w-[70%] h-[70%] bg-primary/20 rounded-full blur-[180px]" />

                        <div className="relative z-10 space-y-12">
                            <Tv className="w-24 h-24 mx-auto text-primary mb-10 animate-pulse" />
                            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-none italic">
                                انضم لملايين <br /> <span className="text-primary italic">المشتركين الرقميين</span>
                            </h2>
                            <p className="text-2xl md:text-3xl opacity-60 mb-16 max-w-3xl mx-auto leading-relaxed italic font-medium">
                                كن أول من يشاهد الكواليس الحصرية وتدريبات الفريق الأول عبر اشتراكك في قناتنا الرسمية.
                            </p>
                            <Link href="https://www.youtube.com/@ZamalekSC" target="_blank" className="inline-flex items-center gap-6 px-16 py-8 rounded-[3rem] bg-primary text-white font-black text-2xl hover:shadow-[0_0_80px_rgba(227,27,35,0.6)] transition-all hover:-translate-y-2 active:scale-95 shadow-2xl">
                                إشترك في قناة اليوتيوب
                                <ExternalLink size={28} />
                            </Link>
                        </div>
                    </motion.div>
                </section>

            </main>

            {/* Staff Detail Modal - Luxury Edition */}
            <AnimatePresence>
                {selectedStaff && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12"
                    >
                        <div className="absolute inset-0 bg-black/95 backdrop-blur-3xl" onClick={() => setSelectedStaff(null)} />
                        <motion.div
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            className="relative bg-white dark:bg-[#121212] max-w-6xl w-full rounded-[4.5rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_80px_150px_rgba(0,0,0,0.5)] border border-white/5"
                        >
                            <div className="w-full lg:w-[45%] h-[400px] lg:h-auto relative">
                                <Image src={selectedStaff.img} alt={selectedStaff.name} fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent lg:hidden" />
                            </div>
                            <div className="p-16 md:p-24 flex-1 flex flex-col justify-center space-y-10">
                                <div>
                                    <div className="text-primary font-black uppercase tracking-[0.4em] mb-4 text-xs">OFFICIAL PRESENTER</div>
                                    <h2 className="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter">{selectedStaff.name}</h2>
                                    <div className="h-1.5 w-24 bg-primary rounded-full" />
                                </div>
                                <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed italic font-medium opacity-80">
                                    "{selectedStaff.bio}"
                                </p>
                                <button
                                    onClick={() => setSelectedStaff(null)}
                                    className="px-12 py-5 rounded-[2rem] bg-zinc-100 dark:bg-white/5 font-black text-lg hover:bg-primary hover:text-white transition-all w-fit shadow-xl"
                                >
                                    إغلاق الشاشة
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                @keyframes scroll {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
                 @keyframes subtle-zoom {
                    0% { transform: scale(1); }
                    100% { transform: scale(1.1); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
                .animate-subtle-zoom {
                    animation: subtle-zoom 20s ease-in-out infinite alternate;
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(227, 27, 35, 0.2);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(227, 27, 35, 0.6);
                }
            `}</style>
        </div>
    )
}
