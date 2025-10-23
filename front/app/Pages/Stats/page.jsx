'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  LabelList,
  AreaChart,
  Area,
} from 'recharts'
// يجب التأكد من وجود البيانات في المسار الصحيح
import { zamalekStats } from '@/utils/data'
import Image from 'next/image'



// ** ألوان الزمالك المحسنة (Premium Palette) **
const COLORS = {
  primary: '#E30613', // الأحمر الأساسي
  accent: '#D4AF37', // الذهبي المميز
  textDark: '#1a1a1a', // للخطوط الداكنة
  background: '#FFFFFF',
  cardBorder: 'border-gray-200 hover:border-[#E30613]/50', // حدود الكروت الأنيقة
  shadow: 'shadow-xl hover:shadow-2xl transition duration-300',
}

// مكون كارت إحصائية رئيسية منفصل
const HeroStatCard = ({ icon, title, value, detail, color = COLORS.primary }) => (
  <motion.div
    className={`p-5 rounded-xl ${COLORS.shadow} bg-white border border-gray-100 ring-2 ring-transparent hover:ring-red-100 transition-all duration-300 transform hover:-translate-y-1`}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className={`text-3xl mb-2 text-center`} style={{ color }}>
      {icon}
    </div>
    <p className="text-sm font-medium text-gray-500 text-center">{title}</p>
    <h3 className="text-3xl font-extrabold mt-1 text-center" style={{ color }}>
      {value}
    </h3>
    <p className="text-xs text-gray-400 mt-1 text-center">{detail}</p>
  </motion.div>
)

