'use client'

import React from 'react'
import { ShieldCheck, User, Lock, Globe, Clock, FileText } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-red-700 text-white py-8 shadow-md relative">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">سياسة الخصوصية</h1>
          <p className="text-sm text-red-100">آخر تحديث: 13 أغسطس 2025</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-10 flex gap-10">
        {/* Sidebar */}
        <aside className="hidden md:block w-1/4 sticky top-20 self-start">
          <nav className="bg-white rounded-lg shadow-md p-4 border border-red-100">
            <ul className="space-y-3 text-sm">
              <li><a href="#intro" className="hover:text-red-700 font-medium">مقدمة</a></li>
              <li><a href="#data" className="hover:text-red-700 font-medium">البيانات التي نجمعها</a></li>
              <li><a href="#use" className="hover:text-red-700 font-medium">كيفية استخدام البيانات</a></li>
              <li><a href="#share" className="hover:text-red-700 font-medium">مشاركة المعلومات</a></li>
              <li><a href="#rights" className="hover:text-red-700 font-medium">حقوقك</a></li>
              <li><a href="#contact" className="hover:text-red-700 font-medium">التواصل معنا</a></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-8">
          {/* Intro */}
          <section id="intro" className="bg-white rounded-xl shadow-sm p-6 border border-red-100">
            <h2 className="flex items-center gap-2 text-xl font-bold mb-4 text-red-700">
              <ShieldCheck className="w-6 h-6" /> مقدمة
            </h2>
            <p>
              نحن في موقع نادي الزمالك نحترم خصوصيتك ونسعى لحماية بياناتك الشخصية. توضح هذه السياسة كيفية جمعنا، استخدامنا، وحمايتنا لمعلوماتك عند استخدامك لموقعنا.
            </p>
          </section>

          {/* Data */}
          <section id="data" className="bg-white rounded-xl shadow-sm p-6 border border-red-100">
            <h2 className="flex items-center gap-2 text-xl font-bold mb-4 text-red-700">
              <User className="w-6 h-6" /> البيانات التي نجمعها
            </h2>
            <ul className="list-disc pr-6 space-y-2">
              <li>الاسم ومعلومات التواصل (البريد الإلكتروني، رقم الهاتف).</li>
              <li>معلومات تسجيل الدخول (اسم المستخدم، كلمة المرور).</li>
              <li>معلومات النشاط على الموقع (الصفحات التي تزورها، مدة التصفح).</li>
              <li>عنوان الـ IP ونوع الجهاز والمتصفح.</li>
            </ul>
          </section>

          {/* Use */}
          <section id="use" className="bg-white rounded-xl shadow-sm p-6 border border-red-100">
            <h2 className="flex items-center gap-2 text-xl font-bold mb-4 text-red-700">
              <Globe className="w-6 h-6" /> كيفية استخدام البيانات
            </h2>
            <p>نستخدم بياناتك للأغراض التالية:</p>
            <ul className="list-disc pr-6 space-y-2 mt-2">
              <li>تحسين تجربة المستخدم وتخصيص المحتوى.</li>
              <li>إرسال إشعارات حول أخبار النادي والعروض.</li>
              <li>تحليل استخدام الموقع وتطوير خدماتنا.</li>
              <li>الامتثال للمتطلبات القانونية.</li>
            </ul>
          </section>

          {/* Share */}
          <section id="share" className="bg-white rounded-xl shadow-sm p-6 border border-red-100">
            <h2 className="flex items-center gap-2 text-xl font-bold mb-4 text-red-700">
              <FileText className="w-6 h-6" /> مشاركة المعلومات
            </h2>
            <p>
              نحن لا نشارك بياناتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:
            </p>
            <ul className="list-disc pr-6 space-y-2 mt-2">
              <li>بموافقتك الصريحة.</li>
              <li>للجهات القانونية عند الطلب.</li>
              <li>مع مزودي الخدمات الموثوقين الذين يساعدوننا في تشغيل الموقع.</li>
            </ul>
          </section>

          {/* Rights */}
          <section id="rights" className="bg-white rounded-xl shadow-sm p-6 border border-red-100">
            <h2 className="flex items-center gap-2 text-xl font-bold mb-4 text-red-700">
              <Lock className="w-6 h-6" /> حقوقك
            </h2>
            <p>لديك الحقوق التالية:</p>
            <ul className="list-disc pr-6 space-y-2 mt-2">
              <li>الوصول إلى بياناتك وتصحيحها.</li>
              <li>طلب حذف بياناتك.</li>
              <li>سحب الموافقة على معالجة بياناتك.</li>
              <li>تقديم شكوى للجهات المختصة.</li>
            </ul>
          </section>

          {/* Contact */}
          <section id="contact" className="bg-white rounded-xl shadow-sm p-6 border border-red-100">
            <h2 className="flex items-center gap-2 text-xl font-bold mb-4 text-red-700">
              <Clock className="w-6 h-6" /> التواصل معنا
            </h2>
            <p>
              إذا كانت لديك أي أسئلة أو استفسارات بخصوص سياسة الخصوصية، يمكنك التواصل معنا عبر البريد الإلكتروني: <span className="text-red-700 font-medium">privacy@zamalekclub.com</span>
            </p>
          </section>

          {/* Print Button */}
          <div className="flex justify-end">
            <button
              onClick={() => window.print()}
              className="bg-red-700 text-white px-6 py-2 rounded-lg shadow hover:bg-red-800 transition"
            >
              طباعة / حفظ PDF
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}
