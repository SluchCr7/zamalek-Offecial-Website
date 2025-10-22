'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useAuth } from '@/app/Context/AuthContext'

const LoginPage = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const { login } = useAuth()
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (Password != "" || Email != "") login(Email, Password)
    }, 1500);
  };
  return (
    <div dir='rtl' className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-white via-gray-50 to-gray-200">
      
      {/* Left Side - Info */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-white shadow-lg">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Image
            src="/zsc.png"
            alt="Zamalek Logo"
            width={180}
            height={180}
            className="drop-shadow-xl"
          />
        </motion.div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold text-red-700"
        >
        اكبر قلعه رياضية في مصر
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-gray-600 max-w-md"
        >
          قم بتسجيل الدخول للوصول إلى أحدث الأخبار، نتائج المباريات، وتاريخ نادي الزمالك العريق.
        </motion.p>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
          onSubmit={(e)=> handleLogin(e)}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">تسجيل الدخول</h2>

          <div className="mb-4">
            <label className="block text-gray-600 mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
        />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 mb-2">كلمة المرور</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading && (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a12 12 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"></path>
              </svg>
            )}
            {loading ? 'جاري تسجيل الدخول' : 'تسجيل الدخول'}
          </motion.button>
          

          <p className="mt-4 text-sm text-gray-500">
            ليس لديك حساب؟ <a href="/Pages/Register" className="text-red-600 hover:underline">سجّل الآن</a>
          </p>
        </motion.form>
      </div>
    </div>
  )
}

export default LoginPage
