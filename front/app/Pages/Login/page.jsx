'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">تسجيل الدخول</h2>

          <div className="mb-4">
            <label className="block text-gray-600 mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 mb-2">كلمة المرور</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full py-3 bg-red-700 hover:bg-red-800 text-white rounded-lg">
            تسجيل الدخول
          </button>

          <p className="mt-4 text-sm text-gray-500">
            ليس لديك حساب؟ <a href="/Pages/Register" className="text-red-600 hover:underline">سجّل الآن</a>
          </p>
        </motion.form>
      </div>
    </div>
  )
}

export default LoginPage
