'use client';

import React from 'react';
import Image from 'next/image';
import { sponsers, socialLinks } from '@/utils/data';
import Link from 'next/link';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary w-full text-secondary-foreground pt-20 pb-10 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4 md:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block transform transition-transform hover:scale-105">
              <div className="relative w-24 h-24 mb-2">
                <Image src="/zsc.png" alt="Zamalek SC" fill className="object-contain" />
              </div>
              <h3 className="text-2xl font-black text-primary font-heading tracking-tighter">ZAMALEK SC</h3>
            </Link>
            <p className="text-sm text-gray-200 font-bold opacity-60 leading-relaxed max-w-xs">
              نادي الزمالك للألعاب الرياضية، مدرسة الفن والهندسة. أكثر من مجرد نادٍ، هو تاريخ وهوية وفخر لكل زملكاوي.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.link}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-background/50 border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <span className="scale-90">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <FooterColumn title="اكتشف النادي" links={[
            { name: 'الرئيسية', href: '/' },
            { name: 'آخر الأخبار', href: '/Pages/News' },
            { name: 'المباريات والنتائج', href: '/Pages/Fixtures' },
            { name: 'جدول الترتيب', href: '/Pages/Table' },
            { name: 'تاريخ الملكي', href: '/Pages/About' },
            { name: 'مجلس الإدارة', href: '/Pages/Directors' },
          ]} />

          {/* Teams Column */}
          <FooterColumn title="الفرق الرياضية" links={[
            { name: 'كرة القدم', href: '/Pages/Players/Football' },
            { name: 'كرة السلة', href: '/Pages/Players/Basketball' },
            { name: 'الكرة الطائرة', href: '/Pages/Players/Volleyball' },
            { name: 'كرة اليد', href: '/Pages/Players/Handball' },
            { name: 'قطاع الناشئين', href: '/Pages/Players/Youth' },
          ]} />

          {/* Contact/Support Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-black font-heading mb-6 relative inline-block">
              تواصل معنا
              <span className="absolute -bottom-1 right-0 w-8 h-[2px] bg-primary" />
            </h4>
            <div className="space-y-4">
              <ContactItem icon={<Phone size={16} />} text="+20 123 456 789" />
              <ContactItem icon={<Mail size={16} />} text="contact@zamalek.com" />
              <ContactItem icon={<MapPin size={16} />} text="ميت عقبة، الجيزة، مصر" />
            </div>

            <Link
              href="/Pages/Membership"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-primary text-white font-black hover:bg-primary-hover transition-all shadow-xl shadow-primary/20"
            >
              <ShieldCheck size={20} />
              طلب عضوية النادي
            </Link>
          </div>

        </div>

        {/* Sponsors Section */}
        <div className="border-t border-border pt-12 mb-12">
          <div className="flex flex-col items-center gap-8">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">الشركاء الرسميون</span>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              {sponsers.map((sponsor, idx) => (
                <div key={idx} className="relative w-24 h-12 md:w-32 md:h-16">
                  <Image src={sponsor} alt={`Sponsor ${idx}`} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-200 font-bold opacity-40">
            &copy; {new Date().getFullYear()} نادي الزمالك المصري. جميع الحقوق محفوظة.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <FooterLegalLink href="/Pages/Privacy" name="خصوصية البيانات" />
            <FooterLegalLink href="/Pages/Terms" name="شروط الاستخدام" />
            <FooterLegalLink href="/Pages/Cookies" name="ملفات التعريف" />
          </div>

          <div className="flex text-gray-200 items-center gap-2 text-[10px] font-black opacity-30">
            <span>مدعوم بواسطة</span>
            <div className="w-4 h-4 rounded-full bg-foreground/10" />
            <span>Digital Media Dept.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => (
  <div className="space-y-6">
    <h4 className="text-lg text-white font-black font-heading mb-6 relative inline-block">
      {title}
      <span className="absolute -bottom-1 right-0 w-8 h-[2px] bg-primary" />
    </h4>
    <nav className="flex flex-col space-y-3">
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={link.href}
          className="text-sm font-bold opacity-60 hover:opacity-100 text-red-500 hover:text-primary transition-all flex items-center gap-2 group"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
          {link.name}
        </Link>
      ))}
    </nav>
  </div>
);

const ContactItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 text-sm font-bold opacity-60">
    <div className="text-primary">{icon}</div>
    <span>{text}</span>
  </div>
);

const FooterLegalLink = ({ href, name }) => (
  <Link href={href} className="text-[12px] font-bold opacity-40 hover:opacity-100 text-red-500 hover:text-primary transition-all">
    {name}
  </Link>
);

export default Footer;