export default function ZamalekStatsPage() {
  const {
    topScorersAllTime,
    topAssistPlayer,
    topPlayMatches,
    derbyRecord,
    topScorerSeason,
    fastestGoal,
    firstHatrick,
    mostHatrickScore,
    highWin,
    mostCountriesPlayInZamalek,
    mostMatchesattendance,
  } = zamalekStats

  // بيانات الرسوم البيانية المحسنة
  // لـ: أبرز مواسم الهداف (Bar Chart الأفقي)
  const seasonDataChart = topScorerSeason.map((s) => ({
    season: s.season,
    goals: s.goals,
    player: s.player,
  })).reverse() // عكس ليكون الأحدث في الأعلى

  // لـ: مقارنة هدافي التاريخ (Area Chart للتأثير البصري)
  const topScorersChartData = topScorersAllTime.map((p, i) => ({
    name: p.player.split(' ')[0], // استخدام الاسم الأول للاختصار
    goals: p.goals,
    rank: i + 1,
  })).reverse()

  // أنيميشن للكروت
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
  }

  return (
    <div dir="rtl" className="min-h-screen relative overflow-hidden w-full bg-gray-50 text-gray-800">
      
      {/* خلفية بخطوط حمراء وذهبية خفيفة */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-[5%] right-0 w-full h-1 bg-[#E30613]/20 rotate-[-5deg]" />
        <div className="absolute top-[20%] left-0 w-full h-1 bg-[#D4AF37]/20 rotate-[5deg]" />
      </div>

      {/* الهيدر المحسن */}
      <header className="bg-white shadow-lg relative z-10 w-full border-b border-red-50/50">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center gap-6">
          <div className="p-2 bg-white rounded-full shadow-md border border-red-200 ring-4 ring-white">
            <Image width={120} height={120} src="/zsc.png" className="w-20 md:w-24" alt="Zamalek logo" />
          </div>
          <div className="flex-1 text-center md:text-right">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              نادي الزمالك: سجل الأرقام القياسية
            </h1>
            <p className="text-base text-gray-500 mt-2 font-medium">
              إطلالة احترافية على إحصائيات الأسطورة البيضاء عبر التاريخ
            </p>
          </div>
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="container w-full mx-auto px-4 py-12 space-y-12">
        
        {/* قسم الإحصائيات الرئيسية (Hero Stats) */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-red-500 pb-2 text-gray-700">🏆 سجل الأرقام الذهبية</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <HeroStatCard
              icon="⚡"
              title="أسرع هدف"
              value={fastestGoal.time}
              detail={`${fastestGoal.player} - ${fastestGoal.year}`}
              color={COLORS.accent}
            />
            <HeroStatCard
              icon="🥇"
              title="هداف التاريخ"
              value={topScorersAllTime[0].goals}
              detail={`سجله ${topScorersAllTime[0].player}`}
              color={COLORS.primary}
            />
            <HeroStatCard
              icon="🎩"
              title="أكثر هاتريك"
              value={`${mostHatrickScore.num} مرات`}
              detail={`بواسطة ${mostHatrickScore.player}`}
              color={COLORS.primary}
            />
            <HeroStatCard
              icon="🔥"
              title="أكبر فوز"
              value={highWin.score}
              detail={`ضد ${highWin.team}`}
              color={COLORS.accent}
            />
          </div>
        </section>

        {/* أقسام البيانات والجداول */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* العمود الأيمن (القوائم الرئيسية) */}
          <section className="space-y-8">

            {/* الهدافون التاريخيون - بتصميم جديد */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="show"
              variants={cardVariants}
              className={`p-6 rounded-xl ${COLORS.cardBorder} ${COLORS.shadow} bg-white`}
            >
              <h2 className={`text-xl font-bold mb-4 flex items-center gap-2 text-gray-700`}>
                <span className="text-2xl text-[#E30613]">⚽</span> الهدافون التاريخيون
              </h2>
              <ol className="space-y-4">
                {topScorersAllTime.map((p, i) => (
                  <li key={p.player} className="flex flex-col gap-1 border-b border-dashed pb-2 last:border-b-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i < 3 ? 'bg-yellow-400 text-gray-900' : 'bg-gray-100 text-gray-500'}`}>{i + 1}</div>
                        <div className="font-medium text-lg">{p.player}</div>
                      </div>
                      <div className="font-extrabold text-[#E30613]">{p.goals} هدف</div>
                    </div>
                    {/* شريط تقدم أكثر احترافية */}
                    <div className="w-full">
                      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-1 bg-gradient-to-r from-[#D4AF37] to-[#E30613]" style={{ width: `${(p.goals / topScorersAllTime[0].goals) * 100}%` }} />
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* صناع الأهداف وأكثر المشاركين (مجمعين) */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="show"
              variants={cardVariants}
              className={`p-6 rounded-xl ${COLORS.cardBorder} ${COLORS.shadow} bg-white`}
            >
              <h2 className={`text-xl font-bold mb-4 flex items-center gap-2 text-gray-700`}>
                <span className="text-2xl text-[#E30613]">📈</span> صناع اللعب والمشاركون
              </h2>
              
              <div className="space-y-5">
                {/* صناع الأهداف */}
                <h3 className="text-lg font-semibold text-gray-600 border-r-4 border-red-300 pr-2">صناع الأهداف (Assists)</h3>
                <ul className="space-y-3">
                  {topAssistPlayer.map((a) => (
                    <li key={a.name} className="flex justify-between items-center text-gray-700">
                      <span>{a.name}</span>
                      <span className="font-bold text-[#D4AF37] flex items-center gap-1">
                        <span className="text-sm">🎯</span> {a.num}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* أكثر المشاركين */}
                <h3 className="text-lg font-semibold text-gray-600 border-r-4 border-red-300 pr-2 pt-4">أكثر المشاركين (مباريات)</h3>
                <ul className="space-y-3">
                  {topPlayMatches.map((p) => (
                    <li key={p.name} className="flex justify-between items-center text-gray-700">
                      <span>{p.name}</span>
                      <span className="text-sm text-gray-500 font-medium">{p.num} مباراة</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </section>

          {/* العمود الأيسر (الرسوم البيانية) */}
          <section className="lg:col-span-2 space-y-8">
            
            {/* بار شارت - أبرز مواسم الهداف (تم تحويله إلى أفقي) */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="show"
              variants={cardVariants}
              className={`p-6 rounded-xl ${COLORS.cardBorder} ${COLORS.shadow} bg-white`}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-700">📅 الهدافون الأبرز بالمواسم (الأهداف)</h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={seasonDataChart} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis type="number" stroke={COLORS.textDark} />
                    <YAxis dataKey="season" type="category" stroke={COLORS.textDark} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                    <Bar dataKey="goals" fill={COLORS.primary} radius={[0, 8, 8, 0]}>
                      <LabelList dataKey="goals" position="right" fill={COLORS.textDark} fontSize={12} />
                      <LabelList dataKey="player" position="left" fill={COLORS.textDark} fontSize={10} offset={-15} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Area Chart - مقارنة هدافي التاريخ (لتأثير بصري قوي) */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={cardVariants}
              className={`p-6 rounded-xl ${COLORS.cardBorder} ${COLORS.shadow} bg-white`}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-700">🥇 مقارنة الأهداف التراكمية للهدافين</h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={topScorersChartData}>
                    <defs>
                      <linearGradient id="colorGoals" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.8} />
                        <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="name" stroke={COLORS.textDark} />
                    <YAxis stroke={COLORS.textDark} />
                    <Tooltip />
                    <Area type="monotone" dataKey="goals" stroke={COLORS.primary} fillOpacity={1} fill="url(#colorGoals)" strokeWidth={3} />
                    <Line type="monotone" dataKey="goals" stroke={COLORS.accent} strokeWidth={2} dot={{ r: 6, stroke: COLORS.accent, strokeWidth: 2 }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </section>
        </div>

        {/* ---------------- بقية الإحصائيات (Special Records) ---------------- */}
        <section className="space-y-8 pt-6">

          {/* أصغر هدافين - تصميم بطاقات أفضل */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={cardVariants}
            className={`p-6 rounded-xl ${COLORS.cardBorder} ${COLORS.shadow} bg-white`}
          >
            <h2 className="text-2xl font-bold mb-5 text-gray-700 border-r-4 border-red-500 pr-2">👶 النجوم الصغار: أصغر هدافين في تاريخ النادي</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mostYoungPlayersScore.map((p, i) => (
                <div key={p.name} className={`flex items-center gap-4 p-4 rounded-xl bg-red-50 border border-red-100 ${i === 0 ? 'shadow-lg ring-2 ring-[#D4AF37]' : ''}`}>
                  <div className="relative">
                    <img src={p.img || "/default-player.png"} alt={p.name} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md" />
                    <span className="absolute bottom-0 right-0 bg-[#E30613] text-white text-xs px-2 py-0.5 rounded-full font-bold">⭐</span>
                  </div>
                  <div>
                    <p className="font-extrabold text-lg text-gray-800">{p.name}</p>
                    <p className="text-sm text-gray-500">العمر: <span className="font-semibold text-[#E30613]">{p.age}</span> سنة و <span className="font-semibold text-[#E30613]">{p.months}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* أكثر الدول التي لعب منها محترفون */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="show"
            variants={cardVariants}
            className={`p-6 rounded-xl ${COLORS.cardBorder} ${COLORS.shadow} bg-white`}
          >
            <h2 className="text-2xl font-bold mb-5 text-gray-700 border-r-4 border-red-500 pr-2">🌍 التنوع الدولي: أكثر الدول التي لعب منها محترفون</h2>
            <div className="w-full h-80">
              <ResponsiveContainer>
                <BarChart data={mostCountriesPlayInZamalek} margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="country" stroke={COLORS.textDark} />
                  <YAxis stroke={COLORS.textDark} />
                  <Tooltip />
                  <Bar dataKey="num" fill={COLORS.primary} radius={[6, 6, 0, 0]}>
                    <LabelList dataKey="num" position="top" fill={COLORS.textDark} fontSize={12} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* أكبر حضور جماهيري ومواجهات القمة (مجمعين) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* أكبر حضور جماهيري - تصميم جدول احترافي */}
            <motion.div
              custom={6}
              initial="hidden"
              animate="show"
              variants={cardVariants}
              className={`p-6 rounded-xl ${COLORS.cardBorder} ${COLORS.shadow} bg-white`}
            >
              <h2 className="text-xl font-bold mb-4 text-gray-700 flex items-center gap-2">
                <span className="text-2xl text-[#E30613]">🏟️</span> أكبر حضور جماهيري
              </h2>
              <div className="overflow-x-auto border rounded-lg">
                <table className="w-full text-sm text-right border-collapse">
                  <thead>
                    <tr className="bg-gray-100/70 text-gray-600 uppercase tracking-wider">
                      <th className="p-3 font-semibold">المباراة</th>
                      <th className="p-3 font-semibold text-center">الحضور (بالآلاف)</th>
                      <th className="p-3 font-semibold">السنة</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mostMatchesattendance.map((m, i) => (
                      <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-red-50/50'} hover:bg-red-100 transition duration-150`}>
                        <td className="p-3 font-medium text-gray-700">{m.against}</td>
                        <td className="p-3 font-bold text-[#E30613] text-center">{m.num}</td>
                        <td className="p-3 text-gray-500">{m.year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* مواجهات القمة - تصميم خاص */}
            <motion.div
              custom={7}
              initial="hidden"
              animate="show"
              variants={cardVariants}
              className={`p-6 rounded-xl ${COLORS.cardBorder} ${COLORS.shadow} bg-white flex flex-col justify-center items-center text-center`}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-700 border-b pb-2 w-full">⚔️ مواجهات القمة</h2>
              <p className="text-xl text-gray-600 mt-4">
                أكبر فوز على الأهلي:
              </p>
              <div className="text-6xl font-extrabold text-[#E30613] my-3 p-4 border-4 border-double border-red-500 rounded-lg bg-red-50/50">
                {derbyRecord.largestWinVsAhly}
              </div>
              <p className="text-sm text-gray-500">
                تحقق في أعوام: <span className="font-semibold text-gray-700">{derbyRecord.Years.join(" و ")}</span>
              </p>
            </motion.div>

          </div>
        </section>
      </main>

      {/* الفوتر المحسن */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-200 bg-white shadow-inner mt-10">
        © {new Date().getFullYear()} Zamalek SC Stats — تصميم واجهة مستخدم احترافية
      </footer>
    </div>
  )
}