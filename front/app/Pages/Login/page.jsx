'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock, ShieldCheck, Github, Chrome, ArrowRight } from 'lucide-react';
import { useGlobalContext } from '@/context/globalContext';

export default function LoginPage() {
  const { login } = useGlobalContext();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      login(formData.email, formData.password);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row overflow-hidden" dir="rtl">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 pointer-events-none blur-[120px]" />

      {/* Visual Side (Heritage) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:flex relative w-1/2 flex-col justify-end p-20"
      >
        <Image
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2076&auto=format&fit=crop"
          alt="Zamalek Heritage"
          fill
          className="object-cover grayscale opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        <div className="relative z-10 space-y-6">
          <div className="w-20 h-20 relative p-4 bg-white rounded-3xl shadow-2xl">
            <Image src="/teams/zamalek.png" alt="Zamalek SC" fill className="object-contain p-2" />
          </div>
          <h1 className="text-6xl font-black font-heading leading-tight italic">
            أهلاً بك في <br />
            <span className="text-primary not-italic">بيت الأبطال</span>
          </h1>
          <p className="text-xl font-bold opacity-60 max-w-md">
            سجل دخولك لتتمتع بكافة مميزات العضوية الرقمية، متابعة فريقك المفضل، والحصول على تجربة مشجع استثنائية.
          </p>
        </div>
      </motion.div>

      {/* Form Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 flex flex-col items-center justify-center p-8 md:p-16 relative z-10"
      >
        <div className="w-full max-w-md space-y-12">

          {/* Mobile Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-primary transition-all lg:hidden">
            <ArrowRight size={14} />
            <span>العودة للرئيسية</span>
          </Link>

          <header className="space-y-4">
            <h2 className="text-4xl font-black font-heading">تسجيل الدخول</h2>
            <p className="font-bold opacity-40">أدخل بياناتك للوصول إلى حسابك الشخصي</p>
          </header>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest opacity-60 px-4">البريد الإلكتروني</label>
              <div className="relative group">
                <Mail className="absolute right-6 top-1/2 -translate-y-1/2 text-primary opacity-40 group-focus-within:opacity-100 transition-all" size={18} />
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-card border border-border rounded-2xl py-5 pr-14 pl-6 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between px-4">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-60">كلمة المرور</label>
                <button type="button" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">نسيت كلمة المرور؟</button>
              </div>
              <div className="relative group">
                <Lock className="absolute right-6 top-1/2 -translate-y-1/2 text-primary opacity-40 group-focus-within:opacity-100 transition-all" size={18} />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-card border border-border rounded-2xl py-5 pr-14 pl-6 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold text-sm"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-primary/20 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <span>تسجيل الدخول</span>
              <ShieldCheck size={18} />
            </button>
          </form>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-[10px] font-black uppercase">
              <span className="bg-background px-4 opacity-40 tracking-[0.2em]">أو استمر عبر</span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-card border border-border font-black text-[10px] uppercase hover:bg-muted transition-all">
              <Chrome size={16} />
              <span>جوجل</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-card border border-border font-black text-[10px] uppercase hover:bg-muted transition-all">
              <Github size={16} />
              <span>جيت هاب</span>
            </button>
          </div>

          <footer className="text-center pt-8">
            <p className="font-bold opacity-40 text-sm">
              ليس لديك حساب؟{' '}
              <Link href="/Pages/Signup" className="text-primary hover:underline ml-1">إنشاء حساب جديد</Link>
            </p>
          </footer>

        </div>
      </motion.div>

    </div>
  );
}
