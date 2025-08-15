'use client'

import React from 'react'


const Page = () => {
  return (
    <div dir='rtl' className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto min-h-screen p-6 lg:p-12 gap-10">
      
      {/* Left Side (Info) */}
      <div className="flex-1 flex flex-col items-center justify-center text-center lg:text-left">
        <img
          src="/zsc.png"
          alt="Zamalek SC Logo"
          className="w-40 h-40 mb-6"
        />
        <h1 className="text-3xl lg:text-4xl font-bold text-red-600 mb-2">
          نادي الزمالك الرياضي
        </h1>
        <p className="text-lg text-gray-600 italic mb-6">
          "الملوك لا يموتون... نحن زمالك"
        </p>
        <p className="text-gray-700 max-w-md leading-relaxed">
          نادي الزمالك، أحد أعرق الأندية في تاريخ كرة القدم المصرية والإفريقية،
          تأسس عام 1911 وحقق العديد من البطولات المحلية والقارية.
          نحن أكثر من مجرد نادٍ، نحن كيان يعيش في قلوب جماهيره.
        </p>
      </div>

      {/* Right Side (Form) */}
      <div className="flex-1 bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-red-600 mb-6">
          أرسل بياناتك
        </h2>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="الاسم الكامل"
            className="border border-gray-300 rounded-lg p-3 focus:border-red-500 outline-none"
          />
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="border border-gray-300 rounded-lg p-3 focus:border-red-500 outline-none"
          />
          <textarea
            placeholder="رسالتك"
            rows="5"
            className="border border-gray-300 rounded-lg p-3 focus:border-red-500 outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            إرسال
          </button>
        </form>
      </div>
    </div>
  )
}

export default Page
