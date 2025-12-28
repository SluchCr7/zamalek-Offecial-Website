'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Trophy, Image as ImageIcon, Shirt, Users, FileText, Medal, ArrowRight, Sparkles, History } from 'lucide-react'
import { mesaumSections } from '@/utils/data'

const iconMap = {
  "خزانه الكوؤس": <Trophy className="w-6 h-6" />,
  "الصور التاريخية": <ImageIcon className="w-6 h-6" />,
  "القمصان التاريخية": <Shirt className="w-6 h-6" />,
  "قاعة الأساطير": <Users className="w-6 h-6" />,
  "الوثائق التاريخية": <FileText className="w-6 h-6" />,
  "الميداليات الذهبية": <Medal className="w-6 h-6" />,
};

export default function MuseumPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  }

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 dark:bg-[#050505] text-foreground transition-colors duration-500">

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-600/5 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">

        {/* Header / Hero Section */}
        <section className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-bold tracking-widest uppercase">تاريخ ملكي موثق</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60"
          >
            متحف <span className="text-primary">الزمالك</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            رحلة عبر الزمن في أعماق القلعة البيضاء، حيث تُعرض الكؤوس التاريخية، والقمصان الأسطورية، ولحظات المجد التي لا تُنسى.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            className="h-1.5 bg-gradient-to-l from-primary to-red-400 mx-auto mt-8 rounded-full"
          />
        </section>

        {/* Stats / Quick Numbers */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { label: "بطولة قارية", value: "13", icon: <Trophy /> },
            { label: "درع دوري", value: "14", icon: <History /> },
            { label: "كأس مصر", value: "28", icon: <Medal /> },
            { label: "عام من التميز", value: "114", icon: <Sparkles /> },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-secondary/50 border border-border flex flex-col items-center justify-center text-center group hover:bg-white dark:hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <span className="text-3xl font-black mb-1">{stat.value}</span>
              <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </section>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-32"
        >
          {mesaumSections.map((section, i) => (
            <motion.div
              key={section.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative group h-[400px]"
            >
              <Link href={section.open ? section.link : "#"} className={!section.open ? "cursor-not-allowed" : ""}>
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-border bg-white dark:bg-card shadow-2xl shadow-black/5 transition-all duration-500 overflow-hidden">

                  {/* Image Background */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={section.img}
                      alt={section.name}
                      fill
                      className={`object-cover transition-transform duration-700 group-hover:scale-110 ${!section.open ? 'grayscale blur-sm opacity-40' : 'opacity-90 group-hover:opacity-100'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                          {iconMap[section.name] || <Sparkles />}
                        </div>
                        <h2 className="text-2xl font-black text-white leading-none">
                          {section.name}
                        </h2>
                      </div>
                      {!section.open && (
                        <div className="p-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-white/50">
                          <Lock size={20} />
                        </div>
                      )}
                    </div>

                    <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-2">
                      {section.bio}
                    </p>

                    <div className="flex items-center gap-2 text-white font-bold text-sm transform transition-all duration-300 group-hover:translate-x-[-10px]">
                      {section.open ? (
                        <>
                          <span>أدخل الآن</span>
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-[-5px]" />
                        </>
                      ) : (
                        <span className="text-white/40 italic">قريباً في المتحف الافتراضي</span>
                      )}
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[2.5rem] pointer-events-none" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Exhibit Section */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row items-center gap-12 p-8 md:p-16 rounded-[3rem] bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32" />

            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-xs font-bold mb-6">
                <History className="w-4 h-4" />
                معرض متميز
              </div>
              <h2 className="text-4xl font-black mb-6 leading-tight">
                أول دوري عام <br /> <span className="text-primary">في تاريخ الكرة المصرية</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-right">
                في موسم 1959-1960، سطر الزمالك تاريخاً جديداً للكرة المصرية كأول بطل لدرع الدوري العام. استكشف الوثائق النادرة وصور الاحتفالات الأولى في هذا المعرض الخاص.
              </p>
              <Link href="/Pages/Photos">
                <button className="px-8 py-4 rounded-2xl bg-foreground text-background font-bold hover:scale-105 transition-transform flex items-center gap-3">
                  مشاهدة المعرض
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>

            <div className="flex-1 w-full aspect-square relative rounded-[2.5rem] overflow-hidden shadow-2xl skew-y-3">
              <Image
                src="/history/Captain_Hanafi_Nassar_in_the_midst_of_his_team_of_young_Zamalek_players_in_1960s..jpg"
                alt="Highlight Exhibit"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 right-6 text-white italic text-sm">
                القائد حنفي بسطان مع جيل 1960 الذهبـي
              </div>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center p-12 rounded-[3rem] bg-secondary/50 border border-dashed border-border"
        >
          <History className="w-12 h-12 mx-auto text-primary/40 mb-6" />
          <h3 className="text-2xl font-bold mb-4">هل ترغب في المساهمة؟</h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            إذا كنت تمتلك وثائق نادرة، صوراً قديمة، أو مقتنيات تاريخية تخص النادي وتريد عرضها في المتحف الإلكتروني، يسعدنا تواصلك معنا لتوثيقها بأحدث التقنيات الرقمية.
          </p>
          <Link href="/Pages/CallUs">
            <button className="px-10 py-5 rounded-2xl bg-primary text-white font-black hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1 active:scale-95">
              تواصل مع فريق الأرشيف الرقمي
            </button>
          </Link>
        </motion.div>
      </main>
    </div>
  )
}

