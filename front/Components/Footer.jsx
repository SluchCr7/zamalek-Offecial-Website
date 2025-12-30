'use client';

import React from 'react';
import Image from 'next/image';
import { socialLinks, sponsers } from '@/utils/data';
import Link from 'next/link';
import { Mail, Phone, MapPin, ShieldCheck, ArrowUpRight, Send, Star, Copyright } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-secondary text-white pt-32 pb-12 overflow-hidden border-t border-white/5 w-full" dir="rtl">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Newsletter & Brand Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
          <div className="space-y-8">
            <Link href="/" className="inline-flex items-center gap-6 group">
              <div className="relative w-20 h-20 bg-white rounded-2xl p-3 shadow-2xl transition-transform group-hover:scale-110 group-hover:rotate-3">
                <Image src="/zsc.png" alt="Zamalek SC" fill className="object-contain p-2" />
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-black font-heading tracking-tighter leading-none italic">ZAMALEK <span className="text-primary italic">SC</span></h3>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">The White Knights • 1911</p>
              </div>
            </Link>
            <p className="text-xl font-bold opacity-60 leading-relaxed max-w-xl italic">
              "أكثر من مجرد نادي رياضي، هو مدرسة للفن والهندسة وتاريخ سطرته أجيال من العظماء. نحن لا نصنع التاريخ، نحن التاريخ."
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.link}
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-500 hover:-translate-y-1"
                >
                  <span className="scale-110">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <h4 className="text-2xl font-black font-heading italic">اشترك في النشرة <span className="text-primary">الملكية</span></h4>
                <p className="text-sm font-bold opacity-40">كن أول من يعلم بأخبار الصفقات، مواعيد المباريات، والمنتجات الحصرية.</p>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pr-8 pl-24 outline-none focus:border-primary transition-all font-bold text-sm"
                />
                <button className="absolute left-3 top-3 bottom-3 px-8 bg-primary rounded-xl text-white font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                  <span>انـضم</span>
                  <Send size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 pt-24 border-t border-white/5">
          <FooterNavGroup
            title="النادي"
            links={[
              { name: 'عن الزمالك', href: '/Pages/About' },
              { name: 'مجلس الإدارة', href: '/Pages/Directors' },
              { name: 'الأعضاء', href: '/Pages/Membership' },
              { name: 'تواصل معنا', href: '/Pages/CallUs' },
            ]}
          />
          <FooterNavGroup
            title="الفرق"
            links={[
              { name: 'كرة القدم', href: '/Pages/Players/Football' },
              { name: 'كرة السلة', href: '/Pages/Players/Basketball' },
              { name: 'كرة اليد', href: '/Pages/Players/Handball' },
              { name: 'الكرة الطائرة', href: '/Pages/Players/Volleyball' },
              { name: 'سيدات الطائرة', href: '/Pages/Players/Women' },
            ]}
          />
          <FooterNavGroup
            title="الميديا"
            links={[
              { name: 'آخر الأخبار', href: '/Pages/News' },
              { name: 'معرض الصور', href: '/Pages/Photos' },
              { name: 'قناة الزمالك', href: '/Pages/ZamalekTV' },
              { name: 'المركز الإعلامي', href: '/Pages/MediaCenter' },
            ]}
          />
          <FooterNavGroup
            title="المتجر"
            links={[
              { name: 'أطقم الفريق', href: '/Pages/Store/Kits' },
              { name: 'ملابس التمرين', href: '/Pages/Store/Training' },
              { name: 'إكسسوارات', href: '/Pages/Store/Accessories' },
              { name: 'تخفيضات', href: '/Pages/Store/Sale' },
            ]}
          />
        </div>

        {/* Partners Showcase */}
        <div className="py-16 border-y border-white/5">
          <div className="flex flex-col items-center gap-12">
            <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[1em] text-white/30">
              <div className="h-px w-20 bg-white/10" />
              <span>Official Global Partners</span>
              <div className="h-px w-20 bg-white/10" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
              {sponsers.map((sponsor, idx) => (
                <div
                  key={idx}
                  className="
                    group
                    flex items-center justify-center
                    w-36 h-20 md:w-44 md:h-24
                    rounded-md
                    bg-transparent
                    opacity-40 grayscale
                    transition-all duration-700 ease-in-out
                    hover:opacity-100 hover:grayscale-0 hover:scale-105
                  "
                >
                  <div className="relative w-full h-full p-4">
                    {typeof sponsor === 'string' ? (
                      <Image
                        src={sponsor}
                        alt="Sponsor logo"
                        fill
                        className="object-contain"
                        sizes="(min-width: 768px) 176px, 144px"
                      />
                    ) : (
                      <>
                        <Image
                          src={sponsor.light}
                          alt="Sponsor logo"
                          fill
                          className="object-contain dark:hidden"
                          sizes="(min-width: 768px) 176px, 144px"
                        />
                        <Image
                          src={sponsor.dark}
                          alt="Sponsor logo"
                          fill
                          className="object-contain hidden dark:block"
                          sizes="(min-width: 768px) 176px, 144px"
                        />
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-8 opacity-40">
          <div className="flex items-center gap-4 text-xs font-bold">
            <Copyright size={14} />
            <span>{new Date().getFullYear()} نادي الزمالك المصري. جميع الحقوق محفوظة.</span>
          </div>

          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
            <Link href="/Pages/Privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/Pages/Terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/Pages/Cookies" className="hover:text-primary transition-colors">Cookie settings</Link>
          </div>

          <div className="flex items-center gap-3 text-[10px] font-black tracking-tighter italic">
            <span className="opacity-40 uppercase">Developed by</span>
            <div className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg">
              <Star size={10} fill="currentColor" className="text-primary" />
              <span className="text-white">PRO DESIGN HUB</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

const FooterNavGroup = ({ title, links }) => (
  <div className="space-y-10">
    <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">{title}</h4>
    <nav className="flex flex-col gap-6">
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={link.href}
          className="text-lg font-bold opacity-40 hover:opacity-100 transition-all hover:translate-x-[-8px] flex items-center justify-between group"
        >
          <span>{link.name}</span>
          <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      ))}
    </nav>
  </div>
);

export default Footer;

