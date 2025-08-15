'use client'

import React from 'react'

export default function CookiesPolicyPage() {
  return (
    <div dir="rtl" className="bg-white min-h-screen px-6 py-12 max-w-5xl mx-auto text-gray-900">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-red-700 mb-4">سياسة ملفات تعريف الارتباط (Cookies Policy)</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          في هذا المستند، نوضح كيف ولماذا يستخدم موقع نادي الزمالك ملفات تعريف الارتباط، وخياراتك للتحكم فيها.
        </p>
      </header>

      {/* Sections */}
      <section className="space-y-10">
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-red-700 mb-3">ما هي ملفات تعريف الارتباط؟</h2>
          <p>
            ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهازك عندما تزور موقعنا، وتساعدنا على تحسين تجربتك وتخصيص المحتوى.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-red-700 mb-3">كيف نستخدم ملفات تعريف الارتباط؟</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>تحسين أداء الموقع وسرعته.</li>
            <li>تخصيص المحتوى بناءً على اهتماماتك.</li>
            <li>تحليل حركة المرور لمعرفة كيفية استخدام الزوار للموقع.</li>
            <li>تسهيل تسجيل الدخول وحفظ تفضيلاتك.</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-red-700 mb-3">أنواع ملفات تعريف الارتباط التي نستخدمها</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>ملفات تعريف الارتباط الضرورية: لعمل الموقع بشكل صحيح.</li>
            <li>ملفات الأداء: لمراقبة وتحسين الأداء.</li>
            <li>ملفات الاستهداف: لتقديم إعلانات وعروض مخصصة.</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-red-700 mb-3">إدارة ملفات تعريف الارتباط</h2>
          <p>
            يمكنك تعديل إعدادات المتصفح لتعطيل أو حذف ملفات تعريف الارتباط في أي وقت. قد يؤدي ذلك إلى تقليل بعض ميزات الموقع.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-red-700 mb-3">التغييرات على سياسة الكوكيز</h2>
          <p>
            قد نقوم بتحديث هذه السياسة من وقت لآخر. ننصحك بمراجعتها بانتظام لمعرفة آخر التحديثات.
          </p>
        </div>
      </section>
    </div>
  )
}
