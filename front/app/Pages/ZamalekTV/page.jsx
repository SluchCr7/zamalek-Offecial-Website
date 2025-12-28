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

            {/* Dynamic Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/5 rounded-full blur-[120px]" />
            </div>

            <main className="relative z-10">

                {/* HERO SECTION: Live Broadcast Feel */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-border bg-black">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/TV/studio_bg.jpg" // Placeholder or generic studio image
                            alt="Zamalek TV Studio"
                            fill
                            className="object-cover opacity-60 grayscale-[0.5]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="mb-8 inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary border-2 border-primary/20 shadow-[0_0_30px_rgba(227,27,35,0.4)]"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                            </span>
                            <span className="text-white font-black tracking-widest text-sm">البث المباشر</span>
                        </motion.div>

                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight"
                        >
                            قناة <span className="text-primary italic">الزمالك</span>
                        </motion.h1>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl text-white/80 max-w-2xl mx-auto font-medium mb-12"
                        >
                            {zamalekTV.details.slogan} • التردد {zamalekTV.details.frequency}
                        </motion.p>

                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 rounded-2xl bg-white text-black font-black flex items-center gap-3 shadow-xl"
                            >
                                <Play className="fill-current" />
                                مشاهدة البث الآن
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-black flex items-center gap-3"
                            >
                                <Radio className="w-5 h-5" />
                                جدول البرامج
                            </motion.button>
                        </div>
                    </div>

                    {/* Scrolling Channel Info Bar */}
                    <div className="absolute bottom-0 left-0 w-full bg-primary/90 backdrop-blur-sm py-4 overflow-hidden border-t border-white/10">
                        <div className="flex whitespace-nowrap animate-scroll items-center gap-12 text-white font-bold text-sm">
                            {[...Array(5)].map((_, i) => (
                                <React.Fragment key={i}>
                                    <span className="flex items-center gap-2"><Tv size={16} /> تردد القناة: {zamalekTV.details.frequency}</span>
                                    <span className="flex items-center gap-2"><ShieldCheck size={16} /> النافذة الرسمية لنادي الزمالك</span>
                                    <span className="flex items-center gap-2"><Signal size={16} /> Nilesat 11449 Horizontal</span>
                                    <span className="flex items-center gap-2"><Heart size={16} /> صوت الجماهير البيضاء</span>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION: Channel Info & History */}
                <section className="py-32 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 text-primary font-bold mb-6 text-sm tracking-widest uppercase">
                                <Info className="w-4 h-4" />
                                عن القناة
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                                منبر القلعة البيضاء <br /> <span className="text-muted-foreground italic">والشاشة الرسمية للملكـي</span>
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                                {zamalekTV.details.description}
                            </p>

                            <div className="grid grid-cols-2 gap-8 py-10 border-y border-border">
                                <div>
                                    <h4 className="text-sm font-bold text-primary mb-2">تاريخ الانطلاق</h4>
                                    <p className="text-2xl font-black">{zamalekTV.details.launchDate}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-primary mb-2">الشركة المشغلة</h4>
                                    <p className="text-2xl font-black">المتحدة للإعلام</p>
                                </div>
                            </div>

                            <div className="mt-12 flex items-center gap-6">
                                <Link href="https://www.youtube.com/@ZamalekSC" target="_blank">
                                    <button className="flex items-center gap-3 text-lg font-bold hover:text-primary transition-colors">
                                        <Youtube className="w-8 h-8 text-red-600" />
                                        الموقع الرسمي على يوتيوب
                                    </button>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-white/5 rotate-2"
                        >
                            <Image
                                src="/TV/channel_preview.jpg"
                                alt="Channel Preview"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-opacity">
                                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white cursor-pointer rotate-[-2deg]">
                                    <Play size={40} fill="currentColor" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* SECTION: Video Gallery */}
                <section className="py-32 bg-slate-100 dark:bg-white/5 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                            <div>
                                <h2 className="text-5xl font-black mb-4 flex items-center gap-4">
                                    <Youtube size={48} className="text-primary" />
                                    أحدث الفيديوهات
                                </h2>
                                <p className="text-xl text-muted-foreground">تابع أبرز مقتطفات البرامج والأهداف التاريخية</p>
                            </div>
                            <Link href={"/Pages/Videos"} className="px-8 py-4 rounded-xl border-2 border-border font-bold hover:bg-foreground hover:text-background transition-all">
                                مشاهدة الكل
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Featured Video Player */}
                            <div className="lg:col-span-2 space-y-6">
                                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-black border border-white/10">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=0`}
                                        title={activeVideo.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-8 rounded-[2rem] bg-white dark:bg-[#121212] border border-border">
                                    <h3 className="text-3xl font-black mb-4">{activeVideo.title}</h3>
                                    <div className="flex items-center gap-6 text-muted-foreground">
                                        <span className="flex items-center gap-2"><Clock size={18} /> 10 ديسمبر 2025</span>
                                        <span className="flex items-center gap-2"><Play size={18} /> 1.2M مشاهدة</span>
                                    </div>
                                </div>
                            </div>

                            {/* Video Playlist */}
                            <div className="space-y-6">
                                <h4 className="text-xl font-bold px-4 border-r-4 border-primary">قائمة التشغيل</h4>
                                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                                    {zamalekTV.videos.map((vid) => (
                                        <div
                                            key={vid.id}
                                            onClick={() => setActiveVideo(vid)}
                                            className={`p-4 rounded-2xl cursor-pointer transition-all border ${activeVideo.id === vid.id ? 'bg-primary/10 border-primary shadow-lg shadow-primary/5' : 'bg-white dark:bg-white/5 border-border hover:border-primary/50'}`}
                                        >
                                            <div className="flex gap-4">
                                                <div className="relative w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                                    <Image
                                                        src={`https://img.youtube.com/vi/${vid.id}/mqdefault.jpg`}
                                                        alt={vid.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                    {activeVideo.id === vid.id && (
                                                        <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                                                            <Signal size={24} className="text-white animate-pulse" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <h5 className="font-bold text-sm line-clamp-2 leading-tight">{vid.title}</h5>
                                                    <span className="text-xs text-muted-foreground mt-2">برنامج زملكاوي</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION: Staff / Employees */}
                <section className="py-32 max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-black mb-6">نخبة الإعلام الرياضي</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">فريق العمل والمحللين الأكثر خبرة في تغطية أخبار مدرسة الفن والهندسة.</p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {zamalekTV.staff.map((member, idx) => (
                            <motion.div
                                key={member.name}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                onClick={() => setSelectedStaff(member)}
                                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl"
                            >
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    fill
                                    className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                                    <span className="text-primary font-black text-xs tracking-widest uppercase mb-2">{member.role}</span>
                                    <h3 className="text-2xl font-black text-white">{member.name}</h3>
                                    <div className="mt-4 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 rounded-full" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* SECTION: Weekly Programs */}
                <section className="py-32 bg-secondary/50 border-y border-border">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex items-center gap-4 mb-16">
                            <Calendar className="w-12 h-12 text-primary" />
                            <h2 className="text-4xl font-black">شبكة البرامج الأسبوعية</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {zamalekTV.programs.map((program, idx) => (
                                <motion.div
                                    key={program.title}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="p-10 rounded-[2.5rem] bg-white dark:bg-card border border-border shadow-2xl shadow-black/5 hover:border-primary/30 transition-all flex gap-8 items-start relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                                    <div className="w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                                        <Clock size={32} />
                                    </div>
                                    <div>
                                        <span className="text-sm font-bold text-primary mb-2 block">{program.time}</span>
                                        <h3 className="text-2xl font-black mb-4">{program.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed italic">
                                            "{program.description}"
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CALL TO ACTION */}
                <section className="py-32 px-6 flex justify-center">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-5xl w-full p-16 rounded-[4rem] bg-foreground text-background text-center relative overflow-hidden"
                    >
                        <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-primary/20 rounded-full blur-[60px]" />
                        <div className="relative z-10">
                            <Tv className="w-20 h-20 mx-auto text-primary mb-8 animate-bounce" />
                            <h2 className="text-4xl md:text-6xl font-black mb-8">
                                اشترك في قناتنا على يوتيوب <br /> <span className="text-primary italic">ولا تفوت أي لحظة</span>
                            </h2>
                            <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto leading-relaxed">
                                انضم لأكثر من 3 مليون زملكاوي على اليوتيوب وتابع البث المباشر للبرامج لحظة بلحظة مع تغطية حصرية لغرفة الملابس.
                            </p>
                            <Link href="https://www.youtube.com/@ZamalekSC" target="_blank" className="inline-flex items-center gap-4 px-12 py-6 rounded-3xl bg-primary text-white font-black text-xl hover:shadow-[0_0_40px_rgba(227,27,35,0.6)] transition-all active:scale-95">
                                إشترك الآن مجاناً
                                <ExternalLink />
                            </Link>
                        </div>
                    </motion.div>
                </section>

            </main>

            {/* Staff Detail Modal (Optional but adds premium feel) */}
            <AnimatePresence>
                {selectedStaff && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6"
                    >
                        <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setSelectedStaff(null)} />
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            className="relative bg-white dark:bg-card max-w-4xl w-full rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
                        >
                            <div className="w-full md:w-1/2 aspect-square relative">
                                <Image src={selectedStaff.img} alt={selectedStaff.name} fill className="object-cover" />
                            </div>
                            <div className="p-12 flex-1 flex flex-col justify-center">
                                <span className="text-primary font-black uppercase tracking-widest mb-4">{selectedStaff.role}</span>
                                <h2 className="text-4xl font-black mb-6">{selectedStaff.name}</h2>
                                <p className="text-xl text-muted-foreground leading-relaxed italic mb-8">
                                    {selectedStaff.bio}
                                </p>
                                <button
                                    onClick={() => setSelectedStaff(null)}
                                    className="px-8 py-4 rounded-xl bg-secondary font-bold hover:bg-primary hover:text-white transition-all"
                                >
                                    إغلاق التفاصيل
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
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(227, 27, 35, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(227, 27, 35, 0.5);
        }
      `}</style>
        </div>
    )
}
