'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Menu, X, ChevronDown, Search, Moon, Sun, User, ShoppingBag,
  Calendar, Trophy, Users, Building2, History, TvMinimal, Award,
  Dumbbell, Volleyball, Target, Sparkles
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    {
      id: 1,
      title: 'الرئيسية',
      url: '/',
      icon: Sparkles
    },
    {
      id: 2,
      title: 'الأخبار',
      url: '/Pages/News',
      icon: Award
    },
    {
      id: 3,
      title: 'الفرق',
      url: '#',
      icon: Users,
      sublinks: [
        { id: 31, title: 'الفريق الأول لكرة القدم', url: '/Pages/Players/Football', icon: Dumbbell },
        { id: 32, title: 'فريق كرة السلة', url: '/Pages/Players/Basketball', icon: CiBasketball },
        { id: 33, title: 'فريق الكرة الطائرة', url: '/Pages/Players/Volleyball', icon: Volleyball },
        { id: 34, title: 'فريق كرة اليد', url: '/Pages/Players/Handball', icon: Target },
        { id: 35, title: 'فرق السيدات', url: '/Pages/Players/Women', icon: Users },
      ]
    },
    {
      id: 4,
      title: 'النادي',
      url: '#',
      icon: Building2,
      sublinks: [
        { id: 41, title: 'تاريخ النادي', url: '/Pages/About', icon: History },
        { id: 42, title: 'بطولات الملكي', url: '/Pages/Champions', icon: Trophy },
        { id: 43, title: 'مجلس الإدارة', url: '/Pages/Directors', icon: Building2 },
        { id: 44, title: 'رؤساء النادي', url: '/Pages/Presidents', icon: Award },
        { id: 45, title: 'المتحف', url: '/Pages/Measum', icon: Building2 },
        { id: 46, title: 'قناة الزمالك', url: '/Pages/ZamalekTV', icon: TvMinimal },
      ]
    },
    {
      id: 5,
      title: 'المباريات',
      url: '/Pages/Fixtures',
      icon: Calendar
    },
    {
      id: 6,
      title: 'جدول الترتيب',
      url: '/Pages/Table',
      icon: Trophy
    },
  ];

  return (
    <>
      <nav
        dir="rtl"
        className={`fixed w-full top-0 left-0 right-0 z-[100] transition-all duration-500 font-heading ${scrolled
            ? 'py-2 bg-background/70 backdrop-blur-2xl border-b border-border/50 shadow-2xl shadow-primary/5'
            : 'py-4 bg-gradient-to-b from-background/80 via-background/40 to-transparent backdrop-blur-md'
          }`}
      >
        {/* Premium Top Bar */}
        {!scrolled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        )}

        <div className="px-4 md:px-8 w-full">
          <div className="flex items-center justify-between w-full">

            {/* Logo Section - Enhanced */}
            <Link href="/" className="flex items-center gap-3 group relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative w-12 h-12 md:w-16 md:h-16 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Image
                  src="/zsc.png"
                  alt="Zamalek Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              <div className="hidden lg:flex flex-col relative">
                <span className="text-xl md:text-2xl font-black text-primary leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-600">
                  ZAMALEK SC
                </span>
                <span className="text-[10px] md:text-xs font-bold opacity-60 uppercase tracking-[0.3em] text-muted-foreground">
                  The Royal Club
                </span>
              </div>

              
            </Link>

            {/* Desktop Links - Enhanced */}
            <div className="hidden lg:flex items-center gap-1">
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
                      className={`px-4 py-2.5 rounded-2xl text-sm font-bold flex items-center gap-2 transition-all duration-300 relative overflow-hidden ${activeDropdown === link.id
                          ? 'bg-gradient-to-r from-primary to-red-600 text-white shadow-lg shadow-primary/30'
                          : 'hover:bg-muted/80 hover:text-primary'
                        }`}
                    >
                      {/* Animated Background */}
                      {activeDropdown === link.id && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-gradient-to-r from-primary to-red-600"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}

                      <span className="relative z-10 flex items-center gap-2">
                        {Icon && <Icon size={16} className="opacity-80" />}
                        {link.title}
                      </span>

                      {link.sublinks && (
                        <ChevronDown
                          size={14}
                          className={`relative z-10 transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''
                            }`}
                        />
                      )}
                    </Link>

                    <AnimatePresence>
                      {link.sublinks && activeDropdown === link.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full right-0 mt-3 w-72 bg-card/95 backdrop-blur-2xl border border-border/50 rounded-3xl shadow-2xl overflow-hidden p-3"
                        >
                          {/* Dropdown Header */}
                          <div className="px-3 py-2 mb-2">
                            <div className="flex items-center gap-2 text-xs font-black text-muted-foreground uppercase tracking-widest">
                              {Icon && <Icon size={14} />}
                              {link.title}
                            </div>
                          </div>

                          <div className="grid gap-1">
                            {link.sublinks.map((sublink, index) => {
                              const SubIcon = sublink.icon;
                              return (
                                <motion.div
                                  key={sublink.id}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  <Link
                                    href={sublink.url}
                                    className="flex items-center gap-3 p-3 text-sm font-bold rounded-2xl hover:bg-gradient-to-r hover:from-primary hover:to-red-600 hover:text-white transition-all group/item relative overflow-hidden"
                                  >
                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover/item:opacity-100 transition-opacity" />

                                    <div className="relative z-10 flex items-center gap-3 w-full">
                                      {SubIcon && (
                                        <div className="w-8 h-8 rounded-xl bg-primary/10 group-hover/item:bg-white/20 flex items-center justify-center transition-colors">
                                          <SubIcon size={16} className="text-primary group-hover/item:text-white transition-colors" />
                                        </div>
                                      )}
                                      <span className="flex-1">{sublink.title}</span>
                                      <ChevronDown size={14} className="opacity-0 group-hover/item:opacity-100 -rotate-90 transition-opacity" />
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

            {/* Actions Section - Enhanced */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className="hidden md:flex p-2.5 rounded-2xl border border-border/50 hover:bg-muted/80 hover:border-primary/50 transition-all group"
                aria-label="Search"
              >
                <Search size={18} className="group-hover:text-primary transition-colors" />
              </motion.button>

              {/* Store Button - Enhanced */}
              <Link
                href="/Pages/Store"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-primary to-red-600 text-white text-sm font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <ShoppingBag size={18} className="relative z-10" />
                <span className="relative z-10">المتجر</span>
              </Link>

              {/* Theme Toggle - Enhanced */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2.5 rounded-2xl border border-border/50 hover:bg-muted/80 hover:border-primary/50 transition-all relative overflow-hidden group"
                aria-label="Toggle Theme"
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={18} className="text-yellow-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={18} className="text-blue-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* User Section - Enhanced */}
              {user ? (
                <div className="flex items-center gap-2 bg-muted/50 backdrop-blur-sm p-1.5 rounded-2xl border border-border/50 hover:border-primary/50 transition-all">
                  <Link href="/Pages/Profile" className="relative group/avatar">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-red-600 rounded-full blur-md opacity-0 group-hover/avatar:opacity-50 transition-opacity" />
                    <Image
                      src={user?.profilePhoto?.url}
                      alt='Profile'
                      width={36}
                      height={36}
                      className='rounded-full hover:scale-110 transition-transform cursor-pointer relative z-10 ring-2 ring-transparent group-hover/avatar:ring-primary'
                    />
                  </Link>
                  {user?.isAdmin && (
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setOpenModalAll(true)}
                      className="p-2 text-primary hover:bg-primary/10 rounded-xl transition-all"
                    >
                      <MdEdit size={18} />
                    </motion.button>
                  )}
                </div>
              ) : (
                <Link
                  href="/Pages/Login"
                  className="p-2.5 rounded-2xl border border-border/50 hover:bg-muted/80 hover:border-primary/50 transition-all group"
                >
                  <User size={18} className="group-hover:text-primary transition-colors" />
                </Link>
              )}

              {/* Mobile Menu Button - Enhanced */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden p-2.5 rounded-2xl bg-gradient-to-r from-primary to-red-600 text-white shadow-lg shadow-primary/30"
                onClick={() => setIsOpen(!isOpen)}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Menu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              {/* Nike Partnership Badge */}
              <div className="hidden xl:flex items-center gap-2 ml-4 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm">
                <div className="relative w-12 h-4">
                  <Image
                    src="/nike.png"
                    alt="Nike"
                    fill
                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        )}
      </nav>

      {/* Mobile Menu - Enhanced */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[105] bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-[110] w-full max-w-md bg-background/95 backdrop-blur-2xl border-l border-border/50 shadow-2xl lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-border/50 bg-gradient-to-b from-muted/50 to-transparent">
                  <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
                    <div className="relative w-12 h-12">
                      <Image src="/zsc.png" alt="Zamalek Logo" fill className="object-contain" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-600">ZAMALEK SC</span>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">The Royal Club</span>
                    </div>
                  </Link>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2.5 rounded-2xl border border-border/50 hover:bg-muted/80 hover:border-primary/50 transition-all"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                {/* Nike Partnership */}
                <div className="px-6 py-4 bg-gradient-to-r from-muted/30 to-transparent border-b border-border/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Official Partner</span>
                    <div className="relative w-16 h-5">
                      <Image src="/nike.png" alt="Nike" fill className="object-contain opacity-80" />
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="grid gap-3">
                    {links.map((link, index) => {
                      const Icon = link.icon;
                      return (
                        <motion.div
                          key={link.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="grid gap-2"
                        >
                          {link.sublinks ? (
                            <>
                              <div className="flex items-center gap-2 text-sm font-black text-muted-foreground uppercase tracking-widest mt-4 px-3">
                                {Icon && <Icon size={16} />}
                                {link.title}
                              </div>
                              <div className="grid gap-2 pr-4 border-r-2 border-primary/30">
                                {link.sublinks.map((sublink) => {
                                  const SubIcon = sublink.icon;
                                  return (
                                    <Link
                                      key={sublink.id}
                                      href={sublink.url}
                                      className="flex items-center gap-3 p-3 rounded-2xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-red-600/10 hover:border-primary/20 border border-transparent transition-all group"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {SubIcon && (
                                        <div className="w-8 h-8 rounded-xl bg-muted group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                                          <SubIcon size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>
                                      )}
                                      <span className="text-base font-bold flex-1">{sublink.title}</span>
                                      <ChevronDown size={14} className="opacity-0 group-hover:opacity-100 -rotate-90 transition-opacity text-primary" />
                                    </Link>
                                  );
                                })}
                              </div>
                            </>
                          ) : (
                            <Link
                              href={link.url}
                              className="flex items-center gap-3 p-4 rounded-2xl bg-muted/30 hover:bg-gradient-to-r hover:from-primary hover:to-red-600 hover:text-white border border-border/30 hover:border-transparent transition-all group"
                              onClick={() => setIsOpen(false)}
                            >
                              {Icon && (
                                <div className="w-10 h-10 rounded-xl bg-background/50 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                                  <Icon size={20} className="text-primary group-hover:text-white transition-colors" />
                                </div>
                              )}
                              <span className="text-xl font-black flex-1">{link.title}</span>
                              <ChevronDown size={16} className="opacity-0 group-hover:opacity-100 -rotate-90 transition-opacity" />
                            </Link>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-border/50 bg-gradient-to-t from-muted/50 to-transparent">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <Link
                      href="/Pages/Login"
                      className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-muted/80 hover:bg-muted border border-border/50 font-bold transition-all group"
                      onClick={() => setIsOpen(false)}
                    >
                      <User size={18} className="group-hover:text-primary transition-colors" />
                      <span>دخول</span>
                    </Link>
                    <Link
                      href="/Pages/Fixtures"
                      className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-gradient-to-r from-primary to-red-600 text-white font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all group"
                      onClick={() => setIsOpen(false)}
                    >
                      <Calendar size={18} />
                      <span>المباريات</span>
                    </Link>
                  </div>
                  <Link
                    href="/Pages/Store"
                    className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-gradient-to-r from-primary to-red-600 text-white font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all w-full group"
                    onClick={() => setIsOpen(false)}
                  >
                    <ShoppingBag size={18} />
                    <span>تسوق من المتجر الرسمي</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Modal - Premium */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 z-[125] w-full max-w-2xl px-4"
            >
              <div className="bg-card/95 backdrop-blur-2xl border border-border/50 rounded-3xl shadow-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Search size={24} className="text-primary" />
                  <input
                    type="text"
                    placeholder="ابحث عن الأخبار، اللاعبين، المباريات..."
                    className="flex-1 bg-transparent text-lg font-bold outline-none placeholder:text-muted-foreground"
                    autoFocus
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="p-2 rounded-xl hover:bg-muted/80 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="text-sm text-muted-foreground">
                  اضغط <kbd className="px-2 py-1 bg-muted rounded-lg font-mono">ESC</kbd> للإغلاق
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
