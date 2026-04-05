'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Menu, X, ChevronDown, Search, Moon, Sun, User, ShoppingBag,
  Calendar, Trophy, Users, Building2, History, TvMinimal, Award,
  Dumbbell, Volleyball, Target, Sparkles, ChevronLeft, ArrowRight
} from 'lucide-react';
import { CiBasketball } from "react-icons/ci";
import { AnimatePresence, motion } from 'framer-motion';
import { MdEdit } from "react-icons/md";
import { useAuth } from '@/app/Context/AuthContext';
import { useTheme } from '@/app/Context/ThemeContext';

export default function Nav({ opneModalAll, setOpenModalAll }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 1, title: 'الرئيسية', url: '/', icon: Sparkles },
    { id: 2, title: 'الأخبار', url: '/Pages/News', icon: Award },
    {
      id: 3,
      title: 'الفرق',
      url: '#',
      icon: Users,
      sublinks: [
        { id: 31, title: 'الفريق الأول لكرة القدم', url: '/players', icon: Dumbbell, desc: "أبطال الدوري والفارس الأبيض." },
        { id: 32, title: 'فريق كرة السلة', url: '/Pages/Players/Basketball', icon: CiBasketball, desc: "عمالقة السلة وملوك الصالات." },
        { id: 33, title: 'فريق الكرة الطائرة', url: '/Pages/Players/Volleyball', icon: Volleyball, desc: "أسياد الشبكة محليا وقاريا." },
        { id: 34, title: 'فريق كرة اليد', url: '/Pages/Players/Handball', icon: Target, desc: "الكوماندوز ملوك أفريقيا." },
        { id: 35, title: 'فرق السيدات', url: '/Pages/Players/Women', icon: Users, desc: "بطلات الزمالك في كافة الألعاب." },
      ]
    },
    {
      id: 4,
      title: 'النادي',
      url: '#',
      icon: Building2,
      sublinks: [
        { id: 41, title: 'تاريخ النادي', url: '/Pages/About', icon: History, desc: "مسيرة 1911 العريقة." },
        { id: 42, title: 'بطولات الملكي', url: '/Pages/Champions', icon: Trophy, desc: "خزينة الألقاب والذهب." },
        { id: 43, title: 'مجلس الإدارة', url: '/Pages/Directors', icon: Building2, desc: "قادة الزمالك." },
        { id: 44, title: 'رؤساء النادي', url: '/Pages/Presidents', icon: Award, desc: "التاريخ الإداري." },
        { id: 45, title: 'المتحف', url: '/Pages/Measum', icon: Building2, desc: "معرض الإنجازات." },
        { id: 46, title: 'قناة الزمالك', url: '/Pages/ZamalekTV', icon: TvMinimal, desc: "الصوت الرسمي للقلعة البيضاء." },
      ]
    },
    { id: 5, title: 'المباريات', url: '/Pages/Fixtures', icon: Calendar },
    { id: 6, title: 'جدول الترتيب', url: '/Pages/Table', icon: Trophy },
  ];

  return (
    <>
      <nav
        dir="rtl"
        className={`fixed w-full top-0 left-0 right-0 z-[100] transition-all duration-700 font-heading ${
          scrolled
            ? 'py-3 backdrop-blur-[40px] bg-black/60 border-b border-white/10 shadow-[0_10px_50px_-10px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-gradient-to-b from-[#020202]/90 via-[#020202]/30 to-transparent'
        }`}
      >
        {/* Zamalek Signature Royal Top Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <div className="h-full w-1/2 bg-gradient-to-r from-transparent to-primary shadow-[0_0_10px_rgba(227,27,35,1)]" />
          <div className="h-full w-1/2 bg-gradient-to-l from-transparent to-primary shadow-[0_0_10px_rgba(227,27,35,1)]" />
        </div>

        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between w-full relative">
            
            {/* Logo Section - Grand Appearance */}
            <Link href="/" className="flex items-center gap-4 group relative z-10">
              <div className="relative w-14 h-14 md:w-20 md:h-20 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-6 drop-shadow-2xl">
                <Image src="/zsc.png" alt="Zamalek Logo" fill className="object-contain" priority />
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="hidden lg:flex flex-col relative justify-center">
                <span className="text-2xl md:text-3xl font-black leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50 group-hover:from-primary group-hover:to-red-500 transition-all">
                  ZAMALEK SC
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-4 h-px bg-primary" />
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white/50">
                    The White Knights
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Links - Floating Glass Pills mega-menu style */}
            <div className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <div
                    key={link.id}
                    className="relative group px-1"
                    onMouseEnter={() => setActiveDropdown(link.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.url}
                      className={`px-5 py-2.5 rounded-full text-[15px] font-bold flex items-center gap-2 transition-all duration-500 relative overflow-hidden ${
                        activeDropdown === link.id
                          ? 'text-white'
                          : scrolled ? 'text-white/80 hover:text-white' : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {activeDropdown === link.id && (
                        <motion.div
                          layoutId="navPill"
                          className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-2 tracking-wide">
                        {link.title}
                      </span>
                      {link.sublinks && (
                        <ChevronDown size={14} className={`relative z-10 transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180 text-primary' : 'opacity-60'}`} />
                      )}
                    </Link>

                    {/* Elite Mega Menu Dropdown */}
                    <AnimatePresence>
                      {link.sublinks && activeDropdown === link.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="absolute top-full right-1/2 translate-x-1/2 mt-6 w-[500px] bg-[#050505]/90 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(227,27,35,0.3)] overflow-hidden"
                        >
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-primary via-red-600 to-black" />
                          <div className="p-6 grid grid-cols-2 gap-4 relative z-10">
                            {link.sublinks.map((sublink, index) => {
                              const SubIcon = sublink.icon;
                              return (
                                <motion.div
                                  key={sublink.id}
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  <Link
                                    href={sublink.url}
                                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group/item"
                                  >
                                    <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 flex items-center justify-center group-hover/item:bg-primary group-hover/item:scale-110 transition-all shadow-inner">
                                      {SubIcon && <SubIcon size={18} className="text-white/70 group-hover/item:text-white" />}
                                    </div>
                                    <div className="flex flex-col">
                                      <span className="text-base font-bold text-white mb-1 group-hover/item:text-primary transition-colors">{sublink.title}</span>
                                      <span className="text-xs text-white/40 font-semibold leading-relaxed">{sublink.desc}</span>
                                    </div>
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Actions Section - Premium Style */}
            <div className="flex items-center gap-3 z-10">
              
              <Link
                href="/Pages/Store"
                className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-primary text-white border border-white/20 hover:border-primary text-sm font-black tracking-wide transition-all hover:scale-105 group"
              >
                <ShoppingBag size={18} className="group-hover:animate-bounce" />
                <span>المتجر المركزي</span>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(true)}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
                aria-label="Search"
              >
                <Search size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors relative overflow-hidden"
                aria-label="Theme"
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                      <Sun size={18} className="text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]" />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                      <Moon size={18} className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {user ? (
                <div className="flex items-center gap-2">
                  <Link href="/Pages/Profile" className="relative group/avatar block rounded-full p-1 border-2 border-transparent hover:border-primary transition-all">
                    <Image
                      src={user?.profilePhoto?.url}
                      alt='Profile'
                      width={38}
                      height={38}
                      className='rounded-full object-cover'
                    />
                  </Link>
                  {user?.isAdmin && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setOpenModalAll(true)}
                      className="p-3 text-red-400 hover:text-white hover:bg-primary rounded-full transition-all"
                    >
                      <MdEdit size={18} />
                    </motion.button>
                  )}
                </div>
              ) : (
                <Link
                  href="/Pages/Login"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white"
                >
                  <User size={18} />
                </Link>
              )}

              {/* Mobile Menu Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="lg:hidden p-3 rounded-full bg-primary text-white shadow-lg shadow-primary/40 border border-primary/50"
                onClick={() => setIsOpen(true)}
              >
                <Menu size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Cinematic Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[105] bg-black/80 backdrop-blur-md lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[110] w-full max-w-[85%] sm:max-w-md bg-[#050505] border-l border-white/10 shadow-[0_0_80px_rgba(227,27,35,0.15)] lg:hidden overflow-hidden flex flex-col"
              dir="rtl"
            >
              {/* Header */}
              <div className="p-6 flex items-center justify-between border-b border-white/5 bg-white/5">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image src="/zsc.png" alt="ZSC" fill className="object-contain" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-white">ZAMALEK SC</div>
                    <div className="text-[9px] uppercase tracking-widest text-primary">The Royal Club</div>
                  </div>
                </Link>
                <button onClick={() => setIsOpen(false)} className="p-2 rounded-full bg-white/10 text-white hover:bg-primary transition-all">
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Links */}
              <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                <div className="space-y-2">
                  {links.map((link, idx) => (
                    <div key={link.id}>
                      {link.sublinks ? (
                        <div className="mb-4">
                          <div className="text-[10px] font-black tracking-widest text-white/30 uppercase mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary" /> {link.title}
                          </div>
                          <div className="space-y-1">
                            {link.sublinks.map(sub => (
                              <Link
                                key={sub.id}
                                href={sub.url}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all text-white/80 hover:text-white group"
                              >
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all text-white/50">
                                  {sub.icon && <sub.icon size={14} />}
                                </div>
                                <span className="font-bold text-sm tracking-wide">{sub.title}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.url}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary text-white font-black text-lg group transition-all mb-2"
                        >
                          <div className="flex items-center gap-4">
                            {link.icon && <link.icon size={20} className="text-primary group-hover:animate-pulse" />}
                            {link.title}
                          </div>
                          <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-primary" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Footer CTAs */}
              <div className="p-6 border-t border-white/5 bg-gradient-to-t from-primary/10 to-transparent">
                <Link
                  href="/Pages/Fixtures"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center gap-3 justify-center py-4 rounded-2xl bg-white text-black font-black text-lg mb-3 hover:scale-[1.02] transition-all"
                >
                  <Calendar size={20} /> المباراة القادمة
                </Link>
                <Link
                  href="/Pages/Store"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center gap-3 justify-center py-4 rounded-2xl bg-primary text-white font-black text-lg hover:scale-[1.02] transition-all shadow-[0_5px_20px_rgba(227,27,35,0.4)]"
                >
                  <ShoppingBag size={20} /> المتجر الرسمي
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Global Search Modal - Elite Execution */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-32 left-1/2 -translate-x-1/2 z-[125] w-full max-w-3xl px-4"
              dir="rtl"
            >
              <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] shadow-[0_20px_80px_-20px_rgba(227,27,35,0.6)] p-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="flex items-center gap-4 bg-white/5 rounded-full p-2 pl-6">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-primary flex items-center justify-center text-white">
                    <Search size={24} />
                  </div>
                  <input
                    type="text"
                    placeholder="ابحث في عالم الزمالك... لاعبين، أخبار، بطولات"
                    className="flex-1 bg-transparent text-xl font-bold text-white outline-none placeholder:text-white/30"
                    autoFocus
                  />
                  <div className="text-[10px] text-white/30 font-bold tracking-widest hidden sm:block">ESC للإغلاق</div>
                  <button onClick={() => setSearchOpen(false)} className="sm:hidden p-3 text-white/50 hover:text-white bg-white/10 rounded-full">
                    <X size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
