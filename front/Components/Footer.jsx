'use client'
import React from 'react'
import Image from 'next/image'
import { sponsers, socialLinks } from '@/utils/data'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="relative w-full text-gray-800 bg-gradient-to-t from-[#f5f5f5] via-[#fafafa] to-[#ffffff]" dir="rtl">

      {/* الخطين الحمر أعلى الفوتر */}
      <div className="absolute top-0 left-0 w-full">
        <div className="h-1 bg-gradient-to-r from-red-700 to-red-500"></div>
        <div className="h-1 bg-gradient-to-r from-red-500 to-red-700 mt-1"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-16 relative z-10">

        {/* الصف الأول */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* الشعار + وصف */}
          <div className="flex flex-col items-center text-center md:items-start md:text-right">
            <div className="relative w-36 h-36 mb-4 drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">
              <Image src="/zsc.png" alt="شعار نادي الزمالك" fill className="object-contain" />
            </div>
            <p className="text-sm font-semibold leading-relaxed text-gray-700 mb-4">
              نادي الزمالك الرياضي<br />
              <span className="text-red-600">قلعة البطولات</span> وفخر الأمة البيضاء
            </p>

            {/* CTA */}
            <a href="/Pages/Membership" className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-md hover:shadow-red-500/30 transition-all">
              اشترك في العضوية
            </a>

            {/* وسائل التواصل */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, idx) => (
                <Link key={idx} href={social.link} target="_blank" rel="noopener noreferrer">
                  {/* <span src={social.icon} alt={social.name} width={28} height={28} className="hover:scale-125 transition-transform hover:drop-shadow-[0_0_6px_rgba(255,0,0,0.7)]"/> */}
                  <span className="hover:scale-125 transition-transform hover:drop-shadow-[0_0_6px_rgba(255,0,0,0.7)]">
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* الروابط */}
          <FooterColumn title="استكشف النادي" links={[
            { name: 'الرئيسية', href: '/' },
            { name: 'الأخبار', href: '/Pages/News' },
            { name: 'المباريات', href: '/Pages/Fixtures' },
            { name: 'الترتيب', href: '/Pages/Table' },
            { name: 'مجلس الإدارة', href: '/Pages/Directors' },
            { name: 'تاريخ النادي', href: '/Pages/About' },
          ]} />

          {/* الفرق */}
          <FooterColumn title="الفرق الرياضية" links={[
            { name: 'كرة القدم', href: '/Pages/Players/Football' },
            { name: 'كرة السلة', href: '/Pages/Players/Basketball' },
            { name: 'الكرة الطائرة', href: '/Pages/Players/Volleyball' },
            { name: 'كرة اليد', href: '/Pages/Players/Handball' },
            { name: 'فرق السيدات', href: '/Pages/Players/Women' },
          ]} />

          {/* الخدمات */}
          <FooterColumn title="خدمات ومعلومات" links={[
            { name: 'فيديوهات', href: '/Pages/Videos' },
            { name: 'صور', href: '/Pages/Photos' },
            { name: 'المتجر', href: '/Pages/Store' },
            { name: 'اتصل بنا', href: '/Pages/CallUs' },
            { name: 'العضوية', href: '/Pages/Membership' },
            { name: 'الأسئلة الشائعة', href: '/Pages/FAQ' },
            { name: 'الفروع', href: '/Pages/Branches' },
          ]} />
        </div>

        {/* الرعاة */}
        <div className="border-t border-gray-300 pt-10">
          <div className="flex flex-wrap justify-center items-center gap-12">
            {sponsers.map((sponsor, idx) => (
              <div key={idx} className="relative bg-white/20 drop-shadow-[0_0_10px_rgba(255,0,0,0.3)] backdrop-blur-lg rounded p-4 w-32 h-20 sm:w-36 sm:h-24 hover:scale-105 transition-transform">
                <Image src={sponsor} alt={`sponsor-${idx}`} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* الحقوق */}
        <div className="border-t border-gray-300 pt-8 text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/Pages/Jobs" className="hover:text-red-600 transition-colors">وظائف</a>
            <a href="/Pages/Privacy" className="hover:text-red-600 transition-colors">سياسة الخصوصية</a>
            <a href="/Pages/Terms" className="hover:text-red-600 transition-colors">الشروط والأحكام</a>
            <a href="/Pages/Cookies" className="hover:text-red-600 transition-colors">سياسة الكوكيز</a>
          </div>
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} نادي الزمالك. جميع الحقوق محفوظة.</p>
        </div>
      </div>

      {/* الخطين الحمر أسفل الفوتر */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-1 bg-gradient-to-r from-red-700 to-red-500"></div>
        <div className="h-1 bg-gradient-to-r from-red-500 to-red-700 mt-1"></div>
      </div>
    </footer>
  )
}

const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="text-lg font-bold text-red-700 mb-6 pb-2 relative">
      {title}
      {/* خطين أحمر تحت العنوان */}
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-700 to-red-500"></span>
      <span className="absolute -bottom-2 left-0 w-3/4 h-0.5 bg-gradient-to-r from-red-500 to-red-700"></span>
    </h4>
    <nav className="flex flex-col space-y-3 text-base font-medium">
      {links.map((link, idx) => (
        <a key={idx} href={link.href} className="hover:text-red-600 transition-colors">{link.name}</a>
      ))}
    </nav>
  </div>
)

export default Footer
