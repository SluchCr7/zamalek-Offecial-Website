'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Eye, Shirt, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ZamalekKitShowcase() {
  const kits = [
    {
      id: 'home',
      name: 'طقم الملكي الأساسي',
      img: '/zamalekHomeNike.jpg',
      desc: 'القميص التقليدي باللون الأبيض والخطين الحمراوين، يجسد تاريخ مدرسة الفن والهندسة.',
      fabric: 'Nike VaporKnit',
      year: '2025/26',
      price: '1,299 EGP'
    },
    {
      id: 'away',
      name: 'طقم الفرسان الاحتياطي',
      img: '/zamalekAwayNike.jpg',
      desc: 'تصميم عصري باللون الأسود العميق مع لمسات ذهبية تعكس الفخامة والقوة.',
      fabric: 'Dri-FIT Advanced',
      year: '2025/26',
      price: '1,199 EGP'
    },
    {
      id: 'third',
      name: 'الطقم الثالث التاريخي',
      img: '/zamalekThird.jpg',
      desc: 'نسخة تذكارية تحتفل بمرور 114 عاماً على تأسيس القلعة البيضاء العريقة.',
      fabric: 'Sustainable Poly',
      year: '2025/26',
      price: '1,099 EGP'
    },
    {
      id: 'GK',
      name: 'طقم حامي العرين',
      img: '/zamalekGK.jpg',
      desc: 'درع الحارس باللون البنفسجي المميز، مصمم لأقصى درجات المرونة والتحمل.',
      fabric: 'Flex Shield Tech',
      year: '2025/26',
      price: '999 EGP'
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <section className="py-24 bg-background relative overflow-hidden" dir="rtl">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4"
          >
            <Shirt size={14} />
            <span>متجر النادي الرسمي</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tighter mb-6">درع <span className="text-primary italic">الفرسان</span></h2>
          <p className="text-sm md:text-lg font-bold opacity-60 max-w-2xl leading-relaxed">
            استعرض الأطقم الرسمية لموسم 2025. جودة استثنائية وتصميم يعبر عن الهوية الملكية لنادي قرن حقيقي.
          </p>
        </div>

        {/* Kits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {kits.map((kit, index) => (
            <motion.div
              key={kit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelected(kit)}
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-muted border border-border shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/10">
                <Image
                  src={kit.img}
                  alt={kit.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Hover Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
                    <Eye size={24} />
                  </div>
                </div>

                {/* Info Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-1 block">{kit.year}</span>
                  <h3 className="text-xl font-black text-white leading-tight">{kit.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="mt-20 text-center">
          <Link
            href="/Pages/Store"
            className="inline-flex items-center gap-4 bg-foreground text-background font-black px-12 py-5 rounded-full hover:scale-105 transition-all group"
          >
            <ShoppingBag size={20} />
            <span>تسوق المجموعة الكاملة</span>
          </Link>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              className="relative w-full max-w-5xl bg-card rounded-[3rem] overflow-hidden border border-border grid grid-cols-1 md:grid-cols-2"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 left-6 z-10 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-primary transition-colors"
                dir="ltr"
              >
                <X size={24} />
              </button>

              {/* Image Side */}
              <div className="relative aspect-square md:aspect-auto h-[400px] md:h-[600px]">
                <Image
                  src={selected.img}
                  alt={selected.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-14 flex flex-col justify-center items-start text-right" dir="rtl">
                <div className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-6">
                  <Sparkles size={14} />
                  <span>الإصدار الأصلي</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black font-heading mb-6 leading-tight">{selected.name}</h2>
                <p className="text-lg font-bold opacity-60 leading-relaxed mb-10">
                  {selected.desc}
                </p>

                <div className="grid grid-cols-2 gap-8 w-full mb-12">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase opacity-40">الخامات</span>
                    <p className="font-black text-sm">{selected.fabric}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase opacity-40">السعر</span>
                    <p className="font-black text-xl text-primary">{selected.price}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <button className="flex-1 py-5 rounded-2xl bg-primary text-white font-black hover:bg-primary-hover transition-all shadow-xl shadow-primary/20">
                    أضف إلى السلة
                  </button>
                  <button className="flex-1 py-5 rounded-2xl bg-muted border border-border font-black hover:bg-border transition-all">
                    دليل المقاسات
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
