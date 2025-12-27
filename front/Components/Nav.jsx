'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown, Search, Moon, Sun, User, ShoppingBag, Calendar } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { MdEdit } from "react-icons/md";
import { useAuth } from '@/app/Context/AuthContext';
import { useTheme } from '@/app/Context/ThemeContext';

export default function Nav({ opneModalAll, setOpenModalAll }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 1, title: 'الرئيسية', url: '/' },
    { id: 2, title: 'الأخبار', url: '/Pages/News' },
    {
      id: 3, title: 'الفرق', url: '#', sublinks: [
        { id: 31, title: 'الفريق الأول لكرة القدم', url: '/Pages/Players/Football' },
        { id: 32, title: 'فريق كرة السلة', url: '/Pages/Players/basketball' },
        { id: 33, title: 'فريق الكرة الطائرة', url: '/Pages/Players/volleyball' },
        { id: 34, title: 'فريق كرة اليد', url: '/Pages/Players/handball' },
        { id: 35, title: 'فرق السيدات', url: '/Pages/Players/women' },
      ]
    },
    {
      id: 4, title: 'النادي', url: '#', sublinks: [
        { id: 41, title: 'تاريخ النادي', url: '/Pages/About' },
        { id: 42, title: 'بطولات الملكي', url: '/Pages/Champions' },
        { id: 43, title: 'مجلس الإدارة', url: '/Pages/Directors' },
        { id: 44, title: 'رؤساء النادي', url: '/Pages/Presidents' },
        { id: 45, title: 'المتحف', url: '/Pages/Measum' },
      ]
    },
    { id: 5, title: 'المباريات', url: '/Pages/Fixtures' },
    { id: 6, title: 'جدول الترتيب', url: '/Pages/Table' },
  ];

  return (
    <nav
      dir="rtl"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 font-heading ${scrolled ? 'py-2 bg-background/80 backdrop-blur-xl border-b border-border shadow-lg' : 'py-4 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform group-hover:scale-105">
              <Image
                src="/zsc.png"
                alt="Zamalek Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="text-xl md:text-2xl font-black text-primary leading-tight tracking-tighter">ZAMALEK SC</span>
              <span className="text-[10px] md:text-sm font-medium opacity-60 uppercase tracking-[0.2em]">The Royal Club</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <div
                key={link.id}
                className="relative group px-1"
                onMouseEnter={() => setActiveDropdown(link.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.url}
                  className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 transition-all duration-300 ${activeDropdown === link.id ? 'bg-primary text-white' : 'hover:bg-primary/10 hover:text-primary'
                    }`}
                >
                  {link.title}
                  {link.sublinks && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`} />}
                </Link>

                <AnimatePresence>
                  {link.sublinks && activeDropdown === link.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-64 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden p-2"
                    >
                      <div className="grid gap-1">
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink.id}
                            href={sublink.url}
                            className="flex items-center gap-3 p-3 text-sm font-medium rounded-xl hover:bg-primary hover:text-white transition-all group/item"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover/item:bg-white transition-colors" />
                            {sublink.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Actions Section */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              href="/Pages/Store"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all"
            >
              <ShoppingBag size={18} />
              <span>المتجر</span>
            </Link>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {user ? (
              <div className="flex items-center gap-2 bg-muted p-1 rounded-full border border-border">
                <Image
                  src={user?.profilePhoto?.url}
                  alt='Profile'
                  width={34}
                  height={34}
                  className='rounded-full'
                />
                {user?.isAdmin && (
                  <button
                    onClick={() => setOpenModalAll(true)}
                    className="p-2 text-primary hover:scale-110 transition-transform"
                  >
                    <MdEdit size={20} />
                  </button>
                )}
              </div>
            ) : (
              <Link
                href="/Pages/Login"
                className="p-2.5 rounded-full border border-border hover:bg-muted transition-colors"
              >
                <User size={20} />
              </Link>
            )}

            <button
              className="lg:hidden p-2.5 rounded-full bg-primary text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-background lg:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Image src="/zsc.png" alt="Zamalek Logo" width={50} height={50} />
                  <span className="text-xl font-black text-primary">ZAMALEK SC</span>
                </Link>
                <button onClick={() => setIsOpen(false)} className="p-2 rounded-full border border-border">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="grid gap-4">
                  {links.map((link) => (
                    <div key={link.id} className="grid gap-2">
                      {link.sublinks ? (
                        <>
                          <div className="text-sm font-black text-muted-foreground uppercase tracking-widest mt-4">
                            {link.title}
                          </div>
                          <div className="grid gap-2 pr-4 border-r-2 border-primary/20">
                            {link.sublinks.map((sublink) => (
                              <Link
                                key={sublink.id}
                                href={sublink.url}
                                className="text-lg font-bold py-2 flex items-center gap-2"
                                onClick={() => setIsOpen(false)}
                              >
                                <span className="w-1 h-1 bg-primary rounded-full" />
                                {sublink.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link
                          href={link.url}
                          className="text-2xl font-black py-2 hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border grid grid-cols-2 gap-4">
                <Link
                  href="/Pages/Login"
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-muted font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  <User size={20} />
                  دخول
                </Link>
                <Link
                  href="/Pages/Fixtures"
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-primary text-white font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  <Calendar size={20} />
                  المباريات
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
